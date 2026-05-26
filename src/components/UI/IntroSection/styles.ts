'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto 7.77rem;
  width: fit-content;
`;

export const LeftImage = styled(Image)`
  width: 21.875rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(-80px, 15px) rotate(-10deg) scale(0.92);
  transform-origin: center center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: brightness(0.6) contrast(0.95) blur(0.5px);
  z-index: 1;

  &.active {
    transform: translate(-50%, -50%) translate(-250px, 30px) rotate(-22deg) scale(1);
    filter: brightness(1) contrast(1) blur(0px) drop-shadow(0 20px 40px rgba(249, 115, 22, 0.4));
  }
  
  @media (max-width: 768px) {
    width: 14rem;
    transform: translate(-50%, -50%) translate(-50px, 10px) rotate(-8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(-140px, 20px) rotate(-18deg) scale(1);
    }
  }
`;

export const MiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
  width: 400px;
  height: auto;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.45));

  &:hover {
    transform: scale(1.03);
    filter: drop-shadow(0 25px 50px rgba(59, 130, 246, 0.5));
  }
  
  @media (max-width: 768px) {
    width: 260px;
  }
`;

export const RightImage = styled(Image)`
  width: 21.875rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(80px, 15px) rotate(10deg) scale(0.92);
  transform-origin: center center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  filter: brightness(0.6) contrast(0.95) blur(0.5px);
  z-index: 2;

  &.active {
    transform: translate(-50%, -50%) translate(250px, 30px) rotate(22deg) scale(1);
    filter: brightness(1) contrast(1) blur(0px) drop-shadow(0 20px 40px rgba(168, 85, 247, 0.4));
  }
  
  @media (max-width: 768px) {
    width: 14rem;
    transform: translate(-50%, -50%) translate(50px, 10px) rotate(8deg) scale(0.92);
    
    &.active {
      transform: translate(-50%, -50%) translate(140px, 20px) rotate(18deg) scale(1);
    }
  }
`;
