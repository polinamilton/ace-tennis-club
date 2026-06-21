"use client";

import { useRef, useState } from "react";
import { PricingCard } from "@/components/ui/animated-glassy-pricing";
import Navbar from "./Navbar";
import { useLang } from "../i18n/LanguageContext";

export default function PricingSection() {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePlan, setActivePlan] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActivePlan(Math.max(0, Math.min(idx, t.pricing.plans.length - 1)));
  };

  const scrollToCard = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="price"
      className="relative overflow-hidden dark"
      style={{
        background: "linear-gradient(to bottom, #a64c02 4%, #5b300c 14%, #161616 44%)",
        minHeight: "100vh",
      }}
    >
      <Navbar sectionId="price" />
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -right-6 pointer-events-none select-none opacity-90"
        style={{ width: "20%" }}
      />

      <div className="h-20 lg:h-28" />

      <div data-reveal="fade" className="relative z-10 text-center px-6 lg:px-10 mb-8 lg:mb-16">
        <h2
          className="font-normal text-white capitalize font-roboto text-4xl lg:text-[64px]"
          style={{ lineHeight: 1.2 }}
        >
          {t.pricing.heading}
        </h2>
      </div>

      {/* ── Mobile: horizontal snap carousel with peek ── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="lg:hidden relative z-10 flex overflow-x-auto snap-x snap-mandatory pl-4 scroll-pl-4"
        style={{ scrollbarWidth: "none" }}
      >
        {t.pricing.plans.map((plan, i) => (
          <div
            key={plan.name}
            className="flex-none w-[82vw] snap-start pb-2 mr-3"
          >
            <PricingCard
              planName={plan.name}
              description={plan.description}
              price={plan.price}
              features={[...plan.features]}
              buttonText={t.pricing.selectPlan}
              popularLabel={t.pricing.popular}
              isPopular={"isPopular" in plan ? plan.isPopular : false}
              buttonVariant={i === 1 ? "primary" : "secondary"}
              className="w-full"
            />
          </div>
        ))}
        {/* trailing spacer so the last card can snap into its offset position */}
        <div className="flex-none w-[calc(18vw+4px)]" aria-hidden="true" />
      </div>

      {/* Mobile dots */}
      <div className="lg:hidden relative z-10 flex justify-center gap-2.5 mt-5 mb-10">
        {t.pricing.plans.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Plan ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activePlan ? "bg-[#d9f80f] w-6 h-2" : "bg-white/30 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* ── Desktop: original side-by-side layout ── */}
      <div className="hidden lg:flex relative z-10 flex-row gap-6 px-14 pb-16 items-stretch justify-center">
        {t.pricing.plans.map((plan, i) => (
          <div key={plan.name} data-reveal="scale" data-delay={String(i + 1)} className="flex flex-col">
            <PricingCard
              planName={plan.name}
              description={plan.description}
              price={plan.price}
              features={[...plan.features]}
              buttonText={t.pricing.selectPlan}
              popularLabel={t.pricing.popular}
              isPopular={"isPopular" in plan ? plan.isPopular : false}
              buttonVariant={i === 1 ? "primary" : "secondary"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
