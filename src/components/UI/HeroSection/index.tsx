'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Wrapper,
  InteractiveSpotlight,
  Inner,
  GlowBg,
  CenterOrb,
  Pill,
  IndicatorDot,
  HeroTextContainer,
  HeaderGlowLine,
  MarqueeContainer,
  MarqueeTrack,
  MarqueeText,
  BottomInfoBar,
  InfoBlock,
  InfoCTA,
  CountdownBadge,
  GrabButton,
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);



  // Real-time ticking Countdown clock targeting May 29, 2026 (Mumbai Tech Week / Nortable)
  const [timeLeft, setTimeLeft] = useState({
    days: '04',
    hours: '10',
    minutes: '12',
    seconds: '19',
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-29T08:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // 60fps cursor-following spotlight glow updater
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      wrapperRef.current.style.setProperty('--mouse-x', `${x}px`);
      wrapperRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const wrapper = wrapperRef.current;
    if (wrapper && !isMobile) {
      wrapper.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (wrapper && !isMobile) {
        wrapper.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <Wrapper ref={wrapperRef}>
      {/* 60fps cursor-following spotlight glow */}
      {!isMobile && <InteractiveSpotlight />}
      
      {/* Dynamic atmospheric layered rotating aurora background */}
      <GlowBg />
      <CenterOrb />
      <HeaderGlowLine />

      {/* Top Scrolling Ribbon Ticker (Apple/MTW style) */}
      <MarqueeContainer>
        <MarqueeTrack>
          {Array(8).fill(null).map((_, idx) => (
            <MarqueeText key={idx}>
              <span className="highlight">REGISTER NOW ➔</span>
              <span>CODE. COLLABORATE. CREATE IMPACT.</span>
              <span className="star">✦</span>
            </MarqueeText>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
      
      <Inner>
        {/* Pulsating Glassmorphic Date Pill with Shimmer Reflection Sweep */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Pill onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            <IndicatorDot />
            <span>May 29-30, 2026 | Mumbai + Virtual</span>
            <Image src={ic_chevron_right} alt="chevron-right" />
          </Pill>
        </motion.div>

        {/* Enhanced Hero Typography with Animated Text Gradients */}
        <HeroTextContainer>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Nortable <span className="gradient-text">2026</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {isMobile ? (
              "48 hours. One mission. Join 5,000+ builders at the world's most ambitious hackathon."
            ) : (
              "48 hours. One mission. Join 5,000+ builders at the world's most ambitious hackathon. Build, ship, and compete for $500K in prizes."
            )}
          </motion.p>
        </HeroTextContainer>



        {/* Bottom Event Info Bar (MTW yellow block adapted with dark-emerald Neo-brutalism) */}
        <BottomInfoBar>
          {/* Active Ticking Countdown Badge */}
          <CountdownBadge>
            <span>Starts In</span>
            <span className="timer">
              {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
            </span>
          </CountdownBadge>

          <InfoBlock>
            <span className="label">Dates</span>
            <span className="value">May 29 - 30, 2026</span>
          </InfoBlock>

          <InfoBlock>
            <span className="label">Location</span>
            <span className="value">Mumbai + Virtual</span>
          </InfoBlock>

          <InfoCTA>
            <GrabButton href="/register">
              Grab Your Pass
            </GrabButton>
            <span className="price-subtext">Passes start at Rs. 100*</span>
          </InfoCTA>
        </BottomInfoBar>
      </Inner>

      {/* Bottom Scrolling Ribbon Ticker (Apple/MTW style) */}
      <MarqueeContainer $bottom>
        <MarqueeTrack>
          {Array(8).fill(null).map((_, idx) => (
            <MarqueeText key={idx}>
              <span>NORTABLE 2026</span>
              <span className="star">✦</span>
              <span>SHIP IN 36 HOURS</span>
              <span className="star">✦</span>
            </MarqueeText>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </Wrapper>
  );
};

export default HeroSection;
