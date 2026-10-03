'use client';

import React, { useState } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import WhatsappFloat from '../components/WhatsappFloat';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
});

export default function Conpage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., send to API or email)
    console.log('Form submitted:', formData);
  };
  const locations = [
    {
      name: "Lajpat Nagar",
      image: "/images/hotel-aurea-tower.jpg",
      description: "Discover the tranquility of our luxurious spa at Lajpat Nagar.",
      link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
    },
    {
      name: "Aerocity",
      image: "/images/hotel-andaz-delhi.jpg",
      description: "Relax and unwind with our premium services at Aerocity.",
      link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
    },
    {
      name: "Paschim Vihar",
      image: "/images/hotel-resort-pool.jpg",
      description: "Experience rejuvenation at our elegant Paschim Vihar location.",
      link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
    },
    {
      name: "Rohini",
      image: "/images/hotel-grand-vista.jpg",
      description: "Escape to serenity at our luxurious spa in Rohini.",
      link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
    }
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/contectusbanner.jpg')",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1
            className={`text-1xl md:text-3xl font-bold text-white leading-tight ${playfair.variable} font-serif`}
          >
            Relax, Rejuvenate & Refresh at Our Premium Spa Outlet Near You
          </h1>
          <p
            className={`mt-6 text-lg md:text-1xl text-white/90 font-light ${montserrat.variable}`}
          >
            Indulge in world-class wellness treatments crafted to soothe your soul and rejuvenate your body.
          </p>

          <a
            href="tel:+918799716197"
            className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Your Session Now
          </a>
        </div>
      </section>
      {/* End Banner */}
      {/* Locations Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-amber-50 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-amber-600">Prime Locations</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Visit us at any of our luxurious outlets, conveniently located across Delhi for your ultimate spa experience.
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
                    src={location.image}
                    alt={location.name}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-all duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div> */}
                </div>

                {/* Location Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">{location.name}</h3>
                  <p className="text-gray-700 text-base mb-4">{location.description}</p>
                  <a
                    href={location.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all"
                  >
                    <FaWhatsapp className="text-lg" />
                    Book on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-800">Get In Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us anytime! Our friendly team is here to help you with bookings, services, and more.
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Not sure what to book? Browse our{" "}
            <a href="/massage-in-delhi" className="text-amber-700 font-semibold underline">
              spa & massage services
            </a>
            , check{" "}
            <a href="/spa-price-in-delhi" className="text-amber-700 font-semibold underline">
              spa pricing
            </a>
            , see all our{" "}
            <a href="/outlets" className="text-amber-700 font-semibold underline">
              outlets
            </a>{" "}
            or take a look at our{" "}
            <a href="/gallery" className="text-amber-700 font-semibold underline">
              gallery
            </a>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-amber-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Our Outlet</h3>
            <p className="text-gray-600">Indira gandhi international airport assets 6, IGI Road, Near Lemon Tree Aerocity, New Delhi, Delhi - 110037</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-amber-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Contact</h3>
            <p className="text-gray-600">+91-8799716197</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-amber-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Email</h3>
            <p className="text-gray-600">delhibodyspa@gmail.com</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <iframe
            className="w-full h-96 rounded-xl"
            loading="lazy"
            src="https://maps.google.com/maps?q=Lajpat%20Nagar%20Delhi&t=m&z=13&output=embed&iwloc=near"
            title="Indira gandhi international airport assets 6, IGI Road, Near Lemon Tree Aerocity, New Delhi, Delhi - 110037"
            aria-label="Indira gandhi international airport assets 6, IGI Road, Near Lemon Tree Aerocity, New Delhi, Delhi - 110037"
          ></iframe>

          <form onSubmit={handleSubmit} className="bg-yellow-50 rounded-xl p-8 shadow-md space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition"
            >
              Submit your message
            </button>
          </form>
        </div>
      </section>
      <WhatsappFloat />
    </>
  );
}
