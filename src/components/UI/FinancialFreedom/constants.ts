
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['₹50,000+ Cash Pool.', 'Real Recognition.'];
export const desktopParagraphPhrase = [
  'We reward your hard work and technical excellence. Stand out and win',
  'cash rewards alongside verified professional credentials.',
];
export const desktopBriefNotePhrase = [
  'Judges from JP Morgan &',
  'Deutsche Telekom, startup',
  'internships, and premium kits.',
  'Get it all for only ₹100.',
];

// For mobile
export const mobileHeaderPhrase = ['₹50,000+ Cash Pool.', 'Real Recognition.'];
export const mobileParagraphPhrase = [
  'We reward your hard work and technical excellence.',
  'Stand out and win cash rewards alongside verified',
  'professional credentials.',
];

export const mobileBriefNotePhrase = [
  'JP Morgan &',
  ' Deutsche Telekom',
  'judges, startup',
  ' internships,',
  'and premium kits.',
  ' All for',
  'only ₹100.',
];

export const edges = [
  {
    point: '₹50,000+ Cash Pool',
    details:
      'Distributed across 9 winning teams to celebrate outstanding builds and code quality.',
    icon: ic_banknotes,
  },
  {
    point: 'LinkedIn Credentials',
    details:
      'Earn a verified digital certificate and domain-specific skill badge verified by industry judges.',
    icon: ic_circle_stack,
  },
  {
    point: "Winner's Spotlight",
    details:
      "Get a physical winner's kit delivered, featured as an industry case study, and listed on the Hall of Fame.",
    icon: ic_arrows_left_right,
  },
];
