'use client';

import Link from 'next/link';
import {
  Section,
  SectionHead,
  TableWrap,
  Table,
  Empty,
  Pager,
  FilterBtn,
} from './styles';
import { buildHref } from './links';
import type { SubmissionRow } from './AdminBoard';

const fmtDate = (d: string | null) =>
  d
    ? new Date(d).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : '—';

export default function SubmissionsView({
  submissions,
  total,
  page,
  pageSize,
}: {
  submissions: SubmissionRow[];
  total: number;
  page: number;
  pageSize: number;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <Section>
      <SectionHead>
        <h2>Submissions</h2>
        <span className="count">{total.toLocaleString('en-IN')} total</span>
      </SectionHead>

      <div style={{ marginBottom: '1.25rem' }}>
        <FilterBtn as="a" href="/api/admin/export?type=submissions" $variant="ghost">
          Export CSV
        </FilterBtn>
      </div>

      <TableWrap>
        {submissions.length === 0 ? (
          <Empty>No submissions yet.</Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Submitted by</th>
                <th>Repo</th>
                <th>Live</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s.id}>
                  <td>{s.project_name}</td>
                  <td>{s.team_name}</td>
                  <td>
                    {s.repo_url ? (
                      <a href={s.repo_url} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </td>
                  <td>
                    {s.live_url ? (
                      <a href={s.live_url} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </td>
                  <td className="muted">{fmtDate(s.updated_at)}</td>
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
            <Link href={buildHref({ tab: 'submissions', page: page - 1 })}>Previous</Link>
          ) : (
            <span className="disabled">Previous</span>
          )}
          {page < totalPages ? (
            <Link href={buildHref({ tab: 'submissions', page: page + 1 })}>Next</Link>
          ) : (
            <span className="disabled">Next</span>
          )}
        </div>
      </Pager>
    </Section>
  );
}
