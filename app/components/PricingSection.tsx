// Tennis ball overlay: place your tennis ball image at public/tennis-ball.png
// Figma source: https://www.figma.com/api/mcp/asset/e630a640-9de7-43c4-9eab-ea58fb1044cc
const BALL_IMAGE = "/tennis-ball.png";

const PLANS = [
  {
    name: "Basic Plan",
    price: "$25.99",
    cardBg: "bg-[rgba(255,255,255,0.55)]",
    btnBg: "bg-[#1e1e1e]",
    btnText: "text-white",
    nameColor: "text-black",
    priceColor: "text-black",
  },
  {
    name: "Standard Plan",
    price: "$55.99",
    cardBg: "bg-[rgba(0,0,0,0.57)]",
    btnBg: "bg-[#d9f80f]",
    btnText: "text-black",
    nameColor: "text-white",
    priceColor: "text-white",
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "$99.99",
    cardBg: "bg-[rgba(255,255,255,0.55)]",
    btnBg: "bg-[#1e1e1e]",
    btnText: "text-white",
    nameColor: "text-black",
    priceColor: "text-black",
  },
];

export default function PricingSection() {
  return (
    <section
      id="price"
      className="relative rounded-[40px] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #a64c02 4%, #5b300c 14%, #161616 44%)",
        minHeight: "100vh",
      }}
    >
      {/* Tennis ball decorative overlay */}
      <img
        src={BALL_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 w-[55%] opacity-90 pointer-events-none select-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Nav clearance */}
      <div className="h-28" />

      {/* Heading */}
      <div className="relative z-10 text-center px-10 mb-10">
        <h2
          className="font-normal text-white capitalize font-roboto"
          style={{ fontSize: "64px", lineHeight: 1.2 }}
        >
          Plans as ambitious as your goals
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-5 px-10 pb-10">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.cardBg} backdrop-blur-md rounded-[40px] p-10 flex flex-col gap-6`}
          >
            <div>
              <p
                className={`font-semibold font-segoe text-[32px] ${plan.nameColor}`}
              >
                {plan.name}
              </p>
              <p
                className={`font-normal font-roboto ${plan.priceColor} mt-2`}
                style={{ fontSize: "64px", lineHeight: 1 }}
              >
                {plan.price}
              </p>
            </div>

            {/* Feature placeholder area */}
            <div
              className="flex-1 rounded-[24px] bg-white/20 min-h-[160px]"
            />

            <button
              className={`w-full py-4 rounded-full font-segoe text-[28px] ${plan.btnBg} ${plan.btnText} shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:brightness-95 transition-all`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
