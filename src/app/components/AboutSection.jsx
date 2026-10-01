import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import HomeHeading from "./HomeHeading";
import { TELEGRAM_URL } from "./siteContact";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-spa-title"
      className="relative overflow-hidden bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8"
    >
      <div className="pointer-events-none absolute top-20 -right-20 size-80 rounded-full bg-amber-200/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-10 -left-20 size-72 rounded-full bg-amber-100/50 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <HomeHeading
          id="about-spa-title"
          eyebrow="About Our Luxury Russian Spa"
          title="Experience the Best"
          highlight="Spa in Delhi"
          after="for Total Relaxation"
          text="Professional massage services, trained therapists and a calm, private space, so you can switch off and walk out feeling brand new."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Text column */}
          <div>
            <h3 className="flex flex-wrap items-center gap-3 font-title text-2xl md:text-[32px] font-bold text-amber-900">
              <span className="text-amber-500">#1</span>
              <span className="rounded-full bg-amber-200/70 px-4 py-1">Luxury Russian Spa</span>
            </h3>

            <p className="mt-5 text-[15px] leading-relaxed text-bodycolor">
              Looking for a relaxing <strong className="font-semibold text-amber-700">spa in Delhi</strong>?
              Luxury Russian Spa gives you genuine care without the fuss. Pick from popular therapies like{" "}
              <a href="/b2b-massage-in-delhi" className="font-medium text-amber-700 underline underline-offset-4">B2B massage</a>,{" "}
              <a href="/sandwich-massage-in-delhi" className="font-medium text-amber-700 underline underline-offset-4">sandwich massage</a>,{" "}
              <a href="/couples-massage-in-delhi" className="font-medium text-amber-700 underline underline-offset-4">couples massage</a>{" "}
              and Thai spa. Whether it&apos;s everyday stress or a stiff back, our therapists know exactly
              how to help you unwind.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
              >
                Learn More About Us <FiArrowRight />
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3.5 text-sm font-semibold text-amber-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
              >
                <FaTelegram className="text-lg" /> Available Therapists
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
            <Image
              src="/images/about-luxury-russian-spa.jpg"
              alt="Guest relaxing at Luxury Russian Spa, a premium massage spa in Delhi"
              fill
              loading="lazy"
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
