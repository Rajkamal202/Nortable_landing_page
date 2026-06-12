'use client';

import { useState } from 'react';
import { Video, Send, Clock } from 'lucide-react';
import {
  Block,
  SectionTitle,
  TwoCol,
  Card,
  Field,
  QueueCard,
  Btn,
} from '../styles';

const CATEGORIES = [
  'Supabase Auth Error',
  'MCP Server Deployment',
  'CSS / Styling',
  'AI / LLM Integration',
  'Database Schema',
  'Deployment / DevOps',
  'Other',
];

export default function MentorPortal() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [desc, setDesc] = useState('');
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc.trim()) return;
    setSubmitted(true);
  };

  return (
    <Block>
      <SectionTitle>
        Mentor Ticket Portal <span className="tag">Help Desk</span>
      </SectionTitle>
      <TwoCol>
        <Card>
          <div
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            Request Help
          </div>
          <form onSubmit={handleSubmit}>
            <Field>
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field>
              <label>Describe your issue</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="What are you stuck on? Be specific so a mentor can jump in fast."
              />
            </Field>
            <Field>
              <label>Code snippet (optional)</label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste the relevant code here..."
                style={{ fontFamily: "'SF Mono', monospace", minHeight: 70 }}
              />
            </Field>
            <Btn type="submit" disabled={submitted}>
              <Send size={15} /> {submitted ? 'Ticket Submitted' : 'Submit Ticket'}
            </Btn>
          </form>
        </Card>

        <div>
          <QueueCard>
            <div className="est">
              <span className="l">
                <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                Estimated wait
              </span>
              <span className="v">{submitted ? '~4 min' : '—'}</span>
            </div>
            <div className="mentor">
              <div className="av">RC</div>
              <div>
                <div className="n">{submitted ? 'Richard Cole' : 'Awaiting assignment'}</div>
                <div className="e">{submitted ? 'Mentor · OpenAI' : 'Submit a ticket to get matched'}</div>
              </div>
            </div>
            {submitted && (
              <Btn $variant="ghost" style={{ marginTop: '1rem' }}>
                <Video size={15} /> Join Google Meet
              </Btn>
            )}
          </QueueCard>

          <Card>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem' }}>
              Mentors On Duty
            </div>
            {[
              { n: 'Richard Cole', e: 'LLMs, Agents · OpenAI' },
              { n: 'Priya Nair', e: 'Supabase, Postgres · Vercel' },
              { n: 'Marcus Liu', e: 'Frontend, CSS · Figma' },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  padding: '0.55rem 0',
                  borderTop: i ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#2b892e,#48d64c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    color: '#070606',
                  }}
                >
                  {m.n.split(' ').map((p) => p[0]).join('')}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{m.n}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)' }}>{m.e}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </TwoCol>
    </Block>
  );
}
