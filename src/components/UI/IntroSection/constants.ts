import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Three Epic Tracks.', 'Infinite Possibilities.'];
export const desktopParagraphPhrase = [
  'Choose your path and build something extraordinary. Each track comes with',
  'dedicated mentors, specialized workshops, and unique prizes tailored',
  'to your domain.',
];

// For mobile
export const mobileHeaderPhrase = ['Three Epic Tracks.', 'Infinite Possibilities.'];
export const mobileParagraphPhrase = [
  'Choose your path and build something',
  'extraordinary. Each track comes with dedicated',
  'mentors, specialized workshops, and unique',
  'prizes.',
];

export const edges = [
  {
    point: 'AI & Machine Learning',
    details:
      'Build the next generation of intelligent applications. From LLMs to computer vision, push the boundaries of what AI can do.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Web3 & DeFi',
    details:
      'Shape the decentralized future. Create innovative protocols, DApps, and financial primitives on the blockchain.',
    icon: ic_identification,
  },
  {
    point: 'Climate & Sustainability',
    details:
      'Code for the planet. Build solutions that tackle climate change, promote sustainability, and create a greener future.',
    icon: ic_lock_closed,
  },
];
