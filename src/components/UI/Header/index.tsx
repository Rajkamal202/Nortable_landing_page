'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
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
  const { user, signOut } = useAuth();

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
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#featured" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#offers" onClick={() => setMenuOpen(false)}>Prizes</a>
          <a href="#volunteer" onClick={() => setMenuOpen(false)}>Volunteer</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </Nav>


        {/* Right Side: Action Button */}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CallToActions href="/register">
              Dashboard
            </CallToActions>
            <a
              onClick={() => { signOut(); setMenuOpen(false); }}
              style={{
                color: '#ff4d4d',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '0.45rem 0.8rem',
                borderRadius: '9999px',
                background: 'rgba(255, 77, 77, 0.08)',
                border: '1px solid rgba(255, 77, 77, 0.2)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 77, 77, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 77, 77, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 77, 77, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 77, 77, 0.2)';
              }}
            >
              Sign Out
            </a>
          </div>
        ) : (
          <CallToActions href="/register">
            Register
          </CallToActions>
        )}

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
