'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Megaphone, Trash2, Pin } from 'lucide-react';
import {
  Section,
  SectionHead,
  AnnForm,
  AnnItem,
  FilterBtn,
  Empty,
} from './styles';
import type { Announcement } from './AdminBoard';

const fmtDate = (d: string) =>
  new Date(d).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

export default function AnnouncementsView({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [pinned, setPinned] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const post = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!title.trim() || !body.trim()) {
      setError('Title and message are required.');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), body: body.trim(), pinned }),
      });
      if (!res.ok) throw new Error('Failed to post');
      setTitle('');
      setBody('');
      setPinned(false);
      router.refresh();
    } catch {
      setError('Could not post announcement. Try again.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: string) => {
    setBusy(true);
    try {
      await fetch(`/api/admin/announcements?id=${id}`, { method: 'DELETE' });
      router.refresh();
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section>
      <SectionHead>
        <h2>Announcements</h2>
        <span className="count">{announcements.length} posted</span>
      </SectionHead>

      <AnnForm onSubmit={post}>
        <input
          type="text"
          placeholder="Announcement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
        />
        <textarea
          placeholder="Write your message to all participants…"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={2000}
        />
        <div className="row">
          <label className="check">
            <input
              type="checkbox"
              checked={pinned}
              onChange={(e) => setPinned(e.target.checked)}
            />
            <Pin size={13} /> Pin to top
          </label>
          <FilterBtn type="submit" disabled={busy}>
            <Megaphone size={14} /> {busy ? 'Posting…' : 'Post announcement'}
          </FilterBtn>
        </div>
        {error && <div style={{ color: '#ff6b6b', fontSize: '0.82rem' }}>{error}</div>}
      </AnnForm>

      {announcements.length === 0 ? (
        <Empty>No announcements yet. Post one above — all participants will see it.</Empty>
      ) : (
        announcements.map((a) => (
          <AnnItem key={a.id}>
            <div className="head">
              <div className="title">
                {a.pinned && (
                  <Pin size={13} style={{ color: '#48d64c', marginRight: 6, verticalAlign: '-1px' }} />
                )}
                {a.title}
              </div>
              <button className="del" onClick={() => remove(a.id)} disabled={busy} aria-label="Delete">
                <Trash2 size={15} />
              </button>
            </div>
            <div className="body">{a.body}</div>
            <div className="meta">{fmtDate(a.created_at)}</div>
          </AnnItem>
        ))
      )}
    </Section>
  );
}
