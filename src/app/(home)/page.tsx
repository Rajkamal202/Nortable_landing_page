import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
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
      <JoinSection />
      <VolunteerSection />
      <FAQ />
    </main>
  );
}
