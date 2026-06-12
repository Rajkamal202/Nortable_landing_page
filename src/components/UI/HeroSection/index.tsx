'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrapper,
  InteractiveSpotlight,
  Inner,
  GlowBg,
  CenterOrb,
  HeroGrid,
  LeftCol,
  RightCol,
  HeroCardsContainer,
  HeroLeftImage,
  HeroMiddleImage,
  HeroRightImage,
  HeroTextContainer,
  HeaderGlowLine,
  CountdownBadge,
  CountdownLabel,
  CountdownCells,
  CountdownCell,
  CountdownSeparator,
  HeroCTAContainer,
  GrabButton,
  SecondaryButton,
  MarqueeContainer,
  MarqueeTrack,
  MarqueeText,
  TicketLabel,
} from './styles';
import { useIsMobile } from '../../../../libs/useIsMobile';
import lola_card from '../../../../public/images/lola_card.png';
import orange_card from '../../../../public/images/orange_card.png';
import terry_card from '../../../../public/images/terry_card.png';

const marqueeItems = [
  '5000+ BUILDERS',
  '₹1L+ PRIZE POOL',
  '50+ INDUSTRY MENTORS',
  '36 HOURS',
  'BUILD • SHIP • COMPETE',
  'GET DISCOVERED',
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Real-time ticking Countdown clock targeting July 18, 2026 (Nortable Virtual Hackathon)
  const [timeLeft, setTimeLeft] = useState({
    days: '44',
    hours: '10',
    minutes: '12',
    seconds: '19',
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-18T08:00:00');
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

      {/* Premium Energy Marquee */}
      <MarqueeContainer>
        <MarqueeTrack>
          {Array(4).fill(null).map((_, idx) => (
            <span key={idx} style={{ display: 'inline-flex' }}>
              <MarqueeText>
                {marqueeItems.map((item, i) => (
                  <React.Fragment key={i}>
                    <span>{item}</span>
                    <span className="star">✦</span>
                  </React.Fragment>
                ))}
              </MarqueeText>
            </span>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      <Inner>
        <HeroGrid>
          {/* Left Column: Countdown → Heading → Subtitle → Paragraph → Date → CTA → Registration Note */}
          <LeftCol>
            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <CountdownBadge>
                <CountdownLabel>Event Starts In</CountdownLabel>
                <CountdownCells>
                  <CountdownCell>
                    <span className="value">{timeLeft.days}</span>
                    <span className="unit">Days</span>
                  </CountdownCell>
                  <CountdownSeparator>:</CountdownSeparator>
                  <CountdownCell>
                    <span className="value">{timeLeft.hours}</span>
                    <span className="unit">Hrs</span>
                  </CountdownCell>
                  <CountdownSeparator>:</CountdownSeparator>
                  <CountdownCell>
                    <span className="value">{timeLeft.minutes}</span>
                    <span className="unit">Min</span>
                  </CountdownCell>
                  <CountdownSeparator>:</CountdownSeparator>
                  <CountdownCell>
                    <span className="value">{timeLeft.seconds}</span>
                    <span className="unit">Sec</span>
                  </CountdownCell>
                </CountdownCells>
              </CountdownBadge>
            </motion.div>

            {/* Heading + Subtitle + Paragraph + Date */}
            <HeroTextContainer>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Nortable <span className="gradient-text">2026</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                Build. Ship. Get Discovered.
              </motion.p>

              <motion.p
                className="tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Join India&apos;s next generation of builders in a 36-hour virtual hackathon
                designed to help you create, compete, and unlock real opportunities.
              </motion.p>

              <motion.p
                className="date-line"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                July 18–19, 2026 <span className="separator">·</span> Online
              </motion.p>
            </HeroTextContainer>

            {/* CTA Buttons + Registration Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <HeroCTAContainer>
                <div className="button-row">
                  <GrabButton href="/register">
                    Register Now
                  </GrabButton>
                  <SecondaryButton href="#about">
                    Learn More
                  </SecondaryButton>
                </div>
                <span className="price-subtext">
                  ₹100 Early Bird Registration<br />
                  Limited spots available.
                </span>
              </HeroCTAContainer>
            </motion.div>
          </LeftCol>

          {/* Right Column: Ticket Label + Interactive Ticket Showcase */}
          <RightCol>
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <TicketLabel>Official Participant Pass</TicketLabel>
              <HeroCardsContainer
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <HeroLeftImage
                  className={isHovered ? 'active' : ''}
                  src={orange_card}
                  alt="Yuna Kim ticket"
                />
                <HeroMiddleImage
                  src={lola_card}
                  alt="Arjun Malhotra ticket"
                />
                <HeroRightImage
                  className={isHovered ? 'active' : ''}
                  src={terry_card}
                  alt="Ethan Walker ticket"
                />
              </HeroCardsContainer>
            </motion.div>
          </RightCol>
        </HeroGrid>
      </Inner>

      {/* Bottom Energy Marquee */}
      <MarqueeContainer $bottom>
        <MarqueeTrack>
          {Array(4).fill(null).map((_, idx) => (
            <span key={idx} style={{ display: 'inline-flex' }}>
              <MarqueeText>
                {marqueeItems.map((item, i) => (
                  <React.Fragment key={i}>
                    <span>{item}</span>
                    <span className="star">✦</span>
                  </React.Fragment>
                ))}
              </MarqueeText>
            </span>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </Wrapper>
  );
};

export default HeroSection;
