'use client';

import { Award, Bug, Bird, Bot, Zap, Rocket } from 'lucide-react';
import {
  Block,
  SectionTitle,
  TwoCol,
  Card,
  XpBar,
  LbRow,
  BadgeChest,
  BadgeChip,
} from '../styles';

const AVATAR_COLORS = [
  'linear-gradient(135deg,#48d64c,#2b892e)',
  'linear-gradient(135deg,#5ab0ff,#2b6fd6)',
  'linear-gradient(135deg,#ffb347,#ff8c00)',
  'linear-gradient(135deg,#ff6b9d,#d6336c)',
  'linear-gradient(135deg,#9d6bff,#6f2bd6)',
];

const initials = (n: string) =>
  n.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

interface Props {
  name: string;
  xp: number;
  rank: number;
}

export default function LeaderboardHub({ name, xp, rank }: Props) {
  const leaders = [
    { n: 'Neon Ninjas', role: 'AI / ML', xp: 4820 },
    { n: 'Quantum Coders', role: 'Fintech', xp: 4310 },
    { n: 'Byte Surfers', role: 'Open Innovation', xp: 3990 },
    { n: name || 'You', role: 'Your Team', xp, me: true },
    { n: 'Pixel Pirates', role: 'AI / ML', xp: 2870 },
    { n: 'Stack Smashers', role: 'Fintech', xp: 2540 },
  ].sort((a, b) => b.xp - a.xp);

  const nextTier = 3000;
  const pct = Math.min(100, Math.round((xp / nextTier) * 100));

  const badges = [
    { nm: 'Early Bird', Icon: Bird, earned: true },
    { nm: 'Bug Squasher', Icon: Bug, earned: true },
    { nm: 'Agent Commander', Icon: Bot, earned: true },
    { nm: 'Quick Deploy', Icon: Zap, earned: true },
    { nm: 'Milestone Master', Icon: Award, earned: false },
    { nm: 'Launch Ready', Icon: Rocket, earned: false },
  ];

  return (
    <Block>
      <SectionTitle>
        Gamified XP &amp; Leaderboard <span className="tag">Community XP</span>
      </SectionTitle>
      <TwoCol>
        <Card>
          {leaders.map((l, i) => (
            <LbRow key={i} $me={(l as any).me}>
              <div className={`rank ${i < 3 ? 'top' : ''}`}>{i + 1}</div>
              <div
                className="av"
                style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
              >
                {initials(l.n)}
              </div>
              <div className="nm">
                {l.n}
                <span className="role">{l.role}</span>
              </div>
              <div className="xp">{l.xp.toLocaleString()} XP</div>
            </LbRow>
          ))}
        </Card>

        <Card>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
            Your Progress
          </div>
          <XpBar>
            <div className="top">
              <span>
                Rank <b>#{rank}</b>
              </span>
              <span>
                <b>{xp.toLocaleString()}</b> / {nextTier.toLocaleString()} XP
              </span>
            </div>
            <div className="rail">
              <div className="fill" style={{ width: `${pct}%` }} />
            </div>
            <div
              style={{
                marginTop: '0.6rem',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              {nextTier - xp > 0
                ? `${(nextTier - xp).toLocaleString()} XP to next tier`
                : 'Top tier reached!'}
            </div>
          </XpBar>

          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Badges Chest
          </div>
          <BadgeChest>
            {badges.map((b) => (
              <BadgeChip key={b.nm} $earned={b.earned}>
                <div className="ic">
                  <b.Icon size={28} strokeWidth={1.6} />
                </div>
                <div className="nm">{b.nm}</div>
              </BadgeChip>
            ))}
          </BadgeChest>
        </Card>
      </TwoCol>
    </Block>
  );
}
