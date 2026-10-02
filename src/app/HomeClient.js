import dynamic from "next/dynamic";

// Above the fold
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import HomeServicesSection from "./components/HomeServicesSection";
import HomeHeading from "./components/HomeHeading";

// Below the fold (split into separate chunks, still server-rendered for SEO)
const SignatureRange = dynamic(() => import("./components/SignatureRange"));
const HomeVideoShowcase = dynamic(() => import("./components/HomeVideoShowcase"));
const HomeSplitFeatures = dynamic(() => import("./components/HomeSplitFeatures"));
const HomeWhyChoiceus = dynamic(() => import("./components/HomeWhyChoiceus"));
const HomeAmenities = dynamic(() => import("./components/HomeAmenities"));
const HomeLocations = dynamic(() => import("./components/HomeLocations"));
const HomePricing = dynamic(() => import("./components/HomePricing"));
const HomeOurProcess = dynamic(() => import("./components/HomeOurProcess"));
const HomeTherapyest = dynamic(() => import("./components/HomeTherapyest"));
const HomeHealthBenefits = dynamic(() => import("./components/HomeHealthBenefits"));
const HomeTestimonials = dynamic(() => import("./components/HomeTestimonials"));
const HomeFaqSection = dynamic(() => import("./components/Homefaqsection"));
const WhatsappFloat = dynamic(() => import("./components/WhatsappFloat"));

const guides = [
  { title: "Best Spa Services in Delhi NCR", href: "/blog/best-spa-service-in-delhi-ncr" },
  { title: "Your First Sandwich Massage", href: "/blog/first-sandwich-massage-what-to-expect" },
  { title: "Spa in Connaught Place", href: "/blog/spa-in-connaught-place" },
  { title: "What Does Thai Massage Do to Your Body?", href: "/blog/thai-massage-does-to-your-body" },
  { title: "What is a B2B Full Body Massage?", href: "/blog/what-is-b2b-full-body-massage" },
  { title: "Difference Between Spa and Massage", href: "/blog/what-is-the-difference-between-spa-and-massage" },
];

export default function HomeClient() {
  return (
    <main className="font-sans overflow-hidden">
      {/* Each section covers one topic; don't add a section that repeats another's content. */}
      {/* 1. First impression */}
      <HomeBanner />
      <AboutSection />

      {/* Below-the-fold sections are wrapped in .cv-auto (content-visibility: auto) so the browser skips
          their style/layout/paint until they scroll near the viewport. Content stays in the HTML for SEO. */}

      {/* 2. What we offer */}
      <div className="cv-auto"><HomeServicesSection /></div>
      <div className="cv-auto"><SignatureRange /></div>
      <div className="cv-auto"><HomeVideoShowcase /></div>
      <div className="cv-auto"><HomeSplitFeatures /></div>

      {/* 3. Why us & where */}
      <div className="cv-auto"><HomeWhyChoiceus /></div>
      <div className="cv-auto"><HomeLocations /></div>
      <div className="cv-auto"><HomeAmenities /></div>

      {/* 4. Price, booking & team */}
      <div className="cv-auto"><HomePricing /></div>
      <div className="cv-auto"><HomeOurProcess /></div>
      <div className="cv-auto"><HomeTherapyest /></div>
      <div className="cv-auto"><HomeHealthBenefits /></div>

      {/* 5. Trust & answers */}
      <div className="cv-auto"><HomeTestimonials /></div>

      {/* From Our Blog - real server-rendered links so every guide stays reachable from the homepage */}
      <section aria-labelledby="home-guides-title" className="cv-auto bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading id="home-guides-title" eyebrow="Read & Relax" title="Spa & Massage" highlight="Guides" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 md:p-6 ring-1 ring-amber-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] trv-card"
              >
                <span className="font-title text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-amber-500">
                  {item.title}
                </span>
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="cv-auto"><HomeFaqSection /></div>
      <WhatsappFloat />
    </main>
  );
}
