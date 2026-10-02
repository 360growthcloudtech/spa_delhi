'use client'

import React, { useState, useEffect } from 'react'
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsappFloat from '../components/WhatsappFloat';
//   import WhatsappFloat from '../../components/WhatsappFloat';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { FaSpa, FaHotTub } from 'react-icons/fa';
  import { FaStar } from "react-icons/fa";
  import { AnimatePresence } from "framer-motion";
  import { FaTelegram } from "react-icons/fa";
  import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";


const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

const hotelOutlets = [
  {
    title: "JW Marriott Hotel Aerocity",
    image: "/images/JW Marriott Hotel Aerocity.jpg",
    description:
      "Luxury Russian Spa is a hotel where one can indulge in luxurious massage therapies and enjoy the wellness experience in high-end comfort.",
  },
  {
    title: "Lemon Tree Premier Aerocity",
    image: "/images/LemonTreePremierAerocity.jpg",
    description:
      "De-Stress and refresh with Luxury Russian Spa expert therapists who provide personalized spa treatments in the luxurious environment of Lemon Tree Premier.",
  },
  {
    title: "Novotel New Delhi Aerocity",
    image: "/images/NovotelNewDelhiAerocity.webp",
    description:
      "The ultimate relaxation with Luxury Russian Spa massage therapies, a combination of luxury oils and professional skills in the modern space of Novotel.",
  },
  {
    title: "The Grand New Delhi",
    image: "/images/TheGrandNewDelhi.webp",
    description:
      "Have a splendid experience of the Luxury Russian Spa massage services that are provided at the Grand New Delhi hotel where you can enjoy total relaxation and wellness in the luxurious surroundings of The Grand.",
  },
  {
    title: "IBIS New Delhi Aerocity",
    image: "/images/IBISNewDelhiAerocity.jpg",
    description:
      "Enjoy Luxury Russian Spa. Have a special massage therapy in IBIS, where masterful care is combined with a relaxing environment to get holistic rejuvenation.",
  },
  {
    title: "The Park Connaught Place",
    image: "/images/hotel-resort-pool.jpg",
    description:
      "Find a pleasant getaway with Luxury Russian Spa luxury massages, which relaxes the body and uplift your senses.",
  },
  {
    title: "The Suryaa New Delhi (NFC)",
    image: "/images/hotel-grand-palace.jpg",
    description:
      "Experience Luxury Russian Spa specializes in massage services at The Suryaa, where customers receive personalized well-being and ultimate relaxation in the massage salon.",
  },
  {
    title: "The Ashok (Chanakyapuri)",
    image: "/images/hotel-grand-vista.jpg",
    description:
      "Relax your body and mind with high-quality spa services at The Ashok, which combines luxurious experiences with a professional approach.",
  },
];
  const outlets = [
    {
      id: 1,
      title: "Spa in Lajpat Nagar",
      location: "Central Market, Lajpat Nagar Metro Gate No. 1",
      phone: "+91 8799716197",
       image: "/images/spa-in-lajpat-nagar.webp",
    },
    {
      id: 2,
      title: "Spa in Rajouri Garden",
      location: "Rajouri Garden Metro Gate No. 1",
      phone: "+91 8799716197",
       image: "/images/spa-treatments.jpg",
    },
    {
      id: 3,
      title: "Spa in Connaught Place",
      location: "Connaught Place, Metro Gate No. 1",
      phone: "+91 8799716197",
       image: "/images/steptodown.com800611.jpg",
    },
    {
      id: 4,
      title: "Spa in Noida",
      location: " Noida Sec 18, Noida sec 16, Electronic City, Noida City Center.",
      phone: "+91 8799716197",
      image: "/images/SkincareTreatments.jpg",
    },
    {
      id: 5,
      title: "Spa in Greater Kailash",
      location: "Greater Kailash, New Delhi. ",
      phone: "+91 8799716197",
      image: "/images/pricebanner.jpeg",
    },
    {
      id: 6,
      title: "Spa in Kalka Ji",
      location: "Kalka Ji, New delhi.",
      phone: "+91 8799716197",
      image: "/images/MassageSession.webp",
    }
  ];
const locations = [
  {
    name: "Lajpat Nagar",
    image: "/images/hotel-aurea-tower.jpg",
    description: "Lajpat Nagar the city is regarded to be the place of the most excellent massage treatments with professional attention and relaxing environment.",
    link: "/spa-in-lajpat-nagar"
  },
  {
    name: "Aerocity",
    image: "/images/hotel-andaz-delhi.jpg",
    description: "Spa in Aerocity, in which Luxury Russian Spa provides a wide range of luxury services and well-being to all clients.",
    link: "/spa-in-aerocity"
  },
  {
    name: "Rohini",
    image: "/images/hotel-grand-vista.jpg",
    description: "Experience a serene escape in Rohini with Luxury Russian Spa's expertly delivered massage services for body and mind.",
    link: "/spa-in-rohini"
  },
  {
    name: "Paharganj",
    image: "/images/hotel-grand-palace.jpg",
    description: "Get the high-quality spa in Paharganj, which are stress reliever and soothing.",
    link: "/spa-in-paharganj"
  },
  {
    name: "Pitampura",
    image: "/images/hotel-qamishli.jpg",
    description: "At Luxury Russian Spa, we have a team of massage therapists offering massage spa services in Pitampura, allowing you to enjoy a luxury getaway right at your doorstep.",
    link: "/spa-in-pitampura"
  },
  {
    name: "Dwarka",
    image: "/images/hotel-shane-avadh.jpg",
    description: "Take a break and refuel in Dwarka with Luxury Russian Spa through a special massage session to regain your lost energy.",
    link: "/spa-in-dwarka"
  },
  {
    name: "Noida",
    image: "/images/hotel-resort-pool.jpg",
    description: "Experience rejuvenation at our elegant spa in Noida, covering Sector 18 and Greater Noida.",
    link: "/spa-in-noida"
  },
  {
    name: "Greater Kailash",
    image: "/images/jwmarriott.jpeg",
    description: "Escape to serenity at our luxurious spa in Greater Kailash, covering both GK-1 and GK-2.",
    link: "/spa-in-greater-kailash"
  }
];
const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.webp",
    socials: {
      WhatsApp: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      WhatsApp: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.webp",
    socials: {
      WhatsApp: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.webp",
    socials: {
      WhatsApp: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
];

  const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair'
  });

  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500'],
    variable: '--font-montserrat'
  });

