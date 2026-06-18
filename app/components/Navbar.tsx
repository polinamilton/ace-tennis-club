"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Courts", href: "#courts" },
  { label: "Price", href: "#price" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const lightIds = ["about", "courts"];

    const checkLight = () => {
      const anyLight = lightIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < 80 && rect.bottom > 80;
      });
      setIsLight(anyLight);
    };

    window.addEventListener("scroll", checkLight, { passive: true });
    checkLight();
    return () => window.removeEventListener("scroll", checkLight);
  }, []);

  const textColor = isLight ? "text-black" : "text-white";
  const logoColor = isLight ? "text-black" : "text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between pl-16 pr-12 pt-12 pb-6">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 font-bold text-[40px] leading-none font-roboto ml-10 ${logoColor}`}
        >
          ACE
          <span className="w-4 h-4 rounded-full bg-[#d9f80f] inline-block" />
        </div>

        {/* Nav links */}
        <div className={`flex gap-10 text-[16px] font-segoe ${textColor}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#d9f80f] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-[#d9f80f] text-black font-segoe text-[16px] px-6 py-2 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:brightness-95 transition-all"
        >
          Book a Court
        </a>
      </div>
    </nav>
  );
}
