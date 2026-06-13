'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  GitBranch,
  Globe,
  CheckCircle2,
  ExternalLink,
  Users,
  Lock,
  Clock,
} from 'lucide-react';
import { supabase } from '@/libs/supabaseClient';
import {
  Block,
  SectionTitle,
  Card,
  Field,
  Btn,
  SubmitBanner,
} from '../styles';
import { DEADLINE } from '@/libs/eventConfig';

interface Submission {
  id: string;
  team_id: string;
  project_name: string;
  description: string | null;
  github_url: string;
  live_url: string;
  track: string | null;
  updated_at: string;
}

interface Props {
  userId: string;
  serial: string;
  track: string;
}

const isUrl = (v: string) => /^https?:\/\/.+\..+/.test(v.trim());

export default function SubmissionSuite({ userId, serial, track }: Props) {
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [teamId, setTeamId] = useState<string | null>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [justSaved, setJustSaved] = useState(false);
  const [error, setError] = useState('');

  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [live, setLive] = useState('');

  const pastDeadline = Date.now() > DEADLINE.getTime();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data: membership } = await supabase
        .from('team_members')
        .select('team_id')
        .eq('user_id', userId)
        .limit(1)
        .maybeSingle();

      if (!membership) {
        setTeamId(null);
        setSubmission(null);
        return;
      }
      setTeamId(membership.team_id);

      const { data: sub } = await supabase
        .from('submissions')
        .select('*')
        .eq('team_id', membership.team_id)
        .maybeSingle();

      if (sub) {
        const s = sub as Submission;
        setSubmission(s);
        setProjectName(s.project_name);
        setDescription(s.description || '');
        setGithub(s.github_url);
        setLive(s.live_url);
      }
    } catch (err) {
      console.error('[v0] submission load failed', err);
      setError('Could not load submission.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    load();
  }, [load]);

  const save = async () => {
    setError('');
    if (!teamId) return;
    if (!projectName.trim()) return setError('Project name is required.');
    if (!isUrl(github)) return setError('Enter a valid GitHub URL (https://…).');
    if (!isUrl(live)) return setError('Enter a valid live demo URL (https://…).');

    setBusy(true);
    try {
      const payload = {
        team_id: teamId,
        project_name: projectName.trim(),
        description: description.trim() || null,
        github_url: github.trim(),
        live_url: live.trim(),
        track,
        submitted_by: userId,
        updated_at: new Date().toISOString(),
      };
      const { data, error: upErr } = await supabase
        .from('submissions')
        .upsert(payload, { onConflict: 'team_id' })
        .select()
        .single();
      if (upErr) throw upErr;

      setSubmission(data as Submission);
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 2500);
    } catch (err) {
      console.error('[v0] submission save failed', err);
      setError('Could not save submission. Please retry.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Block>
      <SectionTitle>
        Submission <span className="tag">#{serial}</span>
      </SectionTitle>

      {loading ? (
        <Card>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Loading…</div>
        </Card>
      ) : !teamId ? (
        <SubmitBanner $variant="info">
          <Users size={18} />
          <div>
            <div className="t">Join or create a team first</div>
            <div className="s">Project submissions are made by a team. Head to the Team section to set one up.</div>
          </div>
        </SubmitBanner>
      ) : (
        <>
          {submission && (
            <SubmitBanner $variant="ok">
              <CheckCircle2 size={18} />
              <div>
                <div className="t">Project submitted</div>
                <div className="s">
                  Last updated {new Date(submission.updated_at).toLocaleString()}.{' '}
                  {!pastDeadline && 'You can keep editing until the deadline.'}
                </div>
              </div>
            </SubmitBanner>
          )}

          {pastDeadline && (
            <SubmitBanner $variant="warn">
              <Lock size={18} />
              <div>
                <div className="t">Submissions are closed</div>
                <div className="s">The deadline has passed. Your last saved submission is final.</div>
              </div>
            </SubmitBanner>
          )}

          {!pastDeadline && (
            <SubmitBanner $variant="info">
              <Clock size={18} />
              <div>
                <div className="t">Deadline: {DEADLINE.toLocaleString()}</div>
                <div className="s">Submit your GitHub repo and live demo before time runs out.</div>
              </div>
            </SubmitBanner>
          )}

          <Card style={{ marginTop: '1.25rem' }}>
            <Field>
              <label>Project name</label>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Your project name"
                disabled={pastDeadline}
                maxLength={80}
              />
            </Field>
            <Field>
              <label>Short description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What does it do? What problem does it solve?"
                disabled={pastDeadline}
                maxLength={600}
              />
            </Field>
            <Field>
              <label>GitHub repository URL</label>
              <input
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/team/project"
                disabled={pastDeadline}
              />
            </Field>
            <Field>
              <label>Live demo URL</label>
              <input
                value={live}
                onChange={(e) => setLive(e.target.value)}
                placeholder="https://your-project.vercel.app"
                disabled={pastDeadline}
              />
            </Field>

            {(submission?.github_url || submission?.live_url) && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '0.25rem 0 1rem' }}>
                {submission.github_url && (
                  <a
                    href={submission.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <GitBranch size={14} /> Repository <ExternalLink size={12} />
                  </a>
                )}
                {submission.live_url && (
                  <a
                    href={submission.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <Globe size={14} /> Live demo <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}

            {error && (
              <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</div>
            )}

            {!pastDeadline && (
              <div style={{ maxWidth: 280 }}>
                <Btn onClick={save} disabled={busy} $variant={justSaved ? 'ghost' : 'solid'}>
                  {justSaved ? (
                    <>
                      <CheckCircle2 size={15} /> Saved
                    </>
                  ) : submission ? (
                    <>
                      <CheckCircle2 size={15} /> Update Submission
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={15} /> Submit Project
                    </>
                  )}
                </Btn>
              </div>
            )}
          </Card>
        </>
      )}
    </Block>
  );
}

const linkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#48d64c',
  textDecoration: 'none',
};
