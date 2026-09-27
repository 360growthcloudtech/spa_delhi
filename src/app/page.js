import HomeClient from "./HomeClient";

export const metadata = {
  title: "Best Spa in Delhi - 24+ Outlets, Book From ₹1999 | Luxury Russian Spa",
  description:
    "Best spa in Delhi with 24+ outlets across Delhi NCR. Certified therapists, hygienic private rooms, home & hotel spa. Book your session today!",

  keywords: [
    "spa in delhi",
    "best spa in delhi",
    "massage in delhi",
    "massage parlour in delhi",
    "top rated spa delhi",
    "hotel spa in delhi",
    "home spa in delhi",
    "body massage in delhi",
    "luxury spa in delhi",
    "spa near me delhi",
  ],

  alternates: {
    canonical: "https://www.luxuryrussianspa.com/",
  },

  openGraph: {
    title: "Get Best Body Massage in Delhi | First Visit Offer 1999",
    description:
      "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
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
    title: "Best Spa in Delhi For Complete Relaxation | Luxury Russian Spa",
    description:
      "Looking for a relaxing Spa in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
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
      name: "Do you have hotel and home spa options in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our hotel spa services include in-hotel treatments, room setups, full-service packages and trained international therapists at 5-star hotels. We also offer spa services at home across Delhi NCR.",
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
      name: "Can I book a safe home spa service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer spa at home across Delhi and the NCR region. You don't need to step out — just contact us and we'll arrange a certified therapist for your home spa session.",
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
    {
      "@type": "Question",
      name: "Can I request a male or female therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can share your therapist preference at the time of booking and we'll do our best to accommodate it.",
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
