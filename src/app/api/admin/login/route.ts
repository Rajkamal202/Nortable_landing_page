import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ADMIN_COOKIE, expectedToken } from '@/app/admin/auth';

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: '' }));
  const configured = process.env.ADMIN_PASSWORD;

  if (!configured) {
    return NextResponse.json(
      { error: 'Admin password is not configured. Set ADMIN_PASSWORD in project settings.' },
      { status: 500 },
    );
  }
  if (String(password) !== configured) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const token = expectedToken()!;
  cookies().set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return NextResponse.json({ ok: true });
}
