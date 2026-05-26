'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: max-content;
  max-width: 95%;
  pointer-events: none;
`;

export const Inner = styled.div`
  pointer-events: auto;
  background: rgba(28, 28, 28, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 0.4rem 0.4rem 0.4rem 0.6rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);

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
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    background: #ffffff;
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: #e0e0e0;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: var(--white, #ffffff);
      opacity: 0.85;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Auto collapse middle links on mobile to preserve layout ratio */
  }
`;

export const CallToActions = styled.a`
  background: #ffffff;
  color: #1c1c1c !important;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    background: #eaeaea;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;
