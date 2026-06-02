import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Three Focused Tracks.', 'Professional Judging.'];
export const desktopParagraphPhrase = [
  'Choose your domain and build solutions evaluated directly by industry',
  'judges from global MNCs. Gain career credibility.',
];

// For mobile
export const mobileHeaderPhrase = ['Three Focused Tracks.', 'Professional Judging.'];
export const mobileParagraphPhrase = [
  'Choose your domain and build solutions',
  'evaluated directly by industry judges from',
  'global MNCs.',
];

export const edges = [
  {
    point: 'AI & Advanced Computing',
    details:
      'Build intelligent tools and custom integrations. Focus on technical execution and functional applications evaluated by experts.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Fintech & Decentralized Systems',
    details:
      'Create secure payment primitives, transaction protocols, or ledger designs. Judged directly by leading bank and telecom engineers.',
    icon: ic_identification,
  },
  {
    point: 'Open Innovation & Scale',
    details:
      'Tackle open challenges with highly scalable system architectures. Evaluated on code optimization and actual project stability.',
    icon: ic_lock_closed,
  },
];
