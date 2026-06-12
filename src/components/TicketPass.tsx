'use client';

import React from 'react';
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

/* ════════════════════════════════════════════════════════════════
   NORTABLE HORIZONTAL ADMISSION PASS
   Precise pixel-perfect replica matching reference design
   ════════════════════════════════════════════════════════════════ */

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 1.4 / 1;
  margin: 0 auto;
  font-family: var(--font-grotesk, -apple-system, sans-serif);
`;

/* Outer glowing rim (die-cuts + border glow) */
const CardShell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 48px;
  overflow: hidden;
  background: linear-gradient(135deg, #ff5a00 0%, #ff1e1e 12%, #2a0a0a 40%, #0a0520 65%, #8a2bff 85%, #1e5bff 100%);
  padding: 3px;
  filter: drop-shadow(0 0 40px rgba(255, 90, 0, 0.35)) drop-shadow(0 0 80px rgba(138, 43, 255, 0.25));

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 48px;
    background: linear-gradient(135deg, #ff5a00 0%, #ff1e1e 12%, #2a0a0a 40%, #0a0520 65%, #8a2bff 85%, #1e5bff 100%);
    z-index: -1;
  }
`;

/* Inner card face */
const CardFace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  background: radial-gradient(180% 100% at 50% 0%, rgba(255, 30, 30, 0.25), transparent 50%),
              radial-gradient(140% 140% at 95% 85%, rgba(138, 43, 255, 0.3), transparent 50%),
              radial-gradient(100% 100% at 10% 70%, rgba(30, 91, 255, 0.15), transparent 50%),
              #0a0a0d;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  isolation: isolate;

  /* nebula texture overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/ticket-texture.png');
    background-size: 150%;
    background-position: 35% 50%;
    opacity: 0.45;
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 1;
  }

  /* halftone grid (top-left corner) */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 45%;
    background-image: radial-gradient(rgba(255, 120, 0, 0.4) 0.5px, transparent 1.2px);
    background-size: 14px 14px;
    -webkit-mask-image: linear-gradient(135deg, #000 0%, #000 25%, transparent 70%);
    mask-image: linear-gradient(135deg, #000 0%, #000 25%, transparent 70%);
    pointer-events: none;
    z-index: 2;
  }
`;

/* Die-cut notches (corners + center sides) */
const DieCut = styled.div<{ $pos: 'tl' | 'tr' | 'bl' | 'br' | 'lm' | 'rm' }>`
  position: absolute;
  z-index: 10;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #08080a;
  ${({ $pos }) => {
    switch ($pos) {
      case 'tl':
        return 'top: -26px; left: 48px;';
      case 'tr':
        return 'top: -26px; right: 48px;';
      case 'bl':
        return 'bottom: -26px; left: 48px;';
      case 'br':
        return 'bottom: -26px; right: 48px;';
      case 'lm':
        return 'top: 50%; left: -26px; transform: translateY(-50%);';
      case 'rm':
        return 'top: 50%; right: -26px; transform: translateY(-50%);';
    }
  }}
`;

/* Perforated dashed line (vertical center) */
const PerforationLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 100, 0, 0.5) 0px,
    rgba(255, 100, 0, 0.5) 6px,
    transparent 6px,
    transparent 14px
  );
  z-index: 3;
  pointer-events: none;
`;

/* Main content area */
const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3.5rem 3rem;
  gap: 2rem;
  color: #fafaf8;
`;

/* Left section */
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

/* Right section */
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;

/* Top branding */
const TopBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .logo {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #a855f7 0%, #ff1e1e 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 32px;
    color: #fff;
    flex-shrink: 0;
  }

  .branding {
    font-family: var(--font-space-mono, monospace);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    line-height: 1.5;
    color: #c0c0c0;

    .text1 {
      color: #fafaf8;
      font-weight: 700;
    }

    .text2 {
      color: #ff8833;
    }
  }
`;

/* Holographic name (iridescent chrome effect) */
const NameDisplay = styled.div`
  font-family: var(--font-bebas, serif);
  font-size: clamp(3.5rem, 12vw, 5.8rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 0.95;
  color: #fafaf8;
  text-shadow:
    0 0 10px rgba(255, 200, 100, 0.4),
    0 0 30px rgba(100, 150, 255, 0.2);
  background: linear-gradient(
    135deg,
    #fff 0%,
    #ffffcc 15%,
    #ffddaa 25%,
    #ffaadd 35%,
    #ffaaff 45%,
    #dd99ff 55%,
    #99ccff 65%,
    #aaffff 75%,
    #fff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

/* Registration number (red) */
const RegNumber = styled.div`
  font-family: var(--font-space-mono, monospace);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: #ff5555;
  margin-bottom: 1.5rem;

  .label {
    font-weight: 700;
    text-transform: uppercase;
  }

  .number {
    margin-top: 0.2rem;
    font-weight: 700;
  }
`;

/* Bottom details section */
const Details = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;
`;

/* QR + Striped accent */
const QRSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;

  .qr-code {
    width: 84px;
    height: 84px;
    padding: 4px;
    background: linear-gradient(135deg, #ffdd88 0%, #ffff99 50%, #ffdd88 100%);
    border-radius: 8px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .stripe {
    width: 20px;
    height: 84px;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 8px,
      rgba(255, 100, 0, 0.6) 8px,
      rgba(255, 100, 0, 0.6) 12px
    );
    border: 1px solid rgba(255, 100, 0, 0.4);
    border-radius: 4px;
  }
`;

/* Event details text */
const EventDetails = styled.div`
  font-family: var(--font-space-grotesk, sans-serif);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  line-height: 1.8;
  color: #fafaf8;

  .line {
    font-weight: 600;

    .accent {
      color: #ffbb44;
    }
  }
`;

/* Bottom bar with barcode & icons */
const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;

  .barcode {
    font-family: var(--font-space-mono, monospace);
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    color: rgba(255, 150, 100, 0.6);
    line-height: 1.2;
  }

  .icons {
    display: flex;
    gap: 0.8rem;
    font-size: 1rem;
    color: #8888aa;
  }
`;

/* Vertical right-side event title */
const VerticalTitle = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform-origin: center;

  .title {
    font-family: var(--font-bebas, serif);
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 400;
    letter-spacing: 0.08em;
    line-height: 0.9;
    color: #fafaf8;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff5a00 0%, #ff1e1e 15%, #ff6699 35%, #ff66ff 55%, #bb99ff 75%, #ffbb99 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-outline: 2px rgba(255, 100, 0, 0.3);
    -webkit-text-stroke: 0.5px rgba(255, 100, 0, 0.4);
  }
`;

/* Holographic badge (top right) */
const HoloBadge = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 4;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(255, 255, 200, 0.8), rgba(255, 150, 100, 0.4) 25%, rgba(100, 50, 200, 0.3) 60%, rgba(50, 100, 150, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 200, 100, 0.3);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(138, 43, 255, 0.2);

  .badge-inner {
    width: 92%;
    height: 92%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255, 200, 100, 0.2), rgba(100, 150, 255, 0.2));
    font-weight: bold;
    font-size: 0;

    svg {
      width: 60%;
      height: 60%;
      filter: drop-shadow(0 0 3px rgba(255, 100, 0, 0.3));
    }
  }
`;

/* Top right text (CODE. INNOVATE. DISRUPT.) */
const TopRightText = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 3.5rem;
  z-index: 4;
  font-family: var(--font-space-mono, monospace);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  line-height: 2;
  color: #ff6666;
  text-align: right;

  .line {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    .dot {
      color: #ff8844;
    }
  }
`;

/* ─────────────────────────────────────────────────────────────── */

export interface TicketPassProps {
  name: string;
  track: string;
  serial: string;
  totalPaid: number;
}

export default function TicketPass({
  name,
  track,
  serial,
  totalPaid,
}: TicketPassProps) {
  const qrValue = `NORTABLE|${serial}|${name}|${track}`;
  const barcode = '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||';

  return (
    <Container>
      <CardShell>
        <CardFace>
          <PerforationLine />
          <DieCut $pos="tl" />
          <DieCut $pos="tr" />
          <DieCut $pos="bl" />
          <DieCut $pos="br" />
          <DieCut $pos="lm" />
          <DieCut $pos="rm" />

          <TopBranding>
            <div className="logo">N</div>
            <div className="branding">
              <div className="text1">NORTABLE</div>
              <div className="text2">PRESENTS</div>
              <div className="text1" style={{ marginTop: '0.2rem' }}>
                GLOBAL HACKATHON 2026
              </div>
            </div>
          </TopBranding>

          <TopRightText>
            <div className="line">
              <span>CODE.</span>
              <span className="dot">—</span>
            </div>
            <div className="line">
              <span>INNOVATE.</span>
              <span className="dot">—</span>
            </div>
            <div className="line">
              <span>DISRUPT.</span>
              <span className="dot">—</span>
            </div>
          </TopRightText>

          <HoloBadge>
            <div className="badge-inner">N</div>
          </HoloBadge>

          <Content>
            <LeftSection>
              <div>
                <NameDisplay>{name}</NameDisplay>
                <RegNumber>
                  <div className="label">REG.</div>
                  <div className="number">#{serial}</div>
                </RegNumber>
              </div>

              <Details>
                <QRSection>
                  <div className="qr-code">
                    <QRCodeSVG value={qrValue} level="H" size={84} includeMargin={false} />
                  </div>
                  <div className="stripe" />
                </QRSection>

                <EventDetails>
                  <div className="line">MUMBAI • INDIA</div>
                  <div className="line">JULY 18-20</div>
                  <div className="line">
                    ADMIT <span className="accent">ONE</span>
                  </div>
                </EventDetails>
              </Details>
            </LeftSection>

            <RightSection>
              <div />
              <div />
            </RightSection>
          </Content>

          <VerticalTitle>
            <div className="title">NORTABLE HACKATHON 2026</div>
          </VerticalTitle>

          <BottomBar>
            <div className="barcode">{barcode}</div>
            <div className="icons">
              <span title="Globe">🌐</span>
              <span title="Edit">📝</span>
              <span title="Star">✦</span>
            </div>
          </BottomBar>
        </CardFace>
      </CardShell>
    </Container>
  );
}
