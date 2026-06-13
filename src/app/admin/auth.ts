import 'server-only';

import { cookies } from 'next/headers';
import { createHash } from 'crypto';

export const ADMIN_COOKIE = 'nrt_admin';

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
  return store.get(ADMIN_COOKIE)?.value === token;
}