export default function Outpage() {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
              setIsVisible(true);
            }, []);
          
          const [activeIndex, setActiveIndex] = useState(null);
            const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
          };
          const faqs = [
                
                {
                  question: "Which areas do you cover in your outlets?",
                  answer: "We have 12+ Spa outlets in Delhi. Our Spa in Rohini, Aerocity, CP, Lajpat Nagar, GK, Pitampura, Dwarka, Karol Bagh, Noida and Gurgaon. Contact us for details and booking in any outlets.",
                  icon: <FaSpa className="text-teal-600" />
                },
                {
                  question: "How do I find the nearest Luxury Russian Spa outlet?",
                  answer: "YYou check our spa outlets in Delhi on the website. We mention our spa outlet locations. Check and book your spa session in the nearest spa to you. Our spa in lajpat nagar, pitampura and top 5 star hotel outlets.",
                  icon: <FaHandSparkles className="text-teal-600" />
                },
                
                {
                  question: "Are foreign therapists available at our spa outlets in Delhi?",
                  answer: "Yes at our spa in an aerocity outlet we have foreign therapists to provide massage spa tour international clients. And foreign therapists are scheduled at selected outlets and hotel spas. Contact us and book now.",
                  icon: <FaLeaf className="text-teal-600" />
                },
                {
                  question: "Are outlet addresses and timings listed online?",
                  answer: "If you want to know about spa timing you can contact us. And we offer spa service in hotels late at night. Just contact us and know about timings and locations.",
                  icon: <FaSpa className="text-teal-600" />
                },
                {
                      question: "Can I request female-only therapists at outlets?",
                      answer: " Yes, you can choose therapists as per your preference and you choose female therapists at our spa outlets in Delhi.",
                      icon: <FaHotTub className="text-teal-600" />
                    },
                    {
                          question: "Can I pay online for my services?",
                          answer: "Yes, we offer secure online payment options through our website for your convenience.",
                          icon: <FaSpa className="text-teal-600" />
                        },
              ];
  // Features for the 18+ section  
  const cities = [
{ name: 'DELHI', img: '/images/hotel3.webp', href: '/massage-service-in-delhi' },
{ name: 'LAJPAT NAGAR', img: '/images/lajpatnagahotel.avif', href: '/spa-in-lajpat-nagar' },
{ name: 'AEROCITY', img: '/images/RoseateHouse.jpg', href: '/spa-in-aerocity' },
{ name: 'CONNAUGHT PLACE', img: '/images/JwMarriott_CP.jpg', href: '/spa-in-connaught-place' },
{ name: 'GURGAON', img: '/images/holidayIn_CP.jpg', href: '/spa-in-gurgaon' },
{ name: 'NOIDA', img: '/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg', href: '/spa-in-noida' },
{ name: 'KALKAJI', img: '/images/tajmahalhotel_lajpatnagar.jpg', href: '/spa-in-kalkaji' },
{ name: 'KAROL BAGH', img: '/images/paschimvihar.jpg', href: '/spa-in-karol-bagh' },
{ name: 'MAHIPALPUR', img: '/images/hotel2.jpg', href: '/spa-in-mahipalpur' },
{ name: 'ROHINI', img: '/images/pullmanAerocity.jpg', href: '/spa-in-rohini' },
{ name: 'GREATER KAILASH', img: '/images/jwmarriott.jpeg', href: '/spa-in-greater-kailash' },
{ name: 'DWARKA', img: '/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg', href: '/spa-in-dwarka' },
{ name: 'PITAMPURA', img: '/images/spa-in-pitampura.png', href: '/spa-in-pitampura' },
{ name: 'PAHARGANJ', img: '/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg', href: '/spa-in-paharganj' },
{ name: 'RAJOURI GARDEN', img: '/images/spa-in-Rajouri-Garden.webp', href: '/spa-in-rajouri-garden' },
{ name: 'VASANT KUNJ', img: '/images/pexels-olly-3673941.jpg', href: '/spa-in-vasant-kunj' },
{ name: 'JANAKPURI', img: '/images/pexels-pavel-danilyuk-9119782.jpg', href: '/spa-in-janakpuri' },
{ name: 'UTTAM NAGAR', img: '/images/pexels-reza-khavarani-115341161-12310632.jpg', href: '/spa-in-uttam-nagar' },
{ name: 'SAKET', img: '/images/Reflexology.jpg', href: '/spa-in-saket' },
{ name: 'FARIDABAD', img: '/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg', href: '/spa-in-faridabad' },
{ name: 'PASCHIM VIHAR', img: '/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg', href: '/spa-in-paschim-vihar' },
{ name: 'PUNJABI BAGH', img: '/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg', href: '/spa-in-punjabi-bagh' },
{ name: 'PREET VIHAR', img: '/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg', href: '/spa-in-preet-vihar' },
{ name: 'LAXMI NAGAR', img: '/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg', href: '/spa-in-laxmi-nagar' },
{ name: 'HAUZ KHAS', img: '/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg', href: '/spa-in-hauz-khas' },
]
  return (
    <>
     {/* Banner */}
     
     {/* <div className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/5969.jpg" 
          alt="Luxury Spa Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center text-white">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wider mb-2">
            BEAUTY SPA
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-wider">
            Spa & <span className="block mt-1">BEAUTYCARE</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-lg">
          <a 
            href="tel:+00123456789" 
            className="flex items-center gap-2 hover:text-amber-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1 -.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1 -2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +00123456789
          </a>
          
          <a 
            href="https://www.website.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 0 1 -9 9m9-9a9 9 0 0 0 -9-9m9 9H3m9 9a9 9 0 0 1 -9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
            </svg>
            www.website.com
          </a>
        </div>
        <div className="mt-12">
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-colors shadow-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </div> */}
      
      {/* End Banner */}
       <section className="relative bg-gradient-to-r from-amber-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
              <span className="text-amber-800 text-lg font-bold">✦</span>
            </div>
            <p className="text-lg font-medium text-amber-900">OUR OUTLETS</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-serif text-amber-900 leading-tight">
            Our Hotel Spa<span className="text-amber-600"></span> <br /> 
            <span className="bg-amber-600 text-white px-3 py-1 rounded-md">Outlets for </span>Massage Spa in Delhi
          </h1>

          <p className="text-gray-600 max-w-md">
            Enjoy unmatched luxury with expert massage services from Luxury Russian Spa, now available at the best hotel spa outlets in the city, for the ultimate relaxation experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:++91 8799716197"
              className="flex items-center gap-2 text-amber-800 hover:text-amber-600 transition"
            >
              📞 +91 8799716197
            </a>

            <a
              href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
              className="px-6 py-3 rounded-xl bg-amber-600 text-white font-medium shadow-md hover:bg-amber-700 transition"
            >
              Book Now
            </a>
          </div>

          <a
            href="/"
            className="text-sm text-gray-500 hover:text-amber-600"
          >
            🌐 www.luxuryrussianspa.com
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/images/5969.jpg" // apni image path yaha dena
            alt="Spa & Beauty"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>
      </div>
    </section>
    {/* ///// */}
    {/* Location */}
    <section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
   <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-amber-900 font-serif mb-6"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     Our Premium Hotel Spa Outlets in Delhi
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-amber-800 max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
      initial={false}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Enjoy the luxury of a premium massage at Luxury Russian Spa, offering high-quality hotel spa treatments and therapeutic massages at the finest spas in Delhi.
    </motion.p>
  



<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
{cities.map((c, i) => (
<motion.a
key={c.name}
href={c.href}
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.04, duration: 0.35 }}
className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
>
<div className="relative w-full h-44 sm:h-48 lg:h-52">
<Image
src={c.img}
alt={c.name}
fill
sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
style={{ objectFit: 'cover' }}
className="group-hover:scale-105 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
</div>


<div className="absolute left-0 right-0 bottom-4 px-4 text-center">
<span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
</div>
</motion.a>
))}
</div>


