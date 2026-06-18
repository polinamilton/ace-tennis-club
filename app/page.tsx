import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CourtsSection from "./components/CourtsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d]">
      <RevealObserver />
      <div className="flex flex-col gap-6 p-6">
        <HeroSection />
        <AboutSection />
        <CourtsSection />
        <div className="flex flex-col">
          <PricingSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
