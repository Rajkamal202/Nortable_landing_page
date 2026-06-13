'use client';

import Link from 'next/link';
import {
  Section,
  SectionHead,
  FilterBar,
  FilterBtn,
  TableWrap,
  Table,
  Pill,
  Empty,
  Pager,
} from './styles';
import { buildHref } from './links';
import type { Registration } from './AdminBoard';

const fmtDate = (d: string | null) =>
  d
    ? new Date(d).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : '—';

const statusLabel: Record<string, string> = {
  solo: 'Solo',
  looking: 'Looking',
  have_team: 'Has team',
};

export default function RegistrationsView({
  registrations,
  total,
  page,
  pageSize,
  filters,
  tracks,
}: {
  registrations: Registration[];
  total: number;
  page: number;
  pageSize: number;
  filters: { q: string; track: string; status: string };
  tracks: string[];
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  const base = { tab: 'registrations', ...filters };
  const exportQuery = new URLSearchParams(
    Object.fromEntries(Object.entries(filters).filter(([, v]) => v))
  ).toString();

  return (
    <Section>
      <SectionHead>
        <h2>Registrations</h2>
        <span className="count">{total.toLocaleString('en-IN')} total</span>
      </SectionHead>

      <FilterBar action="/admin" method="get">
        <input type="hidden" name="tab" value="registrations" />
        <input
          type="search"
          name="q"
          placeholder="Search name, email, phone, college…"
          defaultValue={filters.q}
        />
        <select name="track" defaultValue={filters.track}>
          <option value="">All tracks</option>
          {tracks.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select name="status" defaultValue={filters.status}>
          <option value="">All statuses</option>
          <option value="solo">Solo</option>
          <option value="looking">Looking for team</option>
          <option value="have_team">Has team</option>
        </select>
        <FilterBtn type="submit">Apply</FilterBtn>
        <FilterBtn as="a" href="/admin?tab=registrations" $variant="ghost">
          Clear
        </FilterBtn>
        <FilterBtn
          as="a"
          href={`/api/admin/export?type=registrations${exportQuery ? '&' + exportQuery : ''}`}
          $variant="ghost"
        >
          Export CSV
        </FilterBtn>
      </FilterBar>

      <TableWrap>
        {registrations.length === 0 ? (
          <Empty>No registrations match your filters.</Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>College</th>
                <th>Track</th>
                <th>Status</th>
                <th>Size</th>
                <th>Paid</th>
                <th>Registered</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r) => (
                <tr key={r.id}>
                  <td>{r.full_name}</td>
                  <td>
                    <a href={`mailto:${r.email}`}>{r.email}</a>
                  </td>
                  <td className="muted">{r.phone}</td>
                  <td>{r.college}</td>
                  <td>{r.track_selection}</td>
                  <td>
                    <Pill $tone={r.team_status === 'solo' ? 'gray' : r.team_status === 'looking' ? 'amber' : 'green'}>
                      {statusLabel[r.team_status] || r.team_status}
                    </Pill>
                  </td>
                  <td className="muted">{r.team_size}</td>
                  <td className="muted">₹{r.total_price.toLocaleString('en-IN')}</td>
                  <td className="muted">{fmtDate(r.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </TableWrap>

      <Pager>
        <div className="info">
          {from}–{to} of {total.toLocaleString('en-IN')}
        </div>
        <div className="controls">
          {page > 1 ? (
            <Link href={buildHref({ ...base, page: page - 1 })}>Previous</Link>
          ) : (
            <span className="disabled">Previous</span>
          )}
          {page < totalPages ? (
            <Link href={buildHref({ ...base, page: page + 1 })}>Next</Link>
          ) : (
            <span className="disabled">Next</span>
          )}
        </div>
      </Pager>
    </Section>
  );
}
