import { FiArrowRight } from "react-icons/fi";
import HomeHeading from "./HomeHeading";
import LazyVideo from "./LazyVideo";

// Posters are pre-resized 640px WebP files that load lazily; each video loads only when pressed.
export default function HomeVideoShowcase() {
  return (
    <section aria-labelledby="home-video-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeading
          id="home-video-title"
          eyebrow="Inside Our Spa"
          title="Watch Our"
          highlight="Luxury Russian Spa"
          after="Experience"
          text="Take a quick look inside before you visit: calm rooms, soft lighting and therapists who take their work seriously."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl bg-dark ring-4 ring-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
            <LazyVideo src="/images/spavideo.mp4" poster="/images/hero/poster1-640.webp" label="Video tour of a massage session at Luxury Russian Spa" />
          </div>

          <div className="overflow-hidden rounded-3xl bg-dark ring-4 ring-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
            <LazyVideo src="/images/spavideo3.mp4" poster="/images/hero/poster2-640.webp" label="Video of a private treatment room at a Luxury Russian Spa outlet in Delhi" />
          </div>

          <div className="overflow-hidden rounded-3xl bg-dark ring-4 ring-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
            <LazyVideo src="/images/spavideo2.mp4" poster="/images/hero/poster3-640.webp" label="Video of a relaxing spa therapy in Delhi" />
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-7 py-3.5 text-sm font-semibold text-amber-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
          >
            View Full Gallery <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
