'use client';

import { useState } from 'react';
import { GitBranch, Video, CheckCircle2, GitCommit } from 'lucide-react';
import {
  Block,
  SectionTitle,
  SubmitGrid,
  Card,
  Field,
  MdEditor,
  CommitRow,
  Btn,
} from '../styles';

const MOCK_COMMITS = [
  { hash: 'a3f9c2e', msg: 'feat: add submission suite UI', time: '2m ago' },
  { hash: '7b1d4a0', msg: 'fix: resolve auth redirect loop', time: '1h ago' },
  { hash: 'e9c5f31', msg: 'chore: scaffold dashboard route', time: '3h ago' },
  { hash: '2d8a6bf', msg: 'init: project bootstrap', time: '6h ago' },
];

// Tiny markdown -> HTML for preview
function renderMd(md: string): string {
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/^\s*-\s(.*$)/gim, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>)/gi, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/^(?!<[hlu])(.+)$/gim, '$1');
}

interface Props {
  serial: string;
}

export default function SubmissionSuite({ serial }: Props) {
  const [repo, setRepo] = useState('');
  const [synced, setSynced] = useState(false);
  const [video, setVideo] = useState('');
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [md, setMd] = useState(
    '# Project Title\n\nDescribe your project here.\n\n## Inspiration\nWhat sparked the idea?\n\n## Challenges\n- First challenge\n- Second challenge\n\n## Built With\n`Next.js` `Supabase` `OpenAI`'
  );

  return (
    <Block>
      <SectionTitle>
        Project Submission Suite <span className="tag">#{serial}</span>
      </SectionTitle>

      <SubmitGrid>
        <Card>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            GitHub Repository
          </div>
          <Field>
            <label>Repository URL</label>
            <input
              value={repo}
              onChange={(e) => {
                setRepo(e.target.value);
                setSynced(false);
              }}
              placeholder="https://github.com/team/project"
            />
          </Field>
          <Btn
            onClick={() => repo.trim() && setSynced(true)}
            disabled={!repo.trim()}
            $variant={synced ? 'ghost' : 'solid'}
          >
            {synced ? (
              <>
                <CheckCircle2 size={15} /> Repository Synced
              </>
            ) : (
              <>
                <GitBranch size={15} /> Validate &amp; Sync
              </>
            )}
          </Btn>

          {synced && (
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
                Latest Commits
              </div>
              {MOCK_COMMITS.map((c) => (
                <CommitRow key={c.hash}>
                  <GitCommit size={13} style={{ color: '#48d64c', flexShrink: 0 }} />
                  <span className="hash">{c.hash}</span>
                  <span className="msg">{c.msg}</span>
                  <span className="time">{c.time}</span>
                </CommitRow>
              ))}
            </div>
          )}
        </Card>

        <Card>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Demo Showcase Video
          </div>
          <Field>
            <label>Loom / YouTube / Vimeo URL</label>
            <input
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
            />
          </Field>
          <div
            style={{
              marginTop: '0.5rem',
              aspectRatio: '16 / 9',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <Video size={28} />
            <span style={{ fontSize: '0.8rem' }}>
              {video ? 'Video linked · ready to submit' : 'No video linked yet'}
            </span>
          </div>
        </Card>
      </SubmitGrid>

      <Card style={{ marginTop: '1.25rem' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
          README Editor
        </div>
        <MdEditor>
          <div className="tabs">
            <div className={`tab ${tab === 'write' ? 'active' : ''}`} onClick={() => setTab('write')}>
              Write
            </div>
            <div className={`tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>
              Preview
            </div>
          </div>
          {tab === 'write' ? (
            <textarea value={md} onChange={(e) => setMd(e.target.value)} />
          ) : (
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: '<p>' + renderMd(md) + '</p>' }}
            />
          )}
        </MdEditor>
        <div style={{ marginTop: '1.25rem', maxWidth: 240 }}>
          <Btn>
            <CheckCircle2 size={15} /> Submit Project
          </Btn>
        </div>
      </Card>
    </Block>
  );
}
