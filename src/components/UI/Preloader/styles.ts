'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background, #070606);
  color: var(--white, #fff);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 40rem;
  padding: 2rem;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;

  img {
    width: 4.5rem;
    height: 4.5rem;
    filter: drop-shadow(0 0 20px rgba(72, 214, 76, 0.4));
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.02);
    border-top-color: var(--emerald, #48d64c);
    animation: spin 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.4em;
  text-indent: 0.4em;
  color: var(--white, #fff);
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(135deg, #fff 30%, #a3a3a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.3em;
    text-indent: 0.3em;
  }
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
  color: var(--emerald, #48d64c);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 0.4em;
    text-indent: 0.4em;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 16rem;
  margin-top: 1rem;
`;

export const Number = styled.span`
  font-family: monospace;
  font-size: 1.25rem;
  font-weight: 500;
  color: #8c8c8c;
  letter-spacing: 0.1em;

  span {
    color: var(--white, #fff);
    font-weight: 600;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: linear-gradient(90deg, #2b892e 0%, var(--emerald, #48d64c) 100%);
  box-shadow: 0 0 10px rgba(72, 214, 76, 0.5);
  transition: width 0.1s ease-out;
`;

export const SecondOverlay = styled.div`
  background: var(--emerald, #48d64c);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
`;

