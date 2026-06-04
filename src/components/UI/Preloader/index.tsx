'use client';
import Image from 'next/image';
import ic_import from '../../../../public/svgs/ic_import.svg';

import {
  Wrapper,
  Inner,
  LogoContainer,
  BrandContainer,
  Title,
  Subtitle,
  ProgressContainer,
  Number,
  ProgressBarWrapper,
  ProgressBar,
  SecondOverlay,
} from './styles';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState(0);
  
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const secondOverlayRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Smooth progress counter (0 to 100)
  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2200; // 2.2 seconds total count-up time
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth loading acceleration/deceleration
      const easePct = pct < 0.5 ? 2 * pct * pct : 1 - Math.pow(-2 * pct + 2, 2) / 2;
      const current = Math.floor(easePct * end);
      
      setProgress(current);

      if (pct < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Update logo rotation with progress
  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotate: progress * 3.6, // Spin 360 degrees as progress goes from 0 to 100
        duration: 0.05,
        ease: 'none',
      });
    }
  }, [progress]);

  // Handle curtain exit transition when progress hits 100%
  useEffect(() => {
    if (progress !== 100) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
      },
    });

    // Elegant fade out of centered loader content
    tl.to([logoRef.current, brandRef.current, progressContainerRef.current], {
      opacity: 0,
      scale: 0.95,
      y: -20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.inOut',
    });

    // Layered curtain swipe-up animation to reveal landing page
    tl.to(wrapperRef.current, {
      y: '-100%',
      duration: 1.1,
      ease: [0.85, 0, 0.15, 1] as any,
    });

    tl.to(secondOverlayRef.current, {
      y: '-100%',
      duration: 1.1,
      ease: [0.85, 0, 0.15, 1] as any,
      delay: -0.95, // overlap curtain reveals
    });
  }, [progress, setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <LogoContainer ref={logoRef}>
            <Image src={ic_import} alt="import icon" priority />
          </LogoContainer>
          
          <BrandContainer ref={brandRef}>
            <Title>Nortable</Title>
            <Subtitle>Virtual Hackathon 2026</Subtitle>
          </BrandContainer>

          <ProgressContainer ref={progressContainerRef}>
            <Number>
              <span>{String(progress).padStart(3, '0')}</span> %
            </Number>
            <ProgressBarWrapper>
              <ProgressBar $width={progress} />
            </ProgressBarWrapper>
          </ProgressContainer>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef} />
    </>
  );
};

export default Preloader;

