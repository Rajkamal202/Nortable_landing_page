'use client';

import { useState, useEffect, useCallback } from 'react';
import { Users, Copy, Check, LogOut, Plus, LogIn, Crown } from 'lucide-react';
import { supabase } from '@/libs/supabaseClient';
import {
  Block,
  SectionTitle,
  TwoCol,
  TeamCard,
  MemberRow,
  Card,
  Field,
  Btn,
  JoinCodeBox,
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

function genCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

interface Team {
  id: string;
  name: string;
  join_code: string;
  track: string | null;
  owner_id: string | null;
}

interface Member {
  user_id: string;
  full_name: string | null;
  role: string;
}

interface Props {
  userId: string;
  name: string;
  track: string;
}

export default function TeamHub({ userId, name, track }: Props) {
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [team, setTeam] = useState<Team | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [teamName, setTeamName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const loadTeam = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data: membership } = await supabase
        .from('team_members')
        .select('team_id')
        .eq('user_id', userId)
        .limit(1)
        .maybeSingle();

      if (!membership) {
        setTeam(null);
        setMembers([]);
        return;
      }

      const { data: teamRow } = await supabase
        .from('teams')
        .select('*')
        .eq('id', membership.team_id)
        .maybeSingle();

      const { data: memberRows } = await supabase
        .from('team_members')
        .select('user_id, full_name, role')
        .eq('team_id', membership.team_id)
        .order('created_at', { ascending: true });

      setTeam(teamRow as Team);
      setMembers((memberRows as Member[]) || []);
    } catch (err) {
      console.error('[v0] loadTeam failed', err);
      setError('Could not load your team. Please retry.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadTeam();
  }, [loadTeam]);

  const createTeam = async () => {
    if (!teamName.trim()) return;
    setBusy(true);
    setError('');
    try {
      const code = genCode();
      const { data: created, error: teamErr } = await supabase
        .from('teams')
        .insert({ name: teamName.trim(), join_code: code, track, owner_id: userId })
        .select()
        .single();
      if (teamErr) throw teamErr;

      const { error: memErr } = await supabase.from('team_members').insert({
        team_id: created.id,
        user_id: userId,
        full_name: name,
        role: 'owner',
      });
      if (memErr) throw memErr;

      await loadTeam();
    } catch (err) {
      console.error('[v0] createTeam failed', err);
      setError('Could not create team. Try a different name.');
    } finally {
      setBusy(false);
    }
  };

  const joinTeam = async () => {
    const code = joinCode.trim().toUpperCase();
    if (!code) return;
    setBusy(true);
    setError('');
    try {
      const { data: found } = await supabase
        .from('teams')
        .select('id')
        .eq('join_code', code)
        .maybeSingle();

      if (!found) {
        setError('No team found with that code.');
        return;
      }

      const { error: memErr } = await supabase.from('team_members').insert({
        team_id: found.id,
        user_id: userId,
        full_name: name,
        role: 'member',
      });
      if (memErr) {
        if (memErr.code === '23505') {
          setError('You are already in this team.');
        } else {
          throw memErr;
        }
        return;
      }

      await loadTeam();
    } catch (err) {
      console.error('[v0] joinTeam failed', err);
      setError('Could not join team. Check the code and try again.');
    } finally {
      setBusy(false);
    }
  };

  const leaveTeam = async () => {
    if (!team) return;
    setBusy(true);
    setError('');
    try {
      // Owner leaving removes the whole team (cascade clears members + submission).
      if (team.owner_id === userId) {
        const { error: delErr } = await supabase.from('teams').delete().eq('id', team.id);
        if (delErr) throw delErr;
      } else {
        const { error: delErr } = await supabase
          .from('team_members')
          .delete()
          .eq('team_id', team.id)
          .eq('user_id', userId);
        if (delErr) throw delErr;
      }
      setTeamName('');
      setJoinCode('');
      await loadTeam();
    } catch (err) {
      console.error('[v0] leaveTeam failed', err);
      setError('Could not leave the team. Please retry.');
    } finally {
      setBusy(false);
    }
  };

  const copyCode = () => {
    if (!team) return;
    navigator.clipboard?.writeText(team.join_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Block>
      <SectionTitle>
        Your Team{' '}
        <span className="tag">{team ? `${members.length} member${members.length > 1 ? 's' : ''}` : 'Not in a team'}</span>
      </SectionTitle>

      {loading ? (
        <Card>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            Loading your team…
          </div>
        </Card>
      ) : team ? (
        <TeamCard>
          <div className="head">
            <div className="logo">{initials(team.name)}</div>
            <div className="meta">
              <h3>{team.name}</h3>
              <div className="track">{team.track || track} Track</div>
            </div>
          </div>

          <JoinCodeBox>
            <div className="label">Invite code</div>
            <div className="code">{team.join_code}</div>
            <button onClick={copyCode} aria-label="Copy invite code">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </JoinCodeBox>

          <div style={{ marginTop: '0.5rem' }}>
            {members.map((m, i) => (
              <MemberRow key={m.user_id}>
                <div className="av" style={{ background: AV[i % AV.length] }}>
                  {initials(m.full_name || 'NT')}
                </div>
                <div className="info">
                  <div className="n">
                    {m.full_name || 'Member'}
                    {m.user_id === userId ? ' (You)' : ''}
                  </div>
                  <div className="r">{m.role === 'owner' ? 'Team Lead' : 'Member'}</div>
                </div>
                {m.role === 'owner' && (
                  <div className="stat on" style={{ color: '#ffb347' }}>
                    <Crown size={14} style={{ color: '#ffb347' }} />
                  </div>
                )}
              </MemberRow>
            ))}
          </div>

          {error && (
            <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '1rem' }}>{error}</div>
          )}

          <div style={{ maxWidth: 200, marginTop: '1.25rem' }}>
            <Btn $variant="danger" onClick={leaveTeam} disabled={busy}>
              <LogOut size={15} /> {team.owner_id === userId ? 'Disband Team' : 'Leave Team'}
            </Btn>
          </div>
        </TeamCard>
      ) : (
        <>
          <TwoCol>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Plus size={18} style={{ color: '#48d64c' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Create a team</span>
              </div>
              <Field>
                <label>Team name</label>
                <input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Neon Builders"
                  maxLength={40}
                />
              </Field>
              <Btn onClick={createTeam} disabled={busy || !teamName.trim()}>
                <Users size={15} /> Create Team
              </Btn>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <LogIn size={18} style={{ color: '#48d64c' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Join a team</span>
              </div>
              <Field>
                <label>Invite code</label>
                <input
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  placeholder="6-character code"
                  maxLength={6}
                  style={{ textTransform: 'uppercase', letterSpacing: '0.2em' }}
                />
              </Field>
              <Btn $variant="ghost" onClick={joinTeam} disabled={busy || !joinCode.trim()}>
                <LogIn size={15} /> Join Team
              </Btn>
            </Card>
          </TwoCol>
          {error && (
            <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '1rem' }}>{error}</div>
          )}
        </>
      )}
    </Block>
  );
}
