'use client';

import { useEffect, useState } from 'react';
import { Megaphone, Pin } from 'lucide-react';
import { supabase } from '@/libs/supabaseClient';
import { Block, SectionTitle, Card } from '../styles';

interface Announcement {
  id: string;
  title: string;
  body: string;
  pinned: boolean;
  created_at: string;
}

const fmtDate = (d: string) =>
  new Date(d).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

export default function AnnouncementsFeed() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from('announcements')
          .select('id, title, body, pinned, created_at')
          .order('pinned', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(20);
        if (!cancelled) setItems((data as Announcement[]) ?? []);
      } catch (err) {
        console.error('[v0] announcements load failed', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Block>
      <SectionTitle>
        <Megaphone size={18} /> Announcements
        {items.length > 0 && <span className="tag">{items.length}</span>}
      </SectionTitle>

      {loading ? (
        <Card>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Loading…</div>
        </Card>
      ) : items.length === 0 ? (
        <Card>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            No announcements yet. Updates from the organizers will appear here.
          </div>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {items.map((a) => (
            <Card key={a.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {a.pinned && <Pin size={14} style={{ color: '#48d64c' }} />}
                {a.title}
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '0.45rem',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {a.body}
              </div>
              <div
                style={{
                  fontSize: '0.74rem',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: '0.6rem',
                }}
              >
                {fmtDate(a.created_at)}
              </div>
            </Card>
          ))}
        </div>
      )}
    </Block>
  );
}
