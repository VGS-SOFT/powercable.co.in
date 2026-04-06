'use server';
import { Resend } from 'resend';
import { createServerClient } from '@/lib/supabase';

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

/** Strip HTML tags to prevent XSS if content ever gets rendered as HTML */
function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = sanitize(formData.get('name')?.toString()    ?? '');
  const email   = sanitize(formData.get('email')?.toString()   ?? '');
  const phone   = sanitize(formData.get('phone')?.toString()   ?? '');
  const message = sanitize(formData.get('message')?.toString() ?? '');

  // --- Validation ---
  const errors: Record<string, string> = {};
  if (!name || name.length < 2)        errors.name    = 'Please enter your full name.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (!phone || phone.length < 10)     errors.phone   = 'Please enter a valid phone number.';
  if (!message || message.length < 10) errors.message = 'Please enter a message (min 10 characters).';
  // Hard cap on message length to prevent payload abuse
  if (message.length > 2000)           errors.message = 'Message is too long (max 2000 characters).';

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please fix the errors below.', errors };
  }

  // --- Escape for safe HTML email rendering ---
  const esc = (s: string) =>
    s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  // --- 1. Save lead to Supabase ---
  try {
    const db = createServerClient();
    const { error } = await db
      .from('leads')
      .insert({ name, email, phone, message });
    if (error) console.error('Supabase insert error:', error);
  } catch (err) {
    console.error('Supabase error:', err);
    // Non-fatal — still continue to send email
  }

  // --- 2. Send email via Resend ---
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from:    'Power Cable Website <noreply@powercable.vrajvithalani.com>',
        to:      [process.env.CONTACT_EMAIL ?? 'your@email.com'],
        subject: `New Lead: ${esc(name)}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#c8753a;">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">${esc(name)}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#666;">Phone</td><td style="padding:8px;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#666;vertical-align:top;">Message</td><td style="padding:8px;">${esc(message).replace(/\n/g, '<br/>')}</td></tr>
            </table>
            <p style="margin-top:16px;color:#999;font-size:12px;">Also saved to admin dashboard at /admin/leads</p>
          </div>
        `,
      });

      await resend.emails.send({
        from:    'Power Cable <noreply@powercable.co.in>',
        to:      [email],
        subject: 'Thank you for contacting Power Cable',
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#c8753a;">Thank you, ${esc(name)}!</h2>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p style="color:#666;"><strong>Your message:</strong><br/>${esc(message).replace(/\n/g, '<br/>')}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
            <p style="font-size:13px;color:#999;">
              Power Cable &mdash; Premium Copper Products<br/>
              Palghar, Maharashtra &mdash; <a href="tel:+919987994910">+91 99879 94910</a>
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error('Resend error:', err);
    }
  }

  return {
    success: true,
    message: `Thank you, ${name}! We\u2019ve received your message and will get back to you within 24 hours.`,
  };
}
