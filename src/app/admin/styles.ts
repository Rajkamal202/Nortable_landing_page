'use client';

import styled from 'styled-components';

export const Page = styled.main`
  min-height: 100vh;
  background: #07090c;
  color: #fff;
  font-family: var(--font-grotesk), system-ui, sans-serif;
  padding: 2.5rem 1.5rem 4rem;
`;

export const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  h1 {
    font-family: var(--font-bebas), sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    letter-spacing: 0.02em;
    margin: 0;
  }
  .sub {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.45);
    margin-top: 0.15rem;
  }
`;

export const LogoutBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9px;
  padding: 0.55rem 0.9rem;
  cursor: pointer;
  transition: background 0.18s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2.25rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.25rem;

  .v {
    font-family: var(--font-bebas), sans-serif;
    font-size: 2.2rem;
    line-height: 1;
    color: #48d64c;
  }
  .k {
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.4rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 2.75rem;
`;

/* ---- Tabs ---- */
export const Tabs = styled.nav`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0;
`;

export const Tab = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.7rem 1rem;
  border-radius: 9px 9px 0 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255,255,255,0.5)')};
  background: ${({ $active }) => ($active ? 'rgba(72,214,76,0.08)' : 'transparent')};
  border-bottom: 2px solid
    ${({ $active }) => ($active ? '#48d64c' : 'transparent')};
  &:hover {
    color: #fff;
  }
`;

/* ---- Filter bar ---- */
export const FilterBar = styled.form`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.25rem;

  input,
  select {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 0.6rem 0.8rem;
    color: #fff;
    font-size: 0.85rem;
    outline: none;
    font-family: inherit;
    &:focus {
      border-color: rgba(72, 214, 76, 0.5);
    }
  }
  input[type='search'] {
    flex: 1;
    min-width: 200px;
  }
  select {
    cursor: pointer;
  }
  option {
    background: #0c0f13;
  }
`;

export const FilterBtn = styled.button<{ $variant?: 'solid' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  transition: filter 0.15s ease, background 0.15s ease;
  ${({ $variant }) =>
    $variant === 'ghost'
      ? `background:rgba(255,255,255,0.06); color:#fff; border:1px solid rgba(255,255,255,0.12); &:hover{background:rgba(255,255,255,0.12);}`
      : `background:#48d64c; color:#06210a; border:none; &:hover{filter:brightness(1.08);}`}
`;

/* ---- Pagination ---- */
export const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.1rem;
  flex-wrap: wrap;

  .info {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.45);
  }
  .controls {
    display: flex;
    gap: 0.5rem;
  }
  a,
  span {
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.5rem 0.85rem;
    border-radius: 9px;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  a {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
  span.disabled {
    color: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.05);
  }
`;

/* ---- Charts ---- */
export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 1.25rem;
  margin-bottom: 2.5rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.4rem;

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 1.25rem;
  }
  .chart {
    width: 100%;
    height: 260px;
  }
`;

/* ---- Announcements ---- */
export const AnnForm = styled.form`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.4rem;
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  input,
  textarea {
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 0.7rem 0.9rem;
    color: #fff;
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;
    &:focus {
      border-color: rgba(72, 214, 76, 0.5);
    }
  }
  textarea {
    min-height: 90px;
    resize: vertical;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  label.check {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: none;
    letter-spacing: 0;
    cursor: pointer;
    white-space: nowrap;

    input[type='checkbox'] {
      width: 16px;
      height: 16px;
      flex: 0 0 auto;
      accent-color: #48d64c;
      cursor: pointer;
    }
  }
`;

export const AnnItem = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.1rem 1.25rem;
  margin-bottom: 0.85rem;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
  .title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #fff;
  }
  .body {
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.4rem;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  .meta {
    font-size: 0.74rem;
    color: rgba(255, 255, 255, 0.35);
    margin-top: 0.55rem;
  }
  .del {
    background: none;
    border: none;
    color: rgba(255, 107, 107, 0.7);
    cursor: pointer;
    font-size: 0.78rem;
    padding: 0.2rem;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0;
  }
  .count {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
  min-width: 640px;

  thead th {
    text-align: left;
    font-size: 0.68rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 600;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    white-space: nowrap;
  }
  tbody td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.85);
    vertical-align: top;
  }
  tbody tr:last-child td {
    border-bottom: none;
  }
  tbody tr:hover {
    background: rgba(255, 255, 255, 0.025);
  }
  a {
    color: #5ab0ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .muted {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const Pill = styled.span<{ $tone?: 'green' | 'amber' | 'gray' }>`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
  ${({ $tone }) =>
    $tone === 'green'
      ? 'background:rgba(72,214,76,0.12); color:#7ef081; border:1px solid rgba(72,214,76,0.25);'
      : $tone === 'amber'
      ? 'background:rgba(255,179,71,0.12); color:#ffcf7a; border:1px solid rgba(255,179,71,0.25);'
      : 'background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.6); border:1px solid rgba(255,255,255,0.12);'}
`;

export const Empty = styled.div`
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.88rem;
`;

/* ---- Login ---- */
export const LoginShell = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: #07090c;
  color: #fff;
  font-family: var(--font-grotesk), system-ui, sans-serif;
  `;

export const LoginCard = styled.form`
  width: 100%;
  max-width: 380px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 2.25rem;

  h1 {
    font-family: var(--font-bebas), sans-serif;
    font-size: 2rem;
    margin: 0 0 0.35rem;
  }
  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 1.5rem;
  }
  label {
    display: block;
    font-size: 0.74rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    color: #fff;
    font-size: 0.95rem;
    outline: none;
    &:focus {
      border-color: rgba(72, 214, 76, 0.5);
    }
  }
  .err {
    color: #ff6b6b;
    font-size: 0.8rem;
    margin-top: 0.9rem;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 1.4rem;
  background: #48d64c;
  color: #06210a;
  font-weight: 700;
  font-size: 0.92rem;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  cursor: pointer;
  transition: filter 0.18s ease;
  &:hover {
    filter: brightness(1.08);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
