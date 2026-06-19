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

  const text = light ? "text-black" : "text-white";

  const NAV_LINKS = [
    { label: t.nav.about,   href: "#about",   id: "about" },
    { label: t.nav.courts,  href: "#courts",  id: "courts" },
    { label: t.nav.price,   href: "#price",   id: "price" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <div
      className="absolute top-0 left-0 right-0 z-20 flex items-center px-14 pt-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-14px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      {/* Logo */}
      <div className={`flex items-center gap-2 font-bold text-[36px] leading-none font-roboto ${light ? "text-black" : "text-white"}`}>
        ACE
        <span className="w-3.5 h-3.5 rounded-full bg-[#d9f80f] inline-block" />
      </div>

      {/* Nav links — absolutely centered on page */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-[15px] font-segoe">
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
      <div className="ml-auto flex items-center gap-4">
        {showLang && (
          <div className={`flex items-center rounded-full p-1 font-segoe text-[13px] font-medium ${
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

        {showBook && (
          <a
            href="#courts"
            className="bg-[#d9f80f] text-black font-segoe text-[15px] px-5 py-2 rounded-full hover:brightness-95 transition-all"
          >
            {t.nav.book}
          </a>
        )}
      </div>
    </div>
  );
}
