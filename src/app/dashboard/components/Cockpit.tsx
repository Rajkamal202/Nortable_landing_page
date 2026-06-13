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
import { KICKOFF, DEADLINE, SCHEDULE, BUILD_WINDOW_HOURS } from '@/libs/eventConfig';

const ICONS = { Calendar, Code2, Flag, Trophy } as const;

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
            {BUILD_WINDOW_HOURS}<span> hrs</span>
          </div>
          <div className="k">Build Window</div>
        </Stat>
      </StatStrip>

      <Timeline>
        <div className="head">Event Schedule</div>
        {SCHEDULE.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <TimelineItem key={i}>
              <div className="ic">
                <Icon size={16} />
              </div>
              <div className="body">
                <div className="title">{s.title}</div>
                <div className="note">{s.note}</div>
              </div>
              <div className="date">{s.date}</div>
            </TimelineItem>
          );
        })}
      </Timeline>
    </CockpitWrap>
  );
}
