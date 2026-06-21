"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { useLang } from "../i18n/LanguageContext";

export default function CourtsSection() {
  const [current, setCurrent] = useState(0);
  const { t } = useLang();

  const courts = t.courts.courts;
  const court = courts[current];
  const { labels } = t.courts;

  const prev = () => setCurrent((c) => (c - 1 + courts.length) % courts.length);
  const next = () => setCurrent((c) => (c + 1) % courts.length);

  return (
    <section id="courts" className="relative bg-white overflow-hidden">
      <Navbar light sectionId="courts" showBook={false} />
      <div className="h-20 lg:h-28" />

      <div className="flex flex-col lg:flex-row lg:items-end px-4 lg:px-14 pb-8 lg:pb-14 gap-6 lg:gap-12">

        {/* Left: title + court info */}
        <div data-reveal className="w-full lg:flex-shrink-0 lg:w-[460px] lg:pb-2">
          <h2
            className="courts-heading font-bold leading-[0.9] font-roboto bg-gradient-to-r from-black to-[#d9f80f] bg-clip-text text-transparent"
          >
            {t.courts.heading1}<br />{t.courts.heading2}
          </h2>

          {/* Court details */}
          <div key={current} className="mt-4 lg:mt-8 flex flex-col gap-2 lg:gap-5" style={{ animation: "fadeUp 0.35s ease-out both" }}>
            <p className="font-roboto font-semibold text-black text-sm lg:text-[22px]">{court.name}</p>
            <div className="flex flex-col">
              {[
                { label: labels.surface, value: court.surface },
                { label: labels.size,    value: court.size },
                { label: labels.lighting, value: court.lighting },
                { label: labels.hours,   value: court.hours },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2 lg:py-3 border-b border-black/10 last:border-0">
                  <span className="font-segoe text-black/40 text-[11px] lg:text-sm">{label}</span>
                  <span className="font-segoe text-black text-[11px] lg:text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: large carousel */}
        <div
          data-reveal data-delay="2"
          className="courts-carousel relative rounded-[32px] overflow-hidden bg-gray-200 w-full lg:flex-1"
        >
          <img
            key={current}
            src={court.src}
            alt={court.imgLabel}
            className="w-full h-full object-cover"
            style={{ animation: "fadeUp 0.4s ease-out both" }}
          />

          {/* Top gradient + court name */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div key={`name-${current}`} className="absolute top-5 left-6 z-10" style={{ animation: "fadeUp 0.35s ease-out both" }}>
            <span className="font-roboto font-bold text-white text-xl lg:text-[26px]" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              {court.name}
            </span>
          </div>

          {/* Bottom gradient + Book a Court button */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
          <div className="absolute bottom-14 left-0 right-0 flex justify-center z-10">
            <a
              href="#price"
              className="bg-[#d9f80f] text-black font-segoe text-[14px] font-semibold px-6 py-2.5 rounded-full hover:brightness-95 transition-all"
            >
              {t.nav.book}
            </a>
          </div>

          <button onClick={prev} aria-label="Previous court"
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <button onClick={next} aria-label="Next court"
            className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {courts.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Court ${i + 1}`}
                className={`rounded-full transition-all ${i === current ? "bg-white w-4 h-4" : "bg-white/50 w-3 h-3 mt-0.5"}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
