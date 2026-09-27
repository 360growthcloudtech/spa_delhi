"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export default function HomeLocations() {
  const locations = [
  {
    name: "Lajpat Nagar",
    image: "/images/TheSuryaaNewDelhi(NFC).webp", // Replace with actual image URL
   description: (
  <>
    We have a Luxury{" "}
    <a
      href="/spa-in-lajpat-nagar"
      className="text-teal-600 font-semibold underline"
    >
      spa in Lajpat Nagar
    </a>
    . So whenever you are in Lajpat Nagar, you can de-stress with a home and
    massage service. Reach out to us.
  </>
),
    link: "https://wa.me/9217255113"
  },
  {
    name: "Aerocity",
    image: "/images/NovotelNewDelhiAerocity.webp",
    description: (
  <>
    Visit 5 star{" "}
    <a
      href="/spa-in-aerocity"
      className="text-teal-600 font-semibold underline"
    >
      spa in Aerocity
    </a>
    . Get perfect massage service near Delhi airport. At Aerocity, we have
    foreign therapists from all across the world.
  </>),
    link: "https://wa.me/9217255113"
  },
  {
    name: "Connaught Place",
    image: "/images/TheParkConnaughtPlace.webp",
    description: ( <>
    Looking for a spa in central Delhi? We have a 
    {" "}
    <a
      href="/spa-in-connaught-place"
      className="text-teal-600 font-semibold underline"
    >
      spa in Connaught Place  
    </a>{" "}
     for giving extra ordinary massage service in the heart of Delhi.

    </>),
    link: "https://wa.me/9217255113"
  },
  {
    name: "Rohini",
    image: "/images/TheGrandNewDelhi.webp",
    description: (
  <>
    We have a massage outlet available at our Rohini location. Explore all our{" "}
    <a
      href="/outlets"
      className="text-teal-600 font-semibold underline"
    >
      spa outlets in Delhi
    </a>
    .
  </>
),
    link: "https://wa.me/9217255113"
  }
];

const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

  return (
    <>
    <section className="py-16 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-12">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Our Luxury <span className="text-amber-600">Spa in Delhi</span>
                </motion.h2>
                <motion.p
                  className="text-gray-600 max-w-2xl mx-auto text-lg"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                 Find the perfect spa outlet near you for effortless access to world-class relaxation, from our <span className="font-semibold text-amber-700"><a href="/spa-in-aerocity">spa in Aerocity</a></span> to our <span className="font-semibold text-amber-700"><a href="/spa-in-lajpat-nagar">spa in Lajpat Nagar</a></span> and <span className="font-semibold text-amber-700"><a href="/spa-in-connaught-place">spa in Connaught Place</a></span>.
                </motion.p>
              </div>
      
              {/* Location Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg relative overflow-hidden group"
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Location Image */}
                    <div className="relative h-56 w-full">
                      <Image
                        loading="lazy"
                        src={location.image}
                        alt={`Spa in ${location.name}, Delhi`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-all duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div> */}
                    </div>
      
                    {/* Location Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">{location.name}</h3>
                      <p className="text-gray-700 text-base mb-4">{location.description}</p>
                      {/* <a
                        href={location.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all"
                      >
                        <FaWhatsapp className="text-lg" />
                        Book on WhatsApp
                      </a> */}
                      <a 
                              href="#" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                            >
                              <FaTelegram className="text-xl mr-3" />
                              See available staff
                            </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    </section>
   {/* 18+ */}
          <section 
  className="relative py-16 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/images/18+bodyspa.webp')" }}
>
  {/* Enhanced gradient overlay with subtle grain texture */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3A2415]/80 to-black/90 z-0" />

  <div className="relative z-10 max-w-6xl mx-auto text-[#FAF3E9]">
    {/* Elegant heading with decorative elements */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#fdc28c] to-transparent mb-8" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-[#fdc28c] tracking-wide">
        <span className="block text-xl font-light tracking-widest text-[#fdc28c] mb-2">
          PREMIUM WELLNESS DESTINATIONS
        </span>
        24+ Exclusive Luxury Russian Spa Outlets
      </h2>
      <div className="w-16 h-0.5 bg-[#fdc28c] mt-6" />
    </div>

    {/* Refined description */}
    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
      Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide. Relaxe with your Partner at the best couple spa in Delhi.
    </p>

    {/* Sophisticated features grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {specialFeatures.map((item, index) => (
        <li key={index}>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-[#fdc28c]/30 bg-gradient-to-b from-[#2D1B0F]/60 to-[#1A1109]/60 backdrop-blur-sm hover:border-[#fdc28c]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-black/20">
            <svg
              className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#fdc28c] group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"/>
            </svg>
            <span className="text-left font-light text-[#FAF3E9] group-hover:text-[#fdc28c] transition-colors">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Decorative corner elements */}
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#fdc28c]/50" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#fdc28c]/50" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#fdc28c]/50" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#fdc28c]/50" />
  </div>
      </section>
    </>
    
          
  );
}