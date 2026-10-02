import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.link/gdjc65"
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
