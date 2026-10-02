import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Pulse ring uses transform + opacity (GPU-composited) instead of an animated box-shadow */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" aria-hidden="true" />
      <FaWhatsapp className="relative text-2xl" />
    </a>
  );
}
