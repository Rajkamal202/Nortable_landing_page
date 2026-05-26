type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Who can participate in NEXUS?',
    answer:
      'Anyone 18+ can participate! Whether you\'re a student, professional developer, designer, or entrepreneur, NEXUS welcomes builders of all backgrounds and skill levels. Teams can have 1-4 members.',
  },
  {
    question: 'Do I need a team to participate?',
    answer:
      'No! While you can register with a pre-formed team, we also have team formation events before and during the hackathon. Many winning projects have been built by people who met at NEXUS.',
  },
  {
    question: 'What should I bring to the in-person event?',
    answer:
      'Bring your laptop, chargers, and any hardware you want to hack with. We provide meals, snacks, drinks, WiFi, and sleeping areas. Don\'t forget a sleeping bag if you plan to stay overnight!',
  },
  {
    question: 'How are projects judged?',
    answer:
      'Projects are evaluated on innovation, technical complexity, design, and potential impact. Each track has domain-specific criteria, and sponsor bounties have their own requirements.',
  },
];
