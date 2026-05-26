import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "NEXUS was a game-changer for my startup. In 48 hours, we built our MVP, won the AI track, and met the investors who led our seed round. The energy and support from mentors was incredible.",
    person: 'Alex Chen',
    avatar: robert_fox,
  },
  {
    testimony:
      "I came to NEXUS as a solo developer and left with a co-founder, a working product, and a job offer. The team formation event connected me with builders who shared my vision. Best weekend ever.",
    person: 'Sarah Mitchell',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "The workshops and mentorship at NEXUS accelerated my learning by months. I went from knowing nothing about Web3 to building a DeFi protocol that won a sponsor bounty. Mind-blowing experience.",
    person: 'Marcus Johnson',
    avatar: esther_howard,
  },
  {
    testimony:
      "I came to NEXUS as a solo developer and left with a co-founder, a working product, and a job offer. The team formation event connected me with builders who shared my vision. Best weekend ever.",
    person: 'Sarah Mitchell',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "NEXUS was a game-changer for my startup. In 48 hours, we built our MVP, won the AI track, and met the investors who led our seed round. The energy and support from mentors was incredible.",
    person: 'Alex Chen',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join 5,000+ Builders', 'Worldwide'];
