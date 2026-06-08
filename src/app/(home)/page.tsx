import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  AboutSection,
  JoinSection,
  OffersSection,
  VolunteerSection,
} from '@/components';

export default function Home() {
  return (
    <main className="landing-page">
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <AboutSection />
      <JoinSection />
      <VolunteerSection />
      <FAQ />
    </main>
  );
}

