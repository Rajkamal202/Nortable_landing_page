'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 6rem;
  position: relative;
  overflow: hidden;
  background: transparent;

  /* Ambient brand glow layered behind the cards */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 700px;
    background: radial-gradient(circle, rgba(72, 214, 76, 0.05) 0%, rgba(72, 214, 76, 0.01) 50%, transparent 80%);
    filter: blur(120px);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 4rem 0 6.25rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 2.5rem 0 4rem 0;
  }
`;

export const Header = styled.header`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h1 {
    color: var(--white, #ffffff);
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    color: var(--link-color, #bdbdbd);
    line-height: 1.6;
    max-width: 38rem;
    margin: 0 auto;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.05rem;
      line-height: 1.5;
    }
  }
`;

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const Pillar = styled.div`
  background: rgba(12, 16, 13, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 0.75rem;
  padding: 3rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  min-height: 28rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease,
              background-color 0.4s ease,
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 10%, rgba(72, 214, 76, 0.04) 0%, transparent 60%);
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(72, 214, 76, 0.22);
    background: rgba(14, 20, 16, 0.75);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 
                0 0 35px rgba(72, 214, 76, 0.02), 
                inset 0 0 20px rgba(72, 214, 76, 0.02);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 991px) {
    min-height: auto;
    padding: 2.5rem 1.75rem;
  }
`;

export const PillarHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  z-index: 2;
`;

export const PillarNumber = styled.span`
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--emerald, #48d64c);
  letter-spacing: 0.1em;
  font-family: 'SF Pro Display', system-ui, sans-serif;
  text-shadow: 0 0 10px rgba(72, 214, 76, 0.15);
`;

export const PillarTitle = styled.h2`
  font-size: 1.45rem;
  font-weight: 900;
  color: var(--white, #fff);
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

export const BenefitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  position: relative;
  z-index: 2;
`;

export const BenefitItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const BenefitStar = styled.span`
  color: var(--emerald, #48d64c);
  font-size: 1.15rem;
  line-height: 1.25rem;
  flex-shrink: 0;
  font-weight: 900;
`;

export const BenefitText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const BenefitItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white, #fff);
  letter-spacing: -0.01em;
  line-height: 1.3;
`;

export const BenefitItemDetails = styled.p`
  font-size: 0.925rem;
  color: var(--link-color, #bdbdbd);
  line-height: 1.55;
  font-weight: 400;
`;
