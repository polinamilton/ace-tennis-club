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
      className="relative rounded-b-[40px] overflow-hidden"
      style={{ background: "#161616", minHeight: "100vh" }}
    >
      <Navbar />

      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 -right-20 pointer-events-none select-none opacity-85"
        style={{ width: "38%", transform: "translateY(-50%) rotate(-15deg)" }}
      />

      {/* Small accent ball — bottom-left corner */}
      <img
        src="/tennis-ball.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[32%] pointer-events-none select-none"
        style={{ transform: "translate(-18%, 30%) rotate(140deg)" }}
      />

      {/* Two-column: heading left, form center-right */}
      <div className="absolute inset-0 z-10 flex items-start px-24 gap-16" style={{ paddingTop: "160px", paddingBottom: "120px" }}>

        {/* Left: JOIN THE GAME */}
        <div data-reveal className="flex-shrink-0" style={{ width: "320px" }}>
          <h2 className="font-bold font-roboto leading-[0.88]" style={{ fontSize: "86px" }}>
            <span className="text-white">{c.line1}</span><br />
            <span className="text-white/25">{c.line2}</span><br />
            <span className="text-white/25">{c.line3}</span>
          </h2>
        </div>

        {/* Center: form */}
        <div data-reveal data-delay="2" className="flex-1 max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md rounded-[32px] px-10 py-8 flex flex-col gap-7"
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
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3 transition-colors focus-within:border-white/60">
              <input
                type="tel"
                placeholder={c.phonePlaceholder}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/25 pb-3 transition-colors focus-within:border-white/60">
              <input
                type="email"
                placeholder={c.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-white font-segoe text-xl placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-1">
              <button
                type="submit"
                className="border border-white/35 text-white font-segoe font-medium text-lg px-10 py-4 hover:bg-white/10 transition-all"
              >
                {c.submit}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <div className="absolute bottom-10 right-14 flex gap-16 z-10">
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-sm font-semibold mb-3">{c.navLabel}</p>
          <ul className="flex flex-col gap-1.5">
            {c.navLinks.map((link, i) => (
              <li key={i}>
                <a href={`#${["about","courts","price","contact"][i]}`} className="text-white/45 font-segoe text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-segoe text-[#e6ef5f] uppercase tracking-widest text-sm font-semibold mb-3">{c.contactsLabel}</p>
          <ul className="flex flex-col gap-1.5">
            {CONTACT_LINKS.map((item) => (
              <li key={item} className="text-white/45 font-segoe text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
