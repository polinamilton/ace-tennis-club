"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const STATS = [
  { value: "1,800+", label: "Members" },
  { value: "32", label: "Courts" },
  { value: "30+", label: "Coaches" },
  { value: "99%", label: "Satisfaction" },
];

const CARDS = [
  {
    number: "01",
    label: "Expert Coaching",
    src: "/about-coaching.jpg",
    alt: "Expert coaching",
    extraClass: "object-top",
    teaser: "World-class coaches for every level of play.",
    full: "Our certified coaches bring decades of professional and competitive experience to every session. Whether you're picking up a racket for the first time or preparing for tournament play, our personalized programs are designed to elevate your game. From footwork and stroke technique to mental strategy and match tactics, we develop complete players who compete with confidence on any surface.",
  },
  {
    number: "02",
    label: "Elite Community",
    src: "/about-community.jpg",
    alt: "Elite community",
    extraClass: "",
    teaser: "A network of passionate, driven players.",
    full: "Joining ACE means becoming part of a vibrant community of tennis enthusiasts at every skill level. Compete in our regular club tournaments, connect at social mixers, and build lasting friendships both on and off the court. Whether you're looking for a hitting partner, a doubles team, or simply a place that shares your passion for the game, ACE is your home.",
  },
  {
    number: "03",
    label: "Premium Facilities",
    src: "/about-facilities.jpg",
    alt: "Premium facilities",
    extraClass: "",
    teaser: "State-of-the-art courts and amenities.",
    full: "ACE Tennis Club maintains its courts to professional tournament standards year-round. Our surfaces cater to every playing style, and our modern clubhouse features locker rooms, equipment storage, a fully stocked pro shop, and a members' lounge where you can unwind and connect after a match. Every detail is designed with your performance and comfort in mind.",
    short: true,
  },
];

export default function AboutSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="about" className="relative bg-white rounded-[40px] overflow-hidden">
      <Navbar light />
      <div className="h-28" />

      <div className="grid grid-cols-3 gap-5 px-10">

        {/* Cards 1 & 2 — full height */}
        {CARDS.slice(0, 2).map((card, i) => (
          <div
            key={card.number}
            data-reveal
            data-delay={String(i + 1)}
            className="relative rounded-[24px] overflow-hidden cursor-pointer group"
            style={{ height: "440px" }}
            onClick={() => setOpen(i)}
          >
            <img
              src={card.src}
              alt={card.alt}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${card.extraClass}`}
            />
            {/* Dark gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="block font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "48px" }}>{card.number}</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                <span className="font-segoe text-white/90 text-xs tracking-wide">{card.label}</span>
              </div>
              <p className="text-white/75 font-segoe text-xs leading-relaxed line-clamp-2">{card.teaser}</p>
              <span className="text-white/45 font-segoe text-[11px] mt-1 inline-block hover:text-white/80 transition-colors">Read more →</span>
            </div>
          </div>
        ))}

        {/* Card 3 — short image + 15 years block */}
        <div data-reveal data-delay="3" className="flex flex-col gap-5" style={{ height: "440px" }}>
          <div
            className="relative rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer group"
            style={{ height: "200px" }}
            onClick={() => setOpen(2)}
          >
            <img
              src={CARDS[2].src}
              alt={CARDS[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="block font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "48px" }}>03</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mb-1">
                <span className="font-segoe text-white/90 text-xs tracking-wide">Premium Facilities</span>
              </div>
              <p className="text-white/75 font-segoe text-[11px] leading-relaxed line-clamp-1">{CARDS[2].teaser}</p>
              <span className="text-white/45 font-segoe text-[10px] mt-0.5 inline-block">Read more →</span>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 pl-1">
            <span className="font-bold text-[#d9f80f] font-roboto leading-none flex-shrink-0" style={{ fontSize: "148px" }}>15</span>
            <span className="font-segoe text-black text-[22px] leading-snug">Years of<br />Experience</span>
          </div>
        </div>

      </div>

      <div className="h-6" />

      <div data-reveal="fade" className="bg-[#d9f80f] rounded-b-[40px] px-10 py-5 flex justify-around items-center">
        {STATS.map((stat, i) => (
          <div key={stat.label} data-reveal data-delay={String(i + 1)} className="text-center">
            <div className="font-semibold text-white leading-none mb-1 font-roboto" style={{ fontSize: "44px" }}>{stat.value}</div>
            <div className="text-black font-semibold text-lg font-segoe">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative rounded-[32px] overflow-hidden max-w-lg w-full"
            style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.12)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CARDS[open].src}
              alt={CARDS[open].alt}
              className="w-full h-52 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "40px" }}>{CARDS[open].number}</span>
            </div>
            <div className="px-8 py-7">
              <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4">
                <span className="font-segoe text-white/80 text-xs tracking-wide">{CARDS[open].label}</span>
              </div>
              <p className="text-white/70 font-segoe text-sm leading-relaxed">{CARDS[open].full}</p>
            </div>
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
