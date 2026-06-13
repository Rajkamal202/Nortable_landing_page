import { isAdminAuthed } from './actions';
import { supabaseAdmin } from '@/libs/supabaseAdmin';
import AdminLogin from './AdminLogin';
import AdminBoard, {
  type Registration,
  type TeamRow,
  type SubmissionRow,
} from './AdminBoard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authed = await isAdminAuthed();
  if (!authed) return <AdminLogin />;

  // Service-role reads bypass RLS so organizers see everything.
  const [{ data: regs }, { data: teams }, { data: members }, { data: subs }] =
    await Promise.all([
      supabaseAdmin
        .from('registrations')
        .select('id, full_name, email, phone, college, track_selection, team_status, created_at')
        .order('created_at', { ascending: false }),
      supabaseAdmin
        .from('teams')
        .select('id, name, join_code, track, created_at')
        .order('created_at', { ascending: false }),
      supabaseAdmin.from('team_members').select('team_id, full_name'),
      supabaseAdmin
        .from('submissions')
        .select('id, team_id, project_name, description, github_url, live_url, updated_at')
        .order('updated_at', { ascending: false }),
    ]);

  const membersByTeam = new Map<string, string[]>();
  (members ?? []).forEach((m) => {
    const list = membersByTeam.get(m.team_id) ?? [];
    if (m.full_name) list.push(m.full_name);
    membersByTeam.set(m.team_id, list);
  });

  const teamNameById = new Map<string, string>();
  (teams ?? []).forEach((t) => teamNameById.set(t.id, t.name));

  const teamRows: TeamRow[] = (teams ?? []).map((t) => ({
    id: t.id,
    name: t.name,
    join_code: t.join_code,
    track: t.track,
    members: membersByTeam.get(t.id) ?? [],
    member_count: (membersByTeam.get(t.id) ?? []).length,
  }));

  const submissionRows: SubmissionRow[] = (subs ?? []).map((s) => ({
    id: s.id,
    project_name: s.project_name,
    team_name: teamNameById.get(s.team_id) ?? 'Unknown team',
    description: s.description,
    repo_url: s.github_url,
    live_url: s.live_url,
    updated_at: s.updated_at,
  }));

  return (
    <AdminBoard
      registrations={(regs ?? []) as Registration[]}
      teams={teamRows}
      submissions={submissionRows}
    />
  );
}
