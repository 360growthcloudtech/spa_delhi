
import Link from "next/link";

const locations = [
  { name: "Sandwich Massage", link: "/sandwich-massage-in-delhi" },
  { name: "Couple Massage", link: "/couples-massage-in-delhi" },
  { name: "B2B Massage", link: "/b2b-massage-in-delhi" },
  { name: "Full Body Massage", link: "/full-body-massage-in-delhi" },
  { name: "Spa Price in Delhi", link: "/spa-price-in-delhi" },
  { name: "Spa Jobs in Delhi", link: "/spa-therapist-jobs-in-delhi" },
  { name: "Spa in Aerocity", link: "/spa-in-aerocity" },
  { name: "Spa in Connaught Place", link: "/spa-in-connaught-place" },
  // { name: "Spa in Lajpat Nagar", link: "/spa-in-lajpat-nagar" },
  // { name: "Spa in Gurugram", link: "/spa-in-gurgaon" },
  // { name: "Spa in Noida", link: "/spa-in-noida" },
  // { name: "Spa in Saket", link: "/spa-in-saket" },
  // { name: "Spa in Rajouri Garden", link: "/spa-in-rajouri-garden" },
  // { name: "Spa in Pitampura", link: "/spa-in-pitampura" },
  // { name: "Spa in Greater Kailash", link: "/spa-in-greater-kailash" },
  // { name: "Spa in Kalkaji", link: "/spa-in-kalkaji" },
  // { name: "Spa in Karol Bagh", link: "/spa-in-karol-bagh" },
  // { name: "All Outlets", link: "/outlets" },
  // { name: "About Us", link: "/about-us" },
  // { name: "Gallery", link: "/gallery" },
  // { name: "Contact Us", link: "/contact" },
];

export default function HomeLocation2() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Spa Services & Locations
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore our premium massage services and spa outlets across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.link}
              className="bg-white border border-black/5 hover:bg-primary hover:text-white hover:-translate-y-0.5 text-ink text-center text-sm font-semibold py-4 px-3 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              {location.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

