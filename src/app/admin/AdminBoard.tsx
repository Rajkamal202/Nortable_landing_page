'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LogOut, BarChart3, Users, FolderGit2, Megaphone } from 'lucide-react';
import { Page, Inner, TopBar, LogoutBtn, Tabs, Tab } from './styles';
import StatsView from './StatsView';
import RegistrationsView from './RegistrationsView';
import SubmissionsView from './SubmissionsView';
import AnnouncementsView from './AnnouncementsView';

export interface Stats {
  total: number;
  revenue: number;
  solo: number;
  looking: number;
  have_team: number;
  today: number;
}
export interface TrackDatum {
  track: string;
  count: number;
}
export interface DailyDatum {
  day: string;
  count: number;
}
export interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  college: string;
  track_selection: string;
  team_status: string;
  team_size: number;
  total_price: number;
  created_at: string;
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
export interface Announcement {
  id: string;
  title: string;
  body: string;
  pinned: boolean;
  created_at: string;
}

interface Props {
  tab: string;
  stats: Stats;
  trackBreakdown: TrackDatum[];
  daily: DailyDatum[];
  registrations: Registration[];
  regTotal: number;
  submissions: SubmissionRow[];
  subTotal: number;
  announcements: Announcement[];
  page: number;
  pageSize: number;
  filters: { q: string; track: string; status: string };
}

const TABS = [
  { id: 'overview', label: 'Overview', Icon: BarChart3 },
  { id: 'registrations', label: 'Registrations', Icon: Users },
  { id: 'submissions', label: 'Submissions', Icon: FolderGit2 },
  { id: 'announcements', label: 'Announcements', Icon: Megaphone },
];

export default function AdminBoard({
  tab,
  stats,
  trackBreakdown,
  daily,
  registrations,
  regTotal,
  submissions,
  subTotal,
  announcements,
  page,
  pageSize,
  filters,
}: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const logout = () =>
    startTransition(async () => {
      await fetch('/api/admin/logout', { method: 'POST' });
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

        <Tabs>
          {TABS.map(({ id, label, Icon }) => (
            <Tab key={id} href={`/admin?tab=${id}`} $active={tab === id}>
              <Icon size={15} /> {label}
            </Tab>
          ))}
        </Tabs>

        {tab === 'overview' && (
          <StatsView stats={stats} trackBreakdown={trackBreakdown} daily={daily} />
        )}
        {tab === 'registrations' && (
          <RegistrationsView
            registrations={registrations}
            total={regTotal}
            page={page}
            pageSize={pageSize}
            filters={filters}
            tracks={trackBreakdown.map((t) => t.track)}
          />
        )}
        {tab === 'submissions' && (
          <SubmissionsView
            submissions={submissions}
            total={subTotal}
            page={page}
            pageSize={pageSize}
          />
        )}
        {tab === 'announcements' && <AnnouncementsView announcements={announcements} />}
      </Inner>
    </Page>
  );
}
