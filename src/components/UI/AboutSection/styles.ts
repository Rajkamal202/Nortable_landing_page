'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(72, 214, 76, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.02) 0%, transparent 50%);

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 48rem;
  margin-bottom: 5rem;
  gap: 1rem;

  .category-pill {
    display: inline-flex;
    align-items: center;
    background: rgba(72, 214, 76, 0.08);
    border: 1px solid rgba(72, 214, 76, 0.2);
    border-radius: 9999px;
    padding: 0.35rem 0.95rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--emerald, #48d64c);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--white, #fff);
    text-transform: uppercase;

    span.highlight {
      color: var(--emerald, #48d64c);
    }
  }

  p.description {
    color: var(--link-color, #bdbdbd);
    font-size: 1.15rem;
    line-height: 1.6;
    font-weight: 400;
    max-width: 42rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: 2.25rem;
    }

    p.description {
      font-size: 1rem;
    }
  }
`;

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const PillarCard = styled.div`
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  /* Accent light effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    transition: background 0.4s ease;
  }

  .icon-wrapper {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white, #white);
    font-size: 1.5rem;
    transition: all 0.4s ease;

    svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--white, #fff);
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.95rem;
    color: var(--link-color, #bdbdbd);
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(72, 214, 76, 0.01);
    border-color: rgba(72, 214, 76, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 30px rgba(72, 214, 76, 0.02);

    &::before {
      background: linear-gradient(90deg, transparent, rgba(72, 214, 76, 0.4), transparent);
    }

    .icon-wrapper {
      background: rgba(72, 214, 76, 0.08);
      border-color: rgba(72, 214, 76, 0.25);
      color: var(--emerald, #48d64c);
      box-shadow: 0 0 15px rgba(72, 214, 76, 0.15);
    }
  }
`;

export const StatsSection = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 1.25rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  /* Grid overlay for stats */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .value {
    font-size: 3rem;
    font-weight: 800;
    color: var(--white, #fff);
    line-height: 1;
    letter-spacing: -0.03em;
    font-family: 'SF Pro Display', sans-serif;
    background: linear-gradient(to right, #fff, #b5b5b5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span.emerald {
      background: linear-gradient(to right, #48d64c, #2b892e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--link-color, #bdbdbd);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .subtext {
    font-size: 0.75rem;
    color: #6b6b6b;
  }
`;
