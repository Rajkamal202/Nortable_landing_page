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
    question: 'Who can participate in Nortable?',
    answer:
      'Anyone 18+ can participate! Whether you\'re a student, professional developer, designer, or entrepreneur, Nortable welcomes builders of all backgrounds and skill levels. Teams can have 1-4 members.',
  },
  {
    question: 'Do I need a team to participate?',
    answer:
      'No! While you can register with a pre-formed team, we also have virtual team formation events before and during the hackathon. Many winning projects have been built by people who met at Nortable.',
  },
  {
    question: 'What do I need to participate in the virtual event?',
    answer:
      'All you need is a stable internet connection, a computer/laptop to develop on, and a Discord account. All hacking, mentorship, and submissions will take place virtually on our official Discord server.',
  },
  {
    question: 'How are projects judged?',
    answer:
      'Projects are evaluated on innovation, technical complexity, design, and potential impact. Each track has domain-specific criteria, and sponsor bounties have their own requirements.',
  },
];
