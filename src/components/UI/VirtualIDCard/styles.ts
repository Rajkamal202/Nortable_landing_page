'use client';

import { styled, keyframes, css } from 'styled-components';

const glowGreen = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(72, 214, 76, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(72, 214, 76, 0.5));
  }
`;

const glowBlue = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.5));
  }
`;

export const IDCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  padding: 2rem;
  position: relative;
`;

export const SuccessOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
`;

export const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 2px;
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TicketCard = styled.div<{ $ticketType?: 'solo' | 'team' }>`
  position: relative;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 460px;
  height: 270px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
  
  ${props => props.$ticketType === 'solo' ? css`
    animation: ${glowGreen} 3s ease-in-out infinite;
  ` : css`
    animation: ${glowBlue} 3s ease-in-out infinite;
  `}

  @media (max-width: 640px) {
    width: 100%;
    max-width: 340px;
    height: 200px;
  }
`;

export const TicketContent = styled.div`
  flex: 1;
  padding: 2rem 2rem;
  padding-left: 2.5rem;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 1.5rem;
    padding-left: 1.75rem;
    padding-right: 75px;
  }
`;

export const EventBranding = styled.div`
  span {
    display: block;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0.125rem;
  }

  @media (max-width: 640px) {
    span {
      font-size: 0.5rem;
    }
  }
`;

export const EventTitle = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0.02em;
  margin-top: 0.125rem;

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const ParticipantName = styled.h2`
  font-size: clamp(1rem, 3vw, 1.625rem);
  font-weight: 800;
  color: rgba(0, 0, 0, 0.95);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    font-size: clamp(0.75rem, 3.5vw, 1rem);
    line-height: 1.15;
  }
`;

export const EventDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.03em;
  margin-top: auto;

  .dot {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    font-size: 0.5625rem;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
`;

export const RegistrationCode = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  .label {
    display: block;
    font-size: 0.75rem;
    color: var(--link-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .code {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: monospace;
    color: var(--white);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    letter-spacing: 0.1em;
  }

  @media (max-width: 640px) {
    .code {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export const QRSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .qr-container {
    display: inline-block;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 0.8125rem;
    color: var(--link-color);
    margin-top: 0.75rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DownloadButton = styled.button<{ $ticketType?: 'solo' | 'team' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: ${props => props.$ticketType === 'solo' 
    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' 
    : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$ticketType === 'solo'
      ? '0 10px 30px rgba(34, 197, 94, 0.3)'
      : '0 10px 30px rgba(59, 130, 246, 0.3)'};
  }
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--white);
    background: rgba(255, 255, 255, 0.05);
  }
`;
