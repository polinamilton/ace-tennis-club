"use client";

import { useState } from "react";

const COURTS = [
  { src: "/court-1.jpg", label: "Court Level" },
  { src: "/court-2.jpg", label: "Aerial View" },
  { src: "/court-3.jpg", label: "Hard Court" },
  { src: "/court-4.jpg", label: "Grass Court" },
];

export default function CourtsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + COURTS.length) % COURTS.length);
  const next = () => setCurrent((c) => (c + 1) % COURTS.length);

  return (
    <section id="courts" className="bg-white rounded-[40px] overflow-hidden">
      <div className="flex items-end px-14 pt-14 pb-14 gap-12">

        {/* Title */}
        <div className="flex-shrink-0 w-[420px] pb-2 overflow-hidden">
          <h2
            className="font-bold leading-[0.9] font-roboto bg-gradient-to-r from-black from-50% via-black via-70% to-transparent bg-clip-text text-transparent whitespace-nowrap"
            style={{ fontSize: "96px" }}
          >
            OUR
            <br />
            COURTS
          </h2>
        </div>

        {/* Large image with internal arrows */}
        <div
          className="relative rounded-[32px] overflow-hidden bg-gray-200"
          style={{ flex: 1, aspectRatio: "4/3" }}
        >
          <img
            key={current}
            src={COURTS[current].src}
            alt={COURTS[current].label}
            className="w-full h-full object-cover"
            style={{ animation: "fadeUp 0.4s ease-out both" }}
          />

          {/* Prev arrow — inside image */}
          <button
            onClick={prev}
            aria-label="Previous court"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next arrow — inside image */}
          <button
            onClick={next}
            aria-label="Next court"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {COURTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Court ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === current ? "bg-white w-4 h-4" : "bg-white/50 w-3 h-3 mt-0.5"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
