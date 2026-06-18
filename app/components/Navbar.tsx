"use client";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Courts", href: "#courts" },
  { label: "Price", href: "#price" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ light = false }: { light?: boolean }) {
  const text = light ? "text-black" : "text-white";
  const logo = light ? "text-black" : "text-white";

  return (
    <div className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-14 pt-10`}>
      <div className={`flex items-center gap-2 font-bold text-[36px] leading-none font-roboto ${logo}`}>
        ACE
        <span className="w-3.5 h-3.5 rounded-full bg-[#d9f80f] inline-block" />
      </div>

      <div className={`flex gap-10 text-[15px] font-segoe ${text}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-[#d9f80f] transition-colors duration-200">
            {label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="bg-[#d9f80f] text-black font-segoe text-[15px] px-5 py-2 rounded-full hover:brightness-95 transition-all"
      >
        Book a Court
      </a>
    </div>
  );
}
