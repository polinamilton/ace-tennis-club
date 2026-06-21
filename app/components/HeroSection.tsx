"use client";

import Navbar from "./Navbar";
import { useLang } from "../i18n/LanguageContext";

const HERO_IMAGE = "/hero-court.jpg";
const HERO_IMAGE_MOBILE = "/hero-court-mobile.jpg";

export default function HeroSection() {
  const { t } = useLang();

  const letters = ["A", "C", "E"].map((letter, i) => (
    <span
      key={letter}
      style={{
        display: "inline-block",
        animation: `letterUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.13}s both`,
      }}
    >
      {letter}
    </span>
  ));

  return (
    <section
      id="hero"
      className="relative rounded-t-[40px] overflow-hidden min-h-screen flex flex-col lg:items-center lg:justify-center"
    >
      <Navbar showLang sectionId="hero" />

      {/* Background — portrait aerial shot on mobile, landscape on desktop */}
      <picture>
        <source media="(max-width: 1023px)" srcSet={HERO_IMAGE_MOBILE} />
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Mobile overlay: heavy gradient top + bottom, clear window in middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/75 lg:hidden" />
      {/* Desktop overlay: flat */}
      <div className="absolute inset-0 bg-black/25 hidden lg:block" />

      {/* ── Mobile layout: title top-left, CTA bottom-left ── */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 lg:hidden">
        {/* Top: brand title */}
        <div className="pt-28">
          <div className="relative inline-block">
            <h1
              className="hero-title text-white leading-none font-roboto"
              style={{ fontWeight: 700, letterSpacing: "0.03em" }}
            >
              {letters}
            </h1>
            <span
              className="absolute rounded-full bg-[#d9f80f] hero-dot"
              style={{ animation: "letterUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.39s both" }}
            />
          </div>
          <p
            className="font-segoe text-white/65 text-[11px] tracking-[0.25em] uppercase mt-4"
            style={{ animation: "fadeUp 0.6s ease-out 0.65s both" }}
          >
            {t.hero.tagline}
          </p>
        </div>

        {/* Bottom: CTA */}
        <div
          className="mt-auto pb-14"
          style={{ animation: "fadeUp 0.6s ease-out 0.8s both" }}
        >
          <a
            href="#contact"
            className="inline-block bg-[#d9f80f] text-black font-segoe text-[15px] font-semibold px-7 py-3 rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.35)] hover:brightness-95 transition-all"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* ── Desktop layout: centered (unchanged) ── */}
      <div className="relative z-10 hidden lg:flex flex-col items-center text-center pt-24 px-4">
        <div className="relative inline-block">
          <h1
            className="hero-title text-white leading-none font-roboto"
            style={{ fontWeight: 600, letterSpacing: "0.05em" }}
          >
            {letters}
          </h1>
          <span
            className="absolute rounded-full bg-[#d9f80f] hero-dot"
            style={{ animation: "letterUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.39s both" }}
          />
        </div>
        <p
          className="font-segoe text-white/80 text-[22px] mt-4 mb-8 tracking-widest uppercase"
          style={{ animation: "fadeUp 0.6s ease-out 0.65s both" }}
        >
          {t.hero.tagline}
        </p>
        <a
          href="#contact"
          className="bg-[#d9f80f] text-black font-segoe text-[16px] px-6 py-2 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:brightness-95 transition-all"
          style={{ animation: "fadeUp 0.6s ease-out 0.8s both" }}
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
