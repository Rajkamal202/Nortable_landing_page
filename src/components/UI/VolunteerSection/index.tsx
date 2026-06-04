'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Wrapper,
  Inner,
  GlowAccent,
  LeftPanel,
  RolesGrid,
  RoleCard,
  RightPanel,
  FormCard,
  FormIconWrapper,
  FormTitle,
  FormDescription,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  SubmitButton,
} from './styles';

const rolesData = [
  {
    title: 'Technical Mentoring',
    desc: 'Guide hackers online with codebase setup, debugging, AI integrations, or software architecture.',
  },
  {
    title: 'Operations & Logistics',
    desc: 'Manage Discord channels, coordinate schedules, monitor server traffic, and keep the virtual event running smoothly.',
  },
  {
    title: 'Design & Media',
    desc: 'Create graphics, assist with social media posts, edit community highlights, and support live streams.',
  },
  {
    title: 'Hospitality & Support',
    desc: 'Help out in the Discord helpdesk, assist check-ins/verifications, and ensure hackers have a welcoming online experience.',
  },
];

// Custom Premium SVG Icons
const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M9 14h6" />
    <path d="M9 18h6" />
    <path d="M9 10h6" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.1rem', height: '1.1rem' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const VolunteerSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <Wrapper ref={containerRef} id="volunteer">
      <GlowAccent />
      <Inner>
        <LeftPanel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Become a <span>Volunteer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Nortable is built by the community, for the community. Join our team of organizers and mentors to shape the developer ecosystem, gain hands-on event management experience, and connect with tech visionaries.
          </motion.p>
          <RolesGrid>
            {rolesData.map((role, i) => (
              <RoleCard
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </RoleCard>
            ))}
          </RolesGrid>
        </LeftPanel>

        <RightPanel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormCard>
              <FormIconWrapper>
                <ClipboardIcon />
              </FormIconWrapper>
              
              <FormTitle>Apply to Volunteer</FormTitle>
              
              <FormDescription>
                We&apos;re excited to welcome new organizers, mentors, and support crew! Click the link below to open our application form and tell us more about yourself.
              </FormDescription>

              <FeaturesList>
                <FeatureItem>
                  <FeatureIcon>✦</FeatureIcon>
                  <FeatureText>
                    <strong>Global Developer Community:</strong> Connect with tech leaders and coordinate online across time zones.
                  </FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>✦</FeatureIcon>
                  <FeatureText>
                    <strong>Exciting Roles:</strong> Apply for mentoring, logistics, design, social media, or support crew.
                  </FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>✦</FeatureIcon>
                  <FeatureText>
                    <strong>Gain Experience:</strong> Acquire hands-on virtual event management, servers administration and operations experience.
                  </FeatureText>
                </FeatureItem>
              </FeaturesList>

              <SubmitButton
                href="https://forms.google.com" // Google Form placeholder link
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
              >
                Open Google Form Application
                <ExternalLinkIcon />
              </SubmitButton>
            </FormCard>
          </motion.div>
        </RightPanel>
      </Inner>
    </Wrapper>
  );
};

export default VolunteerSection;
