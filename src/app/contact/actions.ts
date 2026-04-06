'use server';

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get('name')?.toString().trim() ?? '';
  const email   = formData.get('email')?.toString().trim() ?? '';
  const phone   = formData.get('phone')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  const errors: Record<string, string> = {};

  if (!name || name.length < 2)
    errors.name = 'Please enter your full name.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Please enter a valid email address.';
  if (!phone || phone.length < 10)
    errors.phone = 'Please enter a valid phone number.';
  if (!message || message.length < 10)
    errors.message = 'Please enter a message (min 10 characters).';

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please fix the errors below.', errors };
  }

  // TODO: integrate email service (Nodemailer / Resend) here
  // For now, we simulate success
  console.log('Contact form submission:', { name, email, phone, message });

  return {
    success: true,
    message: `Thank you, ${name}! We\'ve received your message and will get back to you within 24 hours.`,
  };
}
