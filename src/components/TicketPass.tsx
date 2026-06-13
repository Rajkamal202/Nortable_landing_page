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

/* Participant name - placed in the large empty area on the left */
const NameText = styled.h1`
  position: absolute;
  top: 26%;
  left: 7%;
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

/* Registration id - sits just under the name */
const RegSection = styled.div`
  position: absolute;
  top: 58%;
  left: 7%;
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
  padding: 7%;
  background: rgba(8, 4, 10, 0.55);
  border: 1px solid rgba(255, 170, 120, 0.28);
  border-radius: 3px;
  backdrop-filter: blur(2px);
  box-shadow: inset 0 0 18px rgba(255, 120, 60, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
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
          fgColor="#ffd9a0"
        />
      </QRSlot>

      <EventDetails>
        <div>MUMBAI &bull; INDIA</div>
        <div>JULY 18-20</div>
        <div>
          ADMIT <span className="accent">ONE</span>
        </div>
      </EventDetails>
    </PassWrapper>
  );
}
