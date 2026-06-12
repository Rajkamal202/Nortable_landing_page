'use client';

import { useState } from 'react';
import { Check, Loader2, Lock } from 'lucide-react';
import { Block, SectionTitle, Card, MilestoneRow } from '../styles';

type Status = 'done' | 'progress' | 'locked';

interface Milestone {
  phase: string;
  title: string;
  xp: number;
  status: Status;
}

const INITIAL: Milestone[] = [
  { phase: 'Pre-Event', title: 'Complete Profile Setup & Join Discord', xp: 50, status: 'done' },
  { phase: 'Pre-Event', title: 'Setup Local Repository & Link GitHub', xp: 100, status: 'done' },
  { phase: 'Day 1 · 12:00 PM', title: 'Submit Project Abstract & Flowchart', xp: 200, status: 'progress' },
  { phase: 'Day 2 · 02:00 AM', title: 'Midnight Code-Freeze Checkpoint', xp: 300, status: 'locked' },
  { phase: 'Day 2 · 05:00 PM', title: 'Record Demo Video & Final Submit', xp: 500, status: 'locked' },
];

export default function Milestones() {
  const [items, setItems] = useState(INITIAL);

  const toggle = (idx: number) => {
    setItems((prev) =>
      prev.map((m, i) => {
        if (i !== idx || m.status === 'locked') return m;
        return { ...m, status: m.status === 'done' ? 'progress' : 'done' };
      })
    );
  };

  const earned = items
    .filter((m) => m.status === 'done')
    .reduce((s, m) => s + m.xp, 0);
  const total = items.reduce((s, m) => s + m.xp, 0);

  return (
    <Block>
      <SectionTitle>
        Interactive Milestone Checklist{' '}
        <span className="tag">
          {earned} / {total} XP
        </span>
      </SectionTitle>
      <Card>
        {items.map((m, i) => (
          <MilestoneRow key={i} $status={m.status}>
            <div
              className={`check ${m.status}`}
              onClick={() => toggle(i)}
              role="button"
              aria-label={`Toggle ${m.title}`}
            >
              {m.status === 'done' && <Check size={16} strokeWidth={3} />}
              {m.status === 'progress' && <Loader2 size={15} className="spin" />}
              {m.status === 'locked' && <Lock size={13} />}
            </div>
            <div className="body">
              <div className="phase">{m.phase}</div>
              <div className="title">{m.title}</div>
            </div>
            <div className="xp">+{m.xp} XP</div>
          </MilestoneRow>
        ))}
      </Card>
    </Block>
  );
}
