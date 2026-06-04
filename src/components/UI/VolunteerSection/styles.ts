'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  padding: 8rem 0;
  position: relative;
  background: var(--Background, #070606);
  overflow: hidden;
`;

export const GlowAccent = styled.div`
  position: absolute;
  top: 20%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(72, 214, 76, 0.08) 0%, rgba(72, 214, 76, 0) 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--white, #fff);

    span {
      background: linear-gradient(135deg, var(--emerald, #48d64c) 0%, #2b892e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--link-color, #bdbdbd);
    line-height: 1.6;
    max-width: 35rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.05rem;
    }
  }
`;

export const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const RoleCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--white, #fff);
  }

  p {
    font-size: 0.875rem;
    color: #8c8c8c;
    line-height: 1.4;
  }

  &:hover {
    background: rgba(72, 214, 76, 0.04);
    border-color: rgba(72, 214, 76, 0.2);
    transform: translateY(-2px);

    h3 {
      color: var(--emerald, #48d64c);
    }
  }
`;

export const RightPanel = styled.div`
  width: 100%;
`;

export const FormCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.5rem;
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    border-radius: 1rem;
  }
`;

export const FormIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1.25rem;
  background: rgba(72, 214, 76, 0.08);
  border: 1px solid rgba(72, 214, 76, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--emerald, #48d64c);
  margin-bottom: 0.25rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--white, #fff);
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  color: var(--link-color, #bdbdbd);
  line-height: 1.6;
  margin: 0;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0.5rem 0;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled.span`
  color: var(--emerald, #48d64c);
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.15rem;
`;

export const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.5;
  margin: 0 !important;

  strong {
    color: var(--white, #fff);
    font-weight: 600;
  }
`;

export const SubmitButton = styled(motion.a)`
  background: linear-gradient(135deg, var(--emerald, #48d64c) 0%, #2b892e 100%);
  color: var(--white, #fff);
  border: none;
  border-radius: 0.75rem;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(72, 214, 76, 0.2);
  text-decoration: none;

  &:hover {
    box-shadow: 0 6px 20px rgba(72, 214, 76, 0.35);
    color: var(--white, #fff);
  }
`;

