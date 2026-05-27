import { StaticImageData } from 'next/image';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';
import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';

export type Props = {
  title: string;
  details: string;
  tag: string;
  icon: StaticImageData;
  span: number;
};

export const bentoCards: Props[] = [
  {
    title: "JP Morgan & Deutsche Telekom Access",
    details: "Present your build and code architecture directly to active engineering directors. Receive detailed, written feedback from industry leads.",
    tag: "Judicial Evaluation",
    icon: ic_identification,
    span: 1,
  },
  {
    title: "Fast-Track Startup Placements",
    details: "Skip generic resume screens. Your hackathon project serves as a pre-verified technical screening for internships and engineering roles at partner startups.",
    tag: "Internship Pipeline",
    icon: ic_arrows_left_right,
    span: 2,
  },
  {
    title: "₹50,000+ Non-Dilutive Capital",
    details: "Distributed across 9 winning teams. Gain the initial capital needed to launch, host, and scale your project into a viable product.",
    tag: "Cash Rewards",
    icon: ic_banknotes,
    span: 2,
  },
  {
    title: "Verified LinkedIn Credentials",
    details: "Receive domain-specific skill badges and digital certificates verified by industry judges to instantly boost your professional profile.",
    tag: "LinkedIn Certifications",
    icon: ic_document_duplicate,
    span: 1,
  },
  {
    title: "₹15,000+ Infrastructure Sponsorship",
    details: "Deploy and host with high-performance tools. Access free developer credits, APIs, and hosting from AWS, GitHub, Notion, and more.",
    tag: "Developer Kit",
    icon: ic_circle_stack,
    span: 1,
  },
  {
    title: "Recruiter Showcase Feature",
    details: "Get listed in our public Hall of Fame and have your project featured as an industry case study, exposed to active technical recruiters.",
    tag: "Career Visibility",
    icon: ic_lock_closed,
    span: 1,
  },
  {
    title: "Production-Grade Portfolio Assets",
    details: "Move past simple tutorials. Build fully functional, production-ready prototypes that demonstrate complex system architecture.",
    tag: "Portfolio Value",
    icon: ic_circle_stack,
    span: 1,
  },
  {
    title: "High-Caliber Builder & Founder Network",
    details: "Secure lifetime access to an invite-only community of active developers, co-founders, and engineers. Find future partners and launch peer collaborations.",
    tag: "Lifetime Peer Group",
    icon: ic_arrows_left_right,
    span: 3,
  },
];

export const desktopHeaderPhrase = ['Why This Hackathon', 'Feels Different'];
