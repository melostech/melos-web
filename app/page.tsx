import { Footer } from "@/app/components/layout/Footer";
import { Navbar } from "@/app/components/layout/Navbar";
import { ScrollProgress } from "@/app/components/motion/ScrollProgress";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { FaqSection } from "@/app/components/sections/FaqSection";
import { ExpertiseSection } from "@/app/components/sections/ExpertiseSection";
import { Hero } from "@/app/components/sections/Hero";
import { PortfolioSection } from "@/app/components/sections/PortfolioSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { StatsSection } from "@/app/components/sections/StatsSection";
import { ProcessSection } from "@/app/components/sections/ProcessSection";
import { TrustBand } from "@/app/components/sections/TrustBand";
import { ValueSection } from "@/app/components/sections/ValueSection";

export default function Home() {
  return <div className="min-h-screen bg-[#070b14] text-slate-100">
    <Navbar />
    <ScrollProgress />
    <main>
      <Hero />
      <TrustBand />
      <ServicesSection />
      <ValueSection />
      <PortfolioSection />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
  </div>;
}
