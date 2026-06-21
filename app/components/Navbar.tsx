"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useSection } from "./SectionContext";

export default function Navbar({
  light = false,
  showLang = false,
  showBook = true,
  sectionId = "hero",
}: {
  light?: boolean;
  showLang?: boolean;
  showBook?: boolean;
  sectionId?: string;
}) {
  const { t, locale, setLocale } = useLang();
  const { activeSection } = useSection();
  const [visible, setVisible] = useState(sectionId === "hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (activeSection === sectionId) {
      setVisible(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }
  }, [activeSection, sectionId]);

  // Close mobile menu on scroll/section change
  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  const text = light ? "text-black" : "text-white";
  const lineColor = light ? "bg-black" : "bg-white";

  const NAV_LINKS = [
    { label: t.nav.about,   href: "#about",   id: "about" },
    { label: t.nav.courts,  href: "#courts",  id: "courts" },
    { label: t.nav.price,   href: "#price",   id: "price" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#111] flex flex-col items-center justify-center gap-8 lg:hidden">
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

          {/* Language toggle in mobile menu */}
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

      {/* Main navbar bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center px-5 pt-6 lg:px-14 lg:pt-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-14px)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
        }}
      >
        {/* Logo */}
        <div className={`flex items-center gap-2 font-bold text-[28px] lg:text-[36px] leading-none font-roboto ${light ? "text-black" : "text-white"}`}>
          ACE
          <span className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-[#d9f80f] inline-block" />
        </div>

        {/* Nav links — desktop only, absolutely centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-10 text-[15px] font-segoe">
          {NAV_LINKS.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={`transition-colors duration-300 ${
                  isActive ? "text-[#d9f80f]" : `${text} hover:text-[#d9f80f]`
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-3">
          {/* Language toggle — desktop only (mobile gets it in hamburger menu) */}
          {showLang && (
            <div className={`hidden lg:flex items-center rounded-full p-1 font-segoe text-[13px] font-medium ${
              light ? "bg-black/8 border border-black/12" : "bg-white/10 border border-white/15"
            }`}>
              {(["en", "it"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-1 rounded-full transition-all duration-200 uppercase tracking-wide ${
                    locale === lang
                      ? "bg-[#d9f80f] text-black"
                      : light
                      ? "text-black/45 hover:text-black/70"
                      : "text-white/45 hover:text-white/70"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex lg:hidden flex-col justify-center gap-1.5 p-1.5"
            aria-label="Open menu"
          >
            <span className={`block w-5 h-0.5 ${lineColor} rounded-full`} />
            <span className={`block w-5 h-0.5 ${lineColor} rounded-full`} />
            <span className={`block w-5 h-0.5 ${lineColor} rounded-full`} />
          </button>

          {/* Book a Court button */}
          {showBook && (
            <a
              href="#courts"
              className="bg-[#d9f80f] text-black font-segoe text-[13px] lg:text-[15px] px-4 lg:px-5 py-1.5 lg:py-2 rounded-full hover:brightness-95 transition-all"
            >
              {t.nav.book}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
