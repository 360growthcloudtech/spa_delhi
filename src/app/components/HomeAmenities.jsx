import { Bath, CloudFog, DoorClosed, ShowerHead, Sparkles } from "lucide-react";
import HomeHeading from "./HomeHeading";

const amenities = [
  { label: "Private Room", icon: DoorClosed },
  { label: "Jacuzzi Bath", icon: Bath },
  { label: "Steam Bath", icon: CloudFog },
  { label: "Hot Shower", icon: ShowerHead },
  { label: "Fresh Towels & Linen", icon: Sparkles },
];

export default function HomeAmenities() {
  return (
    <section
      aria-labelledby="home-amenities-title"
      className="relative overflow-hidden bg-dark bg-cover bg-center px-4 py-16 md:py-20 md:px-8"
      style={{ backgroundImage: "url('/images/18+bodyspa.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3a2415]/85 to-black/90" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto">
        <HomeHeading
          light
          id="home-amenities-title"
          eyebrow="Premium Wellness Facilities"
          title="Everything You Need for"
          highlight="Complete Relaxation"
          text="Every outlet is set up for comfort, from a private room and a hot shower to jacuzzi and steam bath options. Come alone, or relax with your partner at the best couple spa in Delhi."
        />

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-12">
          {amenities.map(({ label, icon: Icon }) => (
            <li key={label} className="group w-[100px] md:w-[120px] text-center">
              <span className="mx-auto flex size-16 md:size-20 items-center justify-center rounded-full bg-white/10 text-secondary ring-1 ring-secondary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-amber-500 group-hover:text-white">
                <Icon className="size-7 md:size-8" strokeWidth={1.5} />
              </span>
              <span className="mt-3 block text-sm font-medium text-white/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
