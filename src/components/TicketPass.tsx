'use client';

import React from 'react';
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

/* ═══════════════════════════════════════════════════════════
   NORTABLE ADMISSION PASS — "Crimson Storm" design system
   Palette: #FF1E1E crimson · #FF5A00 burnt orange · #8A2BFF violet
            #1E5BFF electric blue · chrome silver · #0A0A0D matte black
   Type:    Bebas Neue (headline) · Space Grotesk (details) · Space Mono (micro)
   ═══════════════════════════════════════════════════════════ */

const PAGE_BG = '#08080a';

const Shell = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  filter: drop-shadow(0 0 24px rgba(255, 30, 30, 0.25)) drop-shadow(0 0 60px rgba(138, 43, 255, 0.18));
`;

/* glowing gradient rim */
const Rim = styled.div`
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(
    140deg,
    #ff5a00 0%,
    #ff1e1e 18%,
    #3a0d0d 38%,
    #1a0a2e 60%,
    #8a2bff 82%,
    #1e5bff 100%
  );
`;

const Card = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background:
    radial-gradient(120% 90% at 80% 20%, rgba(255, 30, 30, 0.32), transparent 55%),
    radial-gradient(110% 80% at 90% 95%, rgba(138, 43, 255, 0.4), transparent 55%),
    radial-gradient(90% 70% at 15% 80%, rgba(30, 91, 255, 0.16), transparent 60%),
    #0a0a0d;
  color: #f5f3ef;
  isolation: isolate;
`;

/* nebula texture layer */
const Texture = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url('/images/ticket-texture.png');
  background-size: cover;
  background-position: 30% center;
  opacity: 0.55;
  mix-blend-mode: screen;
  pointer-events: none;
`;

/* dotted halftone grid (top-left) */
const Halftone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 32%;
  z-index: 1;
  background-image: radial-gradient(rgba(255, 90, 0, 0.5) 1px, transparent 1.4px);
  background-size: 13px 13px;
  -webkit-mask-image: linear-gradient(135deg, #000 20%, transparent 75%);
  mask-image: linear-gradient(135deg, #000 20%, transparent 75%);
  pointer-events: none;
`;

/* die-cut notches (blend with page background) */
const Notch = styled.span<{ $top?: string; $bottom?: string; $left?: string; $right?: string; $size?: number }>`
  position: absolute;
  z-index: 6;
  width: ${({ $size }) => $size ?? 38}px;
  height: ${({ $size }) => $size ?? 38}px;
  border-radius: 50%;
  background: ${PAGE_BG};
  top: ${({ $top }) => $top ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.6rem 1.5rem 0;
`;

