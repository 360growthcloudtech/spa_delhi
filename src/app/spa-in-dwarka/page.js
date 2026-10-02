import DwarkaPage from "./DwarkaPage";
// src/app/spa-in-dwarka/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the first visit offer for spa in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our spa in Dwarka offers a special first visit package starting at just ₹1999. This introductory offer is designed for new guests who want to experience a premium massage in Dwarka at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa near Dwarka Sector 21 Metro Station and IGI Airport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka spa outlet is conveniently located close to Dwarka Sector 21 Metro Station and IGI Airport, making it an easy stop before or after a flight, or for guests travelling from Dwarka Mor and Uttam Nagar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide home spa service in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with our outlet, we offer home spa service across Dwarka and South West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Are your therapists trained and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every therapist at our Dwarka spa is trained and certified in techniques like Swedish massage, deep tissue therapy, and aromatherapy, ensuring a safe and professional experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, allowing two people to relax together in a comfortable, peaceful setting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists available in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Dwarka packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff, offering guests more variety in massage styles. Russian therapist sessions are available from ₹2,800 depending on the package you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Is Luxury Russian Spa in Dwarka convenient for business travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Dwarka outlet and hotel spa service are popular with business travellers and guests near IGI Airport who want a quick, professional massage before or after their trip.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage cost in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage at our Dwarka outlet starts from ₹1999 for the first visit. Home spa and hotel spa packages are priced separately depending on duration and treatment, starting from ₹15,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a dwarka sec 7 spa or spa in dwarka sec 12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our dwarka sector 7 spa and spa in dwarka sec 12 coverage serves guests across all major sectors, including Sector 21, along with home spa visits to your exact address within these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a spa in Dwarka Mor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our spa in Dwarka Mor coverage includes both easy access to our nearby outlet and home spa visits, making it convenient for guests across that stretch of Dwarka and Uttam Nagar.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a night spa appointment in Dwarka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, evening and late-night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, subject to therapist availability at the time you need.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Dwarka - Luxury Body Massage Near IGI Airport | Luxury Russian Spa",
  description:
    "Best spa in Dwarka for luxury body massage & body spa near IGI Airport. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in dwarka",
    "best spa in dwarka",
    "body massage dwarka",
    "body spa dwarka",
    "dwarka sec 7 spa",
    "dwarka sector 7 spa",
    "luxury spa in dwarka",
    "russian spa in dwarka",
    "spa dwarka sec 7",
    "spa in dwarka mor",
    "spa in dwarka sec 12",
    "best massage spa in dwarka",
    "massage in dwarka",
    "full body massage in dwarka",
    "couple massage in dwarka",
    "home spa in dwarka",
    "hotel spa in dwarka",
    "spa near igi airport",
    "spa near dwarka sector 21",
    "night spa in dwarka",
  ],
  openGraph: {
    title: "Best Spa in Dwarka - Luxury Body Massage Near IGI Airport | Luxury Russian Spa",
    description:
      "Best spa in Dwarka for luxury body massage & body spa near IGI Airport. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-dwarka",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-dwarka",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Dwarka", item: "https://www.luxuryrussianspa.com/spa-in-dwarka" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-dwarka"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-dwarka"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DwarkaPage />
    </>
  );
}