<div className="flex justify-center mt-10">
<a
href="/massage-service-in-delhi"
className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
>
View All Services
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>
    {/* End Location */}
    
      {/* our 5* hoterl outlets */}
       <section className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-amber-900 font-serif mb-6"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our 5-Star Hotel Outlets for Massage Spa in Delhi
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-amber-800 max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
      initial={false}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Luxury Russian Spa offers the world standard of wellness to the highest 5-star hotels making sure that the customers experience a personalized massage in a luxurious and serene environment.
    </motion.p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {hotelOutlets.map((hotel, index) => (
        <motion.div
          key={index}
          className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
              src={hotel.image}
              alt={hotel.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-amber-800 font-serif mb-2">
              {hotel.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow mb-4">
              {hotel.description}
            </p>

            {/* Book Now Button */}
            <a
              href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-5 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* End outlets */}
      {/* 18+ Section */}
      {/* content */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path d="M50,15 C65,15 80,25 85,40 C90,55 85,70 70,85 C55,90 40,85 25,70 C15,55 15,40 25,25 C30,20 40,15 50,15 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M40,10 C50,10 60,15 65,25 C70,35 65,45 55,55 C45,60 35,65 25,55 C15,45 15,35 25,25 C30,20 35,15 40,10 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="max-w-[95%] mx-auto">
              {/* Section header */}
              <div className="text-center mb-10 md:mb-12">
                <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                            initial={false}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-amber-700 font-medium tracking-wider">PREMIUM EXPERIENCE</span>
                          </motion.div>
                          
                          <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            Luxury Russian Spa: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Best Massage Centre for Hotel Spa in Delhi</span>
                          </motion.h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>
              
      
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Image & Content */}
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl z-10">
                    <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-1 rounded-2xl">
                      <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                          <img
                              src="/images/potliMassage.jpg" // Change path accordingly
                              alt="Premium Body Spa"
                              className="w-full h-full object-cover rounded-xl"
                            />
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                          <div className="absolute top-4 right-4 bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                            Most Popular
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-serif font-bold text-stone-800">Premium Body Spa</h3>
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                              <span className="font-bold">₹1999</span> First Visit
                            </div>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Couple Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Jacuzzi Bath</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Private Room</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Oil & Cream Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span className="text-stone-700">Aromatherapy</span>
                            </li>
                          </ul>
                          <a href='https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.'><button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Book Now
                          </button></a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
                </motion.div>
      
                {/* Right Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="max-w-lg">
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                      In Luxury Russian Spa, we re-brand the hotel wellness by offering our best massage services in the most luxurious hotels in Delhi. We have certified therapists including international experts that provide personalized treatments depending on your relaxation need and comfort. Through full-body treatments and B2B massages to couple treatments, all the experiences are aimed at melting away the stress, enhancing circulation, and restoring the vitality.
                       <span className="font-medium text-stone-800"></span>
                    </p>
                    
                    
                    
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Every session takes place in a hygienic, peaceful setting with premium oils to elevate the experience. Whether you're here for business, leisure, or a weekend break, Luxury Russian Spa guarantees an elegant, comfortable session — which is why we're a favourite choice for hotel spa services in Delhi.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">★</div>
                        <h4 className="font-medium text-stone-800">Award-Winning</h4>
                        <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">♨</div>
                        <h4 className="font-medium text-stone-800">Thermal Suite</h4>
                        <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">👨‍👩‍👧</div>
                        <h4 className="font-medium text-stone-800">Couples Welcome</h4>
                        <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-amber-600 text-2xl mb-2">🌿</div>
                        <h4 className="font-medium text-stone-800">Organic Products</h4>
                        <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href='/spa-price-in-delhi'>
                      <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Our Packages
                      </button>
                      </a>
                      <a href='https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer.'>
                        <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Book Appointment
                      </button>
                      </a>
                      
                    </div>
                  
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
            {/* end content */}
{/* 18+ Section */}
          <section 
  className="relative py-16 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/images/luxurySpaRoom.jpg')" }}
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
        24+ Exclusive Body Spa Outlets
      </h2>
      <div className="w-16 h-0.5 bg-[#fdc28c] mt-6" />
    </div>

    {/* Refined description */}
    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
      Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide.
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
          {/* end 18+ section */}
{/* end 18+ section */}

{/* Massage center */}
<div className="min-h-screen bg-gradient-to-b from-[#f8f5f2] to-[#fffaf5]">
      
      
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
                  Our Luxury Hotel <span className="text-amber-600">Spa Outlets in Delhi</span>
                </motion.h2>
                <motion.p
                  className="text-gray-600 max-w-2xl mx-auto text-lg"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Luxury spa outlets of Luxury Russian Spa are the best way to treat yourself and they will provide professional massage treatments to the most preferred locations in the city.
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
                        alt={location.name}
                        layout="fill"
                        objectFit="cover"
                        className="transform group-hover:scale-110 transition-all duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div> */}
                    </div>
      
                    {/* Location Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                        <a href={location.link} className="hover:text-amber-600 transition-colors">{location.name}</a>
                      </h3>
                      <p className="text-gray-700 text-base mb-4">{location.description}</p>
                      <a
                        href={location.link}
                        className="mb-3 inline-flex items-center gap-2 text-amber-700 font-medium hover:underline"
                      >
                        View Spa in {location.name} →
                      </a>
                      <a
                              href="https://t.me/+yulqEcJa2dxhM2I9"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                            >
                              <FaTelegram className="text-xl mr-3" />
                              Book On Telegram
                            </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
             {/*End Locations Section */}
      
      {/* Testimonial Section */}
      {/* <section className="py-16 md:py-16 px-4 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2a3b47] mb-6">
              Client <span className="font-medium text-[#5d7a68]">Experiences</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#5d7a68] to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-[#4a5a65] italic mb-6">
                  "The therapists at Serenity Spa are true artists. I've never experienced such relief from my chronic back pain. The ambiance transports you to another world of tranquility."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7d9c87] to-[#5d7a68] flex items-center justify-center text-white font-medium text-lg">
                    {item === 1 ? 'S' : item === 2 ? 'M' : 'J'}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#2a3b47]">
                      {item === 1 ? 'Sarah Johnson' : item === 2 ? 'Michael Tan' : 'James Wilson'}
                    </h4>
                    <p className="text-sm text-[#5d7a68]">
                      {item === 1 ? 'Regular Client' : item === 2 ? 'Corporate Member' : 'Wellness Enthusiast'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      {/* <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-r from-[#5d7a68] to-[#7d9c87] rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-6">
              Experience Transformative Wellness
            </h3>
            <p className="text-white/90 mb-8">
              Join thousands who have rediscovered balance and vitality through our therapeutic approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3.5 bg-white text-[#5d7a68] hover:bg-[#f8f5f2] font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Book Your Session
              </button>
              <button className="px-8 py-3.5 border border-white text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
{/* End Massage center */}

<section className="w-full py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text and Icon */}
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Icon */}
      <div className="flex items-center space-x-4">
        <div className="bg-amber-100 p-3 rounded-full shadow-sm">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-amber-600"
            viewBox="0 0 576 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z" />
          </svg>
        </div>
        <p className="text-lg font-medium text-amber-800">24+ Outlets</p>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
         Enjoy Top-Class Massage in Delhi at Hotel Spa in Delhi
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Luxury Russian Spa guarantees complete relaxation and restorativeness to all the guests in the top Hotels of Delhi. Our professional therapists use the most sophisticated massage methods, essential oils, and individual therapies to help people relieve stress, enhance blood flow, and boost energy. Every session is designed to offer a total wellness experience, whether it's a full body massage, B2B therapy, or a couple session. <strong></strong>
      </p>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        
Through luxury, hygiene, and competent nursing, Luxury Russian Spa is able to convert any room within a hotel to a haven of peace and pleasures. Customers leave rejuvenated, renewed and completely engrossed in an unmatched spa experience and Luxury Russian Spa is the recommended name when it comes to luxury hotel massage services in the city.

      </p>
    </motion.div>

    {/* Right: Images */}
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/new4.jpeg"
          alt="Spa Room"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/MassageSession.webp"
          alt="Massage Therapy"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </div>
</section>

            {/* content section */}
                                 <section className="bg-gradient-to-b from-[#fffaf5] to-[#f8f0eb] py-16 px-6 md:px-16">
                                    <div className="max-w-6xl mx-auto">
                                      {/* Section Header */}
                                      <motion.div 
                                        className="text-center mb-10 md:mb-12"
                                        initial={false}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                      >
                                        <span className="text-lg font-medium text-amber-700 tracking-widest">OUR SIGNATURE OFFERINGS</span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-[#1f1a17] mt-4 mb-6">What We Offer At Our Premium Spa Outlets in Delhi</h2>
                                        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
                                      </motion.div>
            
                                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Left Column */}
                                        <div>
                                          {/* Facial Treatments */}
                                          <motion.div 
                                            className="bg-white bg-optage-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#f0dccb]"
                                            initial={false}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                          >
                                            <div className="flex items-center gap-4 mb-6">
                                              <div className="bg-amber-100 p-3 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 0 0 -5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1 -6 0 3 3 0 016 0zm6 3a2 2 0 1 1 -4 0 2 2 0 014 0zM7 10a2 2 0 1 1 -4 0 2 2 0 014 0z" />
                                                </svg>
                                              </div>
                                              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                Foreigner Staff
                                              </h2>
                                            </div>
                                             <p className="text-gray-600 leading-relaxed mb-6">
                            Experience world-class relaxation with our international massage therapists, trained to give you the best spa therapy in India. At our spa, we believe true wellness comes from the perfect balance of mind, body, and energy. That’s why our treatments combine natural techniques with global healing practices for deeper, long-lasting results.
                                              </p>
                                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                {[
                                                  {title: 'Russian Therapist', desc: 'Highly skilled therapists trained in advanced meditation and relaxation techniques. Their sessions help reduce stress, calm the mind, and improve overall well-being.'},
                                                  {title: 'Afgani Therapist', desc: 'Traditional Afghani healing methods designed to activate your body’s natural recovery power, improve blood flow, and relieve chronic pain.'},
                                                  {title: 'Uzbeki Therapist', desc: 'Therapists who use sacred-geometry–based healing spaces and gentle hands-on techniques for deep relaxation, emotional balance, and full-body comfort.'}
                                                ].map((item, index) => (
                                                  <div key={index} className="bg-indigo-50 p-4 rounded-xl">
                                                    <h3 className="font-bold text-amber-800 mb-2">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                  </div>
                                                ))}
                                              </div>
                                              <p className="text-gray-600 leading-relaxed">
                                               Our foreigner staff follows a holistic approach that gives results beyond temporary relaxation. Clients often report better sleep, reduced anxiety, improved energy levels, and long-term pain relief after our signature therapies.
                                              </p>
                                            <div className="mt-6">
                                              <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">60-90 min | From ₹2,800</span>
                                            </div>
                                          </motion.div>
                                          
            
                                          {/* Body Treatments */}
                                          <motion.div 
                                            className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f0dccb]"
                                            initial={false}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7, delay: 0.1 }}
                                          >
                                            <div className="flex items-center gap-4 mb-6">
                                              <div className="bg-amber-100 p-3 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0 -6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0 -6.364 0z" />
                                                </svg>
                                              </div>
                                              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                Why Go For Delhi Spa
                                              </h2>
                                            </div>
                                                                <p className="text-gray-600 leading-relaxed mb-6">
                                               Looking for the best spa in Delhi that offers world-class massage therapies and expert international techniques? Our spa is known for its highly trained therapists and advanced healing services trusted by thousands of clients across the city.

