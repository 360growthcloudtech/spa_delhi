import { preload } from "react-dom";
import { ArrowRight, Camera, MapPin, Phone, Play, Sparkles } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import LazyVideo from "../components/LazyVideo";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";
import GalleryGrid from "./GalleryGrid";
import photos from "./galleryData";

const photo = (id) => photos.find((p) => p.id === id);

// The grid shows categories mixed together (one from each in turn) so "All" doesn't look like a list of rooms first
const mixedPhotos = (() => {
  const groups = {};
  photos.forEach((p) => (groups[p.category] ||= []).push(p));
  const lists = Object.values(groups);
  const out = [];
  for (let i = 0; out.length < photos.length; i++) lists.forEach((g) => g[i] && out.push(g[i]));
  return out;
})();

// Hero collage: one large tile and four small ones
const heroTiles = ["g01", "g14", "g28", "g31", "g07"].map(photo);

const quickFacts = [
  { value: `${photos.length}`, label: "Photos", note: "Rooms, sessions & more" },
  { value: "24+", label: "Outlets", note: "Across Delhi NCR" },
  { value: "3", label: "Short Videos", note: "A look inside" },
  { value: "100%", label: "Private Rooms", note: "Every single session" },
];

const videos = [
  { src: "/images/spavideo.mp4", poster: "/images/hero/poster1-640.webp", label: "Video tour of a massage session at Luxury Russian Spa", title: "A massage session" },
  { src: "/images/spavideo3.mp4", poster: "/images/hero/poster2-640.webp", label: "Video of a private treatment room at a Luxury Russian Spa outlet", title: "Inside a treatment room" },
  { src: "/images/spavideo2.mp4", poster: "/images/hero/poster3-640.webp", label: "Video of a relaxing spa therapy in Delhi", title: "A relaxing therapy" },
];

// "Liked what you saw?" links from photos to the matching service pages
const experiences = [
  { title: "Full Body Massage", href: "/full-body-massage-in-delhi", photo: "g15" },
  { title: "Couple Massage", href: "/couple-massage", photo: "g29" },
  { title: "Deep Tissue Massage", href: "/deep-tissue-massage-in-delhi", photo: "g17" },
  { title: "Aromatherapy", href: "/aromatherapy-massage-in-delhi", photo: "g31" },
  { title: "Thai Massage", href: "/thai-massage-in-delhi", photo: "g38" },
  { title: "Swedish Massage", href: "/swedish-massage-in-delhi", photo: "g26" },
];

