'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import hero_background from '../../../../public/images/grid_background.png';

/* ═══════════════════════════════════════════
   WRAPPER & BACKGROUND LAYERS
   ═══════════════════════════════════════════ */

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InteractiveSpotlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(72, 214, 76, 0.06) 0%,
    transparent 60%
  );
  transition: opacity 0.5s ease;
`;

export const GlowBg = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.9;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    mix-blend-mode: screen;
  }

  /* Emerald Orb */
  &::before {
    top: 0%;
    left: 10%;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(72, 214, 76, 0.12) 0%, rgba(72, 214, 76, 0) 70%);
    animation: floatGreen 14s ease-in-out infinite alternate;
  }

  /* Teal/Cyan Orb */
  &::after {
    bottom: 0%;
    right: 10%;
    width: 460px;
    height: 460px;
    background: radial-gradient(circle, rgba(0, 242, 254, 0.06) 0%, rgba(0, 242, 254, 0) 70%);
    animation: floatTeal 18s ease-in-out infinite alternate;
  }

  @keyframes floatGreen {
    0% { transform: translate(-25px, -20px) scale(0.9); }
    100% { transform: translate(25px, 25px) scale(1.15); }
  }

  @keyframes floatTeal {
    0% { transform: translate(30px, 20px) scale(1.1); }
    100% { transform: translate(-30px, -20px) scale(0.85); }
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 280px;
  }
`;

export const CenterOrb = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.02) 0%, rgba(72, 214, 76, 0.03) 40%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
  animation: rotateGlow 30s linear infinite;

  @keyframes rotateGlow {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export const HeaderGlowLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(72, 214, 76, 0.25) 50%, transparent);
  pointer-events: none;
  z-index: 2;
`;

/* ═══════════════════════════════════════════
   MARQUEE TICKER — premium energy bar
   ═══════════════════════════════════════════ */

export const MarqueeContainer = styled.div<{ $bottom?: boolean }>`
  width: 100vw;
  background: rgba(0, 0, 0, 0.85);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  height: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  z-index: 5;
  margin-top: ${({ $bottom }) => ($bottom ? '3rem' : '0')};
  margin-bottom: ${({ $bottom }) => ($bottom ? '0' : '1.5rem')};
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: scrollMarquee 45s linear infinite;

  @keyframes scrollMarquee {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`;

export const MarqueeText = styled.span`
  font-family: 'SF Pro Display', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-right: 0;
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;

  span.star {
    color: rgba(72, 214, 76, 0.35);
    font-size: 0.65rem;
  }
`;

/* ═══════════════════════════════════════════
   INNER LAYOUT
   ═══════════════════════════════════════════ */

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 82rem;
  margin: 0 auto;
  background-position: top center;
  background-size: contain;
  position: relative;
  z-index: 2;
  padding: 2.5rem 0 2rem;
  width: 90%;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  width: 100%;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

/* ═══════════════════════════════════════════
   COUNTDOWN BADGE
   ═══════════════════════════════════════════ */

export const CountdownBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: fit-content;

  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

export const CountdownLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--emerald, #48d64c);
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const CountdownCells = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CountdownCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.4rem;
  padding: 0.35rem 0.5rem;
  min-width: 2.8rem;

  .value {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--white, #fff);
    letter-spacing: 0.05em;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .unit {
    font-size: 0.5rem;
    font-weight: 600;
    color: #6b6b6b;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.15rem;
  }
`;

export const CountdownSeparator = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.12);
  padding: 0 0.05rem;
`;

/* ═══════════════════════════════════════════
   HERO TEXT & HEADING
   ═══════════════════════════════════════════ */

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;
  position: relative;
  text-align: left;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 0.95;
    color: var(--white, #fff);
    text-transform: uppercase;

    span.gradient-text {
      background: linear-gradient(
        120deg,
        #48d64c 0%,
        #2b892e 30%,
        #48d64c 70%,
        #2b892e 100%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textGradientAnimate 6s linear infinite;
      display: inline-block;
    }

    @keyframes textGradientAnimate {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }
  }

  .hero-subtitle {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.5rem;
  }

  .tagline {
    font-size: 1.05rem;
    font-weight: 500;
    color: #9a9a9a;
    letter-spacing: 0.01em;
    line-height: 1.65;
    max-width: 34rem;
    margin-top: 0.25rem;

    strong {
      color: var(--white, #fff);
      font-weight: 600;
    }
  }

  .date-line {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--white, #fff);
    letter-spacing: 0.04em;
    margin-top: 0.35rem;

    .separator {
      color: rgba(72, 214, 76, 0.5);
    }
  }

  @media (max-width: 991px) {
    text-align: center;

    h1 {
      font-size: 3.25rem;
      line-height: 1.05;
    }

    .hero-subtitle {
      font-size: 1.5rem;
    }

    .tagline {
      font-size: 0.95rem;
      margin: 0 auto;
    }

    .date-line {
      justify-content: center;
      font-size: 0.85rem;
    }
  }
`;

/* ═══════════════════════════════════════════
   CTA BUTTONS
   ═══════════════════════════════════════════ */

