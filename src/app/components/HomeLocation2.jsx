
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
              className="bg-primary hover:bg-secondary hover:text-dark hover:-translate-y-1 text-white text-center font-title text-lg font-medium py-4 px-3 rounded-2xl shadow-sm transition-all duration-500"
            >
              {location.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

