"use client";

import { PricingCard, PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import Navbar from "./Navbar";

const PLANS: PricingCardProps[] = [
  {
    planName: "Basic",
    description: "Get on the court and start playing.",
    price: "25.99",
    features: [
      "2 court sessions per week",
      "Group coaching classes",
      "Locker room access",
      "Member newsletter",
    ],
    buttonText: "Select Plan",
    buttonVariant: "secondary",
  },
  {
    planName: "Standard",
    description: "Train harder and play more.",
    price: "55.99",
    features: [
      "Unlimited court sessions",
      "Weekly 1-on-1 coaching",
      "Equipment storage",
      "2 guest passes per month",
      "Priority court booking",
    ],
    buttonText: "Select Plan",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Premium",
    description: "The full elite experience.",
    price: "99.99",
    features: [
      "Unlimited court sessions",
      "Daily coaching sessions",
      "Full equipment included",
      "VIP lounge access",
      "Unlimited guest passes",
      "Tournament entries included",
    ],
    buttonText: "Select Plan",
    buttonVariant: "secondary",
  },
];

export default function PricingSection() {
  return (
    <section
      id="price"
      className="relative rounded-t-[40px] overflow-hidden dark"
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
          Plans as ambitious as your goals
        </h2>
      </div>

      <div className="relative z-10 flex flex-row gap-6 px-14 pb-16 items-center justify-center">
        {PLANS.map((plan, i) => (
          <div key={plan.planName} data-reveal="scale" data-delay={String(i + 1)}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </section>
  );
}
