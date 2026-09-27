"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';

export default function HomeOutlet() {
  const outlets = [
  {
    title: 'Spa in Aerocity',
    description: 'Enjoy the best spa in Aerocity with relaxing body massage services at 5-star hotels like Lemon Tree, Andaz, IBIS and more for a truly peaceful experience.',
    image: '/images/NovotelNewDelhiAerocity.webp',
    link: 'https://api.whatsapp.com/send?phone=919217255113',
    pageLink: '/spa-in-aerocity',
  },
  {
    title: 'Spa in Defence Colony',
    description: 'Relax at our spa in Defence Colony with expert body massage services to refresh your mind and body, serving hotel guests in NFC at places like The Suryaa for complete comfort and relaxation.',
    image: '/images/TheSuryaaNewDelhi(NFC).webp',
    link: 'https://api.whatsapp.com/send?phone=919217255113',
  },
  {
    title: 'Spa in Connaught Place',
    description: 'Enjoy a relaxing experience at our spa in Connaught Place with professional body massage services, serving top hotels like Radisson Blu, The Lalit, The Park and more for your complete comfort and relaxation.',
    image: '/images/TheParkConnaughtPlace.webp',
    link: 'https://api.whatsapp.com/send?phone=919217255113',
    pageLink: '/spa-in-connaught-place',
  },
  {
    title: 'Spa in Dwarka',
    description: 'Feel at ease in our spa in Dwarka with professional massage therapists who come to your hotel room where you can have on-demand hotel spa to have a serene and relaxing stay at the hotel.',
    image: '/images/TheGrandNewDelhi.webp',
    link: 'https://api.whatsapp.com/send?phone=919217255113',
  },
  {
  title: 'Spa in Lajpat Nagar',
  description: 'Experience complete relaxation at our spa in Lajpat Nagar with expert body massage therapies and professional female therapists. Whether you are staying at nearby hotels or looking for a premium wellness experience, we provide rejuvenating spa services designed to refresh your body and mind.',
  image: '/images/spa-in-lajpat-nagar.webp',
  link: 'https://api.whatsapp.com/send?phone=919217255113',
  pageLink: '/spa-in-lajpat-nagar',
},
{
  title: 'Spa in Rajouri Garden',
  description: 'Unwind at our luxury spa in Rajouri Garden with relaxing body massage treatments and skilled therapists. We offer personalized spa experiences for residents, travelers, and hotel guests, helping you relieve stress and enjoy complete comfort and relaxation.',
  image: '/images/spa-in-Rajouri-Garden.webp',
  link: 'https://api.whatsapp.com/send?phone=919217255113',
  pageLink: '/spa-in-rajouri-garden',
},
];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
     {/* Decorative background elements */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-100/20 to-transparent rounded-full filter blur-[100px]"></div>
             <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full filter blur-[100px]"></div>
             
             {/* Floating leaves */}
             {[...Array(8)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute text-amber-300/30"
                 initial={{ y: 0, rotate: 0 }}
                 animate={{ 
                   y: [0, -20, 0],
                   rotate: [0, 5, 0]
                 }}
                 transition={{
                   duration: 8,
                   repeat: Infinity,
                   delay: i * 0.5,
                   ease: "easeInOut"
                 }}
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   fontSize: `${Math.random() * 24 + 24}px`,
                 }}
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                 </svg>
               </motion.div>
             ))}
           </div>
     
           <div className="max-w-7xl mx-auto relative z-10">
             {/* Section Header */}
             <motion.div 
               className="text-center mb-20"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
             >
               <motion.div
                 className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
               >
                 <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                 <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
               </motion.div>
               
               <motion.h2
                 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.6 }}
               >
                 Our 5-Star <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Hotel Spa in Delhi</span>
               </motion.h2>
               
               <motion.p
                 className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
               >
                 Our exclusive Luxury Russian Spa outlets offer world-class therapies In 5 Star <a href="/outlets">Hotels Spa In Delhi</a>
               </motion.p>
               
               <motion.div
                 className="flex justify-center mt-10"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
               >
                 <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
               </motion.div>
             </motion.div>
     
             {/* Outlets Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {outlets.map((outlet, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        
        <div className="relative h-64 overflow-hidden">
          <Image
            src={outlet.image}
            alt={outlet.title}
            fill
            priority={index === 0}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-amber-900 mb-3">
            {outlet.title}
          </h3>

          <p className="text-gray-600 text-sm leading-7 flex-1">
            {outlet.description}
          </p>

          {outlet.pageLink && (
            <a
              href={outlet.pageLink}
              className="mt-5 text-amber-700 font-semibold underline text-sm"
            >
              View {outlet.title} Details
            </a>
          )}

          <a
            href="https://t.me/+a5Bu6FBPN9FlOWM9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 px-5 rounded-full flex items-center justify-center"
          >
            <FaTelegram className="mr-2" />
            Join for Daily Updates
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>  
             {/* View all button */}
             <motion.div 
               className="text-center mt-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
             >
               <button className="relative inline-flex items-center gap-3 group">
                 <a href="/outlets"><span className="text-amber-800 font-medium text-lg tracking-wider group-hover:text-amber-900 transition-colors">
                   VIEW ALL OUTLETS
                 </span></a>
                 <div className="relative h-0.5 bg-amber-800/30 overflow-hidden w-24">
                   <div className="absolute inset-0 w-0 bg-amber-800 group-hover:w-full transition-all duration-500"></div>
                 </div>
                 <div className="text-amber-700 group-hover:text-amber-900 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14"/>
                     <path d="m12 5 7 7-7 7"/>
                   </svg>
                 </div>
               </button>
             </motion.div>
           </div>
    </section>
  );
}