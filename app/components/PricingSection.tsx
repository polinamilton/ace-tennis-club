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
      <Navbar sectionId="price" />
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -right-6 pointer-events-none select-none opacity-90"
        style={{ width: "20%" }}
      />

      <div className="h-20 lg:h-28" />

      <div data-reveal="fade" className="relative z-10 text-center px-6 lg:px-10 mb-10 lg:mb-16">
        <h2
          className="font-normal text-white capitalize font-roboto text-4xl lg:text-[64px]"
          style={{ lineHeight: 1.2 }}
        >
          {t.pricing.heading}
        </h2>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-5 lg:gap-6 px-4 lg:px-14 pb-12 lg:pb-16 items-center lg:items-stretch justify-center">
        {t.pricing.plans.map((plan, i) => (
          <div key={plan.name} data-reveal="scale" data-delay={String(i + 1)} className="flex flex-col w-full max-w-sm lg:max-w-none lg:w-auto">
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
