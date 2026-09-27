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
      <section className="bg-white py-16 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center rounded-3xl bg-cream p-5 md:p-10">
            <div className="trv-card relative overflow-hidden rounded-[20px]">
              <div className="trv-card-media relative aspect-[4/3] overflow-hidden bg-blush">
                <Image src="/images/80535.webp" alt="Luxury Spa in Delhi" fill sizes="(max-width:768px) 100vw, 50vw" loading="lazy" className="object-cover" />
              </div>
              <span className="absolute bottom-4 left-4 rounded-2xl bg-white px-4 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <span className="block font-semibold text-primary text-lg leading-none">24+</span>
                <span className="text-[11px] text-gray-500">Spa Outlets</span>
              </span>
            </div>
            <div>
              <span className="font-display italic font-semibold text-xl text-primary block mb-2">Deep Relaxation</span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-ink leading-tight mb-5">
                Visit Our Massage Centre{" "}
                <span className="italic text-primary">in Delhi for Deep Relaxation</span>
              </h2>
              <p className="text-bodycolor leading-relaxed">
                Our massage centre in Delhi offers a wide range of premium massage services to help you relax after a long, stressful day. Our team of Indian and international therapists is trained to deliver B2B massage, full body massage, and <span className="font-semibold text-primary"><a href="/couples-massage-in-delhi" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary">couples massage in Delhi</a></span> at an affordable price without compromising on quality. From hotel massage to home massage, we&apos;re ready to serve you wherever you are. Contact us today and experience the relaxation you&apos;ve been looking for.
              </p>
              <a href="/couples-massage-in-delhi" className="site-button mt-7">Book a Session</a>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center rounded-3xl bg-white p-5 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-black/5">
            <div className="order-2 md:order-1">
              <span className="font-display italic font-semibold text-xl text-primary block mb-2">Top Rated</span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-ink leading-tight mb-5">
                Get Top-Rated Full Body{" "}
                <span className="italic text-primary">Massage At Spa in Connaught Place</span>
              </h2>
              <p className="text-bodycolor leading-relaxed">
                Our full-body massage at <span className="font-semibold text-primary"><a href="/spa-in-connaught-place" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary">spa in Connaught Place</a></span> is the perfect way to relax and refresh. We combine modern massage techniques with traditional healing practices to create therapy plans that suit your body and lifestyle. Since we started, our goal has been simple: offer peace, comfort, and the best massage experience to everyone who visits. With professional therapists, quality oils, and customized treatments, we&apos;re known as one of the most trusted spas in Delhi. Come by and enjoy a relaxing session that leaves you fully rejuvenated.
              </p>
              <a href="/spa-in-connaught-place" className="site-button mt-7">Explore Connaught Place</a>
            </div>
            <div className="order-1 md:order-2 trv-card overflow-hidden rounded-[20px]">
              <div className="trv-card-media relative aspect-[4/3] overflow-hidden bg-blush">
                <Image src="/images/453.webp" alt="Full Body Massage in Connaught Place" fill sizes="(max-width:768px) 100vw, 50vw" loading="lazy" className="object-cover" />
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