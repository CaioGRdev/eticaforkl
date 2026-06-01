import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}