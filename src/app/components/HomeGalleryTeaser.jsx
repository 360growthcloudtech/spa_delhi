import { ArrowRight, Camera } from "lucide-react";
import HomeHeading from "./HomeHeading";
import photos from "../gallery/galleryData";

// A peek at the gallery: five photos (one tall, four small) from different categories, all linking to the full gallery page.
const picks = ["g01", "g15", "g29", "g09", "g31"].map((id) => photos.find((p) => p.id === id));

export default function HomeGalleryTeaser() {
  return (
    <section aria-labelledby="home-gallery-title" className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <HomeHeading
          id="home-gallery-title"
          eyebrow="Take a Look Inside"
          title="Rooms You'll"
          highlight="Want to Stay In"
          text="Private rooms, warm lighting and fresh linen every time. Here's a small peek before you book."
        />
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:grid-rows-2">
          {picks.map((p, i) => (
            <li key={p.id} className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}>
              <a
                href="/gallery"
                className={`group relative block overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(43,24,16,0.1)] ${i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}
              >
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
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white sm:text-sm">{p.caption}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-dark px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary"
          >
            <Camera className="size-4" /> See the Full Gallery <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
