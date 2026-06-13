'use client';

import { useState, useEffect } from 'react';
import { Calendar, Flag, Code2, Trophy } from 'lucide-react';
import {
  Cockpit as CockpitWrap,
  CockpitTop,
  Greeting,
  StatusBadge,
  Countdown,
  TimeUnit,
  StatStrip,
  Stat,
  Timeline,
  TimelineItem,
} from '../styles';

// Hacking start target — 18 July 2026
const KICKOFF = new Date('2026-07-18T10:00:00');
// Submission deadline — 20 July 2026
const DEADLINE = new Date('2026-07-20T14:00:00');

const SCHEDULE = [
  { Icon: Calendar, date: 'Jul 18, 10:00 AM', title: 'Opening Ceremony & Kickoff', note: 'Hacking begins' },
  { Icon: Code2, date: 'Jul 18 – 20', title: 'Build Window', note: '52 hours to ship' },
  { Icon: Flag, date: 'Jul 20, 02:00 PM', title: 'Submission Deadline', note: 'Repo + live link due' },
  { Icon: Trophy, date: 'Jul 20, 05:00 PM', title: 'Judging & Awards', note: 'Winners announced' },
];

function getRemaining() {
  const diff = Math.max(0, DEADLINE.getTime() - Date.now());
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
}

export default function Cockpit({ name, track }: Props) {
  const [time, setTime] = useState(getRemaining());
  const firstName = name?.split(' ')[0] || 'Builder';

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const now = Date.now();
  const status: { variant: 'live' | 'warn' | 'info'; label: string } =
    now < KICKOFF.getTime()
      ? { variant: 'info', label: 'Starts Soon' }
      : now < DEADLINE.getTime()
      ? { variant: 'live', label: 'Hacking Live' }
      : { variant: 'warn', label: 'Submissions Closed' };

  const units: [string, number][] = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Minutes', time.minutes],
    ['Seconds', time.seconds],
  ];

  const deadlineLabel = DEADLINE.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <CockpitWrap>
      <CockpitTop>
        <Greeting>
          <div className="eyebrow">Dashboard</div>
          <h1>
            Welcome back, <span>{firstName}</span>
          </h1>
          <div className="sub">{track} Track · Nortable Global Hackathon 2026</div>
        </Greeting>
        <StatusBadge $variant={status.variant}>
          <span className="dot" /> {status.label}
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

      <StatStrip>
        <Stat>
          <div className="v">{track}</div>
          <div className="k">Your Track</div>
        </Stat>
        <Stat>
          <div className="v">{deadlineLabel}</div>
          <div className="k">Submission Due</div>
        </Stat>
        <Stat>
          <div className="v">
            52<span> hrs</span>
          </div>
          <div className="k">Build Window</div>
        </Stat>
      </StatStrip>

      <Timeline>
        <div className="head">Event Schedule</div>
        {SCHEDULE.map((s, i) => (
          <TimelineItem key={i}>
            <div className="ic">
              <s.Icon size={16} />
            </div>
            <div className="body">
              <div className="title">{s.title}</div>
              <div className="note">{s.note}</div>
            </div>
            <div className="date">{s.date}</div>
          </TimelineItem>
        ))}
      </Timeline>
    </CockpitWrap>
  );
}
