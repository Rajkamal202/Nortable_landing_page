'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--white);
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  p {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }

  &:hover {
    background: rgba(72, 214, 76, 0.03);
    border-color: rgba(72, 214, 76, 0.2);
    transform: translateY(-2px);
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--white);
  }
`;

export const BriefNote = styled.div`
  padding: 8.25rem 4.5rem;
  background: var(--emerald);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
  width: 100%;

  h1 {
    color: var(--Background, #070606);
    font-size: 5rem;
    font-weight: 900;
    max-width: 1100px;
    letter-spacing: -0.04em;
    line-height: 1.05;
    text-transform: uppercase;
    font-family: 'SF Pro Display', system-ui, sans-serif;
  }

  div:nth-of-type(2) p {
    color: rgba(7, 6, 6, 0.82);
    font-size: 1.6rem;
    font-weight: 600;
    max-width: 850px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }

  /* Custom CTA button style */
  .cta-wrapper {
    margin-top: 1rem;
  }

  .cta-btn {
    background: var(--Background, #070606);
    color: var(--white) !important;
    border-radius: 0.25rem;
    border: 2px solid var(--Background, #070606);
    padding: 1rem 3rem;
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.15);
    text-decoration: none;

    &:hover {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
      background: #ffffff;
      color: #070606 !important;
      border-color: #ffffff;
    }
  }

  @media (max-width: 1024px) {
    padding: 7rem 2.5rem;
    gap: 2rem;

    h1 {
      font-size: 3.5rem;
    }

    div:nth-of-type(2) p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
    gap: 1.5rem;

    h1 {
      font-size: 2.25rem;
      line-height: 1.1;
    }

    div:nth-of-type(2) p {
      font-size: 1.05rem;
      line-height: 1.4;
    }

    .cta-btn {
      padding: 0.85rem 2.25rem;
      font-size: 0.95rem;
    }
  }
`;