const outlets = [
  { area: "Connaught Place", href: "/spa-in-connaught-place", photo: "g40" },
  { area: "Pitampura", href: "/spa-in-pitampura", photo: "g42" },
  { area: "Aerocity", href: "/spa-in-aerocity", photo: "g03" },
  { area: "Lajpat Nagar", href: "/spa-in-lajpat-nagar", photo: "g06" },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

function WhatsAppButton({ children = "Book on WhatsApp", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 ${className}`}
    >
      <FaWhatsapp className="size-5" /> {children}
    </a>
  );
}

export default function Gallerypage() {
  // The big collage tile is the LCP image, so start downloading it from <head>
  preload(`/images/gallery/${heroTiles[0].id}-sm.webp`, { as: "image", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero with photo collage */}
      <section aria-labelledby="gallery-hero-title" className="relative bg-dark px-4 pb-32 pt-12 md:px-8 md:pb-40 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="text-center lg:text-left">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
              <a href="/" className="hover:text-secondary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Gallery</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-white/5 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <Camera className="size-3.5 text-secondary" /> Spa Gallery Delhi
            </span>
            <h1
              id="gallery-hero-title"
              className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent"
            >
              Take a Look Inside
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/80 lg:max-w-none">
              Before you book, it helps to see where you&apos;ll actually be lying down for an hour. Here are our
              treatment rooms, a few sessions in progress, the oils and little details, and some of our outlets
              across Delhi NCR. Tap any photo to see it bigger.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#photos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-dark transition-colors hover:bg-white"
              >
                <Camera className="size-4" /> Browse Photos
              </a>
              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-ink"
              >
                <Play className="size-4" /> Watch Videos
              </a>
            </div>
          </div>

          {/* Collage */}
          <div className="grid h-[340px] grid-cols-4 grid-rows-2 gap-2 sm:h-[440px] sm:gap-3">
            {heroTiles.map((p, i) => (
              <div
                key={p.id}
                className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 4 ? "hidden sm:block" : ""} ${i === 3 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${p.id}-sm.webp`}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts strip, overlapping the hero */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
        <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
          {quickFacts.map((f) => (
            <div key={f.label} className="bg-white p-5 md:p-7 text-center">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-title text-3xl md:text-4xl font-bold text-primary">{f.value}</span>
                <span className="mt-1 block text-sm font-semibold text-amber-900">{f.label}</span>
                <span className="block text-xs text-bodycolor">{f.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 2. Photo gallery */}
      <section id="photos" aria-labelledby="gallery-photos-title" className="scroll-mt-20 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gallery-photos-title"
            eyebrow="Spa Photos"
            title="Our Spa"
            highlight="in Pictures"
            text="Pick a category, or just scroll through everything. Tap a photo to open it full screen, then swipe or use the arrows."
          />
          <GalleryGrid photos={mixedPhotos} />
        </div>
      </section>

      {/* 3. Videos */}
      <section id="videos" aria-labelledby="gallery-videos-title" className="scroll-mt-20 bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gallery-videos-title"
            eyebrow="Short Videos"
            title="See It"
            highlight="Moving"
            text="Photos only show so much. These short clips give you a better feel for the rooms and the pace of a session."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {videos.map((v) => (
              <figure key={v.src} className="overflow-hidden rounded-3xl bg-dark ring-4 ring-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
                <LazyVideo src={v.src} poster={v.poster} label={v.label} />
                <figcaption className="bg-white px-5 py-4 font-title text-lg font-bold text-amber-900">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore by experience */}
      <section aria-labelledby="gallery-exp-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gallery-exp-title"
            eyebrow="Liked What You Saw?"
            title="Find the Massage"
            highlight="Behind the Photo"
            text="Each of these opens a page with what to expect, how long it takes and what it costs."
          />
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {experiences.map((e) => {
              const p = photo(e.photo);
              return (
                <li key={e.href}>
                  <a href={e.href} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(43,24,16,0.12)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/gallery/${p.id}-sm.webp`}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                      <span className="font-title text-base sm:text-xl font-bold text-white">{e.title}</span>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-1">
                        <ArrowRight className="size-4" />
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 5. Outlets */}
      <section aria-labelledby="gallery-outlets-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gallery-outlets-title"
            eyebrow="Visit Us"
            title="Pick an Outlet"
            highlight="Near You"
            text="We have 24+ outlets across Delhi NCR. Here are a few of the most popular ones."
          />
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {outlets.map((o) => {
              const p = photo(o.photo);
              return (
                <li key={o.href}>
                  <a href={o.href} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-amber-100 shadow-[0_8px_24px_rgba(43,24,16,0.07)] transition-all duration-300 hover:-translate-y-1">
                    <span className="relative block aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/gallery/${p.id}-sm.webp`}
                        alt={p.alt}
                        width={p.w}
                        height={p.h}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                    <span className="flex items-center gap-2 p-4">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      <span className="flex-1 font-semibold text-amber-900 group-hover:text-primary">Spa in {o.area}</span>
                      <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            <a href="/outlets" className={linkClass}>See all our outlets</a> or check our <a href="/spa-price-in-delhi" className={linkClass}>spa prices in Delhi</a>.
          </p>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section aria-labelledby="gallery-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/g02-lg.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="gallery-cta-title"
            eyebrow="Book Today"
            title="Like the Look of It?"
            highlight="Come Try It"
            text="Message us the massage you'd like, a time and your area. We'll confirm the outlet, your therapist and the price on the same chat."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30" />
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d6fa5] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#185d8a]"
            >
              <FaTelegramPlane className="size-5" /> Chat on Telegram
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> Call Now
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
            <Sparkles className="size-4" /> Private rooms, fresh linen, every time
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
