"use client";

import { useState } from "react";

const BALL_IMAGE = "/tennis-ball.png";
const NAV_LINKS = ["About", "Courts", "Price", "Contact"];
const CONTACT_LINKS = ["info@acetennis.com", "+1 (555) 000-0000", "123 Court Ave"];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative rounded-b-[40px] overflow-hidden"
      style={{ background: "#111111", minHeight: "100vh" }}
    >
      {/* Tennis ball bottom half — top-right, continues from pricing section ball */}
      <img
        src="/ball-bottom.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 pointer-events-none select-none"
        style={{ width: "58%", right: "30px" }}
      />

      <div className="h-28" />

      {/* Two-column layout: heading left, form right */}
      <div className="relative z-10 flex items-start gap-20 px-16 pb-24">

        {/* Left: heading */}
        <div className="flex-shrink-0 pt-2" style={{ width: "340px" }}>
          <h2
            className="font-bold font-roboto leading-[0.92]"
            style={{ fontSize: "86px" }}
          >
            <span className="text-white">JOIN</span>
            <br />
            <span className="text-white/25">THE</span>
            <br />
            <span className="text-white/25">GAME</span>
          </h2>
        </div>

        {/* Right: glassmorphic form card */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md rounded-[32px] px-14 py-10 flex flex-col gap-8"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="border-b border-white/25 pb-3">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3">
              <input
                type="tel"
                placeholder="Your Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3">
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="border border-white/35 text-white font-segoe font-medium text-lg px-10 py-4 hover:bg-white/10 transition-all"
              >
                JOIN THE MEMBERSHIP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer links — bottom right */}
      <div className="absolute bottom-10 right-14 flex gap-16 z-10">
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-sm font-semibold mb-3">
            Navigation
          </p>
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/45 font-segoe text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-sm font-semibold mb-3">
            Contacts
          </p>
          <ul className="flex flex-col gap-1.5">
            {CONTACT_LINKS.map((item) => (
              <li key={item} className="text-white/45 font-segoe text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
