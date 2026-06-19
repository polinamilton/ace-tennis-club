"use client";

import { useLang } from "../i18n/LanguageContext";
import { useSection } from "./SectionContext";

export default function Navbar({ light = false, padLeft = "pl-14" }: { light?: boolean; padLeft?: string }) {
  const { t, locale, setLocale } = useLang();
  const { activeSection } = useSection();

  const text = light ? "text-black" : "text-white";
  const mutedClass = light ? "text-black/35" : "text-white/35";

  const NAV_LINKS = [
    { label: t.nav.about,   href: "#about",   id: "about" },
    { label: t.nav.courts,  href: "#courts",  id: "courts" },
    { label: t.nav.price,   href: "#price",   id: "price" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <div className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between ${padLeft} pr-14 pt-10`}>
      <div className={`flex items-center gap-2 font-bold text-[36px] leading-none font-roboto ${light ? "text-black" : "text-white"}`}>
        ACE
        <span className="w-3.5 h-3.5 rounded-full bg-[#d9f80f] inline-block" />
      </div>

      <div className={`flex gap-10 text-[15px] font-segoe`}>
        {NAV_LINKS.map(({ label, href, id }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={href}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-[#d9f80f]"
                  : `${text} hover:text-[#d9f80f]`
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        {/* Language toggle pill */}
        <div
          className={`flex items-center rounded-full p-1 font-segoe text-[13px] font-medium ${
            light ? "bg-black/8 border border-black/12" : "bg-white/10 border border-white/15"
          }`}
        >
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

        <a
          href="#contact"
          className="bg-[#d9f80f] text-black font-segoe text-[15px] px-5 py-2 rounded-full hover:brightness-95 transition-all"
        >
          {t.nav.book}
        </a>
      </div>
    </div>
  );
}
