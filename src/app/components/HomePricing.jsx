import { Building2, CheckCircle2, Clock, Crown, Hotel, ShieldCheck, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomeHeading from "./HomeHeading";
import { WHATSAPP_URL } from "./siteContact";

const pricingPlans = [
  {
    title: "Spa Outlet Session",
    tagline: "First Visit Offer & Regular Visits",
    price: "₹1,999",
    period: "starting rate / 60 min",
    duration: "60 Min",
    description: "Ideal if you want quick muscle relief and stress release at one of our private Delhi outlets.",
    features: [
      "Custom Oil / Cream / Dry Massage",
      "Certified Female Therapist",
      "Private Sanitized Treatment Suite",
      "Refreshing Shower & Fresh Towels",
      "60-min Deep Tissue or Swedish Technique",
    ],
    ctaText: "Book Outlet Visit",
    icon: Building2,
  },
  {
    title: "5-Star Hotel & Home Spa",
    tagline: "Luxury In-Room Experience",
    price: "₹14,999",
    period: "all-inclusive / 90 min",
    duration: "90 Min",
    popular: true,
    description: "Our signature on-demand spa, delivered straight to your 5-star hotel room or home anywhere in Delhi NCR.",
    features: [
      "Therapist of Choice (Indian / International)",
      "Delivered to Your Hotel Suite or Home",
      "Signature B2B & Full-Body Therapy",
      "Premium Essential Aromatherapy Oils",
      "Complimentary Refreshments & Jacuzzi Advice",
      "90-min Extended Full Relaxation",
    ],
    ctaText: "Book Hotel / Home Spa",
    icon: Hotel,
  },
  {
    title: "VIP Presidential Spa",
    tagline: "Exclusive Russian & International Therapists",
    price: "₹19,999",
    period: "luxury VIP / 120 min",
    duration: "120 Min",
    description: "Our most indulgent session: international therapists, a complete therapy and total privacy.",
    features: [
      "Verified Russian & European Therapists",
      "5-Star Partner Property or In-Room VIP",
      "Complete Sandwich or Four-Hand Option",
      "Rejuvenating Facial & Head Massage Add-on",
      "100% Confidential & Discreet Concierge",
      "120-min Deep Rejuvenation Session",
    ],
    ctaText: "Book VIP Experience",
    icon: Crown,
  },
];

const guarantees = [
  { text: "100% Transparent Pricing — Zero Hidden Charges", icon: ShieldCheck },
  { text: "No Advance Payment Required for Outlets", icon: CheckCircle2 },
  { text: "Certified Russian, European & Indian Therapists", icon: Star },
];

export default function HomePricing() {
  return (
    <section id="Pricing" aria-labelledby="home-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeading
          id="home-pricing-title"
          eyebrow="Transparent & All-Inclusive Packages"
          title="Affordable Luxury"
          highlight="Spa Prices in Delhi"
          text={
            <>
              Transparent pricing starting from just ₹1,999. Choose from outlet sessions, in-room 5-star hotel
              appointments and private home spa services. See our complete{" "}
              <a href="/spa-price-in-delhi" className="font-semibold text-amber-700 underline underline-offset-4">
                spa price in Delhi
              </a>{" "}
              list.
            </>
          }
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.title}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "ring-2 ring-amber-500 shadow-[0_25px_50px_rgba(156,82,50,0.25)] lg:-translate-y-3 lg:hover:-translate-y-4"
                    : "ring-1 ring-amber-100 shadow-[0_10px_30px_rgba(43,24,16,0.08)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-[-38px] top-5 z-10 rotate-45 bg-amber-300 px-10 py-1 text-[10px] font-black uppercase tracking-widest text-amber-900">
                    Most Popular
                  </span>
                )}

                {/* Header band */}
                <div className={`relative pl-7 pb-12 pt-7 ${plan.popular ? "bg-amber-500 pr-16" : "bg-amber-900 pr-7"}`}>
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-secondary" strokeWidth={1.8} />
                    <h3 className="font-title text-xl font-bold text-white">{plan.title}</h3>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/75">{plan.tagline}</p>
                  <span className="absolute -bottom-px left-0 right-0 h-6 rounded-t-[50%] bg-white" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col px-7 pb-7">
                  <div className="-mt-6 relative z-[1] flex items-end justify-between">
                    <span className="rounded-full bg-white px-5 py-3 shadow-lg ring-1 ring-amber-100">
                      <span className="font-title text-3xl font-bold text-amber-700">{plan.price}</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      <Clock className="size-3" /> {plan.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{plan.period}</p>

                  <p className="mt-4 text-sm leading-relaxed text-bodycolor">{plan.description}</p>

                  <ul className="mt-5 mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-colors duration-300 ${
                      plan.popular ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                    }`}
                  >
                    <FaWhatsapp className="text-base" /> {plan.ctaText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl bg-cream px-6 py-5">
          {guarantees.map(({ text, icon: Icon }) => (
            <li key={text} className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-ink">
              <Icon className="size-4 shrink-0 text-amber-500" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
