'use server';

import { cookies } from 'next/headers';
import { createHash } from 'crypto';

const COOKIE = 'nrt_admin';

/** Hash used both for the cookie value and validation — no plaintext stored. */
export function expectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return createHash('sha256').update(pw).digest('hex');
}

export async function isAdminAuthed(): Promise<boolean> {
  const token = expectedToken();
  if (!token) return false;
  const store = await cookies();
  return store.get(COOKIE)?.value === token;
}

export async function adminLogin(_prev: unknown, formData: FormData): Promise<{ error?: string }> {
  const pw = String(formData.get('password') ?? '');
  const configured = process.env.ADMIN_PASSWORD;

  if (!configured) {
    return { error: 'Admin password is not configured. Set ADMIN_PASSWORD in project settings.' };
  }
  if (pw !== configured) {
    return { error: 'Incorrect password.' };
  }

  const token = expectedToken()!;
  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return {};
}

export async function adminLogout(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}
