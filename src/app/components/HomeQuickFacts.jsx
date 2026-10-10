import { BadgeIndianRupee, Clock, MapPin, ShieldCheck } from "lucide-react";

// Overlaps the bottom of the home hero. Only facts already stated elsewhere on the site.
const facts = [
  { icon: MapPin, value: "24+", label: "Outlets", note: "Across Delhi NCR", href: "/outlets" },
  { icon: BadgeIndianRupee, value: "₹1,999", label: "Starting Price", note: "Same at every outlet", href: "/spa-price-in-delhi" },
  { icon: Clock, value: "24/7", label: "Bookings", note: "Message us any time", href: "#book" },
  { icon: ShieldCheck, value: "100%", label: "Private Rooms", note: "Every single session", href: "/gallery" },
];

export default function HomeQuickFacts() {
  return (
    <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100 md:grid-cols-4">
        {facts.map(({ icon: Icon, value, label, note, href }) => (
          <li key={label}>
            <a href={href} className="group flex h-full flex-col items-center bg-white p-5 text-center transition-colors hover:bg-amber-50 md:p-7">
              <Icon className="size-5 text-amber-600 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              <span className="mt-2 block font-title text-3xl font-bold text-primary md:text-4xl">{value}</span>
              <span className="mt-1 block text-sm font-semibold text-amber-900">{label}</span>
              <span className="block text-xs text-bodycolor">{note}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