We have a team of 23 professional therapists, each with 500+ hours of certified spa training. Our specialists are experts in some of the most powerful and in-demand massage therapies in Delhi, including:
                                              </p>
                                              <ul className="grid grid-cols-2 gap-3 mb-6">
                                                {[
                                                  'Thai Herbal Compress', 'Lymphatic Drainage', 'Hot Stone Therapy', 
                                                  'Deep Tissue Sculpting', 'Shiatsu', 'Ayurvedic Abhyanga',
                                                  'Aromatherapy', 'Craniosacral Therapy'
                                                ].map((item, index) => (
                                                  <li key={index} className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-800 rounded-full mr-3"></div>
                                                    <span className="text-gray-600">{item}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                              <p className="text-gray-600 leading-relaxed">
                                              We continuously provide skill enhancement training so our therapists deliver the most effective spa services in Delhi. With a 98% client retention rate, we are trusted for quality, safety, and exceptional results.
                                              </p>
                                            <div className="mt-6">
                                              <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">75-90 min | From ₹3,200</span>
                                            </div>
                                          </motion.div>
                                        </div>
            
                                        {/* Right Column */}
                                        <div>
                                          
            
                                          {/* Massage Therapy */}
                                          <motion.div 
                                            className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-[#f0dccb]"
                                            initial={false}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                          >
                                            <div className="flex items-center gap-4 mb-6">
                                              <div className="bg-amber-100 p-3 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 0 1 -5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1 -18 0 9 9 0 0118 0z" />
                                                </svg>
                                              </div>
                                              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                                                Top Rated Services
                                              </h2>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                             Experience the most popular and highly effective spa therapies designed to relax your body, reduce stress, and improve overall wellness. Our spa is known for delivering the best massage treatments in India, combining skilled therapists with soothing techniques.
                                            </p>
                                            <div className="flex flex-wrap gap-4 mb-6">
                                              {[
                                                {icon: '💆‍♂️', text: 'Full Body Massage Therapy'},
                                                {icon: '🔥', text: 'Hot Stone Massage'},
                                                {icon: '🌺', text: 'Aromatherapy Massage'},
                                                {icon: '🪔', text: 'Deep Tissue Therapy'},
                                                {icon: '🌿', text: 'Herbal Body Scrub & Polish'},
                                                {icon: '🧖‍♀️', text: 'Steam & Detox Therapy'}
                                              ].map((item, index) => (
                                                <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                                                  <span className="mr-2 text-xl">{item.icon}</span>
                                                  {item.text}
                                                </span>
                                              ))}
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                              All our spa services are carefully designed to give you the perfect balance of relaxation, healing, and rejuvenation. Clients experience reduced stress, improved sleep, fresher skin, and long-lasting relief from body pain.
                                            </p>
                                            {/* // */}
                                            
                                            <div className="mt-6">
                                              <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">60-120 min | From ₹2,500</span>
                                            </div>
                                          </motion.div>
                                          {/* Wellness Packages */}
                                          <motion.div 
                                            className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f0dccb]"
                                            initial={false}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7, delay: 0.1 }}
                                          >
                                            <div className="flex items-center gap-4 mb-6">
                                              <div className="bg-amber-100 p-3 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" />
                                                </svg>
                                              </div>
                                              <h2 className="text-2xl font-bold text-[#1f1a17]">Home & Hotel Spa</h2>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                             Enjoy luxury spa services in Delhi from the comfort of your home or hotel. Our home spa services in Delhi are perfect for people who want privacy, convenience, and a professional spa experience without traveling.
                                            </p>
                                            <div className="flex flex-wrap gap-4 mb-6">
                                              {[
                                                {icon: '🏨', text: 'JW Marriott Hotel Aerocity'},
                                                {icon: '🏩', text: 'The Ashok (Chanakyapuri)'},
                                                {icon: '🏨', text: 'The Park Connaught Place'},
                                                {icon: '🏩', text: 'The Suryaa New Delhi (NFC)'},
                                                // {icon: '🏨', text: 'The Grand New Delhi'},
                                                // {icon: '🏩', text: 'Novotel New Delhi Aerocity'},
                                              ].map((item, index) => (
                                                <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                                                  <span className="mr-2 text-xl">{item.icon}</span>
                                                  {item.text}
                                                </span>
                                              ))}
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                              Our mobile spa team carries everything needed—massage bed, essential oils, towels, aroma setup, relaxing music—so your experience feels exactly like a luxury spa in Delhi, but in your personal space.
                                            </p>
                                            <div className="mt-6">
                                              <span className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full text-sm font-medium">3-6 hours | From ₹8,500</span>
                                            </div>
                                          </motion.div>
                                        </div>
                                      </div>
            
                                      {/* Additional Information */}
                                      <motion.div 
                                        className="mt-16 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white shadow-xl"
                                        initial={false}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                      >
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                          <div>
                                            <h3 className="text-2xl font-bold mb-4">Book Your Luxury Massage Today</h3>
                                            <p className="mb-4 opacity-90">
                                              Indulge in the finest spa experience with Luxury Russian Spa’s expert therapists delivering personalized massages at your preferred hotel.
                                            </p>
                                            <p className="opacity-90">
                                              Relax, rejuvenate, and restore balance in the most luxurious setting, ensuring a premium wellness journey that revitalizes both body and mind. Book your appointment now to experience ultimate relaxation and sophistication.
                                            </p>
                                          </div>
                                          <div className="flex justify-center">
                                            <a 
                                                href="https://t.me/+yulqEcJa2dxhM2I9" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                              >
                                                <FaTelegram className="text-xl mr-3" />
                                                Join Telegram Channel
                                              </a>
                                          </div>
                                        </div>
                                      </motion.div>
                                    </div>
                                  </section>
                                {/* end */}
        {/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#fffaf5] via-[#fcf5e9] to-[#f9f1e2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10 md:mb-12">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experts Therapy
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Foreign therapists available <span className="text-amber-600"> at our Spa Outlets in Aerocity</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
          </motion.p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                  loading="lazy"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                                  <a href={member.socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaWhatsapp /></a>
                                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                                  {/* <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a> */}
                                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* End Our Therapy Experts */}

      
{/* F&Q Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
                            <div className="max-w-5xl mx-auto px-4">
                              <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-14"
                              >
                                <motion.div
                                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                                  initial={false}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                >
                                  <FaStar className="text-amber-500" />
                                  Questions? We’re here to help
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                                  Frequently Asked <span className="text-amber-600">Questions</span>
                                </h2>
                                <p className="text-amber-800 max-w-2xl mx-auto text-lg">
                                  Everything you need to know about our luxurious spa services and how to book them.
                                </p>
                                <div className="flex justify-center mt-6">
                                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                </div>
                              </motion.div>
                    
                              {/* FAQ Accordion */}
                              <div className="space-y-5">
                                {faqs.map((faq, index) => (
                                  <motion.div
                                    key={index}
                                    initial={false}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
                                  >
                                    <button
                                      onClick={() => toggleFAQ(index)}
                                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                      <div className="flex items-start space-x-4">
                                        <div className="mt-1 p-2 bg-amber-50 rounded-lg">
                                          {faq.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">
                                          {faq.question}
                                        </h3>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        <svg
                                          className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </div>
                                    </button>
                    
                                    <AnimatePresence>
                                      {activeIndex === index && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                                            <p className="text-amber-700">
                                              {faq.answer}
                                            </p>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                ))}
                              </div>
                    
                              {/* CTA Box */}
                              {/* <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mt-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
                              >
                                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                                <p className="mb-5 max-w-2xl mx-auto">
                                  Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                    Contact Us
                                  </button>
                                  <button className="px-6 py-3 bg-amber-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                                    Book Appointment
                                  </button>
                                </div>
                              </motion.div> */}
                            </div>
      </section>
 <WhatsappFloat />
    </>
    
  )
}




























// 'use client'

// import React, { useState } from 'react'
// import { 
//   Star, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Leaf, 
//   Sparkles, 
//   Heart, 
//   Users, 
//   Award, 
//   CheckCircle,
//   ChevronDown,
//   ChevronUp,
//   Calendar,
//   ArrowRight,
//   Facebook,
//   Instagram,
//   Twitter,
//   Crown,
//   Gift,
//   Zap,
//   Shield,
//   Menu,
//   X
// } from 'lucide-react'

// export default function Outlet() {
//   const [openFaq, setOpenFaq] = useState(null);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const services = [
//     {
//       icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
//       title: "Signature Full Body Massage",
//       description: "Experience our world-renowned massage therapy using premium organic oils and ancient healing techniques for complete muscle relaxation.",
//       duration: "60-90 min",
//       price: "From $120"
//     },
//     {
//       icon: <Heart className="w-10 h-10 text-rose-500" />,
//       title: "Luxury Facial Treatments",
//       description: "Rejuvenate your skin with our customized facial treatments featuring the latest skincare technology and premium products.",
//       duration: "45-75 min",
//       price: "From $95"
//     },
//     {
//       icon: <Leaf className="w-10 h-10 text-green-600" />,
//       title: "Detox Body Wraps",
//       description: "Purify and nourish your skin with our organic body wrap treatments using natural ingredients and therapeutic minerals.",
//       duration: "90 min",
//       price: "From $150"
//     },
//     {
//       icon: <Users className="w-10 h-10 text-purple-600" />,
//       title: "Couples Retreat",
//       description: "Share a romantic wellness experience with your partner in our luxurious couples suites with champagne service.",
//       duration: "2-3 hours",
//       price: "From $350"
//     },
//     {
//       icon: <Award className="w-10 h-10 text-amber-600" />,
//       title: "Aromatherapy Sessions",
//       description: "Enhance your wellness journey with therapeutic aromatherapy using premium essential oils for mind-body harmony.",
//       duration: "60 min",
//       price: "From $85"
//     },
//     {
//       icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
//       title: "Reflexology Therapy",
//       description: "Experience healing through specialized pressure point massage focusing on feet, hands, and energy pathways.",
//       duration: "45 min",
//       price: "From $75"
//     }
//   ]

//   const process = [
//     {
//       step: "01",
//       title: "Personal Consultation",
//       description: "Begin with a comprehensive wellness consultation where our experts assess your needs and create a personalized treatment plan.",
//       icon: <Users className="w-8 h-8" />
//     },
//     {
//       step: "02",
//       title: "Treatment Customization",
//       description: "Our specialists recommend the perfect combination of treatments tailored to your specific wellness goals and preferences.",
//       icon: <Heart className="w-8 h-8" />
//     },
//     {
//       step: "03",
//       title: "Luxury Experience",
//       description: "Immerse yourself in our tranquil environment with premium amenities, skilled therapists, and personalized attention.",
//       icon: <Sparkles className="w-8 h-8" />
//     },
//     {
//       step: "04",
//       title: "Wellness Guidance",
//       description: "Receive expert aftercare advice and personalized recommendations to maintain your wellness journey at home.",
//       icon: <Leaf className="w-8 h-8" />
//     }
//   ]

//   const packages = [
//     {
//       name: "Essential Bliss",
//       subtitle: "Perfect for first-time visitors",
//       price: "$199",
//       originalPrice: "$250",
//       duration: "2.5 hours",
//       features: [
//         "60-minute Swedish Massage",
//         "45-minute Hydrating Facial",
//         "Aromatherapy Session",
//         "Relaxation Lounge Access",
//         "Herbal Tea & Healthy Snacks",
//         "Complimentary Robe & Slippers"
//       ],
//       popular: false,
//       color: "from-blue-50 to-indigo-50",
//       borderColor: "border-blue-200"
//     },
//     {
//       name: "Luxury Escape",
//       subtitle: "Our most popular package",
//       price: "$399",
//       originalPrice: "$500",
//       duration: "4.5 hours",
//       features: [
//         "90-minute Deep Tissue Massage",
//         "75-minute Premium Anti-Aging Facial",
//         "Detoxifying Body Wrap",
//         "Private Couples Suite Available",
//         "Gourmet Spa Lunch",
//         "Private Relaxation Suite",
//         "Premium Spa Product Gift Set",
//         "Champagne & Chocolate Service"
//       ],
//       popular: true,
//       color: "from-emerald-50 to-teal-50",
//       borderColor: "border-emerald-300"
//     },
//     {
//       name: "Ultimate Indulgence",
//       subtitle: "The pinnacle of luxury",
//       price: "$699",
//       originalPrice: "$850",
//       duration: "Full Day (7 hours)",
//       features: [
//         "2-hour Signature Massage Journey",
//         "90-minute Platinum Facial Treatment",
//         "Full Body Exfoliation & Wrap",
//         "Reflexology & Aromatherapy",
//         "Private VIP Suite All Day",
//         "Personal Wellness Concierge",
//         "Luxury Spa Products Collection",
//         "Multi-course Gourmet Dining",
//         "Private Transportation Available"
//       ],
//       popular: false,
//       color: "from-amber-50 to-orange-50",
//       borderColor: "border-amber-200"
//     }
//   ]

//   const outlets = [
//     {
//       name: "Serenity Spa Downtown",
//       address: "123 Wellness Boulevard, City Center",
//       phone: "(555) 123-4567",
//       hours: "Mon-Sun: 9:00 AM - 9:00 PM",
//       image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Valet Parking", "Couples Suites", "Rooftop Garden"]
//     },
//     {
//       name: "Tranquil Waters Spa",
//       address: "456 Peaceful Lane, Riverside District",
//       phone: "(555) 234-5678",
//       hours: "Mon-Sun: 8:00 AM - 10:00 PM",
//       image: "https://images.pexels.com/photos/6621166/pexels-photo-6621166.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Waterfront Views", "Outdoor Treatments", "Meditation Garden"]
//     },
//     {
//       name: "Harmony Haven Spa",
//       address: "789 Zen Garden Way, Uptown",
//       phone: "(555) 345-6789",
//       hours: "Mon-Sun: 10:00 AM - 8:00 PM",
//       image: "https://images.pexels.com/photos/3757949/pexels-photo-3757949.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Japanese Gardens", "Hot Stone Therapy", "Yoga Studio"]
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       rating: 5,
//       comment: "Absolutely transformative experience! The attention to detail and level of service exceeded all my expectations. I felt completely renewed.",
//       treatment: "Luxury Escape Package",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "Michael Chen",
//       rating: 5,
//       comment: "My wife and I had the most romantic couples retreat. The private suite was stunning and the treatments were world-class.",
//       treatment: "Ultimate Indulgence",
//       image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "Emily Rodriguez",
//       rating: 5,
//       comment: "The facial treatment was incredible! My skin has never looked better. The therapist was so knowledgeable and professional.",
//       treatment: "Luxury Facial Treatment",
//       image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "David Thompson",
//       rating: 5,
//       comment: "I've visited spas worldwide, but Serenity Spa is truly exceptional. The ambiance, service, and results are unmatched.",
//       treatment: "Signature Massage",
//       image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
//     }
//   ]

//   const faqs = [
//     {
//       question: "What should I expect during my first visit?",
//       answer: "Your first visit begins with a comprehensive wellness consultation where we discuss your health history, preferences, and goals. We'll provide a tour of our facilities and explain your chosen treatments. Arrive 30 minutes early to complete paperwork and begin relaxing in our tranquil environment."
//     },
//     {
//       question: "What should I wear or bring to my appointment?",
//       answer: "We provide everything you need including luxury robes, slippers, towels, and all amenities. Simply arrive in comfortable clothing. We recommend removing jewelry and leaving valuables at home. Lockers are provided for your personal items."
//     },
//     {
//       question: "Are your products organic and safe for sensitive skin?",
//       answer: "Yes, we exclusively use premium, organic, and hypoallergenic products suitable for all skin types. Our therapists are extensively trained to work with sensitive skin and will customize treatments accordingly. We can provide ingredient lists for any products used."
//     },
//     {
//       question: "Can I customize my treatment package?",
//       answer: "Absolutely! We specialize in creating bespoke experiences. Our packages can be fully customized to meet your specific needs, preferences, and time constraints. Speak with our wellness specialists during booking to design your perfect spa day."
//     },
//     {
//       question: "What is your cancellation and rescheduling policy?",
//       answer: "We require 24-hour notice for cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a 50% charge. Same-day cancellations are charged the full treatment cost. We understand emergencies happen and will work with you when possible."
//     },
//     {
//       question: "Do you offer gift certificates and corporate packages?",
//       answer: "Yes! We offer beautifully presented gift certificates for all treatments and packages. Corporate wellness packages are available for team building and employee appreciation. Gift certificates never expire and can be used for any services or products."
//     }
//   ]

//   const blogPosts = [
//     {
//       title: "The Science Behind Massage Therapy: Health Benefits Explained",
//       excerpt: "Discover the proven health benefits of regular massage therapy, from stress reduction to improved circulation and pain management.",
//       image: "https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 15, 2024",
//       readTime: "8 min read",
//       category: "Wellness"
//     },
//     {
//       title: "Creating Your Personal Spa Sanctuary at Home",
//       excerpt: "Transform your home into a peaceful retreat with expert tips on ambiance, aromatherapy, and self-care rituals from our spa professionals.",
//       image: "https://images.pexels.com/photos/6621176/pexels-photo-6621176.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 12, 2024",
//       readTime: "6 min read",
//       category: "Lifestyle"
//     },
//     {
//       title: "Understanding Skincare: A Complete Guide to Facial Treatments",
//       excerpt: "Learn about different facial treatments, skin types, and how to choose the right skincare regimen for your unique needs.",
//       image: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 8, 2024",
//       readTime: "10 min read",
//       category: "Skincare"
//     }
//   ]

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index)
//   }

//   return (
//     <div className="min-h-screen gradient-bg scroll-smooth">
//       {/* Header */}
//       <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center">
//               <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl mr-3">
//                 <Leaf className="w-8 h-8 text-white" />
//               </div>
//               <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-playfair">
//                 Serenity Spa
//               </span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex space-x-8">
//               {['Services', 'Process', 'Pricing', 'Locations', 'About', 'Contact'].map((item) => (
//                 <a 
//                   key={item}
//                   href={`#${item.toLowerCase()}`} 
//                   className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-700 transition duration-300 font-semibold shadow-lg">
//                 Book Now
//               </button>
              
//               {/* Mobile menu button */}
//               <button 
//                 className="lg:hidden p-2"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <div className="lg:hidden py-4 border-t border-white/20">
//               <nav className="flex flex-col space-y-4">
//                 {['Services', 'Process', 'Pricing', 'Locations', 'About', 'Contact'].map((item) => (
//                   <a 
//                     key={item}
//                     href={`#${item.toLowerCase()}`} 
//                     className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-800/20 to-green-900/30 z-10"></div>
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
//             alt="Luxury Spa Experience"
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         {/* Floating Elements */}
//         <div className="absolute top-20 left-10 floating-animation">
//           <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
//         </div>
//         <div className="absolute bottom-32 right-16 floating-animation" style={{animationDelay: '2s'}}>
//           <div className="w-16 h-16 bg-emerald-400/20 rounded-full backdrop-blur-sm"></div>
//         </div>
        
//         <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//           <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight font-playfair">
//             Discover Your Inner 
//             <span className="block text-gradient text-emerald-300">Serenity</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
//             Immerse yourself in luxury wellness treatments designed to restore balance, rejuvenate your spirit, 
//             and awaken your natural radiance in our tranquil sanctuary.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 transform hover:scale-105 shadow-2xl">
//               Book Your Journey
//             </button>
//             <button className="glass-effect text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition duration-300 border border-white/30">
//               Explore Services
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-16 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-50 floating-animation"></div>
//               <img 
//                 src="https://images.pexels.com/photos/3757949/pexels-photo-3757949.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Spa Interior"
//                 className="rounded-3xl shadow-2xl relative z-10"
//               />
//               <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-2xl shadow-xl">
//                 <div className="flex items-center">
//                   <Crown className="w-10 h-10 text-amber-500 mr-4" />
//                   <div>
//                     <div className="font-bold text-gray-900 text-lg">Award Winning</div>
//                     <div className="text-gray-600">Luxury Spa Experience</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h2 className="text-5xl font-bold text-gray-900 mb-8 font-playfair">
//                 About <span className="text-gradient">Serenity Spa</span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 For over a decade, Serenity Spa has been the premier destination for luxury wellness experiences. 
//                 Our mission transcends traditional spa services – we create transformative journeys that nurture your 
//                 body, mind, and spirit in perfect harmony.
//               </p>
//               <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                 Our team of world-class therapists combines ancient healing wisdom with cutting-edge wellness 
//                 techniques, using only the finest organic products and state-of-the-art facilities to deliver 
//                 unparalleled results.
//               </p>
              
//               <div className="grid grid-cols-3 gap-8 mb-10">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">12+</div>
//                   <div className="text-gray-600 font-medium">Years Excellence</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">75K+</div>
//                   <div className="text-gray-600 font-medium">Happy Clients</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">35+</div>
//                   <div className="text-gray-600 font-medium">Expert Therapists</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-full">
//                   <Shield className="w-5 h-5 text-emerald-600 mr-2" />
//                   <span className="text-emerald-800 font-medium">Certified Organic</span>
//                 </div>
//                 <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
//                   <Award className="w-5 h-5 text-blue-600 mr-2" />
//                   <span className="text-blue-800 font-medium">Award Winning</span>
//                 </div>
//                 <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
//                   <Heart className="w-5 h-5 text-purple-600 mr-2" />
//                   <span className="text-purple-800 font-medium">Luxury Experience</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our comprehensive collection of luxury wellness treatments, each designed to provide 
//               transformative experiences that restore, rejuvenate, and revitalize.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group glass-effect p-8 rounded-3xl card-hover border border-white/20">
//                 <div className="mb-6 transform group-hover:scale-110 transition duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="text-sm text-gray-500">{service.duration}</div>
//                     <div className="text-lg font-bold text-emerald-600">{service.price}</div>
//                   </div>
//                   <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-200 transition duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section id="process" className="py-16 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Process</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Experience our meticulously crafted wellness journey, designed to ensure your complete 
//               satisfaction and transformative results.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {process.map((step, index) => (
//               <div key={index} className="text-center group">
//                 <div className="relative mb-8">
//                   <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition duration-300">
//                     {step.step}
//                   </div>
//                   <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
//                     <div className="text-emerald-600">{step.icon}</div>
//                   </div>
//                   {index < process.length - 1 && (
//                     <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300"></div>
//                   )}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Pricing Section */}
//       <section id="pricing" className="py-16 bg-white/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Luxury <span className="text-gradient">Packages</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Indulge in our thoughtfully curated wellness packages, each designed to provide exceptional 
//               value and unforgettable experiences tailored to your needs.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {packages.map((pkg, index) => (
//               <div key={index} className={`relative rounded-3xl p-8 ${pkg.popular ? 'pricing-card-popular transform scale-105' : 'pricing-card'} card-hover`}>
//                 {pkg.popular && (
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
//                       <Crown className="w-4 h-4 mr-2" />
//                       Most Popular
//                     </div>
//                   </div>
//                 )}
                
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//                   <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
//                   <div className="flex items-center justify-center mb-2">
//                     <span className="text-5xl font-bold text-emerald-600">{pkg.price}</span>
//                     <span className="text-lg text-gray-400 line-through ml-3">{pkg.originalPrice}</span>
//                   </div>
//                   <div className="text-gray-600 font-medium">{pkg.duration}</div>
//                   <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mt-2">
//                     <Gift className="w-4 h-4 mr-1" />
//                     Save {Math.round((1 - parseInt(pkg.price.slice(1)) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
//                   </div>
//                 </div>
                
//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start">
//                       <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700 leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <button className={`w-full py-4 rounded-full font-bold text-lg transition duration-300 ${
//                   pkg.popular 
//                     ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg' 
//                     : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                 }`}>
//                   {pkg.popular ? 'Choose Popular' : 'Select Package'}
//                 </button>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-16">
//             <p className="text-gray-600 mb-6">Need a custom package? We're here to help!</p>
//             <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition duration-300 shadow-lg">
//               Create Custom Package
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Outlets Section */}
//       <section id="locations" className="py-16 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Locations</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Visit any of our beautifully designed spa locations, each offering the same exceptional 
//               service and luxury amenities in unique, tranquil settings.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {outlets.map((outlet, index) => (
//               <div key={index} className="glass-effect rounded-3xl overflow-hidden card-hover border border-white/20">
//                 <div className="relative">
//                   <img 
//                     src={outlet.image} 
//                     alt={outlet.name}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-emerald-600">
//                     Premium Location
//                   </div>
//                 </div>
                
