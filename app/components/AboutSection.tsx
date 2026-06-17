const CARDS = [
  {
    number: "1",
    bg: "bg-[#161616]",
    numColor: "text-[#d9f80f]",
    textColor: "text-white",
    title: "Expert Coaching",
    desc: "Train with certified professionals who develop champions at every level of the game.",
  },
  {
    number: "2",
    bg: "bg-[#b15202]",
    numColor: "text-white",
    textColor: "text-white",
    title: "Premium Facilities",
    desc: "Clay and hard courts maintained to international tournament standards year-round.",
  },
  {
    number: "3",
    bg: "bg-[#d9f80f]",
    numColor: "text-[#1e1e1e]",
    textColor: "text-[#1e1e1e]",
    title: "Elite Community",
    desc: "Join a network of passionate players, from beginners to competitive athletes.",
  },
];

const STATS = [
  { value: "1,800+", label: "Members" },
  { value: "32", label: "Courts" },
  { value: "30+", label: "Coaches" },
  { value: "99%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white rounded-[40px] overflow-hidden">
      {/* Nav clearance */}
      <div className="h-28" />

      {/* Three cards */}
      <div className="grid grid-cols-3 gap-5 px-10">
        {CARDS.map((card) => (
          <div
            key={card.number}
            className={`${card.bg} rounded-[40px] p-10 flex flex-col justify-between`}
            style={{ minHeight: "510px" }}
          >
            <span
              className={`font-bold leading-none font-roboto ${card.numColor}`}
              style={{ fontSize: "128px" }}
            >
              {card.number}
            </span>
            <div>
              <h3
                className={`font-semibold text-3xl mb-3 font-segoe ${card.textColor}`}
              >
                {card.title}
              </h3>
              <p
                className={`text-lg leading-relaxed font-roboto ${card.textColor} opacity-80`}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="bg-[#d9f80f] rounded-b-[40px] px-10 py-10 flex justify-around items-center mt-5">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="font-semibold text-white leading-none mb-2 font-roboto"
              style={{ fontSize: "64px" }}
            >
              {stat.value}
            </div>
            <div className="text-black font-semibold text-2xl font-segoe">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
