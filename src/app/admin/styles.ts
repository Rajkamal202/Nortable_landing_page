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
