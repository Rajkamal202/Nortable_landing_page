'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Trophy,
  Users,
  ListChecks,
  LifeBuoy,
  Gift,
  Rocket,
} from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/libs/supabaseClient';
import {
  Page,
  Container,
  Shell,
  Sidebar,
  SideProfile,
  SideNav,
  SideLink,
  SideStat,
  MainCol,
  SectionAnchor,
  Loading,
  Banner,
  Btn,
} from './styles';
import Cockpit from './components/Cockpit';
import LeaderboardHub from './components/LeaderboardHub';
import TeamHub from './components/TeamHub';
import Milestones from './components/Milestones';
import MentorPortal from './components/MentorPortal';
import Bounties from './components/Bounties';
import SubmissionSuite from './components/SubmissionSuite';

interface RegData {
  name: string;
  track: string;
  serial: string;
}

const NAV = [
  { id: 'cockpit', label: 'Mission Control', Icon: LayoutDashboard },
  { id: 'leaderboard', label: 'XP & Leaderboard', Icon: Trophy },
  { id: 'team', label: 'Team & Matchmaking', Icon: Users },
  { id: 'milestones', label: 'Milestones', Icon: ListChecks },
  { id: 'mentor', label: 'Mentor Portal', Icon: LifeBuoy },
  { id: 'bounties', label: 'Bounties & Perks', Icon: Gift },
  { id: 'submission', label: 'Submission Suite', Icon: Rocket },
];

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reg, setReg] = useState<RegData | null>(null);
  const [active, setActive] = useState('cockpit');

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (authLoading) return;
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await supabase
          .from('registrations')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        if (!cancelled) {
          if (data) {
            setReg({
              name: data.full_name,
              track: data.track_selection,
              serial: data.ticket_serial,
            });
          }
        }
      } catch (err) {
        console.error('[v0] Dashboard registration lookup failed', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  // Scroll-spy: highlight active nav section
  useEffect(() => {
    if (!reg) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [reg]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Derived gamified values (stable per user)
  const xp = 2640;
  const rank = 4;
  const firstName = reg?.name?.split(' ')[0] || 'Builder';
  const initials =
    reg?.name
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'NB';

  if (authLoading || loading) {
    return (
      <Page>
        <Loading>
          <div className="spinner" />
          <div className="txt">Loading your mission control…</div>
        </Loading>
      </Page>
    );
  }

  if (!user) {
    return (
      <Page>
        <Container>
          <Banner initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="t">Sign in to access your dashboard</div>
            <div className="s">
              Your hackathon cockpit, XP, team hub and submission suite live here.
            </div>
            <div style={{ maxWidth: 220, margin: '0 auto' }}>
              <Btn onClick={() => router.push('/register')}>Go to Register / Sign In</Btn>
            </div>
          </Banner>
        </Container>
      </Page>
    );
  }

  if (!reg) {
    return (
      <Page>
        <Container>
          <Banner initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="t">You haven&apos;t registered yet</div>
            <div className="s">
              Complete your registration to unlock the full participant dashboard.
            </div>
            <div style={{ maxWidth: 220, margin: '0 auto' }}>
              <Btn onClick={() => router.push('/register')}>Complete Registration</Btn>
            </div>
          </Banner>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Shell>
        <Sidebar>
          <SideProfile>
            <div className="av">{initials}</div>
            <div className="meta">
              <div className="n">{firstName}</div>
              <div className="r">Rank #{rank} · {xp.toLocaleString()} XP</div>
            </div>
          </SideProfile>

          <SideNav aria-label="Dashboard sections">
            {NAV.map(({ id, label, Icon }) => (
              <SideLink
                key={id}
                $active={active === id}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? 'true' : undefined}
              >
                <Icon /> {label}
              </SideLink>
            ))}
          </SideNav>

          <SideStat>
            <div className="row">
              <span className="l">Track</span>
              <span className="v green">{reg.track}</span>
            </div>
            <div className="row">
              <span className="l">Pass</span>
              <span className="v">#{reg.serial}</span>
            </div>
            <div className="row">
              <span className="l">Milestones</span>
              <span className="v">3 / 5</span>
            </div>
          </SideStat>
        </Sidebar>

        <MainCol>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionAnchor id="cockpit">
              <Cockpit name={reg.name} track={reg.track} xp={xp} rank={rank} />
            </SectionAnchor>
            <SectionAnchor id="leaderboard">
              <LeaderboardHub name={reg.name} xp={xp} rank={rank} />
            </SectionAnchor>
            <SectionAnchor id="team">
              <TeamHub name={reg.name} track={reg.track} />
            </SectionAnchor>
            <SectionAnchor id="milestones">
              <Milestones />
            </SectionAnchor>
            <SectionAnchor id="mentor">
              <MentorPortal />
            </SectionAnchor>
            <SectionAnchor id="bounties">
              <Bounties />
            </SectionAnchor>
            <SectionAnchor id="submission">
              <SubmissionSuite serial={reg.serial} />
            </SectionAnchor>
          </motion.div>
        </MainCol>
      </Shell>
    </Page>
  );
}
