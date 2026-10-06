import HomeClient from "./HomeClient";

export const metadata = {
  title: "Luxury Spa in Delhi | Russian Spa in Delhi From ₹1999",
  description:
    "Looking for a luxury spa or Russian spa in Delhi? Russian & Indian therapists at 24+ outlets and 5-star hotels, incl. Aerocity & Mahipalpur. From ₹1999.",

  keywords: [
    "luxury spa in delhi",
    "russian spa in delhi",
    "luxury spa in delhi ncr",
    "best luxury spa in delhi",
    "5 star spa in delhi",
    "best russian spa delhi",
    "russian spa in aerocity",
    "russian spa in mahipalpur",
    "russian massage delhi",
    "luxury spa in lajpat nagar",
  ],

  alternates: {
    canonical: "https://www.luxuryrussianspa.com/",
  },

  openGraph: {
    title: "Luxury Spa in Delhi | Russian Spa in Aerocity & Mahipalpur",
    description:
      "Russian and Indian therapists, private rooms and 5-star hotel sessions across Delhi NCR. First visit from ₹1999.",
    url: "https://www.luxuryrussianspa.com/",
    siteName: "Luxury Russian Spa",
    images: [
      {
        url: "/images/luxurySpaRoom.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Russian Spa",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Spa in Delhi | Russian Spa in Aerocity & Mahipalpur",
    description:
      "Russian and Indian therapists, private rooms and 5-star hotel sessions across Delhi NCR. First visit from ₹1999.",
    images: ["/images/luxurySpaRoom.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Luxury Russian Spa provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Luxury Russian Spa, we offer full-body massage, Thai massage, aromatherapy, B2B massage, sandwich massage, couple massage and more. Our certified Indian and international therapists deliver private, hygienic sessions tailored for relaxation, therapeutic relief, and special-event packages at all major outlets.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of a full body massage in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Delhi outlets starts at ₹1,999 for 60 minutes. An in-room session at a 5-star hotel is ₹14,999 for 90 minutes, and our VIP session with Russian and international therapists is ₹19,999 for 120 minutes. All prices are fixed, with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Can male guests book a female therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Male guests can choose a female therapist, and female guests can choose a male or female therapist. Just share your preference when you book on WhatsApp or call and we'll confirm who is available at your outlet.",
      },
    },
    {
      "@type": "Question",
      name: "Is Luxury Russian Spa a Russian body massage centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alongside our Indian therapists, we have trained therapists from Russia, Uzbekistan and Thailand. Most guests looking for the best Russian spa in Delhi come to us for the Russian-style full body massage, which you can book at our outlets across Delhi NCR or at a partner 5-star hotel.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a Russian spa in Mahipalpur or Aerocity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both are only a few minutes from IGI Airport. Our Mahipalpur outlet is open 24/7 for a Russian massage after a late flight, and in Aerocity our therapists can come to your hotel room. Message us on WhatsApp and we'll tell you who's available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Luxury Russian Spa open 24/7 for late-night massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Luxury Russian Spa is open 24/7, so you can book a massage late at night or early in the morning. Message us on WhatsApp or call anytime and we'll confirm your session, price and therapist before you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a first-visit discount at Luxury Russian Spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we run first-visit offers periodically, such as introductory full body massage packages starting at ₹1999. Check the homepage deals or contact your preferred outlet for current promotions.",
      },
    },
    {
      "@type": "Question",
      name: "Are Luxury Russian Spa therapists certified and experienced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our therapists are trained and certified in their techniques. We have both Indian and foreign therapists from Thailand, Uzbekistan, Russia and Afghanistan to give you the best massage experience at our 5-star hotel outlets.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
