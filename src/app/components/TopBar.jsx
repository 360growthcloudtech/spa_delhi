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
          href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
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
