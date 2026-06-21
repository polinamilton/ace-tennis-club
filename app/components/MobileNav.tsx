"use client";

import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useSection } from "./SectionContext";

export default function MobileNav() {
  const { t, locale, setLocale } = useLang();
  const { activeSection } = useSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = activeSection === "courts" || activeSection === "about";
  const textColor = isLight ? "text-black" : "text-white";
  const lineColor = isLight ? "bg-black" : "bg-white";

  const NAV_LINKS = [
    { label: t.nav.about,   href: "#about" },
    { label: t.nav.courts,  href: "#courts" },
    { label: t.nav.price,   href: "#price" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#111] flex flex-col items-center justify-center gap-8 lg:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 text-white/60 hover:text-white text-3xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-segoe text-3xl hover:text-[#d9f80f] transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center rounded-full p-1 bg-white/10 border border-white/15 font-segoe text-sm font-medium mt-2">
            {(["en", "it"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-4 py-1.5 rounded-full transition-all uppercase tracking-wide ${
                  locale === lang ? "bg-[#d9f80f] text-black" : "text-white/45 hover:text-white/70"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="#courts"
            onClick={() => setMenuOpen(false)}
            className="bg-[#d9f80f] text-black font-segoe text-base font-semibold px-8 py-3 rounded-full"
          >
            {t.nav.book}
          </a>
        </div>
      )}

      {/* Fixed top bar — mobile only */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] lg:hidden flex items-center px-5 pt-5 pb-3 transition-all duration-300"
        style={{
          background: isLight ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.28)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* Logo */}
        <div className={`flex items-center gap-2 font-bold text-[28px] leading-none font-roboto transition-colors duration-300 ${textColor}`}>
          ACE
          <span className="w-3 h-3 rounded-full bg-[#d9f80f] inline-block" />
        </div>

        <div className="ml-auto flex items-center gap-2.5">
          {/* Language toggle — always visible on mobile */}
          <div className={`flex items-center rounded-full p-[3px] font-segoe text-[11px] font-medium transition-colors duration-300 ${
            isLight ? "bg-black/8 border border-black/12" : "bg-white/10 border border-white/15"
          }`}>
            {(["en", "it"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2.5 py-[5px] rounded-full transition-all duration-200 uppercase tracking-wide ${
                  locale === lang
                    ? "bg-[#d9f80f] text-black"
                    : isLight
                    ? "text-black/45 hover:text-black/70"
                    : "text-white/45 hover:text-white/70"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col justify-center gap-1.5 p-1.5"
            aria-label="Open menu"
          >
            <span className={`block w-5 h-0.5 rounded-full transition-colors duration-300 ${lineColor}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-colors duration-300 ${lineColor}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-colors duration-300 ${lineColor}`} />
          </button>
        </div>
      </div>
    </>
  );
}
