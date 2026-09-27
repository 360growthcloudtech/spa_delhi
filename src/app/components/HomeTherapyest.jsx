
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.webp",
    socials: {
      whatsapp: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      telegram: "https://t.me/+a5Bu6FBPN9FlOWM9",
      instagram: "",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      whatsapp: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      telegram: "https://t.me/+a5Bu6FBPN9FlOWM9",
      instagram: "",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.webp",
    socials: {
      whatsapp: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      telegram: "https://t.me/+a5Bu6FBPN9FlOWM9",
      instagram: "",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.webp",
    socials: {
      whatsapp: "https://api.whatsapp.com/send?phone=9310xxxxxx",
      telegram: "https://t.me/+a5Bu6FBPN9FlOWM9",
      instagram: "",
    },
  },
];

export default function HomeTherapyest() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase font-semibold tracking-wider mb-3">
            Expert Therapy
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
            Expert Therapists at{" "}
            <span className="text-amber-600">
              Our Massage Parlour in Delhi
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We have indian and foreign therapists at our premium massage parlour in Delhi. Our therapists come from Russia, Afghanistan, Thailand, and Uzbekistan. They have many years of experience giving massage services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                  <h3 className="text-white font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-amber-300 text-sm">
                    {member.designation}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-4 py-4">
                <a
                  href={member.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FaWhatsapp size={22} />
                </a>

                <a
                  href={member.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-500 transition"
                >
                  <FaTelegramPlane size={22} />
                </a>

                {/* <a
    href={member.socials.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-pink-600 transition"
  >
    <FaInstagram size={22} />
  </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

