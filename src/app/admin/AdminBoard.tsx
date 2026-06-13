'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LogOut, Users, UserCheck, FolderGit2, Layers } from 'lucide-react';
import { adminLogout } from './actions';
import {
  Page,
  Inner,
  TopBar,
  LogoutBtn,
  StatRow,
  StatCard,
  Section,
  SectionHead,
  TableWrap,
  Table,
  Pill,
  Empty,
} from './styles';

export interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  college: string;
  track_selection: string;
  team_status: string;
  created_at: string;
}

export interface TeamRow {
  id: string;
  name: string;
  join_code: string;
  track: string | null;
  member_count: number;
  members: string[];
}

export interface SubmissionRow {
  id: string;
  project_name: string;
  team_name: string;
  description: string | null;
  repo_url: string | null;
  live_url: string | null;
  updated_at: string | null;
}

interface Props {
  registrations: Registration[];
  teams: TeamRow[];
  submissions: SubmissionRow[];
}

const fmtDate = (d: string | null) =>
  d
    ? new Date(d).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : '—';

export default function AdminBoard({ registrations, teams, submissions }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const logout = () =>
    startTransition(async () => {
      await adminLogout();
      router.refresh();
    });

  return (
    <Page>
      <Inner>
        <TopBar>
          <div>
            <h1>Organizer Dashboard</h1>
            <div className="sub">Nortable Global Hackathon 2026</div>
          </div>
          <LogoutBtn onClick={logout} disabled={pending}>
            <LogOut size={15} /> Sign out
          </LogoutBtn>
        </TopBar>

        <StatRow>
          <StatCard>
            <div className="v">{registrations.length}</div>
            <div className="k">
              <UserCheck size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
              Registrations
            </div>
          </StatCard>
          <StatCard>
            <div className="v">{teams.length}</div>
            <div className="k">
              <Users size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
              Teams
            </div>
          </StatCard>
          <StatCard>
            <div className="v">{submissions.length}</div>
            <div className="k">
              <FolderGit2 size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
              Submissions
            </div>
          </StatCard>
          <StatCard>
            <div className="v">
              {registrations.filter((r) => r.team_status === 'solo').length}
            </div>
            <div className="k">
              <Layers size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
              Solo Registrants
            </div>
          </StatCard>
        </StatRow>

        <Section>
          <SectionHead>
            <h2>Registrations</h2>
            <span className="count">{registrations.length} total</span>
          </SectionHead>
          <TableWrap>
            {registrations.length === 0 ? (
              <Empty>No registrations yet.</Empty>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>College</th>
                    <th>Track</th>
                    <th>Status</th>
                    <th>Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((r) => (
                    <tr key={r.id}>
                      <td>{r.full_name}</td>
                      <td>
                        <a href={`mailto:${r.email}`}>{r.email}</a>
                      </td>
                      <td className="muted">{r.phone}</td>
                      <td>{r.college}</td>
                      <td>{r.track_selection}</td>
                      <td>
                        <Pill $tone={r.team_status === 'solo' ? 'gray' : 'green'}>
                          {r.team_status}
                        </Pill>
                      </td>
                      <td className="muted">{fmtDate(r.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </TableWrap>
        </Section>

        <Section>
          <SectionHead>
            <h2>Teams</h2>
            <span className="count">{teams.length} total</span>
          </SectionHead>
          <TableWrap>
            {teams.length === 0 ? (
              <Empty>No teams created yet.</Empty>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Code</th>
                    <th>Track</th>
                    <th>Members</th>
                    <th>Roster</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((t) => (
                    <tr key={t.id}>
                      <td>{t.name}</td>
                      <td className="muted">{t.join_code}</td>
                      <td>{t.track || '—'}</td>
                      <td>
                        <Pill $tone="green">{t.member_count}</Pill>
                      </td>
                      <td className="muted">{t.members.join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </TableWrap>
        </Section>

        <Section>
          <SectionHead>
            <h2>Submissions</h2>
            <span className="count">{submissions.length} total</span>
          </SectionHead>
          <TableWrap>
            {submissions.length === 0 ? (
              <Empty>No submissions yet.</Empty>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Team</th>
                    <th>Repo</th>
                    <th>Live</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id}>
                      <td>{s.project_name}</td>
                      <td>{s.team_name}</td>
                      <td>
                        {s.repo_url ? (
                          <a href={s.repo_url} target="_blank" rel="noreferrer">
                            Repo
                          </a>
                        ) : (
                          <span className="muted">—</span>
                        )}
                      </td>
                      <td>
                        {s.live_url ? (
                          <a href={s.live_url} target="_blank" rel="noreferrer">
                            Demo
                          </a>
                        ) : (
                          <span className="muted">—</span>
                        )}
                      </td>
                      <td className="muted">{fmtDate(s.updated_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </TableWrap>
        </Section>
      </Inner>
    </Page>
  );
}
