'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: 8.25rem 0 10rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6.25rem;

  h1 {
    max-width: 56rem;
    font-size: 6rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--white);
  }

  @media (max-width: 768px) {
    gap: 3.5rem;
    h1 {
      font-size: 2.75rem;
    }
  }
`;

export const HeaderText = styled.h1`
  max-width: 56rem;
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const AccordionItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.01);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(72, 214, 76, 0.2);
    background: rgba(72, 214, 76, 0.015);
  }
`;

export const Question = styled(motion.div)<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--white);
  transition: color 0.2s ease;

  &:hover {
    color: var(--emerald);
  }

  img {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 1rem;
  }
`;

export const Answer = styled(motion.div)`
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 1rem;
`;
