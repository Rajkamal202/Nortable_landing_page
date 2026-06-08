'use client';

import { motion } from 'framer-motion';
import {
  Wrapper,
  Inner,
  SectionHeader,
  PillarsGrid,
  PillarCard,
  StatsSection,
  StatBlock,
} from './styles';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <Inner>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="category-pill">About the Event</div>
          <h2>
            Where lines of code <br />
            become lines of <span className="highlight">impact</span>.
          </h2>
          <p className="description">
            Nortable 2026 is a premier virtual gathering of hackers, builders, and makers. 
            We provide a high-octane 36-hour online sandbox designed to help you push your limits, 
            learn fast, and ship production-grade products alongside a global community.
          </p>
        </SectionHeader>

        <PillarsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <PillarCard as={motion.div} variants={itemVariants}>
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>The Digital Sandbox</h3>
            <p>
              A 36-hour online build environment. Get access to free developer API credits, cloud compute resources, 
              and exclusive developer kits to bring your ideas to life from anywhere in the world.
            </p>
          </PillarCard>

          <PillarCard as={motion.div} variants={itemVariants}>
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Virtual Mentorship</h3>
            <p>
              Collaborate online with world-class engineers, designers, and product leaders. Book 1-on-1 virtual mentoring 
              sessions via Discord to debug your code, brainstorm features, or refine your final pitch.
            </p>
          </PillarCard>

          <PillarCard as={motion.div} variants={itemVariants}>
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3>Global Launchpad</h3>
            <p>
              Pitch on the grand digital stage. Present your working project online to tech recruiters, sponsors, 
              and active venture capitalist firms looking to fund the next generation of builders.
            </p>
          </PillarCard>
        </PillarsGrid>


        <StatsSection
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <StatBlock as={motion.div} variants={itemVariants}>
            <div className="value">
              36<span className="emerald">h</span>
            </div>
            <div className="label">Hours of Hacking</div>
            <div className="subtext">Non-stop building</div>
          </StatBlock>

          <StatBlock as={motion.div} variants={itemVariants}>
            <div className="value">
              5K<span className="emerald">+</span>
            </div>
            <div className="label">Expected Builders</div>
            <div className="subtext">Global participants</div>
          </StatBlock>

          <StatBlock as={motion.div} variants={itemVariants}>
            <div className="value">
              ₹1L<span className="emerald">+</span>
            </div>
            <div className="label">Cash Prize Pool</div>
            <div className="subtext">For winning teams</div>
          </StatBlock>


          <StatBlock as={motion.div} variants={itemVariants}>
            <div className="value">
              50<span className="emerald">+</span>
            </div>
            <div className="label">Tech Mentors</div>
            <div className="subtext">Industry specialists</div>
          </StatBlock>
        </StatsSection>
      </Inner>
    </Wrapper>
  );
};

export default AboutSection;
