'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LuxuryHotelShowcase = ({
  service = "Couple Massage",
  serviceHref = "/couples-massage-in-delhi",
  serviceLower = "couple massage",
}) => {
  const [activeHotel, setActiveHotel] = useState(0);
  const featuredCardRef = useRef(null);

  const hotels = [
    {
      id: 1,
      name: 'Andaz Delhi',
      location: 'Aerocity, New Delhi',
      image: '/images/hotel-andaz-delhi.jpg',
      rating: 4.9,
      description:
        `Andaz offers a premium in-room ${serviceLower} experience with high-level ambiance and luxury service guaranteed to leave you fully revitalized.`,
      features: ['special B2B Therapy', 'Couple Massage', 'Sandwich Massage', 'Female-to-Male'],
      tags: ['Foreigner Therapist', 'Luxury', 'Russian Model'],
    },
    {
      id: 2,
      name: 'The Park',
      location: 'Connaught Place, New Delhi',
      image: '/images/hotel-resort-pool.jpg',
      rating: 4.8,
      description:
        `Experience the full luxury of a ${serviceLower} session at The Park, where elegance and comfort come together for complete relaxation.`,
      features: ['Sandwich Massage', 'Female-to-Male', 'special B2B Therapy', 'Couple Massage'],
      tags: ['Foreigner Therapist', 'Romantic', 'Luxury'],
    },
    {
      id: 3,
      name: 'The Surya in NFC',
      location: 'NFC, New Delhi',
      image: '/images/hotel-grand-palace.jpg',
      rating: 4.7,
      description:
        `Discover an exceptional ${serviceLower} experience at The Surya, offering high-quality service in quiet, calm surroundings.`,
      features: ['Full Body Massage', 'Thai Massage', 'Female-to-Male', 'special B2B Therapy'],
      tags: ['Tropical', 'Private', 'Exclusive'],
    },
    {
      id: 4,
      name: 'Welcomehotel by ITC in Dwarka',
      location: 'Dwarka, New Delhi',
      image: '/images/hotel-grand-vista.jpg',
      rating: 4.9,
      description:
        `Staying at Welcomhotel by ITC Dwarka? Our therapists visit your hotel to deliver a premium ${serviceLower} session, built around real relaxation and comfort.`,
      features: ['special B2B Therapy', 'Couple Massage', 'Sandwich Massage', 'Female-to-Male'],
      tags: ['Mountain', 'Alpine', 'Wellness'],
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Exclusive Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Luxury Hotel Spa for {service} in Delhi
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We provide <strong className="text-amber-600 font-medium"><a href={serviceHref}>{serviceLower} in Delhi</a></strong> at luxurious hotels right at your doorstep. Here's our list of luxury hotels where we bring you the best {serviceLower} in Delhi:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            ref={featuredCardRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-amber-800 to-amber-900 min-h-[520px] group"
          >
            <Image
              src={hotels[activeHotel].image}
              alt={hotels[activeHotel].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-amber-300 text-sm font-medium mb-2">Featured Location</div>
                    <h3 className="text-3xl font-bold text-white">{hotels[activeHotel].name}</h3>
                    <p className="text-amber-200 mt-1">{hotels[activeHotel].location}</p>
                  </div>
                  <div className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-full shadow">
                    <span className="text-xl font-bold">{hotels[activeHotel].rating}</span>
                  </div>
                </div>
                <p className="text-amber-100 text-lg mb-8">{hotels[activeHotel].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {hotels[activeHotel].tags.map((tag, idx) => (
                    <span key={idx} className="bg-amber-700/60 backdrop-blur-sm text-amber-200 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {hotels[activeHotel].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-400 mr-3"></div>
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+91 8799716197"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block text-center w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Spa Experience
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                className={`relative bg-white rounded-2xl shadow-lg p-5 transition-all duration-300 cursor-pointer overflow-hidden group ${activeHotel === index ? 'ring-4 ring-amber-500 shadow-xl' : 'hover:ring-2 hover:ring-amber-300'
                  }`}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setActiveHotel(index);
                  if (window.innerWidth <= 768 && featuredCardRef.current) {
                    setTimeout(() => {
                      featuredCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }
                }}
              >
                {activeHotel === index && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    Featured
                  </div>
                )}
                <div className="relative h-36 w-full rounded-xl overflow-hidden mb-3 bg-amber-100">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-bold">
                    ★ {hotel.rating}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors">{hotel.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 flex items-center">
                    {hotel.location}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hotel.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[11px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <div className="grid grid-cols-2 gap-1">
                    {hotel.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 shrink-0"></span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="https://api.whatsapp.com/send?phone=+91 8799716197" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 group">
              Book Your {service} Today!
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 0 0 0 -1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 00 0 1 .5h5.69l-1.72 1.72a.75.75 0 1 0 1 .06 1.06l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHotelShowcase;