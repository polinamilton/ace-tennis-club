"use client";

import { PricingCard } from "@/components/ui/animated-glassy-pricing";
import Navbar from "./Navbar";
import { useLang } from "../i18n/LanguageContext";

export default function PricingSection() {
  const { t } = useLang();

  return (
    <section
      id="price"
      className="relative overflow-hidden dark"
      style={{
        background: "linear-gradient(to bottom, #a64c02 4%, #5b300c 14%, #161616 44%)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -right-6 pointer-events-none select-none opacity-90"
        style={{ width: "20%", transform: "rotate(20deg)" }}
      />

      <div className="h-28" />

      <div data-reveal="fade" className="relative z-10 text-center px-10 mb-16">
        <h2
          className="font-normal text-white capitalize font-roboto"
          style={{ fontSize: "64px", lineHeight: 1.2 }}
        >
          {t.pricing.heading}
        </h2>
      </div>

      <div className="relative z-10 flex flex-row gap-6 px-14 pb-16 items-center justify-center">
        {t.pricing.plans.map((plan, i) => (
          <div key={plan.name} data-reveal="scale" data-delay={String(i + 1)}>
            <PricingCard
              planName={plan.name}
              description={plan.description}
              price={plan.price}
              features={[...plan.features]}
              buttonText={t.pricing.selectPlan}
              isPopular={"isPopular" in plan ? plan.isPopular : false}
              buttonVariant={i === 1 ? "primary" : "secondary"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
