import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CourtsSection from "./components/CourtsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import RevealObserver from "./components/RevealObserver";
import SectionObserver from "./components/SectionObserver";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d]">
      <RevealObserver />
      <SectionObserver />
      <HeroSection />
      <AboutSection />
      <CourtsSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
