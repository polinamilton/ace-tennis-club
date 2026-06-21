"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { useLang } from "../i18n/LanguageContext";

const CONTACT_LINKS = ["info@acetennis.com", "+1 (555) 000-0000", "123 Court Ave"];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const { t } = useLang();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative rounded-b-[40px] overflow-hidden flex flex-col"
      style={{ background: "#161616", minHeight: "100vh" }}
    >
      <Navbar sectionId="contact" />

      {/* Decorative balls */}
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[28%] lg:top-[62%] -right-20 pointer-events-none select-none opacity-85"
        style={{ width: "85%", maxWidth: "600px", transform: "translateY(-50%) rotate(-15deg)", animation: "ballFloat 9s ease-in-out infinite" }}
      />
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none select-none"
        style={{ width: "55%", maxWidth: "420px", transform: "translate(-18%, 30%) rotate(140deg)", animation: "ballDrift 13s ease-in-out infinite" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start px-6 lg:px-24 gap-8 lg:gap-16 pt-28 lg:pt-40 pb-12 lg:pb-32 flex-1">

        {/* Left: JOIN THE GAME */}
        <div data-reveal className="w-full lg:flex-shrink-0 lg:w-[320px]">
          <h2 className="contact-heading font-bold font-roboto leading-[0.88]">
            <span className="text-white">{c.line1}</span><br />
            <span className="text-white/25">{c.line2}</span><br />
            <span className="text-white/25">{c.line3}</span>
          </h2>
        </div>

        {/* Form */}
        <div data-reveal data-delay="2" className="w-full lg:flex-1 lg:max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md rounded-[32px] px-6 lg:px-10 py-8 flex flex-col gap-7"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="border-b border-white/25 pb-3 transition-colors focus-within:border-white/60">
              <input
                type="text"
                placeholder={c.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-lg lg:text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3 transition-colors focus-within:border-white/60">
              <input
                type="tel"
                placeholder={c.phonePlaceholder}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-lg lg:text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3 transition-colors focus-within:border-white/60">
              <input
                type="email"
                placeholder={c.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-lg lg:text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-1">
              <button
                type="submit"
                className="bg-[#d9f80f] text-black font-segoe font-semibold text-base lg:text-lg px-8 lg:px-10 py-3 lg:py-4 rounded-full hover:brightness-95 transition-all"
              >
                {c.submit}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <div className="relative z-10 flex justify-center gap-8 lg:gap-24 pb-6 lg:pb-10 px-6">
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-[10px] lg:text-sm font-semibold mb-2 lg:mb-3">{c.navLabel}</p>
          <ul className="flex flex-col gap-1">
            {c.navLinks.map((link, i) => (
              <li key={i}>
                <a href={`#${["about","courts","price","contact"][i]}`} className="text-white/45 font-segoe text-[11px] lg:text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-[10px] lg:text-sm font-semibold mb-2 lg:mb-3">{c.contactsLabel}</p>
          <ul className="flex flex-col gap-1">
            {CONTACT_LINKS.map((item) => (
              <li key={item} className="text-white/45 font-segoe text-[11px] lg:text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
