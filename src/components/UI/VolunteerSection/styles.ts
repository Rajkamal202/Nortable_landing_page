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

export const FormCard = styled(motion.form)`
  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--light-gray, #dcdcdc);
  letter-spacing: -0.01em;

  span {
    color: var(--emerald, #48d64c);
  }
`;

export const InputWrapper = styled.div<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ $error }) => ($error ? '#ea4335' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 0.75rem;
  padding: 0 1rem;
  height: 3.25rem;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: var(--white, #fff);

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
    color: #8c8c8c;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--white, #fff);
    font-size: 0.95rem;

    &::placeholder {
      color: #5a5a5a;
    }
  }

  &:focus-within {
    border-color: ${({ $error }) => ($error ? '#ea4335' : 'var(--emerald, #48d64c)')};
    box-shadow: ${({ $error }) =>
      $error ? '0 0 10px rgba(234, 67, 53, 0.1)' : '0 0 15px rgba(72, 214, 76, 0.15)'};
    background: rgba(0, 0, 0, 0.35);

    svg {
      color: var(--emerald, #48d64c);
    }
  }
`;

export const Select = styled.select<{ $error?: boolean }>`
  width: 100%;
  height: 3.25rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ $error }) => ($error ? '#ea4335' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 0.75rem;
  padding: 0 1rem;
  color: var(--white, #fff);
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238c8c8c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:focus {
    border-color: ${({ $error }) => ($error ? '#ea4335' : 'var(--emerald, #48d64c)')};
    box-shadow: ${({ $error }) =>
      $error ? '0 0 10px rgba(234, 67, 53, 0.1)' : '0 0 15px rgba(72, 214, 76, 0.15)'};
    background-color: rgba(0, 0, 0, 0.35);
  }

  option {
    background-color: #111;
    color: #fff;
  }
`;

export const TextArea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  min-height: 7.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ $error }) => ($error ? '#ea4335' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 0.75rem;
  padding: 1rem;
  color: var(--white, #fff);
  font-size: 0.95rem;
  outline: none;
  resize: vertical;
  line-height: 1.5;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::placeholder {
    color: #5a5a5a;
  }

  &:focus {
    border-color: ${({ $error }) => ($error ? '#ea4335' : 'var(--emerald, #48d64c)')};
    box-shadow: ${({ $error }) =>
      $error ? '0 0 10px rgba(234, 67, 53, 0.1)' : '0 0 15px rgba(72, 214, 76, 0.15)'};
    background: rgba(0, 0, 0, 0.35);
  }
`;

export const ErrorText = styled.span`
  color: #ea4335;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
`;

export const SubmitButton = styled(motion.button)`
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

  &:hover {
    box-shadow: 0 6px 20px rgba(72, 214, 76, 0.35);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);

  svg {
    width: 4rem;
    height: 4rem;
    color: var(--emerald, #48d64c);
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--white, #fff);
  }

  p {
    font-size: 1.1rem;
    color: var(--link-color, #bdbdbd);
    line-height: 1.6;
    max-width: 25rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    h2 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const SuccessButton = styled.button`
  background: transparent;
  color: var(--emerald, #48d64c);
  border: 1px solid var(--emerald, #48d64c);
  border-radius: 0.75rem;
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(72, 214, 76, 0.05);
  }
`;

export const FormSectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--white, #fff);
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.5rem;
  width: 100%;
  
  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 16px;
    background: var(--emerald, #48d64c);
    border-radius: 2px;
  }
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SubText = styled.span`
  font-size: 0.75rem;
  color: #7c7c7c;
  line-height: 1.35;
  margin-top: 0.15rem;
  font-weight: 400;
`;
