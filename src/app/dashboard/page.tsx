'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/libs/supabaseClient';
import { Page, Container, Loading, Banner, Btn } from './styles';
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

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reg, setReg] = useState<RegData | null>(null);

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

  // Derived gamified values (stable per user)
  const xp = 2640;
  const rank = 4;

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
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ paddingTop: '1.5rem' }}>
            <Cockpit name={reg.name} track={reg.track} xp={xp} rank={rank} />
          </div>
          <LeaderboardHub name={reg.name} xp={xp} rank={rank} />
          <TeamHub name={reg.name} track={reg.track} />
          <Milestones />
          <MentorPortal />
          <Bounties />
          <SubmissionSuite serial={reg.serial} />
        </motion.div>
      </Container>
    </Page>
  );
}