export const HeroCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
  margin-top: 0.5rem;

  .button-row {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }

  .price-subtext {
    font-size: 0.75rem;
    color: #6b6b6b;
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-left: 0.15rem;
    line-height: 1.5;
  }

  @media (max-width: 991px) {
    align-items: center;
    .button-row {
      flex-direction: column;
      gap: 0.75rem;
    }
    .price-subtext {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const GrabButton = styled.a`
  background: var(--emerald, #48d64c);
  color: #070606 !important;
  border-radius: 0.5rem;
  border: none;
  padding: 0.9rem 2.25rem;
  font-size: 0.95rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 20px rgba(72, 214, 76, 0.25);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(72, 214, 76, 0.4);
    background: #5ce060;

    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 12px rgba(72, 214, 76, 0.2);
  }

  @media (max-width: 991px) {
    width: 100%;
    max-width: 20rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.75rem;
    font-size: 0.9rem;
  }
`;

export const SecondaryButton = styled.a`
  color: #a0a0a0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
  padding: 0.85rem 1.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  background: transparent;
  letter-spacing: 0.02em;

  &:hover {
    color: var(--white, #fff);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 991px) {
    width: 100%;
    max-width: 20rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
  }
`;

/* ═══════════════════════════════════════════
   TICKET LABEL
   ═══════════════════════════════════════════ */

export const TicketLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: -0.5rem;
`;

/* ═══════════════════════════════════════════
   TICKET ARTWORK (scaled down ~15%)
   ═══════════════════════════════════════════ */

export const HeroCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 420px;
  height: 420px;
  margin: 0 auto;
  animation: floatAnimation 5s ease-in-out infinite;

  @keyframes floatAnimation {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-14px); }
    100% { transform: translateY(0px); }
  }

  /* Ambient glow behind tickets */
  &::before {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(57, 255, 20, 0.18) 0%, rgba(72, 214, 76, 0.06) 40%, transparent 70%);
    filter: blur(60px);
    z-index: 0;
    pointer-events: none;
    animation: pulseGlow 4s ease-in-out infinite alternate;
  }

  /* Secondary soft glow ring */
  &::after {
    content: '';
    position: absolute;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(72, 214, 76, 0.08) 0%, transparent 70%);
    filter: blur(40px);
    z-index: 0;
    pointer-events: none;
  }

  @keyframes pulseGlow {
    0% { opacity: 0.7; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1.05); }
  }

  @media (max-width: 1024px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 576px) {
    width: 260px;
    height: 260px;
  }
`;

export const HeroLeftImage = styled(Image)`
  width: 11.5rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(-46px, 10px) rotate(-8deg) scale(0.9);
  transform-origin: center center;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
  filter: brightness(0.6) contrast(0.95) blur(0.5px);
  z-index: 1;

  &.active {
    transform: translate(-50%, -50%) translate(-135px, 19px) rotate(-18deg) scale(1);
    filter: brightness(1.05) contrast(1) blur(0px) drop-shadow(0 20px 40px rgba(72, 214, 76, 0.4));
  }

  @media (max-width: 1024px) {
    width: 9.5rem;
    transform: translate(-50%, -50%) translate(-38px, 7px) rotate(-8deg) scale(0.9);

    &.active {
      transform: translate(-50%, -50%) translate(-110px, 13px) rotate(-16deg) scale(1);
    }
  }

  @media (max-width: 576px) {
    width: 7rem;
    transform: translate(-50%, -50%) translate(-23px, 4px) rotate(-8deg) scale(0.9);

    &.active {
      transform: translate(-50%, -50%) translate(-70px, 8px) rotate(-16deg) scale(1);
    }
  }
`;

export const HeroMiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
  width: 215px;
  height: auto;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
  filter: drop-shadow(0 16px 35px rgba(0, 0, 0, 0.6));

  &:hover {
    transform: scale(1.04);
    filter: drop-shadow(0 24px 50px rgba(72, 214, 76, 0.35)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 1024px) {
    width: 178px;
  }

  @media (max-width: 576px) {
    width: 125px;
  }
`;

export const HeroRightImage = styled(Image)`
  width: 11.5rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(46px, 10px) rotate(8deg) scale(0.9);
  transform-origin: center center;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
  filter: brightness(0.6) contrast(0.95) blur(0.5px);
  z-index: 2;

  &.active {
    transform: translate(-50%, -50%) translate(135px, 19px) rotate(18deg) scale(1);
    filter: brightness(1.05) contrast(1) blur(0px) drop-shadow(0 20px 40px rgba(59, 130, 246, 0.4));
  }

  @media (max-width: 1024px) {
    width: 9.5rem;
    transform: translate(-50%, -50%) translate(38px, 7px) rotate(8deg) scale(0.9);

    &.active {
      transform: translate(-50%, -50%) translate(110px, 13px) rotate(16deg) scale(1);
    }
  }

  @media (max-width: 576px) {
    width: 7rem;
    transform: translate(-50%, -50%) translate(23px, 4px) rotate(8deg) scale(0.9);

    &.active {
      transform: translate(-50%, -50%) translate(70px, 8px) rotate(16deg) scale(1);
    }
  }
`;
