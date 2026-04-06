'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'powercable2024';
const SESSION_COOKIE = 'pc_admin_session';

// Login
export async function loginAction(prevState: { error: string }, formData: FormData) {
  const password = formData.get('password')?.toString() ?? '';

  if (password !== ADMIN_PASSWORD) {
    return { error: 'Incorrect password. Please try again.' };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  redirect('/admin/leads');
}

// Logout
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect('/admin');
}

// Mark lead as read
export async function markLeadReadAction(id: string) {
  const db = createServerClient();
  await db.from('leads').update({ is_read: true }).eq('id', id);
}

// Delete lead
export async function deleteLeadAction(id: string) {
  const db = createServerClient();
  await db.from('leads').delete().eq('id', id);
}
