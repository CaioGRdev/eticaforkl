import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  return (
    // Adicionei o className="pt-20" aqui para a HeroSection não sumir embaixo do Header fixo
    <main className="pt-20"> 
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}