import { isAdminAuthed } from './auth';
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
  // Teams are defined at registration, so we derive them from the
  // registrations table rather than a separate teams table.
  const [{ data: regs }, { data: subs }] = await Promise.all([
    supabaseAdmin
      .from('registrations')
      .select(
        'id, user_id, full_name, email, phone, college, track_selection, team_status, team_bio, teammates, created_at'
      )
      .order('created_at', { ascending: false }),
    supabaseAdmin
      .from('submissions')
      .select('id, user_id, project_name, description, github_url, live_url, updated_at')
      .order('updated_at', { ascending: false }),
  ]);

  // Map each registrant's user_id to their display name (for submissions).
  const nameByUserId = new Map<string, string>();
  (regs ?? []).forEach((r) => {
    if (r.user_id) nameByUserId.set(r.user_id, r.full_name);
  });

  // Build team rows from registrants who declared a team at registration.
  const teamRows: TeamRow[] = (regs ?? [])
    .filter((r) => r.team_status === 'have_team')
    .map((r) => {
      const mates = Array.isArray(r.teammates)
        ? (r.teammates as { name: string }[]).map((t) => t?.name).filter(Boolean)
        : [];
      const members = [r.full_name, ...mates];
      return {
        id: r.id,
        name: `${(r.full_name || 'Team').split(' ')[0]}'s Team`,
        lead: r.full_name,
        track: r.track_selection,
        members,
        member_count: members.length,
      };
    });

  const submissionRows: SubmissionRow[] = (subs ?? []).map((s) => ({
    id: s.id,
    project_name: s.project_name,
    team_name: (s.user_id && nameByUserId.get(s.user_id)) || 'Unknown',
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