//                 <div className="p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">{outlet.name}</h3>
                  
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-start">
//                       <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.address}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.phone}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.hours}</span>
//                     </div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">Special Features:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {outlet.features.map((feature, featureIndex) => (
//                         <span key={featureIndex} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 shadow-lg">
//                     Book at This Location
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Client <span className="text-gradient">Testimonials</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover what our valued clients say about their transformative experiences at Serenity Spa.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="glass-effect p-8 rounded-3xl card-hover border border-white/20">
//                 <div className="flex items-center mb-6">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <div className="font-bold text-gray-900">{testimonial.name}</div>
//                     <div className="flex items-center">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
                
//                 <div className="bg-emerald-50 px-3 py-2 rounded-full text-sm font-medium text-emerald-700">
//                   {testimonial.treatment}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 relative">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Frequently Asked <span className="text-gradient">Questions</span>
//             </h2>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Find answers to common questions about our services, policies, and spa experience.
//             </p>
//           </div>
          
//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="glass-effect rounded-2xl border border-white/20 overflow-hidden">
//                 <button
//                   className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-white/20 transition duration-300"
//                   onClick={() => toggleFaq(index)}
//                 >
//                   <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
//                   <div className="bg-emerald-100 p-2 rounded-full">
//                     {openFaq === index ? (
//                       <ChevronUp className="w-5 h-5 text-emerald-600" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-emerald-600" />
//                     )}
//                   </div>
//                 </button>
//                 {openFaq === index && (
//                   <div className="px-8 pb-6">
//                     <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="py-16 bg-white/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Blog & <span className="text-gradient">Articles</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Stay informed with our latest wellness insights, expert tips, and spa industry knowledge 
//               from our team of professionals.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <article key={index} className="glass-effect rounded-3xl overflow-hidden card-hover border border-white/20">
//                 <div className="relative">
//                   <img 
//                     src={post.image} 
//                     alt={post.title}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {post.category}
//                   </div>
//                 </div>
                
