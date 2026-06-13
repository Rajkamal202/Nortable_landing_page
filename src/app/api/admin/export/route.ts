import { NextResponse } from 'next/server';
import { isAdminAuthed } from '@/app/admin/auth';
import { supabaseAdmin } from '@/libs/supabaseAdmin';

export const dynamic = 'force-dynamic';

function csvCell(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v);
  return `"${s.replace(/"/g, '""')}"`;
}

function toCsv(headers: string[], rows: unknown[][]): string {
  const lines = [headers.map(csvCell).join(',')];
  for (const row of rows) lines.push(row.map(csvCell).join(','));
  return lines.join('\r\n');
}

export async function GET(req: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const type = url.searchParams.get('type') || 'registrations';

  if (type === 'submissions') {
    const { data } = await supabaseAdmin
      .from('submissions')
      .select('project_name, description, github_url, live_url, track, updated_at')
      .order('updated_at', { ascending: false })
      .range(0, 9999);
    const rows = (data ?? []).map((s: Record<string, unknown>) => [
      s.project_name,
      s.description,
      s.github_url,
      s.live_url,
      s.track,
      s.updated_at,
    ]);
    const csv = toCsv(
      ['Project', 'Description', 'Repo URL', 'Live URL', 'Track', 'Updated'],
      rows
    );
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="submissions-${Date.now()}.csv"`,
      },
    });
  }

  // Registrations (default) — respect the same filters as the table.
  const q = (url.searchParams.get('q') || '').replace(/[,()*]/g, ' ').trim().slice(0, 80);
  const track = url.searchParams.get('track') || '';
  const status = url.searchParams.get('status') || '';

  let query = supabaseAdmin
    .from('registrations')
    .select(
      'full_name, email, phone, college, track_selection, team_status, teammates, total_price, created_at'
    );
  if (q) query = query.or(`full_name.ilike.%${q}%,email.ilike.%${q}%,phone.ilike.%${q}%,college.ilike.%${q}%`);
  if (track) query = query.eq('track_selection', track);
  if (status) query = query.eq('team_status', status);

  const { data } = await query.order('created_at', { ascending: false }).range(0, 9999);

  const rows = (data ?? []).map((r: Record<string, unknown>) => {
    const mates = Array.isArray(r.teammates) ? (r.teammates as { name?: string; email?: string }[]) : [];
    const teamSize = r.team_status === 'have_team' ? mates.length + 1 : 1;
    const roster = mates.map((m) => `${m.name ?? ''} <${m.email ?? ''}>`).join('; ');
    return [
      r.full_name,
      r.email,
      r.phone,
      r.college,
      r.track_selection,
      r.team_status,
      teamSize,
      r.total_price,
      roster,
      r.created_at,
    ];
  });

  const csv = toCsv(
    ['Name', 'Email', 'Phone', 'College', 'Track', 'Status', 'Team Size', 'Paid (INR)', 'Teammates', 'Registered'],
    rows
  );
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="registrations-${Date.now()}.csv"`,
    },
  });
}
