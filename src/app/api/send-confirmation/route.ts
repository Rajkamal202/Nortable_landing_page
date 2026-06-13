import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/libs/supabaseAdmin';

export const dynamic = 'force-dynamic';

const FROM = process.env.EMAIL_FROM || 'Nortable Hackathon <onboarding@resend.dev>';

function emailHtml(opts: {
  name: string;
  serial: string;
  track: string;
  dashboardUrl: string;
}): string {
  const { name, serial, track, dashboardUrl } = opts;
  return `<!DOCTYPE html>
<html>
<body style="margin:0;background:#07090c;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
    <div style="font-size:13px;letter-spacing:2px;color:#48d64c;text-transform:uppercase;">Nortable Presents</div>
    <h1 style="font-size:28px;margin:6px 0 18px;">You're registered.</h1>
    <p style="font-size:15px;line-height:1.6;color:#c9ccd1;">
      Hi ${name}, your spot at the <strong>Global Hackathon 2026</strong> is confirmed.
      Here are your details:
    </p>
    <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:14px;">
      <tr><td style="padding:8px 0;color:#8a8f96;">Registration ID</td><td style="padding:8px 0;text-align:right;font-weight:bold;">${serial}</td></tr>
      <tr><td style="padding:8px 0;color:#8a8f96;">Track</td><td style="padding:8px 0;text-align:right;">${track}</td></tr>
      <tr><td style="padding:8px 0;color:#8a8f96;">Dates</td><td style="padding:8px 0;text-align:right;">Jul 18 – 20, 2026 · Mumbai</td></tr>
    </table>
    <a href="${dashboardUrl}" style="display:inline-block;background:#48d64c;color:#06210a;font-weight:bold;text-decoration:none;padding:13px 24px;border-radius:10px;font-size:15px;">
      View your pass &amp; dashboard
    </a>
    <p style="font-size:13px;line-height:1.6;color:#6c7178;margin-top:28px;">
      Keep this email — your Registration ID is your reference for check-in.
      See you at the event. Be exceptional or be forgotten.
    </p>
  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email not configured.' }, { status: 500 });
  }

  const { serial, email } = await req.json().catch(() => ({}));
  if (!serial || !email) {
    return NextResponse.json({ error: 'Missing serial or email.' }, { status: 400 });
  }

  // Verify the registration actually exists before sending (anti-abuse).
  const { data: reg } = await supabaseAdmin
    .from('registrations')
    .select('full_name, email, track_selection, ticket_serial')
    .eq('ticket_serial', serial)
    .eq('email', email)
    .maybeSingle();

  if (!reg) {
    return NextResponse.json({ error: 'Registration not found.' }, { status: 404 });
  }

  const origin = new URL(req.url).origin;
  const dashboardUrl =
    (process.env.NEXT_PUBLIC_SITE_URL || origin).replace(/\/$/, '') + '/dashboard';

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM,
      to: reg.email,
      subject: `You're in — Nortable Global Hackathon 2026 (${reg.ticket_serial})`,
      html: emailHtml({
        name: reg.full_name,
        serial: reg.ticket_serial,
        track: reg.track_selection,
        dashboardUrl,
      }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[v0] confirmation email failed', err);
    return NextResponse.json({ error: 'Send failed.' }, { status: 500 });
  }
}
