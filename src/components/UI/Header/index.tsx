'use client';

import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
} from './styles';

// Nortable Icon
const NortableIcon = () => (
  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#070606', fontFamily: 'system-ui, sans-serif' }}>N</span>
);

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        {/* Left Side: Logo */}
        <LogoContainer onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <NortableIcon />
        </LogoContainer>

        {/* Middle: Navigation Links */}
        <Nav>
          <a href="#featured">Tracks</a>
          <a href="#offers">Prizes</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#faq">FAQ</a>
        </Nav>

        {/* Right Side: Action Button */}
        <CallToActions href="/register">
          Register
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
