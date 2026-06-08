'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════
   PAGE WRAPPER
   ═══════════════════════════════════════════ */

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 6.25rem;
  width: 100%;
`;

/* ═══════════════════════════════════════════
   HERO BANNER (like Devpost dark gradient header)
   ═══════════════════════════════════════════ */

export const HeroBanner = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d1a0e 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 80%, rgba(72, 214, 76, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const BannerInner = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BannerLeft = styled.div`
  h1 {
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1.15;
    color: var(--white, #fff);
    letter-spacing: -0.02em;

    span.green {
      color: var(--emerald, #48d64c);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const BannerRight = styled.div`
  p {
    font-size: 1.35rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

/* ═══════════════════════════════════════════
   TAB BAR (like Devpost horizontal tab strip)
   ═══════════════════════════════════════════ */

export const TabBar = styled.div`
  background: rgba(20, 20, 20, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: sticky;
  top: 6.25rem;
  z-index: 50;
`;

export const TabBarInner = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 0;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  color: ${({ $active }) => ($active ? 'var(--white, #fff)' : '#888')};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color 0.2s ease;
  border-bottom: 2px solid ${({ $active }) => ($active ? 'var(--emerald, #48d64c)' : 'transparent')};

  &:hover {
    color: var(--white, #fff);
  }
`;

/* ═══════════════════════════════════════════
   MAIN TWO-COLUMN LAYOUT (content + sidebar)
   ═══════════════════════════════════════════ */

export const MainLayout = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2.5rem;
  padding: 2.5rem 0 6rem;
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

/* ═══════════════════════════════════════════
   LEFT CONTENT
   ═══════════════════════════════════════════ */

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/* Hackathon title + subtitle + join button + eligibility (like Devpost) */
export const HackathonHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white, #fff);
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.05rem;
    color: #999;
    font-weight: 400;
  }
`;

export const HeaderMeta = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 0.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const JoinButton = styled.button`
  background: var(--emerald, #48d64c);
  color: #070606;
  border: none;
  border-radius: 0.35rem;
  padding: 0.7rem 1.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #5ce060;
    transform: translateY(-1px);
  }
`;

export const EligibilityBox = styled.div`
  .eligibility-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--white, #fff);
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    li {
      font-size: 0.8rem;
      color: #999;
      padding-left: 0.75rem;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #666;
      }
    }
  }

  .view-rules {
    margin-top: 0.75rem;
    font-size: 0.8rem;
    color: var(--emerald, #48d64c);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* Section blocks for the overview tab content */
export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--white, #fff);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 0.95rem;
    color: #aaa;
    line-height: 1.7;

    strong {
      color: var(--white, #fff);
      font-weight: 600;
    }
  }

  ul {
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      font-size: 0.9rem;
      color: #aaa;
      line-height: 1.6;

      strong {
        color: var(--white, #fff);
      }
    }
  }
`;

/* ═══════════════════════════════════════════
   RIGHT SIDEBAR CARD (like Devpost info panel)
   ═══════════════════════════════════════════ */

export const SidebarCard = styled.div`
  background: rgba(18, 18, 18, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  padding: 0;
  position: sticky;
  top: 9rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 991px) {
    position: static;
  }
`;

export const DeadlineRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .deadline-badge {
    background: var(--emerald, #48d64c);
    color: #070606;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.3rem 0.6rem;
    border-radius: 0.25rem;
  }

  .view-schedule {
    font-size: 0.8rem;
    color: var(--emerald, #48d64c);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DeadlineDetail = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .value {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--white, #fff);
    margin-top: 0.15rem;

    span.green {
      color: var(--emerald, #48d64c);
    }
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const InfoCell = styled.div<{ $border?: boolean }>`
  padding: 0.85rem 1.25rem;
  border-right: ${({ $border }) => ($border ? '1px solid rgba(255, 255, 255, 0.06)' : 'none')};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: #666;
  }

  span {
    font-size: 0.8rem;
    color: #bbb;
    font-weight: 500;
  }
`;

export const PrizeParticipants = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const PrizeCell = styled.div<{ $border?: boolean }>`
  padding: 0.85rem 1.25rem;
  border-right: ${({ $border }) => ($border ? '1px solid rgba(255, 255, 255, 0.06)' : 'none')};

  .amount {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--emerald, #48d64c);
  }

  .label {
    font-size: 0.75rem;
    color: #888;
  }

  .count {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white, #fff);
  }
`;

export const TagsSection = styled.div`
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;

  svg {
    width: 0.9rem;
    height: 0.9rem;
    color: #666;
    flex-shrink: 0;
  }
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.25rem;
  padding: 0.2rem 0.55rem;
  font-size: 0.75rem;
  color: #bbb;
  font-weight: 500;
`;

export const ManagedBy = styled.div`
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.8rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 0.9rem;
    height: 0.9rem;
    color: #666;
  }

  a {
    color: var(--emerald, #48d64c);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SidebarCTA = styled.div`
  padding: 1.25rem;

  .questions {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.75rem;
    text-align: center;

    a {
      color: var(--emerald, #48d64c);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const JoinCTAButton = styled.button`
  background: var(--emerald, #48d64c);
  color: #070606;
  border: none;
  border-radius: 0.35rem;
  padding: 0.85rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    background: #5ce060;
  }
`;

/* ═══════════════════════════════════════════
   PRIZE / TRACK / JUDGE GRID CARDS
   ═══════════════════════════════════════════ */

export const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 2}, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PrizeCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .place {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--emerald, #48d64c);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .amount {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--white, #fff);
  }

  p {
    font-size: 0.8rem;
    color: #888;
    line-height: 1.5;
  }
`;

export const TrackCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white, #fff);
  }

  p {
    font-size: 0.8rem;
    color: #888;
    line-height: 1.6;
  }
`;

export const JudgeCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;

  .avatar {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    .name {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--white, #fff);
    }

    .role {
      font-size: 0.75rem;
      color: #888;
      font-style: italic;
    }

    .org {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--emerald, #48d64c);
    }
  }
`;

/* ═══════════════════════════════════════════
   REGISTRATION MODAL
   ═══════════════════════════════════════════ */

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
`;

export const ModalCard = styled(motion.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  position: relative;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 0.25rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      color: #fff;
    }
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--white, #fff);
  }

  p {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  label {
    font-size: 0.7rem;
    font-weight: 700;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

export const InputField = styled.input`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.35rem;
  padding: 0.65rem 0.85rem;
  color: var(--white, #fff);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #555;
  }

  &:focus {
    border-color: var(--emerald, #48d64c);
  }
`;

export const SelectField = styled.select`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.35rem;
  padding: 0.65rem 0.85rem;
  color: var(--white, #fff);
  font-size: 0.9rem;
  outline: none;

  option {
    background: #111;
    color: #fff;
  }

  &:focus {
    border-color: var(--emerald, #48d64c);
  }
`;

export const CardInputRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0.5rem;
`;

export const CheckoutDivider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 0.25rem 0;
  padding-top: 0.75rem;

  .checkout-label {
    font-size: 0.7rem;
    font-weight: 700;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.75rem;
    display: block;
  }
`;

export const SubmitButton = styled.button`
  background: var(--emerald, #48d64c);
  color: #070606;
  border: none;
  border-radius: 0.35rem;
  padding: 0.8rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.25rem;
  transition: background 0.2s ease;

  &:hover {
    background: #5ce060;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  color: #ff4a4a;
  font-size: 0.7rem;
`;

/* ═══════════════════════════════════════════
   SUCCESS TICKET
   ═══════════════════════════════════════════ */

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding-top: 0.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white, #fff);
  }

  .sub {
    font-size: 0.8rem;
    color: var(--emerald, #48d64c);
    margin-top: -0.75rem;
  }
`;

export const TicketCard = styled.div`
  background: linear-gradient(135deg, #111 0%, #0a0a0a 100%);
  border: 1px solid rgba(72, 214, 76, 0.2);
  border-radius: 1rem;
  width: 100%;
  max-width: 340px;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #141414;
    border-radius: 50%;
    top: 65%;
    z-index: 10;
  }
  &::before { left: -8px; }
  &::after { right: -8px; }
  position: relative;

  .top {
    padding: 1.75rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px dashed rgba(72, 214, 76, 0.2);

    .logo {
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--emerald, #48d64c);
      letter-spacing: 0.08em;
    }

    .avatar-circle {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 2px solid var(--emerald, #48d64c);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
    }

    .name {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--white, #fff);
    }

    .track {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--emerald, #48d64c);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: -0.5rem;
    }
  }

  .bottom {
    padding: 1.25rem 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    .serial {
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 1rem;
      font-weight: 800;
      color: var(--white, #fff);
      letter-spacing: 0.08em;
    }

    .info-row {
      display: flex;
      gap: 2rem;
      font-size: 0.65rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      span {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #aaa;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

/* ═══════════════════════════════════════════
   AUTH / SIGNUP PAGE (Devpost style)
   ═══════════════════════════════════════════ */

export const AuthOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #0a1628 0%, #0d1f3c 40%, #0a1628 100%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
`;

export const AuthCard = styled(motion.div)`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
  padding: 2.5rem 2rem;
  position: relative;
`;

export const AuthCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const AuthHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--white, #fff);
    line-height: 1.25;
    letter-spacing: -0.01em;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.5;
  }
`;

export const AuthLoginLink = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: #5ba4fc;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthButtonsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 100%;
  max-width: 380px;
`;

export const AuthSocialButton = styled.button<{ $bg: string; $hoverBg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.85rem 1.25rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $bg }) => $bg};

  svg, img {
    width: 1.15rem;
    height: 1.15rem;
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ $hoverBg }) => $hoverBg};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const AuthEmailLink = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: #5ba4fc;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthCheckboxRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  width: 100%;
  max-width: 460px;
  cursor: pointer;

  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    accent-color: var(--emerald, #48d64c);
    flex-shrink: 0;
    margin-top: 0.15rem;
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.5;
    text-align: left;
  }
`;

export const AuthTerms = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.5;
  max-width: 420px;

  a {
    color: #5ba4fc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ═══════════════════════════════════════════
   FULL-PAGE REGISTRATION FORM (Devpost premium white)
   ═══════════════════════════════════════════ */

export const RegPageContainer = styled.div`
  background: #f5f5f5;
  min-height: 60vh;
  padding: 0 0 6rem;
`;

export const RegPageInner = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 2.5rem;
`;

export const RegPageHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #1a1a2e;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.85rem;
    color: #777;
    line-height: 1.5;

    a {
      color: #003e9c;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RegFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const RegLabel = styled.label<{ $required?: boolean }>`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1a1a2e;
  display: flex;
  align-items: center;
  gap: 0.15rem;

  &::before {
    content: ${({ $required }) => ($required ? "'* '" : "''")};
    color: #e53935;
    font-weight: 700;
  }
`;

export const RegHelperText = styled.span`
  font-size: 0.75rem;
  color: #999;
  margin-top: -0.1rem;
`;

export const RegInput = styled.input`
  background: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 0.35rem;
  padding: 0.7rem 0.85rem;
  color: #1a1a2e;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: #003e9c;
    box-shadow: 0 0 0 3px rgba(0, 62, 156, 0.08);
  }
`;

export const RegTextarea = styled.textarea`
  background: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 0.35rem;
  padding: 0.7rem 0.85rem;
  color: #1a1a2e;
  font-size: 0.9rem;
  outline: none;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.2s ease;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: #003e9c;
    box-shadow: 0 0 0 3px rgba(0, 62, 156, 0.08);
  }
`;

export const RegSelect = styled.select`
  background: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 0.35rem;
  padding: 0.7rem 0.85rem;
  color: #1a1a2e;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
  padding-right: 2rem;

  option {
    background: #fff;
    color: #1a1a2e;
  }

  &:focus {
    border-color: #003e9c;
    box-shadow: 0 0 0 3px rgba(0, 62, 156, 0.08);
  }
`;

/* Pill-style radio group (Devpost teal pills) */
export const PillRadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const PillRadio = styled.label<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.9rem;
  border-radius: 2rem;
  border: 1.5px solid ${({ $active }) => ($active ? '#0d9488' : '#d0d5dd')};
  background: ${({ $active }) => ($active ? '#f0fdfa' : '#fff')};
  color: ${({ $active }) => ($active ? '#0d9488' : '#555')};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  input {
    display: none;
  }

  .check-circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ $active }) => ($active ? '#0d9488' : '#ccc')};
    background: ${({ $active }) => ($active ? '#0d9488' : '#fff')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;

    svg {
      width: 0.55rem;
      height: 0.55rem;
      stroke: #fff;
      stroke-width: 3;
      fill: none;
      opacity: ${({ $active }) => ($active ? 1 : 0)};
    }
  }

  &:hover {
    border-color: #0d9488;
    background: ${({ $active }) => ($active ? '#f0fdfa' : '#fafafa')};
  }
`;

/* Teammate Section */
export const TeammateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

export const TeammateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tm-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #1a1a2e;
  }

  .tm-cost {
    font-size: 0.75rem;
    color: #e53935;
    font-weight: 600;
    background: #fef2f2;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
  }
`;

export const TeammateCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 0.65rem;
  align-items: end;
  padding: 1rem;
  background: #fafafa;
  border: 1px solid #e5e7eb;
  border-radius: 0.4rem;
  position: relative;

  .teammate-label {
    font-size: 0.7rem;
    font-weight: 700;
    color: #0d9488;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    grid-column: 1 / -1;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const RemoveTeammateBtn = styled.button`
  background: #fff;
  border: 1px solid #fca5a5;
  border-radius: 0.35rem;
  color: #e53935;
  padding: 0.6rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #fef2f2;
    border-color: #e53935;
  }
`;

export const AddTeammateBtn = styled.button`
  background: #fff;
  border: 1.5px dashed #0d9488;
  border-radius: 0.4rem;
  color: #0d9488;
  padding: 0.7rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #f0fdfa;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #fff;
  }
`;

/* Pricing Summary */
export const PricingSummary = styled.div`
  background: #fff;
  border: 1.5px solid #0d9488;
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.06);

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: #666;

    .amount {
      font-weight: 700;
      color: #1a1a2e;
    }
  }

  .price-divider {
    border-top: 1px solid #e5e7eb;
  }

  .price-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.05rem;
    font-weight: 800;
    color: #1a1a2e;

    .total-amount {
      color: #0d9488;
      font-size: 1.25rem;
    }
  }
`;

/* Eligibility checkboxes */
export const EligibilitySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;

  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: #1a1a2e;
  }
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;

  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    accent-color: #0d9488;
    flex-shrink: 0;
    margin-top: 0.15rem;
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.6;

    a {
      color: #003e9c;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

/* Action buttons */
export const RegActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
`;

export const RegSubmitBtn = styled.button`
  background: #0d9488;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.85rem 2rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.2);

  &:hover {
    background: #0f766e;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const RegCancelBtn = styled.button`
  background: transparent;
  color: #777;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.85rem 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a2e;
  }
`;

/* Registration field error */
export const RegErrorText = styled.span`
  color: #e53935;
  font-size: 0.7rem;
  font-weight: 500;
`;

/* ═══════════════════════════════════════════
   AUTH FORM & LOADERS (Supabase real auth additions)
   ═══════════════════════════════════════════ */

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 100%;
  max-width: 380px;
  text-align: left;
`;

export const AuthFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const AuthLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #5ba4fc;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(91, 164, 252, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const AuthSubmitBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  border-radius: 0.4rem;
  background: #0d9488;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #0f766e;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const AuthErrorText = styled.div`
  font-size: 0.8rem;
  color: #ef4444;
  margin-top: 0.2rem;
`;

export const AuthSuccessText = styled.div`
  font-size: 0.85rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.75rem;
  border-radius: 0.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const AuthSpinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: auth-spin 0.8s linear infinite;

  @keyframes auth-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AuthLoggedInAlert = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #166534;
  font-size: 0.9rem;

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
  }

  .signout-btn {
    background: none;
    border: none;
    color: #15803d;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #166534;
    }
  }
`;
