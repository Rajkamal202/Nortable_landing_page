'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════
   PAGE SHELL
   ═══════════════════════════════════════════ */

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 6.25rem;
  width: 100%;
  background:
    radial-gradient(900px 600px at 85% -5%, rgba(72, 214, 76, 0.07), transparent 60%),
    radial-gradient(800px 600px at 5% 10%, rgba(43, 137, 46, 0.06), transparent 55%),
    var(--Background);
`;

export const Container = styled.div`
  width: 92%;
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

/* ── Dashboard shell: sticky sidebar + content ── */
export const Shell = styled.div`
  width: 94%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 2rem;
  padding: 1.5rem 0 6rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 6.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
  }
`;

export const SideProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);

  .av {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.05rem;
    color: #070606;
    background: linear-gradient(135deg, #2b892e, #48d64c);
  }
  .meta {
    min-width: 0;
  }
  .meta .n {
    font-size: 0.92rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .meta .r {
    font-size: 0.72rem;
    color: var(--emerald, #48d64c);
    font-weight: 600;
  }
`;

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
  }
`;

export const SideLink = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  text-align: left;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 0.65rem 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.18s ease;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255,255,255,0.55)')};
  background: ${({ $active }) => ($active ? 'rgba(72,214,76,0.1)' : 'transparent')};
  box-shadow: ${({ $active }) =>
    $active ? 'inset 2px 0 0 var(--emerald, #48d64c)' : 'none'};

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: ${({ $active }) => ($active ? 'var(--emerald, #48d64c)' : 'rgba(255,255,255,0.4)')};
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const SideStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.1rem;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(72, 214, 76, 0.07), rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(72, 214, 76, 0.16);

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .row .l {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .row .v {
    font-size: 0.95rem;
    font-weight: 800;
    color: #fff;
  }
  .row .v.green {
    color: var(--emerald, #48d64c);
  }
`;

export const MainCol = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const SectionAnchor = styled.div`
  scroll-margin-top: 7rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;

  span.tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--emerald, #48d64c);
    background: rgba(72, 214, 76, 0.1);
    border: 1px solid rgba(72, 214, 76, 0.25);
    padding: 0.2rem 0.55rem;
    border-radius: 9999px;
    text-transform: none;
  }
`;

export const Block = styled.section`
  margin-top: 3rem;
  scroll-margin-top: 7rem;

  &:first-of-type {
    margin-top: 0;
  }

  .spin {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/* ═══════════════════════════════════════════
   GENERIC CARD / PANEL
   ═══════════════════════════════════════════ */

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(72, 214, 76, 0.25);
  }
`;

export const Grid = styled.div<{ $cols?: number; $min?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $min }) => $min || '260px'}, 1fr));
  gap: 1.25rem;
`;

/* ═══════════════════════════════════════════
   1. COCKPIT
   ═══════════════════════════════════════════ */

export const Cockpit = styled.div`
  position: relative;
  background: linear-gradient(135deg, #0b0f0b 0%, #0a0a0a 45%, #0d1a0e 100%);
  border: 1px solid rgba(72, 214, 76, 0.18);
  border-radius: 24px;
  padding: 2.5rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 120%, rgba(72, 214, 76, 0.14), transparent 55%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

export const CockpitTop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const Greeting = styled.div`
  .eyebrow {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--emerald, #48d64c);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #fff;

    span {
      color: var(--emerald, #48d64c);
    }
  }

  .sub {
    margin-top: 0.65rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.55);
  }

  @media (max-width: 640px) {
    h1 { font-size: 1.8rem; }
  }
`;

export const StatusBadge = styled.div<{ $variant: 'live' | 'warn' | 'info' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.5rem 0.9rem;
  border-radius: 9999px;
  border: 1px solid;
  ${({ $variant }) =>
    $variant === 'live'
      ? `color:#48d64c; background:rgba(72,214,76,0.1); border-color:rgba(72,214,76,0.3);`
      : $variant === 'warn'
      ? `color:#ffb347; background:rgba(255,179,71,0.1); border-color:rgba(255,179,71,0.3);`
      : `color:#5ab0ff; background:rgba(90,176,255,0.1); border-color:rgba(90,176,255,0.3);`}

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 8px currentColor;
    animation: pulse 1.6s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }
`;

export const Countdown = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 2rem;

  .label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0.85rem;
  }

  .digits {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

export const TimeUnit = styled.div`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(72, 214, 76, 0.2);
  border-radius: 14px;
  padding: 1rem 1.25rem;
  min-width: 86px;
  text-align: center;

  .num {
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1;
    color: #fff;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 18px rgba(72, 214, 76, 0.5);
  }

  .unit {
    margin-top: 0.5rem;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }

  @media (max-width: 640px) {
    min-width: 68px;
    padding: 0.75rem 0.85rem;
    .num { font-size: 1.8rem; }
  }
`;

export const Ticker = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.7rem 1rem;
  overflow: hidden;

  .pill {
    flex-shrink: 0;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #070606;
    background: var(--emerald, #48d64c);
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
  }

  .track {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
  }

  .scroll {
    display: inline-block;
    white-space: nowrap;
    animation: ticker 28s linear infinite;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.85rem;

    span { margin-right: 3rem; }
    span b { color: var(--emerald, #48d64c); font-weight: 700; }
  }

  &:hover .scroll { animation-play-state: paused; }

  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

/* ═══════════════════════════════════════════
   STAT STRIP
   ═══════════════════════════════════════════ */

export const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

/* Event schedule timeline (Overview) */
export const Timeline = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;

  .head {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 1.1rem;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &:first-of-type {
    border-top: none;
  }

  .ic {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--emerald, #48d64c);
    background: rgba(72, 214, 76, 0.1);
    border: 1px solid rgba(72, 214, 76, 0.2);
  }
  .body {
    flex: 1;
    min-width: 0;
  }
  .body .title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
  }
  .body .note {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.45);
  }
  .date {
    flex-shrink: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--emerald, #48d64c);
    text-align: right;
  }

  @media (max-width: 560px) {
    .date {
      font-size: 0.68rem;
    }
  }
`;

export const Stat = styled(Card)`
  padding: 1.25rem;
  .v {
    font-size: 1.9rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }
  .k {
    margin-top: 0.5rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }
  .v span { color: var(--emerald, #48d64c); }
`;

/* ═══════════════════════════════════════════
   2. XP & LEADERBOARD
   ═══════════════════════════════════════════ */

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const XpBar = styled.div`
  margin-top: 1.25rem;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    margin-bottom: 0.55rem;
    color: rgba(255, 255, 255, 0.7);
    b { color: var(--emerald, #48d64c); }
  }
  .rail {
    height: 12px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }
  .fill {
    height: 100%;
    border-radius: 9999px;
    background: linear-gradient(90deg, #2b892e, #48d64c);
    box-shadow: 0 0 14px rgba(72, 214, 76, 0.5);
  }
`;

export const LbRow = styled.div<{ $me?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.7rem 0.85rem;
  border-radius: 12px;
  background: ${({ $me }) => ($me ? 'rgba(72,214,76,0.08)' : 'transparent')};
  border: 1px solid ${({ $me }) => ($me ? 'rgba(72,214,76,0.25)' : 'transparent')};

  & + & { margin-top: 0.25rem; }

  .rank {
    width: 26px;
    font-weight: 800;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
  }
  .rank.top { color: var(--emerald, #48d64c); }

  .av {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.8rem;
    color: #070606;
    flex-shrink: 0;
  }

  .nm {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    .role { display: block; font-size: 0.7rem; font-weight: 500; color: rgba(255,255,255,0.4); }
  }

  .xp {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--emerald, #48d64c);
  }
`;

export const BadgeChest = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const BadgeChip = styled.div<{ $earned: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  width: 84px;
  padding: 0.85rem 0.5rem;
  border-radius: 14px;
  text-align: center;
  border: 1px solid ${({ $earned }) => ($earned ? 'rgba(72,214,76,0.3)' : 'rgba(255,255,255,0.06)')};
  background: ${({ $earned }) => ($earned ? 'rgba(72,214,76,0.07)' : 'rgba(255,255,255,0.02)')};
  opacity: ${({ $earned }) => ($earned ? 1 : 0.45)};

  .ic {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $earned }) => ($earned ? '#48d64c' : 'rgba(255,255,255,0.4)')};
  }
  .nm { font-size: 0.62rem; font-weight: 700; color: rgba(255,255,255,0.7); line-height: 1.2; }
`;

/* ═══════════════════════════════════════════
   3. TEAM & MATCHMAKING
   ═══════════════════════════════════════════ */

export const TeamCard = styled(Card)`
  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  .logo {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, #2b892e, #48d64c);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.4rem;
    color: #070606;
  }
  .meta h3 { font-size: 1.2rem; font-weight: 800; color: #fff; }
  .meta .track {
    font-size: 0.75rem;
    color: var(--emerald, #48d64c);
    font-weight: 600;
  }
`;

export const JoinCodeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(72, 214, 76, 0.07);
  border: 1px dashed rgba(72, 214, 76, 0.3);
  margin-bottom: 1rem;

  .label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
  .code {
    flex: 1;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.24em;
    color: var(--emerald, #48d64c);
    font-variant-numeric: tabular-nums;
  }
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    padding: 0.45rem 0.7rem;
    cursor: pointer;
    transition: background 0.18s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    .code {
      flex-basis: 100%;
    }
  }
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  .av {
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 800; color: #070606; flex-shrink: 0;
  }
  .info { flex: 1; }
  .info .n { font-size: 0.85rem; font-weight: 600; color: #fff; }
  .info .r { font-size: 0.7rem; color: rgba(255,255,255,0.45); }
  .stat {
    display: flex; align-items: center; gap: 0.4rem;
    font-size: 0.7rem; font-weight: 600;
  }
  .stat .d { width: 7px; height: 7px; border-radius: 50%; }
  .stat.on { color: #48d64c; } .stat.on .d { background: #48d64c; box-shadow: 0 0 6px #48d64c; }
  .stat.off { color: rgba(255,255,255,0.4); } .stat.off .d { background: rgba(255,255,255,0.3); }
`;

export const LfgCard = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.1rem;

  .top { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.7rem; }
  .av { width: 38px; height: 38px; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-weight:800; color:#070606; font-size:0.8rem; }
  .nm { font-size: 0.9rem; font-weight: 700; color: #fff; }
  .loc { font-size: 0.7rem; color: rgba(255,255,255,0.4); }
  .idea { font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.45; margin-bottom: 0.8rem; }
  .stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.9rem; }
`;

export const TechTag = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
`;

export const SubmitBanner = styled.div<{ $variant: 'ok' | 'warn' | 'info' }>`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.15rem;
  border-radius: 14px;
  border: 1px solid;
  & + & {
    margin-top: 0.75rem;
  }

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }

  .t {
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
  }
  .s {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
    margin-top: 0.15rem;
    line-height: 1.45;
  }

  ${({ $variant }) =>
    $variant === 'ok'
      ? `background:rgba(72,214,76,0.08); border-color:rgba(72,214,76,0.28); svg{color:#48d64c;}`
      : $variant === 'warn'
      ? `background:rgba(255,179,71,0.08); border-color:rgba(255,179,71,0.28); svg{color:#ffb347;}`
      : `background:rgba(90,176,255,0.07); border-color:rgba(90,176,255,0.25); svg{color:#5ab0ff;}`}
`;

/* ═══════════════════════════════════════════
   BUTTONS
   ═══════════════════════════════════════════ */

export const Btn = styled.button<{ $variant?: 'solid' | 'ghost' | 'danger' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  padding: 0.6rem 1.1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  width: 100%;

  ${({ $variant }) =>
    $variant === 'ghost'
      ? `background:rgba(255,255,255,0.04); color:#fff; border-color:rgba(255,255,255,0.12);
         &:hover{ background:rgba(255,255,255,0.08); }`
      : $variant === 'danger'
      ? `background:rgba(255,77,77,0.1); color:#ff6b6b; border-color:rgba(255,77,77,0.25);
         &:hover{ background:rgba(255,77,77,0.18); }`
      : `background:var(--emerald,#48d64c); color:#070606;
         &:hover{ filter:brightness(1.08); transform:translateY(-1px); }`}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

/* ═══════════════════════════════════════════
   4. MILESTONES
   ═══════════════════════════════════════════ */

export const MilestoneRow = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;

  & + & { margin-top: 0.75rem; }

  ${({ $status }) =>
    $status === 'done'
      ? `border-color:rgba(72,214,76,0.25);`
      : $status === 'progress'
      ? `border-color:rgba(255,179,71,0.25);`
      : `opacity:0.6;`}

  .check {
    width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    border: 1.5px solid rgba(255,255,255,0.2);
    color: #070606;
  }
  .check.done { background: var(--emerald,#48d64c); border-color: var(--emerald,#48d64c); }
  .check.progress { border-color: #ffb347; color: #ffb347; }
  .check.locked { cursor: not-allowed; }

  .body { flex: 1; }
  .phase {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: rgba(255,255,255,0.4); margin-bottom: 0.2rem;
  }
  .title { font-size: 0.92rem; font-weight: 600; color: #fff; }

  .xp {
    flex-shrink: 0; font-size: 0.78rem; font-weight: 800; color: var(--emerald,#48d64c);
    background: rgba(72,214,76,0.1); padding: 0.3rem 0.6rem; border-radius: 8px;
  }
`;

/* ═══════════════════════════════════════════
   5. MENTOR PORTAL
   ═══════════════════════════════════════════ */

export const Field = styled.div`
  margin-bottom: 1rem;
  label {
    display: block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em;
    color: rgba(255,255,255,0.6); margin-bottom: 0.5rem;
  }
  input, select, textarea {
    width: 100%;
    background: rgba(0,0,0,0.35);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 0.7rem 0.85rem;
    color: #fff;
    font-size: 0.88rem;
    font-family: inherit;
    transition: border-color 0.2s ease;
    &:focus { outline: none; border-color: rgba(72,214,76,0.5); }
    &::placeholder { color: rgba(255,255,255,0.3); }
  }
  textarea { resize: vertical; min-height: 90px; }
`;

export const QueueCard = styled.div`
  background: linear-gradient(135deg, rgba(72,214,76,0.06), rgba(0,0,0,0.2));
  border: 1px solid rgba(72,214,76,0.18);
  border-radius: 14px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;

  .est { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; }
  .est .l { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
  .est .v { font-size: 1.3rem; font-weight: 800; color: var(--emerald,#48d64c); }
  .mentor { display: flex; align-items: center; gap: 0.75rem; }
  .mentor .av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#2b892e,#48d64c); display:flex; align-items:center; justify-content:center; font-weight:800; color:#070606; }
  .mentor .n { font-size: 0.9rem; font-weight: 700; color: #fff; }
  .mentor .e { font-size: 0.72rem; color: rgba(255,255,255,0.45); }
`;

/* ═══════════════════════════════════════════
   6. BOUNTIES / RESOURCES
   ═══════════════════════════════════════════ */

export const VoucherCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  .vh { display: flex; align-items: center; gap: 0.7rem; }
  .vh .ic { width: 40px; height: 40px; border-radius: 10px; background: rgba(72,214,76,0.1); display:flex; align-items:center; justify-content:center; color: var(--emerald,#48d64c); }
  .vh .t { font-size: 0.95rem; font-weight: 700; color: #fff; }
  .vh .s { font-size: 0.72rem; color: rgba(255,255,255,0.45); }

  .code {
    display: flex; align-items: center; justify-content: space-between;
    font-family: 'SF Mono', monospace; font-size: 0.85rem; font-weight: 700;
    letter-spacing: 0.05em; color: var(--emerald,#48d64c);
    background: rgba(0,0,0,0.4); border: 1px dashed rgba(72,214,76,0.3);
    border-radius: 10px; padding: 0.65rem 0.85rem;
  }
  .code button {
    background: none; border: none; color: rgba(255,255,255,0.5); cursor: pointer;
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    &:hover { color: #fff; }
  }
`;

export const BountyCard = styled(Card)`
  .amt { font-size: 1.5rem; font-weight: 800; color: var(--emerald,#48d64c); }
  .by { font-size: 0.72rem; color: rgba(255,255,255,0.45); margin-bottom: 0.5rem; }
  .desc { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.45; }
`;

/* ═══════════════════════════════════════════
   7. SUBMISSION SUITE
   ═══════════════════════════════════════════ */

export const SubmitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  @media (max-width: 820px) { grid-template-columns: 1fr; }
`;

export const MdEditor = styled.div`
  .tabs { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }
  .tab {
    font-size: 0.75rem; font-weight: 700; padding: 0.4rem 0.85rem; border-radius: 8px;
    cursor: pointer; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);
    color: rgba(255,255,255,0.6);
  }
  .tab.active { background: rgba(72,214,76,0.1); border-color: rgba(72,214,76,0.3); color: var(--emerald,#48d64c); }
  textarea {
    width: 100%; min-height: 220px; resize: vertical;
    background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; padding: 0.85rem; color: #fff; font-family: 'SF Mono', monospace;
    font-size: 0.85rem; line-height: 1.6;
    &:focus { outline: none; border-color: rgba(72,214,76,0.5); }
  }
  .preview {
    min-height: 220px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px; padding: 1rem; color: rgba(255,255,255,0.8); font-size: 0.88rem; line-height: 1.6;
    h1,h2,h3 { color: #fff; margin: 0.6rem 0 0.4rem; }
    h1 { font-size: 1.3rem; } h2 { font-size: 1.1rem; } h3 { font-size: 0.95rem; }
    p { margin-bottom: 0.6rem; } ul { padding-left: 1.2rem; margin-bottom: 0.6rem; }
    code { background: rgba(72,214,76,0.12); color: var(--emerald,#48d64c); padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.8rem; }
    strong { color: #fff; }
  }
`;

export const CommitRow = styled.div`
  display: flex; align-items: center; gap: 0.7rem; padding: 0.6rem 0;
  border-top: 1px solid rgba(255,255,255,0.05);
  .hash { font-family: 'SF Mono', monospace; font-size: 0.72rem; color: var(--emerald,#48d64c); flex-shrink: 0; }
  .msg { flex: 1; font-size: 0.82rem; color: rgba(255,255,255,0.7); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .time { font-size: 0.7rem; color: rgba(255,255,255,0.35); flex-shrink: 0; }
`;

export const Banner = styled(motion.div)`
  text-align: center;
  padding: 4rem 1rem;
  .t { font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 0.6rem; }
  .s { font-size: 0.95rem; color: rgba(255,255,255,0.55); margin-bottom: 1.5rem; }
`;

export const Loading = styled.div`
  display: flex; align-items: center; justify-content: center;
  min-height: 60vh; flex-direction: column; gap: 1rem;
  .spinner {
    width: 38px; height: 38px; border-radius: 50%;
    border: 3px solid rgba(72,214,76,0.2); border-top-color: var(--emerald,#48d64c);
    animation: spin 0.8s linear infinite;
  }
  .txt { font-size: 0.85rem; color: rgba(255,255,255,0.5); }
  @keyframes spin { to { transform: rotate(360deg); } }
`;
