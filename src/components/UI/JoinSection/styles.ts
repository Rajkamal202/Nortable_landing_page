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
  margin: 0 auto 2.5rem;
  
  h1 {
    color: var(--white, #ffffff);
    font-size: 4.75rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  /* Highlight second line in brand gradient color */
  div:nth-child(2) h1 {
    background: linear-gradient(135deg, var(--emerald, #48d64c) 0%, #2b892e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const BentoCard = styled.div<{ $span?: number }>`
  /* Luxurious green-tinted dark glassmorphism */
  background: rgba(12, 16, 13, 0.7);
  border: 1px solid rgba(72, 214, 76, 0.08);
  border-radius: 0.75rem;
  padding: ${({ $span }) => ($span && $span > 1 ? '2.25rem' : '1.75rem 2rem')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: ${({ $span }) => ($span && $span > 1 ? '14.5rem' : '12.5rem')};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease,
              background-color 0.4s ease,
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  grid-column: span ${({ $span }) => $span || 1};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 10%, rgba(72, 214, 76, 0.05) 0%, transparent 60%);
    pointer-events: none;
    opacity: 0.4;
    transition: opacity 0.5s ease;
  }

  /* Featured Asymmetry & Visual Highlight */
  ${({ $span }) =>
    $span &&
    $span > 1 &&
    `
    background: linear-gradient(135deg, rgba(12, 16, 13, 0.7) 0%, rgba(72, 214, 76, 0.015) 100%);
    border-color: rgba(72, 214, 76, 0.22);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3), 0 0 25px rgba(72, 214, 76, 0.01), inset 0 0 12px rgba(72, 214, 76, 0.02);

    &::before {
      background: radial-gradient(circle at top left, rgba(72, 214, 76, 0.08) 0%, transparent 60%);
    }

    h3 {
      font-size: 1.6rem;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.65;
    }
  `}

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(72, 214, 76, 0.45);
    background: rgba(14, 20, 16, 0.85);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 
                0 0 35px rgba(72, 214, 76, 0.04), 
                inset 0 0 20px rgba(72, 214, 76, 0.04);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    grid-column: span 1;
    min-height: 12.5rem;
    padding: 1.75rem 2rem;

    h3 {
      font-size: 1.35rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(72, 214, 76, 0.05);
  border: 1px solid rgba(72, 214, 76, 0.15);
  border-radius: 0.5rem;
  padding: 0.5rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--emerald, #48d64c);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(72, 214, 76, 0.06);
  border: 1px solid rgba(72, 214, 76, 0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--white, #fff);
  letter-spacing: -0.01em;
`;

export const CardDetails = styled.p`
  font-size: 0.95rem;
  color: var(--link-color, #bdbdbd);
  line-height: 1.5;
  font-weight: 400;
`;
