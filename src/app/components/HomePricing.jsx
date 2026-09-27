"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Building2, 
  Hotel, 
  Crown, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  Clock
} from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Spa Outlet Session",
    tagline: "First-Time & Regular Visits",
    price: "₹1,999",
    period: "starting rate / 60 min",
    badge: "Most Affordable",
    isPopular: false,
    duration: "60 Min Session",
    description: "Ideal for individuals seeking immediate muscle relief and stress release at our private Delhi outlets.",
    features: [
      "Custom Oil / Cream / Dry Massage",
      "Certified Female Therapist",
      "Private Sanitized Treatment Suite",
      "Refreshing Shower & Fresh Towels",
      "60-min Deep Tissue or Swedish Technique",
    ],
    ctaText: "Book Outlet Visit",
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: Building2,
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "5-Star Hotel & Home Spa",
    tagline: "Luxury In-Room Experience",
    price: "₹15,000",
    period: "all-inclusive / 90 min",
    badge: "MOST POPULAR",
    isPopular: true,
    duration: "90 Min Session",
    description: "Our signature on-demand spa service delivered directly to your 5-star hotel room or home anywhere in Delhi NCR.",
    features: [
      "Therapist of Choice (Indian / International)",
      "Delivered to Your Hotel Suite or Home",
      "Signature B2B & Full-Body Therapy",
      "Premium Essential Aromatherapy Oils",
      "Complimentary Refreshments & Jacuzzi Advice",
      "90-min Extended Full Relaxation",
    ],
    ctaText: "Book Hotel / Home Spa",
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: Hotel,
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
  },
  {
    title: "VIP Presidential Spa",
    tagline: "Exclusive Russian & Foreigner Therapists",
    price: "₹20,000",
    period: "luxury VIP / 120 min",
    badge: "VIP Luxury",
    isPopular: false,
    duration: "120 Min Session",
    description: "The pinnacle of indulgent wellness with international therapists, comprehensive therapy, and complete privacy.",
    features: [
      "Verified Russian & European Therapists",
      "5-Star Partner Property or In-Room VIP",
      "Complete Sandwich or Four-Hand Option",
      "Rejuvenating Facial & Head Massage Add-on",
      "100% Confidential & Discreet Concierge",
      "120-min Deep Rejuvenation Session",
    ],
    ctaText: "Book VIP Experience",
    ctaLink: "https://api.whatsapp.com/send?phone=9310xxxxxx",
    icon: Crown,
    gradient: "from-amber-500/10 to-transparent",
  },
];

const guarantees = [
  { text: "100% Transparent Pricing — Zero Hidden Charges", icon: ShieldCheck },
  { text: "No Advance Payment Required for Outlets", icon: CheckCircle2 },
  { text: "Certified Russian, European & Indian Therapists", icon: Star },
];

export default function HomePricing() {
  return (
    <section id="Pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fffaf5] via-amber-50/40 to-[#fffaf5] overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-amber-200/30 blur-[130px] -z-0" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="size-4 text-amber-600" />
            <span>Transparent & All-Inclusive Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-5">
            Affordable Luxury{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent italic font-serif">
              Spa Prices in Delhi
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Transparent pricing starting from just ₹1,999. Choose from outlet sessions, in-room 5-star hotel appointments, and private home spa services. Explore our complete{" "}
            <a
              href="/spa-price-in-delhi"
              className="text-amber-700 font-semibold underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700 transition-all"
            >
              Spa Price in Delhi
            </a>
            .
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 md:p-8 transition-all duration-500 ${
                  plan.isPopular
                    ? "bg-[#1f1610] text-white shadow-[0_25px_50px_rgba(0,0,0,0.25),0_0_35px_rgba(217,119,6,0.2)] border-2 border-amber-500 lg:-translate-y-3"
                    : "bg-white text-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-amber-100/90 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#1f1610] px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-md flex items-center gap-1.5">
                    <Star className="size-3.5 fill-[#1f1610]" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`size-13 p-3 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        plan.isPopular
                          ? "bg-amber-500/20 border border-amber-500/40 text-amber-300"
                          : "bg-amber-50 border border-amber-200/80 text-amber-700"
                      }`}
                    >
                      <Icon className="size-6" strokeWidth={1.8} />
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      <Clock className="size-3 text-amber-500" />
                      <span>{plan.duration}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`text-2xl font-serif font-bold mb-1 ${
                      plan.isPopular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`text-xs font-medium tracking-wide uppercase mb-6 ${
                      plan.isPopular ? "text-amber-300" : "text-amber-700"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div
                    className={`p-5 rounded-2xl mb-6 flex items-baseline justify-between ${
                      plan.isPopular
                        ? "bg-white/[0.07] border border-white/10"
                        : "bg-amber-50/60 border border-amber-100"
                    }`}
                  >
                    <div>
                      <span
                        className={`text-4xl md:text-5xl font-extrabold tracking-tight font-sans ${
                          plan.isPopular
                            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
                            : "text-amber-800"
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        plan.isPopular ? "text-white/60" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.isPopular ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`size-4.5 shrink-0 mt-0.5 ${
                            plan.isPopular ? "text-amber-400" : "text-amber-600"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            plan.isPopular ? "text-white/85" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-[0_10px_20px_rgba(217,119,6,0.35)] hover:from-amber-600 hover:to-amber-800"
                      : "bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-black shadow-amber-900/10"
                  }`}
                >
                  <FaWhatsapp className="text-lg" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="size-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust & Guarantee Bar */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-white border border-amber-100/90 shadow-sm flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 text-gray-700 text-xs md:text-sm font-medium">
                <Icon className="size-4 text-amber-600 shrink-0" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}