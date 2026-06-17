import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CourtsSection from "./components/CourtsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d]">
      <Navbar />
      <div className="flex flex-col gap-6 p-6">
        <HeroSection />
        <AboutSection />
        <CourtsSection />
        <PricingSection />
        <ContactSection />
      </div>
    </main>
  );
}
