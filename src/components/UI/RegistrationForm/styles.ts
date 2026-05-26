'use client';

import { styled, keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
`;

export const TopHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const EarlyBirdButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 2rem;
  color: #22c55e;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: rgba(34, 197, 94, 0.25);
    border-color: #22c55e;
  }
`;

export const LoginButton = styled.button`
  padding: 0.625rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.375rem;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  flex: 1;
  min-height: 100vh;

  @media (max-width: 1200px) {
    grid-template-columns: 340px 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftPanel = styled.aside`
  background: #050505;
  border-right: 1px solid rgba(34, 197, 94, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25rem;
  color: #000;
`;

export const LogoText = styled.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.05em;
  }

  span {
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export const TaglinePill = styled.div`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 2rem;
  color: #22c55e;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  width: fit-content;
`;

export const HeroHeadline = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.75rem;

  .highlight {
    color: #22c55e;
  }

  @media (max-width: 1200px) {
    font-size: 1.75rem;
  }
`;

export const HeroSubtext = styled.p`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin-bottom: 1.25rem;
  max-width: 300px;
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.15);
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 197, 94, 0.1);
    border-color: rgba(34, 197, 94, 0.3);
  }
`;

export const StatIcon = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
    color: #22c55e;
  }
`;

export const StatContent = styled.div`
  .label {
    font-size: 0.625rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.125rem;
  }

  .value {
    font-size: 1.125rem;
    font-weight: 700;
    color: #22c55e;
    line-height: 1.2;
  }

  .subtext {
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 0.125rem;
  }
`;

export const CubeGraphic = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0.5rem 0;
  min-height: 150px;

  img {
    width: 100%;
    max-width: 220px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 40px rgba(34, 197, 94, 0.3));
    animation: ${float} 4s ease-in-out infinite;
  }
`;

export const BackedBySection = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;

  .label {
    font-size: 0.625rem;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  .logos {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;
      gap: 0.375rem;

      svg {
        width: 16px;
        height: 16px;
        opacity: 0.7;
      }
    }
  }
`;

export const RightPanel = styled.main`
  background: #0a0a0a;
  padding: 1.5rem 2.5rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-top: 4rem;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
`;

export const FormTitleSection = styled.div`
  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;

    .highlight {
      color: #22c55e;
    }
  }

  p {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const DecorativeGraphic = styled.div`
  position: absolute;
  top: -1rem;
  right: 0;
  width: 160px;
  height: 120px;
  opacity: 0.9;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.2));
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
  width: fit-content;
`;

export const StepItem = styled.div<{ $active: boolean; $completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  .number {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    background: ${({ $active, $completed }) =>
      $active || $completed ? '#22c55e' : 'rgba(255, 255, 255, 0.1)'};
    color: ${({ $active, $completed }) =>
      $active || $completed ? '#000' : 'rgba(255, 255, 255, 0.4)'};
    border: 2px solid ${({ $active, $completed }) =>
      $active || $completed ? '#22c55e' : 'rgba(255, 255, 255, 0.1)'};
  }

  .label {
    font-size: 0.8125rem;
    color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.4)')};
    font-weight: ${({ $active }) => ($active ? '500' : '400')};

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const StepLine = styled.div<{ $completed: boolean }>`
  height: 1px;
  width: 40px;
  background: ${({ $completed }) =>
    $completed ? '#22c55e' : 'rgba(255, 255, 255, 0.1)'};
  margin: 0 0.5rem;
  transition: all 0.3s ease;
`;

export const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;

  .required {
    color: #22c55e;
  }
`;

export const InputWrapper = styled.div<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${({ $error }) => ($error ? '#ef4444' : '#22c55e')};
    background: rgba(34, 197, 94, 0.05);
  }

  svg {
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
  }

  input, select {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 0.9375rem;
    color: #fff;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  select {
    cursor: pointer;

    option {
      background: #1a1a1a;
      color: #fff;
    }
  }

  .country-code {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0.75rem;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;

    .flag {
      font-size: 1rem;
    }
  }
`;

export const ErrorText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.375rem;
`;

export const WhyJoinSection = styled.div`
  background: rgba(34, 197, 94, 0.03);
  border: 1px solid rgba(34, 197, 94, 0.12);
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
`;

export const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;

  .icon {
    width: 32px;
    height: 32px;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
      width: 16px;
      height: 16px;
      color: #22c55e;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .title {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #fff;
  }

  .subtitle {
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: auto;
  min-width: 280px;
  margin-left: auto;
  padding: 0.875rem 2.5rem;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border: none;
  border-radius: 0.5rem;
  color: #000;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);

    svg {
      transform: translateX(4px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  margin-top: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
      width: 20px;
      height: 20px;
      color: #22c55e;
    }
  }

  .content {
    h4 {
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.4;
    }

    a {
      color: #22c55e;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// Team section styles
export const TeamMemberCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const AddMemberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px dashed rgba(34, 197, 94, 0.4);
  border-radius: 0.5rem;
  color: #22c55e;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 197, 94, 0.1);
    border-color: #22c55e;
  }
`;

export const RemoveMemberButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.25rem;
  color: #ef4444;
  font-size: 0.6875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

export const Select = styled.select<{ $error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  option {
    background: #1a1a1a;
    color: #fff;
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`;

export const TextArea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ $error }) => ($error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  color: #fff;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #22c55e;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

// Review section styles
export const ReviewSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;

export const ReviewGroup = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 1rem;

  h4 {
    font-size: 0.8125rem;
    color: #22c55e;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;

    strong {
      color: #fff;
    }
  }

  ul {
    margin-left: 1rem;
    margin-top: 0.5rem;

    li {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 0.25rem;
    }
  }
`;

export const GlobeDecoration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-image: url('/images/reg_globe.png');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
`;

export const MountainsDecoration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-image: url('/images/reg_mountains.png');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
`;

export const OrbitalRings = styled.div`
  width: 100%;
  height: 100px;
  background-image: url('/images/reg_orbital_rings.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -2rem;
  margin-bottom: 1rem;
`;

// Legacy exports for compatibility
export const Wrapper = styled.section`
  min-height: 100vh;
`;

export const Inner = styled.div``;
export const FormContainer = styled.div``;
export const Sidebar = styled.aside``;
export const FormSection = styled.div``;
export const Tab = styled.button<{ $active: boolean }>``;
export const TabContainer = styled.div``;
export const Step = styled.div``;
export const FormTitle = styled.h1``;
export const FormSubtitle = styled.p``;
export const SidebarTitle = styled.h2``;
export const SidebarSubtitle = styled.p``;
export const HighlightCard = styled.div``;
export const HighlightIcon = styled.div``;
export const HighlightText = styled.span``;
export const HighlightValue = styled.span``;
export const SponsorLogos = styled.div``;
export const Input = styled.input<{ $error?: boolean }>``;
export const FileInput = styled.input``;
export const FileLabel = styled.label``;
export const SubmitButton = styled.button``;
