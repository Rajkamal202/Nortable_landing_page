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



  // Real-time ticking Countdown clock targeting July 10, 2026 (Nortable Virtual Hackathon)
  const [timeLeft, setTimeLeft] = useState({
    days: '04',
    hours: '10',
    minutes: '12',
    seconds: '19',
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-10T08:00:00');
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
          {Array(4).fill(null).map((_, idx) => (
            <span key={idx} style={{ display: 'inline-flex' }}>
              <MarqueeText>
                <span className="highlight">₹50,000+ CASH PRIZES</span>
                <span>VERIFIED CERTIFICATE & SKILL BADGE</span>
                <span className="star">✦</span>
              </MarqueeText>
              <MarqueeText>
                <span className="highlight">₹15,000+ DEV CREDITS</span>
                <span>JP MORGAN & DEUTSCHE TELEKOM JUDGES</span>
                <span className="star">✦</span>
              </MarqueeText>
              <MarqueeText>
                <span className="highlight">STARTUP INTERNSHIPS</span>
                <span>LIFETIME EXCLUSIVE COMMUNITY</span>
                <span className="star">✦</span>
              </MarqueeText>
            </span>
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
            <span>July 10-12, 2026 | Virtual</span>
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
              "Compete for ₹50,000+ in cash prizes. Judged by JP Morgan & Deutsche Telekom professionals."
            ) : (
              "Build, collaborate, and compete for ₹50,000+ in cash prizes. Judged by JP Morgan & Deutsche Telekom professionals. Earn verified certificates, startup internships, and ₹15,000+ in dev credits."
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
            <span className="value">July 10 - 12, 2026</span>
          </InfoBlock>
 
          <InfoBlock>
            <span className="label">Location</span>
            <span className="value">Virtual</span>
          </InfoBlock>
 
          <InfoCTA>
            <GrabButton href="/register">
              Grab Your Pass
            </GrabButton>
            <span className="price-subtext">Secure your spot for only ₹100</span>
          </InfoCTA>
        </BottomInfoBar>
      </Inner>

      {/* Bottom Scrolling Ribbon Ticker (Apple/MTW style) */}
      <MarqueeContainer $bottom>
        <MarqueeTrack>
          {Array(6).fill(null).map((_, idx) => (
            <span key={idx} style={{ display: 'inline-flex' }}>
              <MarqueeText>
                <span>NORTABLE 2026</span>
                <span className="star">✦</span>
                <span>BUILD & SHIP</span>
                <span className="star">✦</span>
                <span>₹100 PASS</span>
                <span className="star">✦</span>
              </MarqueeText>
            </span>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </Wrapper>
  );
};

export default HeroSection;
