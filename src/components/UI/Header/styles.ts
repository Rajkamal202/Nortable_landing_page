'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.header<{ $scrolled?: boolean }>`
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: max-content;
  max-width: 95%;
  pointer-events: none;
  transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $scrolled }) =>
    $scrolled &&
    `
    top: 0.75rem;
  `}
`;

export const Inner = styled.div<{ $scrolled?: boolean }>`
  pointer-events: auto;
  background: rgba(28, 28, 28, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  padding: 0.45rem 0.5rem 0.45rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $scrolled }) =>
    $scrolled &&
    `
    background: rgba(12, 12, 12, 0.85);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(72, 214, 76, 0.04);
  `}

  @media (max-width: 768px) {
    gap: 1.25rem;
    padding: 0.35rem 0.35rem 0.35rem 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  background: var(--emerald, #48d64c);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(72, 214, 76, 0.2);

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(72, 214, 76, 0.4);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    color: #a0a0a0;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    padding: 0.4rem 0.85rem;
    border-radius: 9999px;
    position: relative;
    letter-spacing: 0.01em;

    &:hover {
      color: var(--white, #ffffff);
      background: rgba(255, 255, 255, 0.05);
    }

    &:active {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CallToActions = styled.a`
  background: var(--emerald, #48d64c);
  color: #070606 !important;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.5rem 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-decoration: none;
  flex-shrink: 0;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 12px rgba(72, 214, 76, 0.2);

  &:hover {
    background: #5ce060;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(72, 214, 76, 0.35);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 2px 8px rgba(72, 214, 76, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;
