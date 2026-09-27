import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

// Above the fold components (Normal Import)
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import HomeServicesSection from "./components/HomeServicesSection";
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
      <HomeWhyChoiceus />

      {/* Other Sections */}
      <HomeOurProcess />
      <HomeOutlet />
      <Suspense fallback={null}>
    <HomePricing />
</Suspense>

      {/* Content Section */}
      <section className="relative bg-lightturquoise py-24 overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full border-2 border-dashed border-primary/15 animate-rotate-slow" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="trv-card overflow-hidden rounded-[40px] shadow-2xl shadow-primary/20">
                <div className="trv-card-media overflow-hidden">
                  <Image src="/images/80535.webp" alt="Luxury Spa in Delhi" width={600} height={400} loading="lazy" className="w-full h-auto" />
                </div>
              </div>
              <span className="absolute -bottom-6 -right-4 md:-right-6 rounded-3xl bg-secondary px-6 py-4 font-title text-dark shadow-xl animate-smooth-up-down2">
                <span className="block text-3xl font-bold leading-none">24+</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Outlets</span>
              </span>
            </div>
            <div>
              <span className="font-display text-2xl text-amber-500 block mb-2">Deep Relaxation</span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-6">
                Visit Our Massage Centre{" "}
                <span className="text-primary">in Delhi for Deep Relaxation</span>
              </h2>
              <p className="text-bodycolor text-lg leading-relaxed">
                Our massage centre in Delhi offers a wide range of premium massage services to help you relax after a long, stressful day. Our team of Indian and international therapists is trained to deliver B2B massage, full body massage, and <span className="font-semibold text-primary"><a href="/couples-massage-in-delhi" className="underline decoration-secondary underline-offset-4">couples massage in Delhi</a></span> at an affordable price without compromising on quality. From hotel massage to home massage, we&apos;re ready to serve you wherever you are. Contact us today and experience the relaxation you&apos;ve been looking for.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mt-24">
            <div className="order-2 md:order-1">
              <span className="font-display text-2xl text-amber-500 block mb-2">Top Rated</span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-6">
                Get Top-Rated Full Body{" "}
                <span className="text-primary">Massage At Spa in Connaught Place</span>
              </h2>
              <p className="text-bodycolor text-lg leading-relaxed">
                Our full-body massage at <span className="font-semibold text-primary"><a href="/spa-in-connaught-place" className="underline decoration-secondary underline-offset-4">spa in Connaught Place</a></span> is the perfect way to relax and refresh. We combine modern massage techniques with traditional healing practices to create therapy plans that suit your body and lifestyle. Since we started, our goal has been simple: offer peace, comfort, and the best massage experience to everyone who visits. With professional therapists, quality oils, and customized treatments, we&apos;re known as one of the most trusted spas in Delhi. Come by and enjoy a relaxing session that leaves you fully rejuvenated.
              </p>
              <a href="/spa-in-connaught-place" className="site-button mt-8">Explore Connaught Place</a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="trv-card overflow-hidden rounded-[40px] shadow-2xl shadow-primary/20">
                <div className="trv-card-media overflow-hidden">
                  <Image src="/images/453.webp" alt="Full Body Massage in Connaught Place" width={600} height={400} loading="lazy" className="w-full h-auto" />
                </div>
              </div>
              <span className="pointer-events-none absolute -top-6 -left-6 size-24 rounded-full border-2 border-dashed border-secondary animate-rotate-slow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* From Our Blog - real server-rendered links so every guide stays reachable from the homepage */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="Read & Relax" highlight="Spa & Massage" title="Guides" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Best Spa Services in Delhi NCR", href: "/blog/best-spa-service-in-delhi-ncr" },
              { title: "Sandwich Massage in Delhi", href: "/blog/sandwich-massage-in-delhi" },
              { title: "Spa in Connaught Place", href: "/blog/spa-in-connaught-place" },
              { title: "What Does Thai Massage Do to Your Body?", href: "/blog/thai-massage-does-to-your-body" },
              { title: "What is a B2B Full Body Massage?", href: "/blog/what-is-b2b-full-body-massage" },
              { title: "Difference Between Spa and Massage", href: "/blog/what-is-the-difference-between-spa-and-massage" },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl border border-primary/10 bg-lightturquoise p-6 font-title text-xl font-semibold text-dark trv-card"
              >
                <span className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <span className="relative flex items-center gap-4 transition-colors duration-500 group-hover:text-white">
                  <span className="text-3xl font-bold text-primary/30 transition-colors duration-500 group-hover:text-secondary">0{i + 1}</span>
                  {item.title}
                </span>
                <span className="relative shrink-0 size-10 rounded-full bg-secondary text-dark flex items-center justify-center transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">
                  ↗
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