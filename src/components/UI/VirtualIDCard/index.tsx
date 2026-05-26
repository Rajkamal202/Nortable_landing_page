'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import {
  IDCardWrapper,
  CardContainer,
  TicketCard,
  TicketContent,
  EventBranding,
  EventTitle,
  ParticipantName,
  EventDetails,
  RegistrationCode,
  QRSection,
  CardActions,
  DownloadButton,
  ShareButton,
  SuccessOverlay,
  Confetti,
} from './styles';

interface VirtualIDCardProps {
  participantData: {
    fullName: string;
    email: string;
    organization: string;
    role?: string;
  };
  registrationType: 'solo' | 'team';
  teamName?: string;
}

const generateRegistrationId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'NRT-';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const VirtualIDCard = ({ participantData, registrationType, teamName }: VirtualIDCardProps) => {
  const [showCard, setShowCard] = useState(false);
  const [registrationId] = useState(generateRegistrationId());
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 500);
    const confettiTimer = setTimeout(() => setShowConfetti(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
    };
  }, []);

  const getRole = () => {
    if (registrationType === 'solo') return 'SOLO PARTICIPANT';
    if (teamName) return 'TEAM LEAD';
    return 'TEAM MEMBER';
  };

  const getNameFontSize = () => {
    const nameLength = participantData.fullName.length;
    if (nameLength > 25) return 'clamp(0.8rem, 2vw, 1.1rem)';
    if (nameLength > 20) return 'clamp(0.9rem, 2.5vw, 1.25rem)';
    if (nameLength > 15) return 'clamp(1rem, 3vw, 1.5rem)';
    return 'clamp(1.1rem, 3.5vw, 1.75rem)';
  };

  // Dynamic ticket background based on registration type
  const ticketBackground = registrationType === 'solo'
    ? '/images/ticket_green.png'
    : '/images/ticket_blue.png';

  // Dynamic glow color based on registration type
  const glowColor = registrationType === 'solo'
    ? 'rgba(72, 214, 76, 0.4)'
    : 'rgba(59, 130, 246, 0.4)';

  const qrData = JSON.stringify({
    id: registrationId,
    name: participantData.fullName,
    email: participantData.email,
    event: 'NORTABLE 2026',
    type: registrationType,
  });

  const handleDownload = () => {
    alert('Download functionality would generate a high-res image of your ID card.');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Nortable 2026 Badge',
        text: `I am registered for Nortable 2026! My registration ID is ${registrationId}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`I am registered for Nortable 2026! My registration ID is ${registrationId}`);
      alert('Badge info copied to clipboard!');
    }
  };

  // Confetti colors based on registration type
  const confettiColors = registrationType === 'solo'
    ? ['#48d64c', '#2b892e', '#86efac', '#22c55e', '#15803d']
    : ['#3b82f6', '#1d4ed8', '#60a5fa', '#2563eb', '#1e40af'];

  return (
    <IDCardWrapper>
      <AnimatePresence>
        {showConfetti && (
          <SuccessOverlay
            as={motion.div}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(50)].map((_, i) => (
              <Confetti
                key={i}
                as={motion.div}
                initial={{
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, 1, 1, 0],
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  ease: 'easeOut',
                }}
                style={{
                  background: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                }}
              />
            ))}
          </SuccessOverlay>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill={registrationType === 'solo' ? 'rgba(43, 137, 46, 0.2)' : 'rgba(59, 130, 246, 0.2)'} />
            <circle cx="32" cy="32" r="24" fill={registrationType === 'solo' ? '#2b892e' : '#3b82f6'} />
            <path
              d="M22 32L28 38L42 24"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ color: 'var(--white)', fontSize: '1.75rem', marginTop: '1rem' }}
        >
          Payment Successful!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ color: 'var(--link-color)', marginTop: '0.5rem' }}
        >
          Your virtual badge is ready
        </motion.p>
      </motion.div>

      <CardContainer>
        <AnimatePresence>
          {showCard && (
            <TicketCard
              as={motion.div}
              $ticketType={registrationType}
              initial={{
                opacity: 0,
                rotateY: -90,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              style={{
                backgroundImage: `url(${ticketBackground})`,
                filter: `drop-shadow(0 0 30px ${glowColor})`,
              }}
            >
              <TicketContent>
                <EventBranding>
                  <span>NORTABLE PRESENTS</span>
                  <EventTitle>NORTABLE 2026</EventTitle>
                </EventBranding>

                <ParticipantName style={{ fontSize: getNameFontSize() }}>
                  {participantData.fullName.toUpperCase()}
                </ParticipantName>

                <EventDetails>
                  <span>VIRTUAL</span>
                  <span className="dot">-</span>
                  <span>JULY 10-12, 2026</span>
                </EventDetails>
              </TicketContent>
            </TicketCard>
          )}
        </AnimatePresence>
      </CardContainer>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <RegistrationCode>
          <span className="label">Registration ID</span>
          <span className="code">{registrationId}</span>
        </RegistrationCode>

        <QRSection>
          <div className="qr-container">
            <QRCodeSVG
              value={qrData}
              size={120}
              bgColor="transparent"
              fgColor="#ffffff"
              level="M"
            />
          </div>
          <p>Scan to verify virtual check-in</p>
        </QRSection>

        <CardActions>
          <DownloadButton
            onClick={handleDownload}
            $ticketType={registrationType}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Badge
          </DownloadButton>
          <ShareButton onClick={handleShare}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" />
            </svg>
            Share
          </ShareButton>
        </CardActions>
      </motion.div>
    </IDCardWrapper>
  );
};

export default VirtualIDCard;
