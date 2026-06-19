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
      <Navbar light sectionId="courts" />
      <div className="h-28" />

      <div className="flex items-end px-14 pb-14 gap-12">

        {/* Left: title + court info */}
        <div data-reveal className="flex-shrink-0 w-[460px] pb-2">
          <h2
            className="font-bold leading-[0.9] font-roboto bg-gradient-to-r from-black to-[#d9f80f] bg-clip-text text-transparent whitespace-nowrap"
            style={{ fontSize: "112px" }}
          >
            {t.courts.heading1}<br />{t.courts.heading2}
          </h2>

          {/* Court details — animated on slide change */}
          <div key={current} className="mt-8 flex flex-col gap-5" style={{ animation: "fadeUp 0.35s ease-out both" }}>
            <p className="font-roboto font-semibold text-black" style={{ fontSize: "22px" }}>{court.name}</p>
            <div className="flex flex-col">
              {[
                { label: labels.surface, value: court.surface },
                { label: labels.size,    value: court.size },
                { label: labels.lighting, value: court.lighting },
                { label: labels.hours,   value: court.hours },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-black/10 last:border-0">
                  <span className="font-segoe text-black/40 text-sm">{label}</span>
                  <span className="font-segoe text-black text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: large carousel */}
        <div
          data-reveal data-delay="2"
          className="relative rounded-[32px] overflow-hidden bg-gray-200"
          style={{ flex: 1, aspectRatio: "4/3" }}
        >
          <img
            key={current}
            src={court.src}
            alt={court.imgLabel}
            className="w-full h-full object-cover"
            style={{ animation: "fadeUp 0.4s ease-out both" }}
          />

          <button onClick={prev} aria-label="Previous court"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <button onClick={next} aria-label="Next court"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
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
