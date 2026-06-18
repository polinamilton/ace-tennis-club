const STATS = [
  { value: "1,800+", label: "Members" },
  { value: "32", label: "Courts" },
  { value: "30+", label: "Coaches" },
  { value: "99%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white rounded-[40px] overflow-hidden">
      <div className="h-28" />

      <div className="grid grid-cols-3 gap-5 px-10">

        {/* Col 1: Coaching photo — tall portrait */}
        <div className="relative rounded-[24px] overflow-hidden" style={{ height: "440px" }}>
          <img
            src="/about-coaching.jpg"
            alt="Expert coaching"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-5 left-5">
            <span className="block font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "48px" }}>01</span>
            <span className="block font-segoe text-white font-semibold text-base leading-tight mt-1">Expert Coaching</span>
          </div>
        </div>

        {/* Col 2: Community photo — tall portrait */}
        <div className="relative rounded-[24px] overflow-hidden" style={{ height: "440px" }}>
          <img
            src="/about-community.jpg"
            alt="Elite community"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5">
            <span className="block font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "48px" }}>02</span>
            <span className="block font-segoe text-white font-semibold text-base leading-tight mt-1">Elite Community</span>
          </div>
        </div>

        {/* Col 3: Small court photo + 15 Years stat */}
        <div className="flex flex-col gap-5" style={{ height: "440px" }}>
          <div className="relative rounded-[24px] overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
            <img
              src="/about-facilities.jpg"
              alt="Premium facilities"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="block font-bold text-[#d9f80f] font-roboto leading-none" style={{ fontSize: "48px" }}>03</span>
              <span className="block font-segoe text-white font-semibold text-base leading-tight mt-1">Premium Facilities</span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 pl-1">
            <span
              className="font-bold text-[#d9f80f] font-roboto leading-none flex-shrink-0"
              style={{ fontSize: "148px" }}
            >
              15
            </span>
            <span className="font-segoe text-black text-[22px] leading-snug">
              Years of<br />Experience
            </span>
          </div>
        </div>

      </div>

      <div className="h-6" />

      {/* Stats bar */}
      <div className="bg-[#d9f80f] rounded-b-[40px] px-10 py-5 flex justify-around items-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="font-semibold text-white leading-none mb-1 font-roboto"
              style={{ fontSize: "44px" }}
            >
              {stat.value}
            </div>
            <div className="text-black font-semibold text-lg font-segoe">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
