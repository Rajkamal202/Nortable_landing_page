'use client';

import { useState } from 'react';
import { MapPin, UserPlus, Check } from 'lucide-react';
import {
  Block,
  SectionTitle,
  TwoCol,
  TeamCard,
  MemberRow,
  Grid,
  LfgCard,
  TechTag,
  Btn,
} from '../styles';

const AV = [
  'linear-gradient(135deg,#48d64c,#2b892e)',
  'linear-gradient(135deg,#5ab0ff,#2b6fd6)',
  'linear-gradient(135deg,#ffb347,#ff8c00)',
  'linear-gradient(135deg,#ff6b9d,#d6336c)',
];

const initials = (n: string) =>
  n.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

interface Props {
  name: string;
  track: string;
}

export default function TeamHub({ name, track }: Props) {
  const [invited, setInvited] = useState<Record<number, boolean>>({});

  const members = [
    { n: name || 'You', r: 'Team Lead · Full-Stack', on: true },
    { n: 'Aarav Mehta', r: 'AI Engineer', on: true },
    { n: 'Sara Khan', r: 'UI/UX Designer', on: false },
    { n: 'Dev Patel', r: 'Backend', on: true },
  ];

  const lfg = [
    {
      n: 'Riya Sharma',
      loc: 'Bengaluru, IN',
      idea: 'Building an AI study companion that turns lecture notes into quizzes.',
      stack: ['React', 'Python', 'Supabase'],
    },
    {
      n: 'Karan Verma',
      loc: 'Pune, IN',
      idea: 'Fintech tool for splitting group expenses with UPI auto-settlement.',
      stack: ['Next.js', 'Node', 'Postgres'],
    },
    {
      n: 'Ananya Roy',
      loc: 'Delhi, IN',
      idea: 'Looking for a designer team to build a climate-data dashboard.',
      stack: ['TypeScript', 'D3.js', 'AWS'],
    },
  ];

  return (
    <Block>
      <SectionTitle>
        My Team &amp; Matchmaking <span className="tag">LFG Board</span>
      </SectionTitle>
      <TwoCol>
        <TeamCard>
          <div className="head">
            <div className="logo">{initials(name || 'NT')}</div>
            <div className="meta">
              <h3>{(name?.split(' ')[0] || 'My') + "'s Crew"}</h3>
              <div className="track">{track} Track</div>
            </div>
          </div>
          {members.map((m, i) => (
            <MemberRow key={i}>
              <div className="av" style={{ background: AV[i % AV.length] }}>
                {initials(m.n)}
              </div>
              <div className="info">
                <div className="n">{m.n}</div>
                <div className="r">{m.r}</div>
              </div>
              <div className={`stat ${m.on ? 'on' : 'off'}`}>
                <span className="d" /> {m.on ? 'Online' : 'Offline'}
              </div>
            </MemberRow>
          ))}
        </TeamCard>

        <div>
          <Grid $min="100%">
            {lfg.map((p, i) => (
              <LfgCard key={i}>
                <div className="top">
                  <div className="av" style={{ background: AV[i % AV.length] }}>
                    {initials(p.n)}
                  </div>
                  <div>
                    <div className="nm">{p.n}</div>
                    <div className="loc">
                      <MapPin
                        size={11}
                        style={{ display: 'inline', marginRight: 2 }}
                      />
                      {p.loc}
                    </div>
                  </div>
                </div>
                <div className="idea">{p.idea}</div>
                <div className="stack">
                  {p.stack.map((s) => (
                    <TechTag key={s}>{s}</TechTag>
                  ))}
                </div>
                <Btn
                  $variant={invited[i] ? 'ghost' : 'solid'}
                  onClick={() => setInvited((v) => ({ ...v, [i]: true }))}
                  disabled={invited[i]}
                >
                  {invited[i] ? (
                    <>
                      <Check size={15} /> Invite Sent
                    </>
                  ) : (
                    <>
                      <UserPlus size={15} /> Invite to Team
                    </>
                  )}
                </Btn>
              </LfgCard>
            ))}
          </Grid>
        </div>
      </TwoCol>
    </Block>
  );
}
