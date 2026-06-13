'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, Ticket, Users, Rocket } from 'lucide-react';
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
  MainCol,
  SectionAnchor,
  Loading,
  Banner,
  Btn,
} from './styles';
import Cockpit from './components/Cockpit';
import TeamHub from './components/TeamHub';
import SubmissionSuite from './components/SubmissionSuite';
import PassPanel from './components/PassPanel';

interface RegData {
  name: string;
  track: string;
  serial: string;
}

const NAV = [
  { id: 'overview', label: 'Overview', Icon: LayoutDashboard },
  { id: 'pass', label: 'Your Pass', Icon: Ticket },
  { id: 'team', label: 'Your Team', Icon: Users },
  { id: 'submission', label: 'Submission', Icon: Rocket },
];

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reg, setReg] = useState<RegData | null>(null);
  const [active, setActive] = useState('overview');

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
          <div className="txt">Loading your dashboard…</div>
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
              Your pass, team and project submission live here.
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
              Complete your registration to unlock your participant dashboard.
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
              <div className="r">{reg.track} Track</div>
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
        </Sidebar>

        <MainCol>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionAnchor id="overview">
              <Cockpit name={reg.name} track={reg.track} />
            </SectionAnchor>
            <SectionAnchor id="pass">
              <PassPanel name={reg.name} track={reg.track} serial={reg.serial} />
            </SectionAnchor>
            <SectionAnchor id="team">
              <TeamHub userId={user.id} name={reg.name} track={reg.track} />
            </SectionAnchor>
            <SectionAnchor id="submission">
              <SubmissionSuite userId={user.id} serial={reg.serial} track={reg.track} />
            </SectionAnchor>
          </motion.div>
        </MainCol>
      </Shell>
    </Page>
  );
}
