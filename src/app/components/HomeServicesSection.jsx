import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HomeHeading from "./HomeHeading";
import { WHATSAPP_URL } from "./siteContact";

const services = [
  {
    title: "B2B Massage",
    image: "/images/b2b-massage.jpg",
    link: "/b2b-massage-in-delhi",
    icon: "💆",
    tags: ["Private Room", "Female Therapist"],
    desc: "A deeply relaxing B2B therapy in a private room, given by a trained therapist with full care and comfort.",
  },
  {
    title: "Sandwich Massage",
    image: "/images/sandwich-massage-delhi.webp",
    link: "/sandwich-massage",
    icon: "✨",
    tags: ["Two Therapists", "Best Seller"],
    desc: "Two therapists work in sync from both sides, so the relaxation goes twice as deep, from head to toe.",
  },
  {
    title: "Full Body Massage",
    image: "/images/MassageSession.webp",
    link: "/full-body-massage-in-delhi",
    icon: "🌿",
    tags: ["Oil Massage", "Stress Relief"],
    desc: "A head-to-toe oil massage that loosens tight spots, improves blood flow and leaves you feeling light.",
  },
  {
    title: "Couples Massage",
    image: "/images/couple-massage-delhi.webp",
    link: "/couple-massage",
    icon: "💞",
    tags: ["Private Suite", "For Two"],
    desc: "Side-by-side sessions in a shared private suite. A lovely way to spend an anniversary, birthday or date day.",
  },
  {
    title: "Deep Tissue Massage",
    image: "/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg",
    link: "/deep-tissue-massage-in-delhi",
    icon: "💪",
    tags: ["Firm Pressure", "Pain Relief"],
    desc: "Firm, focused pressure for stubborn knots, desk-job stiffness and post-workout soreness.",
  },
  {
    title: "Thai Massage",
    image: "/images/thaimassage.jpg",
    link: "/thai-massage-in-delhi",
    icon: "🧘",
    tags: ["Stretching", "Energy Boost"],
    desc: "Traditional stretching and acupressure that improves flexibility and gets your energy flowing again.",
  },
  {
    title: "Swedish Massage",
    image: "/images/female-therapist-rehabilitation-center-giving-back-massage.jpg",
    link: "/swedish-massage-in-delhi",
    icon: "🌸",
    tags: ["Gentle Strokes", "First Visit Pick"],
    desc: "Long, gentle strokes that calm the nerves. A great choice if it's your first time at a spa.",
  },
  {
    title: "Aromatherapy Massage",
    image: "/images/aromatherapy-featured-jpg.webp",
    link: "/aromatherapy-massage-in-delhi",
    icon: "🕯️",
    tags: ["Essential Oils", "Better Sleep"],
    desc: "A soothing massage with essential oils like lavender and eucalyptus to quiet the mind and help you sleep better.",
  },
];

export default function HomeServicesSection() {
  return (
    <section id="services" aria-labelledby="home-services-title" className="bg-ornament py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <HomeHeading
          id="home-services-title"
          eyebrow="Our Massage Menu"
          title="Explore Every Kind of Massage At Our"
          highlight="Massage Parlour in Delhi"
          text="Every therapy happens in a clean, private room with a trained therapist. Not sure which one suits you? Message us and we'll help you pick."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.link}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.07)] ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)]"
            >
              <a href={service.link} className="relative block h-52 overflow-hidden bg-blush" tabIndex={-1} aria-hidden="true">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-0 right-0 flex size-11 items-center justify-center rounded-tl-2xl bg-amber-500 text-lg">
                  {service.icon}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-title text-xl font-bold text-amber-900">
                  <a href={service.link} className="transition-colors hover:text-amber-500">
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{service.desc}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-700">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-600"
                  >
                    Book Now <FiArrowRight />
                  </a>
                  <a
                    href={service.link}
                    className="text-xs font-semibold text-amber-700 underline-offset-4 hover:underline"
                    aria-label={`Read more about ${service.title} in Delhi`}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
