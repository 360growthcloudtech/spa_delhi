"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/thaimassage.jpg",
  "/images/SpecializedTreatments.jpg",
  "/images/Sandwich Massage.webp",
  "/images/SkincareTreatments.jpg",
  "/images/453.webp",
  "/images/potliMassage.jpg",
  "/images/outletsBanner.jpeg",
  "/images/aboutusbanner.jpg",
  "/images/Reflexology.jpg",
  "/images/HelpstoDe-Stress.webp",
  "/images/MassageSession.webp",
  "/images/spaexpert3.webp",
  "/images/spaoutletbanner.jpg",
  "/images/potliMassage.jpg",
  "/images/outletsBanner.jpeg",
  "/images/luxurySpaRoom.jpg",
];

export default function Gallerypage() {
  return (
    <main className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/b1.jpg"
          alt="Spa Gallery Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-wide"
            >
              Our Spa Gallery
            </motion.h1>
            <p className="mt-3 text-lg text-amber-100">
              A glimpse of our luxurious ambience and spa experiences
            </p>
          </div>
        </div>
      </section>

      {/* Heading + Notes Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mt-16 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-amber-700 mb-4"
        >
          Beauty Begins with Relaxation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          At our spa, we believe that rejuvenation is an experience of the mind, body, and soul.
          Discover peaceful moments, soothing treatments, and luxury that nurtures your wellbeing.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 italic text-md"
        >
          "Relaxation is not a luxury. It's a necessity." — Spa Philosophy ✨
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md bg-white"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={src}
                alt={`Spa image ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Explore More Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Liked what you saw? Explore our{" "}
          <a href="/massage-service-in-delhi" className="text-amber-700 font-semibold underline">
            spa & massage services
          </a>
          , check our{" "}
          <a href="/spa-price-in-delhi" className="text-amber-700 font-semibold underline">
            spa pricing
          </a>
          , or browse our{" "}
          <a href="/outlets" className="text-amber-700 font-semibold underline">
            outlets across Delhi
          </a>
          . Ready to book?{" "}
          <a href="/contact" className="text-amber-700 font-semibold underline">
            Contact us
          </a>{" "}
          today.
        </p>
      </section>
    </main>
  );
}