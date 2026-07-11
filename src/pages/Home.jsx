import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PartnersSection from "../components/PartnersSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  return (
    // pt-20 evita que a Hero fique escondida embaixo do Header Fixo
    <main> 
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}