//                 <div className="p-8">
//                   <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>{post.date}</span>
//                     <span className="mx-2">•</span>
//                     <span>{post.readTime}</span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
//                   <button className="flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition duration-300 group">
//                     Read Full Article 
//                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
          
//           <div className="text-center mt-16">
//             <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 shadow-lg">
//               View All Articles
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <div className="lg:col-span-2">
//               <div className="flex items-center mb-8">
//                 <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl mr-4">
//                   <Leaf className="w-8 h-8 text-white" />
//                 </div>
//                 <span className="text-3xl font-bold font-playfair">Serenity Spa</span>
//               </div>
//               <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md">
//                 Your premier destination for luxury wellness experiences. Transform your mind, body, 
//                 and spirit in our tranquil sanctuary of healing and rejuvenation.
//               </p>
//               <div className="flex space-x-6">
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Facebook className="w-6 h-6" />
//                 </div>
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Instagram className="w-6 h-6" />
//                 </div>
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Twitter className="w-6 h-6" />
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold mb-8 font-playfair">Services</h4>
//               <ul className="space-y-4">
//                 {['Full Body Massage', 'Luxury Facials', 'Body Treatments', 'Couples Therapy', 'Aromatherapy', 'Reflexology'].map((service) => (
//                   <li key={service}>
//                     <a href="#" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center">
//                       <Sparkles className="w-4 h-4 mr-2" />
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold mb-8 font-playfair">Contact Info</h4>
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <Phone className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Call Us</div>
//                     <div className="font-semibold">(555) 123-4567</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <Mail className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Email Us</div>
//                     <div className="font-semibold">hello@serenityspa.com</div>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <MapPin className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Visit Us</div>
//                     <div className="font-semibold">123 Wellness Boulevard<br />City Center, State 12345</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-16 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 mb-4 md:mb-0">
//                 © 2024 Serenity Spa. All rights reserved. Crafted with love for wellness.
//               </p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Privacy Policy</a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Terms of Service</a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Cookie Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }