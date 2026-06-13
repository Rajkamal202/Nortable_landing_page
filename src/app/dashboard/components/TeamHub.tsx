'use client';

import { Users, Crown, Search, User as UserIcon, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Block,
  SectionTitle,
  TeamCard,
  MemberRow,
  Btn,
  SubmitBanner,
} from '../styles';

const AV = [
  'linear-gradient(135deg,#48d64c,#2b892e)',
  'linear-gradient(135deg,#5ab0ff,#2b6fd6)',
  'linear-gradient(135deg,#ffb347,#ff8c00)',
  'linear-gradient(135deg,#ff6b9d,#d6336c)',
];

const initials = (n: string) =>
  (n || '?')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

type Teammate = { name: string; email: string };

interface Props {
  name: string;
  track: string;
  teamStatus: 'solo' | 'looking' | 'have_team';
  teamBio: string | null;
  teammates: Teammate[];
}

export default function TeamHub({ name, track, teamStatus, teamBio, teammates }: Props) {
  const router = useRouter();

  // Full roster = the registrant (lead) + the teammates they added at registration.
  const roster = [
    { name, role: 'lead' as const },
    ...teammates.filter((t) => t.name?.trim()).map((t) => ({ name: t.name, role: 'member' as const })),
  ];

  const tag =
    teamStatus === 'have_team'
      ? `${roster.length} member${roster.length > 1 ? 's' : ''}`
      : teamStatus === 'looking'
      ? 'Looking for teammates'
      : 'Solo';

  return (
    <Block>
      <SectionTitle>
        Your Team <span className="tag">{tag}</span>
      </SectionTitle>

      {teamStatus === 'have_team' && roster.length > 1 ? (
        <TeamCard>
          <div className="head">
            <div className="logo">{initials(name)}</div>
            <div className="meta">
              <h3>{name.split(' ')[0]}&apos;s Team</h3>
              <div className="track">{track} Track</div>
            </div>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            {roster.map((m, i) => (
              <MemberRow key={i}>
                <div className="av" style={{ background: AV[i % AV.length] }}>
                  {initials(m.name)}
                </div>
                <div className="info">
                  <div className="n">
                    {m.name}
                    {i === 0 ? ' (You)' : ''}
                  </div>
                  <div className="r">{m.role === 'lead' ? 'Team Lead' : 'Member'}</div>
                </div>
                {m.role === 'lead' && (
                  <div className="stat on" style={{ color: '#ffb347' }}>
                    <Crown size={14} style={{ color: '#ffb347' }} />
                  </div>
                )}
              </MemberRow>
            ))}
          </div>
        </TeamCard>
      ) : teamStatus === 'looking' ? (
        <SubmitBanner $variant="info">
          <Search size={18} />
          <div>
            <div className="t">You&apos;re looking for teammates</div>
            <div className="s">
              {teamBio?.trim()
                ? teamBio
                : 'You opted to find teammates. Organizers and other solo participants can match with you.'}
            </div>
          </div>
        </SubmitBanner>
      ) : (
        <SubmitBanner $variant="info">
          <UserIcon size={18} />
          <div>
            <div className="t">You registered solo</div>
            <div className="s">You&apos;re competing on your own — best of luck, {name.split(' ')[0]}!</div>
          </div>
        </SubmitBanner>
      )}

      <SubmitBanner $variant="info" style={{ marginTop: '1rem' }}>
        <Users size={18} />
        <div>
          <div className="t">Your team is set at registration</div>
          <div className="s">
            Team members and the per-person entry fee are confirmed during sign-up. Need to change your
            team? Update your registration details.
          </div>
        </div>
      </SubmitBanner>

      <div style={{ maxWidth: 220, marginTop: '1rem' }}>
        <Btn $variant="ghost" onClick={() => router.push('/register')}>
          <Pencil size={15} /> Edit Registration
        </Btn>
      </div>
    </Block>
  );
}
