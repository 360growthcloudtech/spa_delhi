// Add only real guest reviews here (e.g. copied from the Google Business Profile).
// The grid switches to four columns once there are four or more reviews.
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Traveler",
    content:
      "Absolutely the best spa experience in Mahipalpur! The Russian massage technique was unlike anything I've tried before. Pure relaxation from start to finish.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Corporate Professional",
    content:
      "Exceptional service and ambiance. The therapists are highly professional and skilled. My deep tissue massage released all my back tension. Will definitely return!",
    rating: 5,
  },
  {
    name: "Rahul & Neha",
    role: "Couple Getaway",
    content:
      "The couple's massage was magical! Private suite, soothing music, and perfect pressure. My wife and I left feeling completely renewed. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah D'Costa",
    role: "Frequent Flyer",
    content:
      "After a long international flight, this was exactly what I needed. The hot stone massage melted all my stress away. Clean, professional, and tranquil environment.",
    rating: 5,
  },
  {
    name: "Vikram Choudhary",
    role: "Regular Client",
    content:
      "The signature massage is a game changer! Perfect blend of techniques. The staff is courteous and the hygiene standards are top-notch. Best spa near IGI Airport!",
    rating: 5,
  },
  {
    name: "Meera Bhatia",
    role: "Wellness Enthusiast",
    content:
      "I've visited many spas in Delhi, but Luxury Russian Spa stands out. Authentic techniques, premium oils, and the most relaxing ambiance. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Amit Kapoor",
    role: "First-time Visitor",
    content:
      "Fantastic experience from booking to checkout. The therapist listened to my problem areas and customized the massage accordingly. Five stars without hesitation!",
    rating: 5,
  },
  {
    name: "Shilpa Nair",
    role: "Yoga Instructor",
    content:
      "The aromatherapy massage was heavenly. The staff made me feel welcome and comfortable throughout. This is now my go-to spa in Mahipalpur.",
    rating: 5,
  },
];

// Overall rating shown in the badge above the cards; set either to null to hide the badge.
const overallRating = 4.98;
const reviewCount = "2,450+";

function initials(name) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ rating, className = "" }) {
  return (
    <span className={`tracking-[0.15em] ${className}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="text-amber-400">{"★".repeat(Math.round(rating))}</span>
      <span className="text-gray-300">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export default function HomeTestimonials() {
  const columns = testimonials.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section aria-labelledby="home-reviews-title" className="bg-[#fdf3ee] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#f3dccf] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a0522d]">
            ✦ Client Testimonials ✦
          </span>
          <h2 id="home-reviews-title" className="mt-5 font-title text-4xl md:text-5xl font-bold text-[#2b1810]">
            What Our <span className="text-[#d2795a]">Guests Say</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-bodycolor">
            Experiences shared by guests at Luxury Russian Spa across Delhi NCR
          </p>

          {overallRating && reviewCount && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-[0_6px_20px_rgba(43,24,16,0.06)]">
                <Stars rating={overallRating} className="text-sm" />
                <span className="font-title text-lg font-bold text-[#a0522d]">
                  {overallRating} <span className="text-sm font-normal text-gray-400">/ 5</span>
                </span>
              </span>
              <span className="text-xs text-bodycolor">Based on {reviewCount} verified guest reviews</span>
            </div>
          )}

          <span className="mx-auto mt-7 block h-px w-20 bg-[#d2795a]/60" aria-hidden="true" />
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 ${columns}`}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(43,24,16,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-title text-3xl leading-none text-[#e6c3b2]" aria-hidden="true">&ldquo;</span>
              <Stars rating={t.rating} className="mt-2 text-xs" />
              <blockquote className="mt-3 flex-1 font-title text-[15px] italic leading-relaxed text-[#5a3a2b]">
                {t.content}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-[#f3dccf] pt-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ecc9b5] to-[#d2a084] text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-semibold text-[#a0522d]">{t.name}</span>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
