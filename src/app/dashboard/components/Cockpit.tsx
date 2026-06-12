'use client';

import { useState, useEffect } from 'react';
import {
  Cockpit as CockpitWrap,
  CockpitTop,
  Greeting,
  StatusBadge,
  Countdown,
  TimeUnit,
  Ticker,
  StatStrip,
  Stat,
} from '../styles';

const ANNOUNCEMENTS = [
  'Workshop on AI Agents starts in 10 minutes in Hall B!',
  'Midnight snacks are now available at the food court.',
  'Reminder: Code-freeze checkpoint at 02:00 AM tonight.',
  'Sponsor booth: grab your free OpenAI credits now.',
  'Mentor queue is open — average wait under 5 minutes.',
];

// Hacking start target — 18 July 2026
const TARGET = new Date('2026-07-18T10:00:00');

function getRemaining() {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface Props {
  name: string;
  track: string;
  xp: number;
  rank: number;
}

export default function Cockpit({ name, track, xp, rank }: Props) {
  const [time, setTime] = useState(getRemaining());
  const firstName = name?.split(' ')[0] || 'Builder';

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Minutes', time.minutes],
    ['Seconds', time.seconds],
  ];

  return (
    <CockpitWrap>
      <CockpitTop>
        <Greeting>
          <div className="eyebrow">Mission Control</div>
          <h1>
            Welcome back, <span>{firstName}</span>
          </h1>
          <div className="sub">
            {track} Track · Nortable Global Hackathon 2026
          </div>
        </Greeting>
        <StatusBadge $variant="live">
          <span className="dot" /> Hacking Live
        </StatusBadge>
      </CockpitTop>

      <Countdown>
        <div className="label">Time until submission deadline</div>
        <div className="digits">
          {units.map(([unit, num]) => (
            <TimeUnit key={unit}>
              <div className="num">{String(num).padStart(2, '0')}</div>
              <div className="unit">{unit}</div>
            </TimeUnit>
          ))}
        </div>
      </Countdown>

      <Ticker>
        <span className="pill">Live</span>
        <div className="track">
          <div className="scroll">
            {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
              <span key={i}>
                <b>›</b> {a}
              </span>
            ))}
          </div>
        </div>
      </Ticker>

      <StatStrip>
        <Stat>
          <div className="v">
            {xp.toLocaleString()} <span>XP</span>
          </div>
          <div className="k">Total Experience</div>
        </Stat>
        <Stat>
          <div className="v">#{rank}</div>
          <div className="k">Leaderboard Rank</div>
        </Stat>
        <Stat>
          <div className="v">
            3<span>/5</span>
          </div>
          <div className="k">Milestones Done</div>
        </Stat>
        <Stat>
          <div className="v">
            4<span> badges</span>
          </div>
          <div className="k">Collected</div>
        </Stat>
      </StatStrip>
    </CockpitWrap>
  );
}
