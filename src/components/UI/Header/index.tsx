'use client';

import { useState, useEffect } from 'react';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  MenuButton,
} from './styles';

// Nortable Icon
const NortableIcon = () => (
  <span style={{ fontSize: '1.3rem', fontWeight: 950, color: '#070606', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em', display: 'inline-block', transform: 'translateY(-0.5px)' }}>N</span>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper $scrolled={scrolled}>
      <Inner $scrolled={scrolled} $menuOpen={menuOpen}>
        {/* Left Side: Logo */}
        <LogoContainer onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>
          <NortableIcon />
        </LogoContainer>

        {/* Middle: Navigation Links */}
        <Nav $menuOpen={menuOpen}>
          <a href="#featured" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#offers" onClick={() => setMenuOpen(false)}>Prizes</a>
          <a href="#volunteer" onClick={() => setMenuOpen(false)}>Volunteer</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </Nav>

        {/* Right Side: Action Button */}
        <CallToActions href="/register">
          Register
        </CallToActions>

        {/* Mobile Menu Toggle Button */}
        <MenuButton onClick={() => setMenuOpen(!menuOpen)} $menuOpen={menuOpen} aria-label="Toggle Menu">
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </MenuButton>
      </Inner>
    </Wrapper>
  );
};

export default Header;
