import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

// Above the fold components (Normal Import)
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import HomeServicesSection from "./components/HomeServicesSection";
import SignatureRange from "./components/SignatureRange";
import HomeWhyChoiceus from "./components/HomeWhyChoiceus";
import SectionTitle from "./components/SectionTitle";

// Lazy Load Components
const HomeOurProcess = dynamic(() => import("./components/HomeOurProcess"));
const HomeOutlet = dynamic(() => import("./components/HomeOutlet"));
const HomePricing = dynamic(() => import("./components/HomePricing"));
const HomeLocations = dynamic(() => import("./components/HomeLocations"));
const Relaxinghomecontent = dynamic(() =>
  import("./components/Relaxinghomecontent")
);
const HomeTherapyest = dynamic(() =>
  import("./components/HomeTherapyest")
);
const HomeHealthBenefits = dynamic(() =>
  import("./components/HomeHealthBenefits")
);
const HomeTestimonials = dynamic(() =>
  import("./components/HomeTestimonials"),
  {
    ssr: false,
  }
);
const HomeFaqSection = dynamic(() =>
  import("./components/Homefaqsection"),
  {
    ssr: false,
  }
);
const HomeLocation2 = dynamic(() =>
  import("./components/HomeLocation2")
);
const WhatsappFloat = dynamic(() =>
  import("./components/WhatsappFloat"),
  {
    ssr: false,
  }
);

export default function HomeClient() {
  return (
    <main className="font-sans overflow-hidden">
      {/* Above The Fold */}
      <HomeBanner />
      <AboutSection />
      <HomeServicesSection />
      <SignatureRange />
      <HomeWhyChoiceus />

      {/* Other Sections */}
      <HomeOurProcess />
      <HomeOutlet />
      <Suspense fallback={null}>
    <HomePricing />
</Suspense>

      {/* Content Section */}
      <section className="bg-gradient-to-b from-white via-amber-50/30 to-white py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* First Row: Deep Relaxation */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-gradient-to-br from-[#fffaf5] via-white to-amber-50/50 p-6 md:p-12 border border-amber-100/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border-4 border-white">
              <Image 
                src="/images/05872eb2c906f2cc13b93a5154004945.jpg" 
                alt="Visit Our Massage Centre in Delhi for Deep Relaxation" 
                fill 
                sizes="(max-width:768px) 100vw, 50vw" 
                loading="lazy" 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Pill Badges */}
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg border border-amber-100 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold text-sm">
                  24+
                </span>
                <div>
                  <span className="block font-bold text-gray-900 text-sm leading-none">Luxury Outlets</span>
                  <span className="text-[11px] font-medium text-amber-700">Across Delhi NCR</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-white text-xs font-semibold flex items-center gap-1.5 shadow">
                <span className="text-amber-400">★</span>
                <span>4.9 / 5 Rated</span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-4 w-fit">
                <span className="size-1.5 rounded-full bg-amber-600"></span>
                Deep Relaxation & Wellness
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-gray-900 leading-tight mb-5">
                Visit Our Massage Centre{" "}
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent italic font-serif">
                  in Delhi for Deep Relaxation
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-6">
                Our massage centre in Delhi offers a wide range of premium massage services to help you relax after a long, stressful day. Our team of Indian and international therapists is trained to deliver B2B massage, full body massage, and <span className="font-semibold text-amber-700"><a href="/couples-massage-in-delhi" className="underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700">couples massage in Delhi</a></span> at an affordable price without compromising on quality. From hotel massage to home massage, we&apos;re ready to serve you wherever you are.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Certified Indian & Russian Therapists",
                  "100% Private Sanitized Suites",
                  "In-Room Hotel & Home Delivery",
                  "Transparent & Affordable Packages",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-700">
                    <span className="size-1.5 rounded-full bg-amber-600 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=9310xxxxxx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Book a Session
                </a>
                <a 
                  href="/couples-massage-in-delhi" 
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-semibold text-sm transition-all duration-300"
                >
                  Explore Therapies
                </a>
              </div>
            </div>
          </div>

          {/* Second Row: Connaught Place */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-white p-6 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-amber-100/90">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-4 w-fit">
                <span className="size-1.5 rounded-full bg-amber-600"></span>
                Top-Rated Central Delhi
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-gray-900 leading-tight mb-5">
                Get Top-Rated Full Body{" "}
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent italic font-serif">
                  Massage At Spa in Connaught Place
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-6">
                Our full-body massage at <span className="font-semibold text-amber-700"><a href="/spa-in-connaught-place" className="underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700">spa in Connaught Place</a></span> is the perfect way to relax and refresh. We combine modern massage techniques with traditional healing practices to create therapy plans that suit your body and lifestyle. With professional therapists, quality oils, and customized treatments, enjoy a rejuvenating session right in the heart of Delhi.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Near Rajiv Chowk Metro Gate 1",
                  "5-Star Hotel Spa Appointments",
                  "Private Couple & Single Rooms",
                  "Discreet & 24/7 Available",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-700">
                    <span className="size-1.5 rounded-full bg-amber-600 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="/spa-in-connaught-place" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore Connaught Place
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=9310xxxxxx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-semibold text-sm transition-all duration-300"
                >
                  Book CP Session
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border-4 border-white">
              <Image 
                src="/images/453.webp" 
                alt="Full Body Massage in Connaught Place" 
                fill 
                sizes="(max-width:768px) 100vw, 50vw" 
                loading="lazy" 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg border border-amber-100 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold text-sm">
                  C.P.
                </span>
                <div>
                  <span className="block font-bold text-gray-900 text-sm leading-none">Connaught Place</span>
                  <span className="text-[11px] font-medium text-amber-700">Central Delhi Flagship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Our Blog - real server-rendered links so every guide stays reachable from the homepage */}
      <section className="bg-cream py-16 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Read & Relax" highlight="Spa & Massage" title="Guides" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Best Spa Services in Delhi NCR", href: "/blog/best-spa-service-in-delhi-ncr" },
              { title: "Sandwich Massage in Delhi", href: "/blog/sandwich-massage-in-delhi" },
              { title: "Spa in Connaught Place", href: "/blog/spa-in-connaught-place" },
              { title: "What Does Thai Massage Do to Your Body?", href: "/blog/thai-massage-does-to-your-body" },
              { title: "What is a B2B Full Body Massage?", href: "/blog/what-is-b2b-full-body-massage" },
              { title: "Difference Between Spa and Massage", href: "/blog/what-is-the-difference-between-spa-and-massage" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] trv-card"
              >
                <span className="font-title text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </span>
                <span className="shrink-0 size-9 rounded-lg bg-cream text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeLocations />
      <Relaxinghomecontent />
      <HomeTherapyest />
      <HomeHealthBenefits />
      <HomeTestimonials />
      <HomeFaqSection />
      <HomeLocation2 />
      <WhatsappFloat />
    </main>
  );
}