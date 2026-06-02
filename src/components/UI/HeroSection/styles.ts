'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
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
  max-width: 80rem;
  margin: 0 auto;
  background-position: top center;
  background-size: contain;
  position: relative;
  z-index: 2;
  padding: 3rem 0;
  width: 90%;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const HeroCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  animation: floatAnimation 4s ease-in-out infinite;

  @keyframes floatAnimation {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }

  &::before {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, transparent 70%);
    filter: blur(100px);
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 576px) {
    width: 280px;
    height: 280px;
  }
`;

export const HeroLeftImage = styled(Image)`
  width: 13.5rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(-50px, 10px) rotate(-8deg) scale(0.92);
  transform-origin: center center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: brightness(0.65) contrast(0.95) blur(0.5px);
  z-index: 1;

  &.active {
    transform: translate(-50%, -50%) translate(-155px, 20px) rotate(-20deg) scale(1);
    filter: brightness(1.05) contrast(1) blur(0px) drop-shadow(0 15px 30px rgba(72, 214, 76, 0.45));
  }
  
  @media (max-width: 1024px) {
    width: 11rem;
    transform: translate(-50%, -50%) translate(-40px, 8px) rotate(-8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(-125px, 15px) rotate(-18deg) scale(1);
    }
  }

  @media (max-width: 576px) {
    width: 8rem;
    transform: translate(-50%, -50%) translate(-25px, 5px) rotate(-8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(-80px, 10px) rotate(-18deg) scale(1);
    }
  }
`;

export const HeroMiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
  width: 250px;
  height: auto;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.5));

  &:hover {
    transform: scale(1.03);
    filter: drop-shadow(0 20px 40px rgba(249, 115, 22, 0.55));
  }
  
  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 140px;
  }
`;

export const HeroRightImage = styled(Image)`
  width: 13.5rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(50px, 10px) rotate(8deg) scale(0.92);
  transform-origin: center center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: brightness(0.65) contrast(0.95) blur(0.5px);
  z-index: 2;

  &.active {
    transform: translate(-50%, -50%) translate(155px, 20px) rotate(20deg) scale(1);
    filter: brightness(1.05) contrast(1) blur(0px) drop-shadow(0 15px 30px rgba(59, 130, 246, 0.45));
  }
  
  @media (max-width: 1024px) {
    width: 11rem;
    transform: translate(-50%, -50%) translate(40px, 8px) rotate(8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(125px, 15px) rotate(18deg) scale(1);
    }
  }

  @media (max-width: 576px) {
    width: 8rem;
    transform: translate(-50%, -50%) translate(25px, 5px) rotate(8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(80px, 10px) rotate(18deg) scale(1);
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;
  position: relative;
  text-align: left;

  h1 {
    font-size: 5.5rem;
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
    max-width: 38rem;
    color: #bdbdbd;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 991px) {
    text-align: center;
    h1 {
      font-size: 3.5rem;
      line-height: 1.15;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.55;
      margin: 0 auto;
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

export const CountdownBadge = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 2px solid var(--emerald, #48d64c);
  border-radius: 0.25rem;
  padding: 0.55rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'SF Pro Display', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 900;
  color: var(--white, #fff);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 4px 4px 0px var(--emerald, #48d64c);
  width: fit-content;

  span.timer {
    color: var(--emerald, #48d64c);
    font-size: 0.95rem;
    font-weight: 900;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

export const HeroCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;

  .price-subtext {
    font-size: 0.8rem;
    color: #8c8c8c;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-left: 0.25rem;
  }

  @media (max-width: 991px) {
    align-items: center;
    .price-subtext {
      margin-left: 0;
    }
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
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 4px 4px 0px #000000;
  text-decoration: none;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px #000000;
    background: #ffffff;
    border-color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
  }
`;