/* ── header ── */
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  .logo {
    width: 42px;
    height: 42px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #d8d8e8 0%, #b08cff 45%, #8a2bff 100%);
    color: #14060f;
    font-family: var(--font-bebas), sans-serif;
    font-size: 1.5rem;
    line-height: 1;
    box-shadow: 0 0 14px rgba(176, 140, 255, 0.5);
  }

  .lines {
    font-family: var(--font-space-mono), monospace;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    line-height: 1.7;
    text-transform: uppercase;

    .l1 { color: #f5f3ef; }
    .l1 em { font-style: normal; color: #ff5a00; }
    .l2 { color: #f5f3ef; }
    .l2 em { font-style: normal; color: #ffb300; }
  }
`;

const HoloBadge = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), transparent 40%),
    conic-gradient(from 200deg, #d9d9e3, #ffd9a0, #ff9ec7, #b39dff, #9fd8ff, #d9d9e3);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.25);

  span {
    font-family: var(--font-bebas), sans-serif;
    font-size: 1.7rem;
    line-height: 1;
    color: #3d0d0d;
    mix-blend-mode: multiply;
  }
`;

/* ── code/innovate/disrupt micro list ── */
const MicroList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
  margin-top: 1.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-space-mono), monospace;
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    color: #e8e4dd;

    &::after {
      content: '';
      width: 26px;
      border-top: 1px solid rgba(245, 243, 239, 0.6);
    }

    &:nth-child(2)::after { width: 18px; }
    &:nth-child(3)::after { width: 32px; }
  }
`;

/* ── chrome name ── */
const Name = styled.h2`
  margin: 1.1rem 0 0;
  font-family: var(--font-bebas), sans-serif;
  font-weight: 400;
  font-size: clamp(3.4rem, 17cqw, 4.6rem);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background: linear-gradient(
    175deg,
    #ffffff 0%,
    #e7e9f2 22%,
    #9aa3b8 40%,
    #f4f6ff 52%,
    #7d87a0 68%,
    #d7dbe8 84%,
    #aab2c5 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.65));
  word-break: break-word;
`;

/* ── REG number ── */
const RegNo = styled.div`
  margin-top: 1.3rem;
  font-family: var(--font-space-mono), monospace;
  letter-spacing: 0.16em;

  .lbl {
    font-size: 0.66rem;
    color: #ff4d4d;
    margin-bottom: 0.3rem;
  }

  .no {
    font-size: 0.95rem;
    color: #ff3030;
    text-shadow: 0 0 10px rgba(255, 30, 30, 0.55);
  }
`;

/* ── QR row ── */
const QRRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  margin-top: 1.1rem;
`;

const QRBox = styled.div`
  padding: 9px;
  border-radius: 6px;
  background:
    radial-gradient(circle at 25% 20%, rgba(255, 210, 230, 0.55), transparent 45%),
    radial-gradient(circle at 80% 80%, rgba(190, 210, 255, 0.5), transparent 45%),
    linear-gradient(135deg, #f2f2f5 0%, #d8dbe6 50%, #eef0f6 100%);
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.18);
  line-height: 0;
`;

const Stripes = styled.div`
  width: 58px;
  align-self: stretch;
  border-radius: 4px;
  background:
    linear-gradient(135deg, rgba(255, 170, 220, 0.35), rgba(170, 200, 255, 0.35)),
    repeating-linear-gradient(
      135deg,
      #e8e9f0 0 7px,
      #15151a 7px 14px
    );
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.12);
`;

const DataGrid = styled.div`
  margin-left: auto;
  align-self: center;
  width: 120px;
  height: 56px;
  opacity: 0.8;

  svg {
    width: 100%;
    height: 100%;
    stroke: rgba(255, 80, 80, 0.65);
    stroke-width: 1;
    fill: none;
  }
`;

/* ── event details ── */
const Details = styled.div`
  margin-top: 1.4rem;
  padding: 0.9rem 0;
  border-top: 1px solid rgba(245, 243, 239, 0.35);
  border-bottom: 1px solid rgba(245, 243, 239, 0.35);
  font-family: var(--font-grotesk), sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  line-height: 1.9;
  text-transform: uppercase;
  color: #f5f3ef;

  em {
    font-style: normal;
  }
  .accent-violet { color: #c9a0ff; }
  .accent-gold { color: #ffd866; }
`;

/* ── barcode ── */
const Barcode = styled.div`
  margin-top: 0.95rem;
  height: 30px;
  background: repeating-linear-gradient(
    90deg,
    rgba(245, 243, 239, 0.92) 0 2px,
    transparent 2px 4px,
    rgba(245, 243, 239, 0.92) 4px 5px,
    transparent 5px 9px,
    rgba(245, 243, 239, 0.92) 9px 12px,
    transparent 12px 14px,
    rgba(245, 243, 239, 0.92) 14px 15px,
    transparent 15px 19px
  );
  -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 88%, transparent 100%);
  mask-image: linear-gradient(90deg, #000 0%, #000 88%, transparent 100%);
  opacity: 0.9;
`;

/* ── icon row ── */
const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  margin: 1.1rem 0 1.4rem;
  color: rgba(245, 243, 239, 0.85);

  svg {
    width: 20px;
    height: 20px;
  }
`;

/* ── perforation ── */
const Perforation = styled.div`
  position: relative;
  border-top: 2px dashed rgba(245, 243, 239, 0.35);
`;

/* ── stub ── */
const Stub = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem 1.5rem 1.4rem;
  text-align: left;
`;

const StubWordmark = styled.div`
  font-family: var(--font-bebas), sans-serif;
  text-transform: uppercase;
  line-height: 0.95;

  .fill {
    display: block;
    font-size: clamp(3.4rem, 18cqw, 4.8rem);
    letter-spacing: 0.04em;
    background: linear-gradient(
      100deg,
      #ff5a00 0%,
      #ff1e1e 28%,
      #ff7a3c 46%,
      #b04dff 72%,
      #8a2bff 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 14px rgba(255, 60, 30, 0.35));
  }

  .outline {
    display: block;
    margin-top: 0.25rem;
    font-size: clamp(2.1rem, 11cqw, 3rem);
    letter-spacing: 0.06em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(232, 190, 255, 0.85);
    filter: drop-shadow(0 0 10px rgba(176, 77, 255, 0.35));
  }
`;

const StubFooter = styled.div`
  margin-top: 0.9rem;
  font-family: var(--font-space-mono), monospace;
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(245, 243, 239, 0.8);
`;

/* mono container query for clamp scaling */
const Container = styled.div`
  container-type: inline-size;
  width: 100%;
  max-width: 420px;
`;

interface TicketPassProps {
  name: string;
  track: string;
  serial: string;
  totalPaid: number;
}

export default function TicketPass({ name, track, serial, totalPaid }: TicketPassProps) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0] || name;
  const rest = parts.slice(1).join(' ');

  return (
    <Container>
      <Shell>
        <Rim>
          <Card>
            <Texture />
            <Halftone />

            {/* die-cut notches */}
            <Notch $top="-19px" $left="50%" style={{ transform: 'translateX(-50%)' }} />
            <Notch $bottom="-19px" $left="50%" style={{ transform: 'translateX(-50%)' }} />
            <Notch $top="31%" $right="-19px" $size={34} />
            {/* perforation side notches rendered inside layout flow below */}

            <Inner>
              <Header>
                <Brand>
                  <div className="logo">N</div>
                  <div className="lines">
                    <div className="l1">NORTABLE <em>PRESENTS</em></div>
                    <div className="l2">GLOBAL <em>HACKATHON</em> 2026</div>
                  </div>
                </Brand>
                <HoloBadge><span>N</span></HoloBadge>
              </Header>

              <MicroList>
                <div>CODE.</div>
                <div>INNOVATE.</div>
                <div>DISRUPT.</div>
              </MicroList>

              <Name>
                {first}
                {rest && <><br />{rest}</>}
              </Name>

              <RegNo>
                <div className="lbl">REG.</div>
                <div className="no">#{serial}</div>
              </RegNo>

              <QRRow>
                <QRBox>
                  <QRCodeSVG
                    value={`NORTABLE2026|${serial}|${name}|${track}`}
                    size={104}
                    bgColor="transparent"
                    fgColor="#15151c"
                    level="M"
                  />
                </QRBox>
                <Stripes aria-hidden="true" />
                <DataGrid aria-hidden="true">
                  <svg viewBox="0 0 120 56" preserveAspectRatio="none">
                    <rect x="1" y="8" width="118" height="40" />
                    <line x1="30" y1="8" x2="30" y2="48" />
                    <line x1="60" y1="8" x2="60" y2="48" />
                    <line x1="90" y1="8" x2="90" y2="48" />
                    <line x1="1" y1="28" x2="119" y2="28" />
                    <line x1="1" y1="8" x2="30" y2="28" />
                    <line x1="60" y1="48" x2="90" y2="28" />
                  </svg>
                </DataGrid>
              </QRRow>

              <Details>
                <div>MUMBAI <span aria-hidden="true">•</span> INDIA</div>
                <div>JULY <em className="accent-violet">18-20</em></div>
                <div><em className="accent-gold">ADMIT</em> <em className="accent-violet">ONE</em></div>
              </Details>

              <Barcode aria-hidden="true" />

              <IconRow aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2c3 3.5 3 16.5 0 20M12 2c-3 3.5-3 16.5 0 20" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                  <path d="M9 15l6-6M10 9h5v5" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
                </svg>
              </IconRow>
            </Inner>

            {/* perforated tear line with side notches */}
            <div style={{ position: 'relative' }}>
              <Notch $top="-17px" $left="-19px" $size={34} />
              <Notch $top="-17px" $right="-19px" $size={34} />
              <Perforation />
            </div>

            <Stub>
              <StubWordmark>
                <span className="fill">NORTABLE</span>
                <span className="outline">HACKATHON 2026</span>
              </StubWordmark>
              <StubFooter>
                BE EXCEPTIONAL OR BE FORGOTTEN
                <span style={{ float: 'right', opacity: 0.7 }}>₹{totalPaid} PAID · VIRTUAL</span>
              </StubFooter>
            </Stub>
          </Card>
        </Rim>
      </Shell>
    </Container>
  );
}
