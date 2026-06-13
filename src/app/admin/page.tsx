import { isAdminAuthed } from './auth';
import { supabaseAdmin } from '@/libs/supabaseAdmin';
import AdminLogin from './AdminLogin';
import AdminBoard, {
  type Registration,
  type SubmissionRow,
  type Announcement,
  type Stats,
  type TrackDatum,
  type DailyDatum,
} from './AdminBoard';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 50;

type SearchParams = { [key: string]: string | string[] | undefined };

function str(v: string | string[] | undefined): string {
  return (Array.isArray(v) ? v[0] : v) ?? '';
}

// Strip characters that would break PostgREST .or()/.ilike() filter syntax.
function sanitize(q: string): string {
  return q.replace(/[,()*]/g, ' ').trim().slice(0, 80);
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const authed = await isAdminAuthed();
  if (!authed) return <AdminLogin />;

  const tab = str(searchParams.tab) || 'overview';
  const q = sanitize(str(searchParams.q));
  const track = str(searchParams.track);
  const status = str(searchParams.status);
  const page = Math.max(1, parseInt(str(searchParams.page) || '1', 10) || 1);

  // Headline stats via a single aggregate round-trip (no row scan).
  const { data: statsRaw } = await supabaseAdmin.rpc('admin_registration_stats');
  const stats: Stats = statsRaw ?? {
    total: 0,
    revenue: 0,
    solo: 0,
    looking: 0,
    have_team: 0,
    today: 0,
  };

  // Track list (cheap) — also powers the filter dropdown.
  const { data: trackRows } = await supabaseAdmin.rpc('admin_track_breakdown');
  const trackBreakdown: TrackDatum[] = (trackRows ?? []).map((t: { track: string; count: number }) => ({
    track: t.track,
    count: Number(t.count),
  }));

  let daily: DailyDatum[] = [];
  let registrations: Registration[] = [];
  let regTotal = 0;
  let submissions: SubmissionRow[] = [];
  let subTotal = 0;
  let announcements: Announcement[] = [];

  if (tab === 'overview') {
    const { data: dailyRows } = await supabaseAdmin.rpc('admin_daily_registrations');
    daily = (dailyRows ?? []).map((d: { day: string; count: number }) => ({
      day: d.day,
      count: Number(d.count),
    }));
  } else if (tab === 'registrations') {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    let query = supabaseAdmin
      .from('registrations')
      .select(
        'id, full_name, email, phone, college, track_selection, team_status, teammates, total_price, created_at',
        { count: 'exact' }
      );
    if (q) query = query.or(`full_name.ilike.%${q}%,email.ilike.%${q}%,phone.ilike.%${q}%,college.ilike.%${q}%`);
    if (track) query = query.eq('track_selection', track);
    if (status) query = query.eq('team_status', status);
    const { data, count } = await query
      .order('created_at', { ascending: false })
      .range(from, to);
    registrations = ((data ?? []) as unknown[]).map((r) => {
      const row = r as Record<string, unknown>;
      const mates = Array.isArray(row.teammates) ? (row.teammates as { name?: string }[]) : [];
      return {
        id: String(row.id),
        full_name: String(row.full_name ?? ''),
        email: String(row.email ?? ''),
        phone: String(row.phone ?? ''),
        college: String(row.college ?? ''),
        track_selection: String(row.track_selection ?? ''),
        team_status: String(row.team_status ?? ''),
        team_size: row.team_status === 'have_team' ? mates.length + 1 : 1,
        total_price: Number(row.total_price ?? 0),
        created_at: String(row.created_at ?? ''),
      };
    });
    regTotal = count ?? 0;
  } else if (tab === 'submissions') {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    const { data, count } = await supabaseAdmin
      .from('submissions')
      .select('id, user_id, project_name, description, github_url, live_url, updated_at', {
        count: 'exact',
      })
      .order('updated_at', { ascending: false })
      .range(from, to);
    const subs = (data ?? []) as Array<Record<string, unknown>>;
    const userIds = subs.map((s) => s.user_id).filter(Boolean) as string[];
    const nameByUserId = new Map<string, string>();
    if (userIds.length) {
      const { data: regNames } = await supabaseAdmin
        .from('registrations')
        .select('user_id, full_name')
        .in('user_id', userIds);
      (regNames ?? []).forEach((r: { user_id: string; full_name: string }) => {
        if (r.user_id) nameByUserId.set(r.user_id, r.full_name);
      });
    }
    submissions = subs.map((s) => ({
      id: String(s.id),
      project_name: String(s.project_name ?? ''),
      team_name: (s.user_id ? nameByUserId.get(String(s.user_id)) : undefined) || 'Unknown',
      description: (s.description as string) ?? null,
      repo_url: (s.github_url as string) ?? null,
      live_url: (s.live_url as string) ?? null,
      updated_at: (s.updated_at as string) ?? null,
    }));
    subTotal = count ?? 0;
  } else if (tab === 'announcements') {
    const { data } = await supabaseAdmin
      .from('announcements')
      .select('id, title, body, pinned, created_at')
      .order('pinned', { ascending: false })
      .order('created_at', { ascending: false });
    announcements = (data ?? []) as Announcement[];
  }

  return (
    <AdminBoard
      tab={tab}
      stats={stats}
      trackBreakdown={trackBreakdown}
      daily={daily}
      registrations={registrations}
      regTotal={regTotal}
      submissions={submissions}
      subTotal={subTotal}
      announcements={announcements}
      page={page}
      pageSize={PAGE_SIZE}
      filters={{ q, track, status }}
    />
  );
}
