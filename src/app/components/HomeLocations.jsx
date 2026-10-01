import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import HomeHeading from "./HomeHeading";
import { TELEGRAM_URL } from "./siteContact";

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Connaught Place has its own feature block (HomeSplitFeatures), so it isn't repeated here.
const outlets = [
  {
    title: "Spa in Aerocity",
    description:
      "Enjoy the best spa in Aerocity with relaxing body massage at 5-star hotels like Lemon Tree, Andaz, IBIS and more. Just minutes from Delhi airport, with foreign therapists from all across the world.",
    image: "/images/hotel-andaz-delhi.jpg",
    pageLink: "/spa-in-aerocity",
    premium: true,
  },
  {
    title: "Spa in Lajpat Nagar",
    description:
      "Experience complete relaxation at our spa in Lajpat Nagar with expert body massage therapies and professional female therapists. Staying nearby or at home? We offer spa and home massage service too.",
    image: "/images/hotel-aurea-tower.jpg",
    pageLink: "/spa-in-lajpat-nagar",
    premium: true,
  },
  {
    title: "Spa in Defence Colony",
    description:
      "Relax at our spa in Defence Colony with expert body massage services to refresh your mind and body, serving hotel guests in NFC at places like The Suryaa for complete comfort and relaxation.",
    image: "/images/hotel-grand-palace.jpg",
  },
  {
    title: "Spa in Dwarka",
    description:
      "Feel at ease with our spa in Dwarka. Professional massage therapists come to your hotel room for an on-demand hotel spa, so your stay stays calm and relaxing.",
    image: "/images/hotel-grand-vista.jpg",
    pageLink: "/spa-in-dwarka",
  },
  {
    title: "Spa in Rajouri Garden",
    description:
      "Unwind at our luxury spa in Rajouri Garden with relaxing body massage treatments and skilled therapists. We offer personalised spa experiences for residents, travellers and hotel guests.",
    image: "/images/hotel-shane-avadh.jpg",
    pageLink: "/spa-in-rajouri-garden",
  },
  {
    title: "Spa in Rohini",
    description:
      "We have a massage outlet at our Rohini location too, perfect for a relaxing session in North-West Delhi without the long drive.",
    image: "/images/hotel-qamishli.jpg",
    pageLink: "/spa-in-rohini",
  },
];

export default function HomeLocations() {
  return (
    <section aria-labelledby="home-locations-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeading
          id="home-locations-title"
          eyebrow="Premium Locations"
          title="Our 5-Star"
          highlight="Hotel Spa in Delhi"
          after="& Outlets Near You"
          text={
            <>
              Find the perfect outlet near you, from our{" "}
              <a href="/spa-in-aerocity" className={linkClass}>spa in Aerocity</a> to our{" "}
              <a href="/spa-in-lajpat-nagar" className={linkClass}>spa in Lajpat Nagar</a>. Our exclusive outlets offer
              world-class therapies in <a href="/outlets" className={linkClass}>5-star hotel spas in Delhi</a>.
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {outlets.map((outlet) => (
            <article
              key={outlet.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)] sm:flex-row"
            >
              <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-[42%]">
                <Image
                  src={outlet.image}
                  alt={`${outlet.title} – 5-star hotel spa`}
                  fill
                  sizes="(max-width:640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {outlet.premium && (
                  <span className="absolute left-3 top-3 rounded-md bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Premium
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-title text-xl font-bold text-amber-900">{outlet.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{outlet.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {outlet.pageLink && (
                    <a href={outlet.pageLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900">
                      View Details <FiArrowRight />
                    </a>
                  )}
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#229ED9] hover:underline"
                  >
                    <FaTelegram /> See Available Staff
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/outlets"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-7 py-3.5 text-sm font-semibold text-amber-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
          >
            View All 24+ Outlets <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
