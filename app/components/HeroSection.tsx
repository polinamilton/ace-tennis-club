// Hero background: place your tennis court image at public/hero-court.jpg
// Figma source: https://www.figma.com/api/mcp/asset/2d678201-1c38-42ae-8b17-ec28380d4742
const HERO_IMAGE = "/hero-court.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative rounded-[47px] overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Figma accent lines */}
      <div className="absolute left-[58px] inset-y-0 w-px bg-white/30" />
      <div className="absolute top-20 left-0 w-[215px] h-px bg-white/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24">
        <div className="relative inline-block">
          <h1
            className="text-white leading-none font-roboto"
            style={{ fontSize: "196px", fontWeight: 600, letterSpacing: "0.05em" }}
          >
            {["A", "C", "E"].map((letter, i) => (
              <span
                key={letter}
                style={{
                  display: "inline-block",
                  animation: `letterUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.13}s both`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <span
            className="absolute rounded-full bg-[#d9f80f]"
            style={{
              width: 22,
              height: 22,
              top: 28,
              right: -32,
              animation: "dotPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.48s both",
            }}
          />
        </div>
        <p
          className="font-segoe text-white/80 text-[22px] mt-4 mb-8 tracking-widest uppercase"
          style={{ animation: "fadeUp 0.6s ease-out 0.65s both" }}
        >
          Where Champions Are Made
        </p>
        <a
          href="#contact"
          className="bg-[#d9f80f] text-black font-segoe text-[22px] px-7 py-2.5 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:brightness-95 transition-all"
          style={{ animation: "fadeUp 0.6s ease-out 0.8s both" }}
        >
          Join Now
        </a>
      </div>
    </section>
  );
}
