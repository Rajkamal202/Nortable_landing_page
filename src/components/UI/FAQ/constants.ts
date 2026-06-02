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
      'Nortable is open to all developers, designers, and tech students who want to build serious projects. You can participate solo or in teams of up to 4 members.',
  },
  {
    question: 'What does the ₹100 registration fee include?',
    answer:
      'The ₹100 fee grants you full access to the virtual event, pre-event prep workshops worth ₹2,000, developer kits and credits worth ₹15,000+ (AWS, GitHub, Notion, etc.), verified digital certificates/badges to add to LinkedIn, and real written feedback on your project.',
  },
  {
    question: 'Who are the judges and how are projects evaluated?',
    answer:
      'Projects are judged by experienced industry professionals from global MNCs. Submissions are evaluated on technical architecture, design, execution, and code optimization. Every team receives written feedback.',
  },
  {
    question: 'What are the career opportunities at Nortable?',
    answer:
      'The top 5 performers will be personally connected with judges from global MNCs for career guidance. Additionally, there are exclusive internship placement opportunities with partner startups for registered builders.',
  },
];
