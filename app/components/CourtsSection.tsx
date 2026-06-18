"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const COURTS = [
  {
    src: "/court-1.jpg",
    label: "Court Level",
    name: "Grand Court",
    surface: "Har-Tru Clay",
    lighting: "Full floodlit",
    size: "78 ft × 36 ft",
    hours: "6:00 AM – 11:00 PM",
  },
  {
    src: "/court-2.jpg",
    label: "Aerial View",
    name: "Centre Court",
    surface: "Rebound Ace Hard",
    lighting: "Stadium lights",
    size: "78 ft × 36 ft",
    hours: "6:00 AM – 11:00 PM",
  },
  {
    src: "/court-3.jpg",
    label: "Hard Court",
    name: "Practice Court",
    surface: "DecoTurf Hard",
    lighting: "LED floodlit",
    size: "78 ft × 27 ft",
    hours: "7:00 AM – 10:00 PM",
  },
  {
    src: "/court-4.jpg",
    label: "Grass Court",
    name: "Wimbledon Court",
    surface: "Natural Grass",
    lighting: "Natural only",
    size: "78 ft × 36 ft",
    hours: "8:00 AM – 8:00 PM",
  },
];

export default function CourtsSection() {
  const [current, setCurrent] = useState(0);
  const court = COURTS[current];

  const prev = () => setCurrent((c) => (c - 1 + COURTS.length) % COURTS.length);
  const next = () => setCurrent((c) => (c + 1) % COURTS.length);

  return (
    <section id="courts" className="relative bg-white rounded-[40px] overflow-hidden">
      <Navbar light />
      <div className="h-28" />

      <div className="flex items-end px-14 pb-14 gap-12">

        {/* Left: title + court info */}
        <div data-reveal className="flex-shrink-0 w-[380px] pb-2">
          <h2
            className="font-bold leading-[0.9] font-roboto bg-gradient-to-r from-black from-50% via-black via-70% to-transparent bg-clip-text text-transparent whitespace-nowrap"
            style={{ fontSize: "88px" }}
          >
            OUR<br />COURTS
          </h2>

          {/* Court details — animated on slide change */}
          <div key={current} className="mt-8 flex flex-col gap-5" style={{ animation: "fadeUp 0.35s ease-out both" }}>
            <p className="font-roboto font-semibold text-black" style={{ fontSize: "22px" }}>{court.name}</p>
            <div className="flex flex-col">
              {[
                { label: "Surface", value: court.surface },
                { label: "Size",    value: court.size },
                { label: "Lighting",value: court.lighting },
                { label: "Hours",   value: court.hours },
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
            alt={court.label}
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
            {COURTS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Court ${i + 1}`}
                className={`rounded-full transition-all ${i === current ? "bg-white w-4 h-4" : "bg-white/50 w-3 h-3 mt-0.5"}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
