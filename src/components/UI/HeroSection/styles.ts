'use client';

import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

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
    600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(72, 214, 76, 0.05) 0%,
    transparent 65%
  );
  transition: opacity 0.5s ease;
`;

export const GlowBg = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.85;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    mix-blend-mode: screen;
  }

  /* Emerald Orb */
  &::before {
    top: 5%;
    left: 15%;
    width: 380px;
    height: 380px;
    background: radial-gradient(circle, rgba(72, 214, 76, 0.1) 0%, rgba(72, 214, 76, 0) 70%);
    animation: floatGreen 12s ease-in-out infinite alternate;
  }

  /* Teal/Cyan Orb */
  &::after {
    bottom: 5%;
    right: 15%;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(0, 242, 254, 0.07) 0%, rgba(0, 242, 254, 0) 70%);
    animation: floatTeal 15s ease-in-out infinite alternate;
  }

  @keyframes floatGreen {
    0% { transform: translate(-20px, -20px) scale(0.9); }
    100% { transform: translate(20px, 20px) scale(1.1); }
  }

  @keyframes floatTeal {
    0% { transform: translate(25px, 15px) scale(1.1); }
    100% { transform: translate(-25px, -15px) scale(0.9); }
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 250px;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  position: relative;
  z-index: 2;
  padding: 3rem 0;
  width: 90%;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.45rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 2;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    animation: shimmer 6s infinite ease-in-out;
  }

  @keyframes shimmer {
    0% { left: -150%; }
    50% { left: 150%; }
    100% { left: 150%; }
  }

  &:hover {
    border-color: rgba(72, 214, 76, 0.3);
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }

  span {
    color: var(--white, #ffffff);
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
`;

export const IndicatorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--emerald, #48d64c);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 10px var(--emerald, #48d64c);
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid var(--emerald, #48d64c);
    animation: pulseGlow 1.8s ease-out infinite;
  }

  @keyframes pulseGlow {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  z-index: 2;
  position: relative;

  h1 {
    font-size: 6.5rem;
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

  p {
    max-width: 42rem;
    color: #bdbdbd;
    font-size: 1.35rem;
    font-weight: 400;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
    padding-bottom: 2rem;
    h1 {
      font-size: 3rem;
      line-height: 1.15;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.55;
    }
  }
`;

export const CenterOrb = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.03) 0%, rgba(72, 214, 76, 0.03) 50%, transparent 70%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 1;
  animation: rotateGlow 25s linear infinite;

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
  background: linear-gradient(90deg, transparent, rgba(72, 214, 76, 0.3) 50%, transparent);
  pointer-events: none;
  z-index: 2;
`;

/* Dynamic Scrolling Marquee Ticker Banners (Apple/MTW style) */
export const MarqueeContainer = styled.div<{ $bottom?: boolean }>`
  width: 100vw;
  background: #000000;
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  padding: 0.95rem 0;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  position: relative;
  z-index: 5;
  margin-top: ${({ $bottom }) => ($bottom ? '4rem' : '0')};
  margin-bottom: ${({ $bottom }) => ($bottom ? '0' : '2.5rem')};
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: scrollMarquee 25s linear infinite;

  @keyframes scrollMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export const MarqueeText = styled.span`
  font-family: 'SF Pro Display', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 900;
  color: var(--white, #fff);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-right: 3rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  span.highlight {
    background: var(--emerald, #48d64c);
    color: #070606;
    padding: 0.2rem 0.6rem;
    border-radius: 0.25rem;
    font-weight: 900;
  }

  span.star {
    color: var(--emerald, #48d64c);
    font-size: 1.3rem;
  }
`;

/* Premium Bottom Event Info Bar (Structural adaptation of MTW yellow card, styled in green/white Neo-brutalism) */
export const BottomInfoBar = styled.div`
  width: 100%;
  margin: 3rem auto 0;
  background: rgba(12, 12, 12, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 2px solid var(--emerald, #48d64c);
  border-radius: 0.5rem;
  padding: 1.75rem 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 5;
  box-shadow: 6px 6px 0px var(--emerald, #48d64c);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
    text-align: center;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;

  .label {
    font-size: 0.8rem;
    font-weight: 800;
    color: #8c8c8c;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .value {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--white, #fff);
    letter-spacing: -0.01em;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const InfoCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-end;

  .price-subtext {
    font-size: 0.75rem;
    color: #8c8c8c;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const CountdownBadge = styled.div`
  position: absolute;
  top: -16px;
  right: 3.5rem;
  background: #000000;
  border: 2px solid var(--emerald, #48d64c);
  border-radius: 0.25rem;
  padding: 0.45rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'SF Pro Display', system-ui, sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  color: var(--white, #fff);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 4px 4px 0px var(--emerald, #48d64c);

  span.timer {
    color: var(--emerald, #48d64c);
    font-size: 0.9rem;
    font-weight: 900;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
  }
`;

export const GrabButton = styled.a`
  background: var(--emerald, #48d64c);
  color: #070606 !important;
  border-radius: 0.25rem;
  border: 2px solid #000000;
  padding: 0.85rem 2.25rem;
  font-size: 1.05rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  box-shadow: 3px 3px 0px #000000;
  text-decoration: none;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px #000000;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
  }
`;

