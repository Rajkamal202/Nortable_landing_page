'use client';

import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

interface TicketPassProps {
  name: string;
  track: string;
  serial: string;
  totalPaid: number;
}

/* Main pass container - uses the provided artwork as the background */
const PassWrapper = styled.div`
  width: 100%;
  max-width: 920px;
  aspect-ratio: 1471 / 1064;
  margin: 0 auto;
  position: relative;
  background-image: url('/ticket-card.png');
  background-size: cover;
  background-position: center;
  background-color: #000;
`;

/* Top-left branding: holographic "N" logo + presenter text */
const Branding = styled.div`
  position: absolute;
  top: 21.5%;
  left: 11%;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  .logo {
    width: clamp(1.6rem, 3.4vw, 2.4rem);
    aspect-ratio: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1rem, 2.2vw, 1.6rem);
    color: #1a0a2e;
    background: linear-gradient(135deg, #c9a8ff, #8a5cff 55%, #5ce0ff);
    box-shadow: 0 0 14px rgba(150, 110, 255, 0.5);
  }

  .text {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: 1.35;
    color: #f3e9ff;
    font-size: clamp(0.5rem, 1.15vw, 0.78rem);
  }
`;

/* Top-right holographic "N" badge */
const Badge = styled.div`
  position: absolute;
  top: 21%;
  left: 58.5%;
  width: clamp(2.4rem, 6.4vw, 4.4rem);
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.1rem, 3vw, 2rem);
  color: #2a0a1a;
  background:
    radial-gradient(circle at 32% 28%, #ffffff 0%, #ffd9f0 22%, #b9a8ff 50%, #7fd6ff 78%, #ffd0a0 100%);
  box-shadow:
    inset 0 0 14px rgba(255, 255, 255, 0.6),
    0 0 22px rgba(180, 140, 255, 0.45);
`;

/* "CODE. INNOVATE. DISRUPT." tagline with trailing dashes */
const Tagline = styled.div`
  position: absolute;
  top: 35.5%;
  left: 58%;
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.5rem, 1.1vw, 0.74rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ff8a5c;
  line-height: 1.7;

  .row {
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .dash {
    width: clamp(0.7rem, 1.6vw, 1.1rem);
    height: 1px;
    background: #ff8a5c;
  }
`;

/* Footer tagline on the stub */
const StubFooter = styled.div`
  position: absolute;
  bottom: 11.5%;
  left: 72%;
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.4rem, 0.85vw, 0.6rem);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d9b0ff;
  white-space: nowrap;
`;

/* Participant name - placed in the large empty area on the left */
const NameText = styled.h1`
  position: absolute;
  top: 30%;
  left: 11%;
  right: 33%;
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 6.4vw, 4.4rem);
  font-weight: 400;
  line-height: 0.86;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  word-break: break-word;
  background: linear-gradient(
    100deg,
    #fff7e6 0%,
    #ffe9c2 25%,
    #ffd9f0 45%,
    #d9c2ff 62%,
    #c2e0ff 80%,
    #f5faff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(255, 200, 120, 0.35))
    drop-shadow(0 0 18px rgba(150, 180, 255, 0.25));
`;

/* Registration id - sits just above the QR block */
const RegSection = styled.div`
  position: absolute;
  top: 63%;
  left: 11%;
  font-family: 'Space Mono', monospace;

  .label {
    font-size: clamp(0.55rem, 1.1vw, 0.7rem);
    font-weight: 700;
    letter-spacing: 0.18em;
    color: #ff7a8a;
    text-transform: uppercase;
  }

  .number {
    font-size: clamp(0.6rem, 1.2vw, 0.78rem);
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #ff7a8a;
    margin-top: 0.2rem;
  }
`;

/* QR code dropped into the empty square placeholder (bottom-left of artwork) */
const QRSlot = styled.div`
  position: absolute;
  left: 11.8%;
  top: 73.5%;
  width: 10.5%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #ffe9c9 0%, #ffd6e6 45%, #d6c9ff 75%, #c9eaff 100%);
  border: 1px solid rgba(255, 210, 160, 0.55);
  border-radius: 3px;
  box-shadow:
    inset 0 0 12px rgba(255, 255, 255, 0.4),
    0 0 16px rgba(255, 150, 90, 0.25);

  svg {
    position: absolute;
    inset: 7%;
    width: 86%;
    height: 86%;
    display: block;
  }
`;

/* Event details - aligned with the horizontal rules near the lower-center */
const EventDetails = styled.div`
  position: absolute;
  left: 30%;
  top: 70%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.65rem, 1.4vw, 0.95rem);
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: 0.04em;
  color: #ffd2b0;

  .accent {
    color: #ffe39a;
  }
`;

export default function TicketPass({ name, serial }: TicketPassProps) {
  const qrValue = `NTH2026|${serial}|${name}`;

  return (
    <PassWrapper role="img" aria-label={`Nortable Hackathon 2026 pass for ${name}`}>
      <Branding>
        <div className="logo">N</div>
        <div className="text">
          NORTABLE PRESENTS
          <br />
          GLOBAL HACKATHON 2026
        </div>
      </Branding>

      <Badge aria-hidden="true">N</Badge>

      <Tagline aria-hidden="true">
        <div className="row">
          CODE. <span className="dash" />
        </div>
        <div className="row">
          INNOVATE. <span className="dash" />
        </div>
        <div className="row">
          DISRUPT. <span className="dash" />
        </div>
      </Tagline>

      <NameText>{name}</NameText>

      <RegSection>
        <div className="label">REG.</div>
        <div className="number">#{serial}</div>
      </RegSection>

      <QRSlot>
        <QRCodeSVG
          value={qrValue}
          level="H"
          size={120}
          includeMargin={false}
          bgColor="transparent"
          fgColor="#1a0a14"
        />
      </QRSlot>

      <EventDetails>
        <div>MUMBAI &bull; INDIA</div>
        <div>JULY 18-20</div>
        <div>
          ADMIT <span className="accent">ONE</span>
        </div>
      </EventDetails>

      <StubFooter aria-hidden="true">BE EXCEPTIONAL OR BE FORGOTTEN</StubFooter>
    </PassWrapper>
  );
}
