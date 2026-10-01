"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:flex justify-between items-center bg-gray-100 text-sm text-gray-700 px-6 py-2 shadow-sm">
      
      {/* Left: Phone */}
      <div>
        <p className="font-medium">📞 +91-8799716197</p>
      </div>

      {/* Center: Appointment Info */}
      <div className="text-center">
        <p className="font-semibold">
          Book Your Appointment : Delhi | Noida | Gurgaon | Ghaziabad
        </p>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://wa.link/gdjc65"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-500 transition"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </div>
  );
}
