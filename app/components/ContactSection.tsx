"use client";

import { useState } from "react";

// Tennis ball images: place your tennis ball image at public/tennis-ball.png
// Figma source: https://www.figma.com/api/mcp/asset/8cabcb7e-95a7-49dd-8b06-41dacb08970a
const BALL_IMAGE = "/tennis-ball.png";

const NAV_LINKS = ["About", "Courts", "Price", "Contact"];
const CONTACT_LINKS = ["info@acetennis.com", "+1 (555) 000-0000", "123 Court Ave"];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <section id="contact" className="bg-[#161616] rounded-[40px] overflow-hidden relative">
      {/* Tennis ball top-right */}
      <img
        src={BALL_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55%] opacity-95 pointer-events-none select-none"
      />
      {/* Tennis ball bottom-left (rotated) */}
      <img
        src={BALL_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute bottom-80 -left-20 w-[35%] opacity-90 pointer-events-none select-none"
        style={{ transform: "rotate(149deg)" }}
      />

      {/* Nav clearance */}
      <div className="h-28" />

      {/* Main content */}
      <div className="relative z-10 px-16 pb-16">
        {/* Heading */}
        <h2
          className="font-normal font-roboto mb-10"
          style={{ fontSize: "64px", lineHeight: 1.1 }}
        >
          <span className="text-white">JOIN </span>
          <span className="text-white/40">THE</span>
          <br />
          <span className="text-white/40">GAME</span>
        </h2>

        {/* Glassmorphism form */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/[0.12] border-2 border-white rounded-[40px] px-16 py-10 max-w-[1040px]"
        >
          {/* Name */}
          <div className="border-b border-white/40 pb-4 mb-6">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent text-white font-segoe text-2xl placeholder:text-white focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="border-b border-white/40 pb-4 mb-6">
            <input
              type="tel"
              placeholder="Your Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-transparent text-white font-segoe text-2xl placeholder:text-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="border-b border-white/40 pb-4 mb-8">
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent text-white font-segoe text-2xl placeholder:text-white focus:outline-none"
            />
          </div>

          {/* Submit — right-aligned */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="backdrop-blur-sm bg-white/[0.12] border border-white text-white font-segoe text-2xl px-10 py-4 hover:bg-white/20 transition-all"
            >
              JOIN THE MEMBERSHIP
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-[#aca6a6]/20 mx-16 rounded-[24px] px-16 py-12 mb-10 grid grid-cols-2 gap-10">
        <div>
          <p className="font-segoe text-[24px] font-semibold text-[#e6ef5f] uppercase tracking-widest mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/70 font-segoe text-lg hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-segoe text-[24px] font-semibold text-[#e6ef5f] uppercase tracking-widest mb-4">
            Contacts
          </p>
          <ul className="flex flex-col gap-2">
            {CONTACT_LINKS.map((item) => (
              <li key={item} className="text-white/70 font-segoe text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
