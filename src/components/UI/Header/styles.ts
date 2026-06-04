'use client';

import { styled, keyframes } from 'styled-components';

export const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

export const Inner = styled.div<{ $scrolled?: boolean; $menuOpen?: boolean }>`
  pointer-events: auto;
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 0.45rem 0.5rem 0.45rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $scrolled }) =>
    $scrolled &&
    `
    background: rgba(10, 10, 10, 0.85);
    border-color: rgba(72, 214, 76, 0.15);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(72, 214, 76, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  `}

  @media (max-width: 768px) {
    gap: 0;
    padding: 0.35rem 0.5rem 0.35rem 0.75rem;
    width: 90vw;
    max-width: 400px;
    flex-wrap: wrap;
    border-radius: ${({ $menuOpen }) => ($menuOpen ? '24px' : '9999px')};
  }
`;

export const LogoContainer = styled.div`
  background: linear-gradient(135deg, #57eb5b 0%, #209d24 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  flex-shrink: 0;
  box-shadow: 0 0 14px rgba(72, 214, 76, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 24px rgba(72, 214, 76, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Nav = styled.nav<{ $menuOpen?: boolean }>`
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

    &::after {
      content: '';
      position: absolute;
      bottom: 0.15rem;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: #48d64c;
      box-shadow: 0 0 8px #48d64c;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
      opacity: 0;
    }

    &:hover::after {
      transform: translateX(-50%) scaleX(1);
      opacity: 1;
    }

    &:hover {
      color: var(--white, #ffffff);
      background: rgba(255, 255, 255, 0.03);
    }

    &:active {
      background: rgba(255, 255, 255, 0.06);
    }
  }

  @media (max-width: 768px) {
    display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    padding: 0.75rem 0 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    margin-top: 0.5rem;
    order: 3;

    a {
      width: 100%;
      text-align: center;
      padding: 0.6rem 0;
      font-size: 0.95rem;
      animation: ${fadeInSlide} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;

      &:nth-child(1) { animation-delay: 0.05s; }
      &:nth-child(2) { animation-delay: 0.1s; }
      &:nth-child(3) { animation-delay: 0.15s; }
      &:nth-child(4) { animation-delay: 0.2s; }

      &::after {
        display: none;
      }
    }
  }
`;

export const CallToActions = styled.a`
  background: linear-gradient(135deg, #48d64c 0%, #209d24 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  box-shadow: 0 4px 15px rgba(72, 214, 76, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25);

  &:hover {
    background: linear-gradient(135deg, #57eb5b 0%, #24a828 100%);
    transform: translateY(-1.5px) scale(1.02);
    box-shadow: 0 6px 20px rgba(72, 214, 76, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0px) scale(1);
    box-shadow: 0 2px 8px rgba(72, 214, 76, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
    margin-left: auto;
  }
`;

export const MenuButton = styled.button<{ $menuOpen?: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 0.75rem;
    z-index: 10;
    outline: none;

    .line {
      height: 2px;
      background-color: var(--white, #ffffff);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .line-1 {
      width: 100%;
      transform: ${({ $menuOpen }) => ($menuOpen ? 'translateY(6px) rotate(45deg)' : 'none')};
    }

    .line-2 {
      width: ${({ $menuOpen }) => ($menuOpen ? '0' : '70%')};
      margin-left: auto;
      opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
    }

    .line-3 {
      width: 100%;
      transform: ${({ $menuOpen }) => ($menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none')};
    }

    &:hover .line-2 {
      width: ${({ $menuOpen }) => ($menuOpen ? '0' : '100%')};
    }
  }
`;
