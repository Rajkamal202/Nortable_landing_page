export type Benefit = {
  title: string;
  details: string;
};

export type PillarProps = {
  number: string;
  title: string;
  benefits: Benefit[];
};

export const pillars: PillarProps[] = [
  {
    number: "01",
    title: "BUILD WITH ELITE TOOLS",
    benefits: [
      {
        title: "₹15,000+ Developer Kit",
        details: "Immediate access to AWS, GitHub, and Notion credits to deploy at zero cost.",
      },
      {
        title: "₹50,000 Cash Pool",
        details: "Non-dilutive seed capital distributed across 9 teams to launch your prototype.",
      },
    ],
  },
  {
    number: "02",
    title: "GET VERIFIED CREDENTIALS",
    benefits: [
      {
        title: "Direct Code Feedback",
        details: "Written evaluations directly from senior engineering directors.",
      },
      {
        title: "Verified LinkedIn Badges",
        details: "Domain-specific skill badges verified by industry judges.",
      },
      {
        title: "Production-Grade Assets",
        details: "Vetted portfolio items over simple tutorial code.",
      },
    ],
  },
  {
    number: "03",
    title: "SKIP THE RESUME SCREEN",
    benefits: [
      {
        title: "Global MNC Access",
        details: "Present your project directly to engineering heads.",
      },
      {
        title: "Fast-Track Placements",
        details: "Skip screening; project serves as technical screening for startup roles.",
      },
      {
        title: "Lifetime Peer Network",
        details: "Invite-only community of active founders and builders.",
      },
    ],
  },
];

export const desktopHeaderPhrase = ['Why This Hackathon', 'Feels Different'];
export const subHeaderPhrase = ["Most hackathons end in 48 hours. Nortable is built to launch your engineering career."];
