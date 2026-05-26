'use client';

import { styled, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  padding: 2rem;
`;

export const PaymentCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  max-width: 480px;
  width: 100%;
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (max-width: 520px) {
    padding: 1.5rem;
  }
`;

export const PaymentHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9375rem;
    color: var(--link-color);
  }
`;

export const PriceTag = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(43, 137, 46, 0.2) 0%, rgba(72, 214, 76, 0.1) 100%);
  border: 1px solid rgba(72, 214, 76, 0.3);
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  .currency {
    display: block;
    font-size: 0.75rem;
    color: var(--emerald);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
  }

  .amount {
    display: block;
    font-size: 3rem;
    font-weight: 700;
    color: var(--white);
    line-height: 1;

    &::before {
      content: 'Rs. ';
      font-size: 1.5rem;
      vertical-align: top;
    }
  }

  .label {
    display: block;
    font-size: 0.875rem;
    color: var(--link-color);
    margin-top: 0.5rem;
  }
`;

export const PaymentDetails = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.875rem;

  span:first-child {
    color: var(--link-color);
  }

  span:last-child {
    color: var(--white);
    font-weight: 500;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  &.total {
    padding-top: 1rem;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    span:last-child {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--emerald);
    }
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  svg {
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PaymentForm = styled.div`
  .back-link {
    display: block;
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    color: var(--link-color);
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0.75rem;
    margin-top: 0.75rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--white);
    }
  }
`;

export const CardInputGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--link-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }
`;

export const CardInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--white);
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--link-color);
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: var(--emerald);
    box-shadow: 0 0 0 3px rgba(72, 214, 76, 0.1);
  }
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const PayButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 100%);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    box-shadow: 0 10px 30px rgba(43, 137, 46, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .processing {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    span {
      display: flex;
    }
  }
`;

export const SecureNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  svg {
    color: var(--emerald);
    flex-shrink: 0;
  }

  span {
    font-size: 0.75rem;
    color: var(--link-color);
  }
`;
