"use client";

import { useState } from "react";

// Placeholder court images — replace with your actual court photos in public/
// Figma source (hero court image reused): https://www.figma.com/api/mcp/asset/2d678201-1c38-42ae-8b17-ec28380d4742
const COURTS = [
  { src: "/hero-court.jpg", label: "Clay Court 1" },
  { src: "/hero-court.jpg", label: "Clay Court 2" },
  { src: "/hero-court.jpg", label: "Hard Court 1" },
  { src: "/hero-court.jpg", label: "Hard Court 2" },
];

export default function CourtsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + COURTS.length) % COURTS.length);
  const next = () => setCurrent((c) => (c + 1) % COURTS.length);

  return (
    <section id="courts" className="bg-white rounded-[40px] overflow-hidden">
      {/* Nav clearance */}
      <div className="h-28" />

      <div className="flex items-center gap-10 px-10 pb-12">
        {/* Left: gradient title */}
        <div className="flex-shrink-0 w-72">
          <h2
            className="font-bold leading-[0.9] font-roboto"
            style={{
              fontSize: "96px",
              background: "linear-gradient(to right, #000 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            OUR
            <br />
            COURTS
          </h2>
        </div>

        {/* Right: carousel */}
        <div className="flex-1 relative">
          <div
            className="relative rounded-[40px] overflow-hidden bg-gray-200"
            style={{ aspectRatio: "16/10" }}
          >
            <img
              src={COURTS[current].src}
              alt={COURTS[current].label}
              className="w-full h-full object-cover"
            />

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous court"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next court"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {COURTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to court ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "bg-white w-4 h-4"
                      : "bg-white/50 w-3 h-3 mt-0.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
