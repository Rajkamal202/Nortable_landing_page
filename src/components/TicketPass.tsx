'use client';

import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';
import { Globe, ArrowUpRight, Asterisk } from 'lucide-react';

interface TicketPassProps {
  name: string;
  track: string;
  serial: string;
  totalPaid: number;
}

/* Main pass container */
const PassWrapper = styled.div`
  width: 100%;
  max-width: 920px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 
    0 0 60px rgba(255, 50, 50, 0.5),
    0 0 120px rgba(138, 43, 255, 0.35),
    inset 0 0 40px rgba(255, 100, 0, 0.1);
  background: #000;
`;

/* Card background with nebula effect */
const CardBg = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 800px 600px at 45% 30%, rgba(255, 50, 20, 0.32), transparent),
    radial-gradient(ellipse 600px 500px at 75% 75%, rgba(138, 43, 255, 0.3), transparent),
    radial-gradient(ellipse 700px 400px at 25% 80%, rgba(30, 100, 255, 0.18), transparent),
    linear-gradient(135deg, #1a0a1f, #0a0515);
  background-size: cover, cover, cover, cover;
`;

/* Dramatic diagonal light beam sweeping across the pass */
const LightBeam = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(
      118deg,
      transparent 30%,
      rgba(255, 120, 40, 0.18) 44%,
      rgba(255, 60, 30, 0.55) 52%,
      rgba(255, 180, 120, 0.35) 56%,
      transparent 66%
    );
  mix-blend-mode: screen;
  filter: blur(2px);
`;

/* Textured overlay */
const TextureOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, #ff6b35 0.5px, transparent 0.5px);
  background-size: 40px 40px;
  opacity: 0.08;
  mix-blend-mode: overlay;
  pointer-events: none;
`;

/* Die-cut notches */
const NotchTop = styled.div`
  position: absolute;
  top: -18px;
  left: 72%;
  transform: translateX(-50%);
  width: 70px;
  height: 36px;
  background: #000;
  border-radius: 0 0 35px 35px;
  border: 2px solid rgba(255, 100, 0, 0.6);
  border-top: none;
  z-index: 10;
`;

const NotchBottom = styled.div`
  position: absolute;
  bottom: -18px;
  left: 72%;
  transform: translateX(-50%);
  width: 70px;
  height: 36px;
  background: #000;
  border-radius: 35px 35px 0 0;
  border: 2px solid rgba(138, 43, 255, 0.6);
  border-bottom: none;
  z-index: 10;
`;

/* Perforated center line */
const PerforatedLine = styled.div`
  position: absolute;
  left: 72%;
  top: 5%;
  bottom: 5%;
  width: 1.5px;
  background: repeating-linear-gradient(
    to bottom,
    rgba(200, 50, 100, 0.7) 0,
    rgba(200, 50, 100, 0.7) 8px,
    transparent 8px,
    transparent 16px
  );
  z-index: 5;
`;

/* Content wrapper */
const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 72% 28%;
  padding: 2.5rem 2.5rem 2rem;
  gap: 0;
`;

/* Left section */
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
`;

/* Top branding */
const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.5rem;

  .logo {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, #a855f7, #ff6b35);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    flex-shrink: 0;
  }

  .text {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    line-height: 1.4;
    color: #fff;
    letter-spacing: 0.05em;

    .line1 {
      font-weight: 700;
    }

    .line2 {
      color: #ff8833;
      font-weight: 600;
    }

    .line3 {
      font-size: 0.6rem;
      margin-top: 0.15rem;
    }
  }
`;

/* Large iridescent name */
const NameText = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1;
  margin: 1rem 0 0.8rem;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    #ffff99 0%,
    #ffff00 8%,
    #ffcc00 15%,
    #ffaa99 22%,
    #ffcccc 30%,
    #ffaaff 40%,
    #cc99ff 50%,
    #99ccff 60%,
    #99ffff 70%,
    #ccffff 80%,
    #ffffff 90%,
    #ffffcc 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: 
    drop-shadow(0 0 8px rgba(255, 200, 0, 0.5))
    drop-shadow(0 0 16px rgba(100, 200, 255, 0.3))
    drop-shadow(0 0 4px rgba(255, 100, 200, 0.3));
  text-shadow: none;
`;

/* Reg section */
const RegSection = styled.div`
  margin-bottom: 1.5rem;

  .label {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #ff6b7a;
    text-transform: uppercase;
  }

  .number {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #ff6b7a;
    margin-top: 0.25rem;
  }
`;

/* Bottom left details */
const BottomLeft = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

const QRBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .qr-wrapper {
    width: 85px;
    height: 85px;
    padding: 4px;
    background: linear-gradient(135deg, #ffdd88, #ffff99);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .stripe {
    width: 18px;
    height: 85px;
    background: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 7px,
      #ff6b35 7px,
      #ff6b35 11px
    );
    border: 1.5px solid rgba(255, 100, 50, 0.5);
    border-radius: 3px;
  }
`;

const EventDetails = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.7;
  color: #ffccaa;
  letter-spacing: 0.03em;

  .accent {
    color: #ffdd99;
  }

  .icon-row {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-top: 0.6rem;
    color: rgba(180, 170, 200, 0.75);
  }
`;

/* Right section - vertical branding stub */
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

const TopRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  justify-content: flex-end;
`;

const Badge = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(255, 255, 255, 0.85),
    rgba(255, 150, 100, 0.4) 20%,
    rgba(100, 50, 200, 0.25) 50%,
    rgba(50, 100, 150, 0.15) 80%
  );
  border: 2.5px solid rgba(255, 180, 100, 0.4);
  box-shadow: 
    inset 0 0 15px rgba(255, 255, 255, 0.3),
    0 0 25px rgba(138, 43, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b0000;
  font-weight: bold;
  font-size: 36px;
  flex-shrink: 0;
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: right;
  padding-top: 0.5rem;

  .tag-line {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #ff6b7a;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;

    .dash {
      width: 18px;
      height: 1px;
      background: #ff6b7a;
      opacity: 0.7;
    }
  }
`;

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.1em;
  line-height: 0.9;
  background: linear-gradient(
    180deg,
    #ff6b35 0%,
    #ff3333 15%,
    #ff6699 30%,
    #ff00ff 50%,
    #bb66ff 70%,
    #ffcc99 90%,
    #ffff99 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-stroke: 0.3px rgba(255, 100, 50, 0.4);
  filter: drop-shadow(0 0 6px rgba(255, 100, 0, 0.4));
  word-spacing: 0.2em;
  text-transform: uppercase;
`;

/* Stub footer tagline */
const StubFoot = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  writing-mode: vertical-rl;
  font-family: 'Space Mono', monospace;
  font-size: 0.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(180, 130, 220, 0.7);
  white-space: nowrap;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1.4rem;
  left: 2.5rem;
  width: 62%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;

  .barcode {
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.12em;
    color: rgba(200, 100, 150, 0.6);
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default function TicketPass({
  name,
  track,
  serial,
  totalPaid,
}: TicketPassProps) {
  const qrValue = `NTH2026|${serial}|${name}`;

  return (
    <PassWrapper>
      <CardBg />
      <LightBeam />
      <TextureOverlay />
      <NotchTop />
      <NotchBottom />
      <PerforatedLine />

      <Content>
        <Left>
          <div>
            <HeaderRow>
              <Branding>
                <div className="logo">N</div>
                <div className="text">
                  <div className="line1">NORTABLE</div>
                  <div className="line2">PRESENTS</div>
                  <div className="line3">GLOBAL HACKATHON 2026</div>
                </div>
              </Branding>

              <TopRight>
                <Tagline>
                  <div className="tag-line">CODE. <span className="dash" /></div>
                  <div className="tag-line">INNOVATE. <span className="dash" /></div>
                  <div className="tag-line">DISRUPT. <span className="dash" /></div>
                </Tagline>
                <Badge>N</Badge>
              </TopRight>
            </HeaderRow>

            <NameText>{name}</NameText>

            <RegSection>
              <div className="label">REG.</div>
              <div className="number">#{serial}</div>
            </RegSection>
          </div>

          <BottomLeft>
            <QRBox>
              <div className="qr-wrapper">
                <QRCodeSVG value={qrValue} level="H" size={78} includeMargin={false} />
              </div>
              <div className="stripe" />
            </QRBox>

            <EventDetails>
              <div>MUMBAI • INDIA</div>
              <div>JULY 18-20</div>
              <div>ADMIT <span className="accent">ONE</span></div>
              <div className="icon-row">
                <Globe size={16} strokeWidth={1.5} />
                <ArrowUpRight size={16} strokeWidth={1.5} />
                <Asterisk size={16} strokeWidth={1.5} />
              </div>
            </EventDetails>
          </BottomLeft>
        </Left>

        <Right>
          <VerticalText>NORTABLE HACKATHON 2026</VerticalText>
          <StubFoot>BE EXCEPTIONAL OR BE FORGOTTEN</StubFoot>
        </Right>
      </Content>

      <BottomBar>
        <div className="barcode">|||||||||||||||||||||||||||||||||||||||||||||||</div>
      </BottomBar>
    </PassWrapper>
  );
}
