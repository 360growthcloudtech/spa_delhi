import Link from "next/link";
import HomeHeading from "./HomeHeading";

const physicalBenefits = [
  { title: "Muscle Relief", description: "Works out knotted muscles and relieves pain.", icon: "💆" },
  { title: "Improved Circulation", description: "Boosts blood circulation through the body.", icon: "❤️" },
  { title: "Detoxification", description: "Helps the body naturally flush out toxins.", icon: "✨" },
  { title: "Flexibility Boost", description: "Improves ease of movement in your joints.", icon: "🧘" },
  { title: "Pain Management", description: "Eases both sudden and long-term pain.", icon: "🛡️" },
];

const spiritualBenefits = [
  { title: "Stress Reduction", description: "Calms the mind and settles the nerves.", icon: "🧘‍♀️" },
  { title: "Mental Clarity", description: "Helps you relax and focus better.", icon: "⚖️" },
  { title: "Emotional Balance", description: "Brings a sense of calm to mind and soul.", icon: "💡" },
  { title: "Energy Flow", description: "Opens up and revitalises your body's energy.", icon: "🕊️" },
  { title: "Deep Relaxation", description: "Connects the body, the mind and the spirit.", icon: "🌀" },
];

function BenefitCard({ heading, emoji, items }) {
  return (
    <div className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(43,24,16,0.07)] ring-1 ring-amber-100">
      <h3 className="flex items-center gap-3 font-title text-2xl font-bold text-amber-900">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-amber-500 text-xl" aria-hidden="true">
          {emoji}
        </span>
        {heading}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((b) => (
          <li key={b.title} className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl" aria-hidden="true">
              {b.icon}
            </span>
            <span>
              <span className="block font-semibold text-amber-800">{b.title}</span>
              <span className="text-sm text-bodycolor">{b.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomeHealthBenefits() {
  return (
      <section aria-labelledby="home-benefits-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="home-benefits-title"
            eyebrow="Holistic Wellbeing"
            title="Benefits Of"
            highlight="Choosing Our Massage Spa in Delhi"
            text="Regular massage at our spa can improve your sleep, blood circulation and skin tone. Our massage spa in Delhi has certified therapists to make every session count."
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <BenefitCard heading="Physical Benefits" emoji="🏃" items={physicalBenefits} />
            <BenefitCard heading="Spiritual Benefits" emoji="🧘" items={spiritualBenefits} />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/massage-in-delhi"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
            >
              Discover Our Treatments
            </Link>
          </div>
        </div>
      </section>
  );
}
