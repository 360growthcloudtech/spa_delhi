import SpaInGreaterkailash from "./SpaInGreaterkailash";
// src/app/spa-in-greater-kailash/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Greater Kailash near M Block Market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Greater Kailash, a short drive from M Block Market and N Block Market GK-1, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Greater Kailash for residents across GK-1 and GK-2.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover both spa in Greater Kailash 1 and spa in Greater Kailash 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our outlet and home spa service cover both spa GK 1 and spa GK 2, along with nearby Nehru Place, Kalkaji, CR Park, and Alaknanda.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Greater Kailash for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Greater Kailash welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is home service available for spa GK 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer home spa across spa in GK1 and spa in GK 2. Our therapist arrives with all the equipment needed for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Russian or other foreign therapists in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Greater Kailash packages include experienced Russian, Thai, and Uzbek therapists alongside our highly trained Indian staff.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Greater Kailash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Greater Kailash outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a body spa in Greater Kailash cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A body spa in Greater Kailash at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Greater Kailash - GK-1 & GK-2 Body Spa | Luxury Russian Spa",
  description:
    "Best spa in Greater Kailash (spa GK 1 & GK 2) for body massage & body spa near M Block Market. Certified therapists, hygienic private rooms. Book from ₹1999!",
  keywords: [
    "spa in greater kailash",
    "spa gk",
    "spa gk 1",
    "spa gk 2",
    "spa in gk 2",
    "spa in gk1",
    "spa in greater kailash 1",
    "spa in greater kailash 2",
    "best spa in gk",
    "best spa in gk 2",
    "best spa in greater kailash",
    "body massage in greater kailash",
    "body spa in greater kailash",
    "massage in greater kailash",
    "full body massage in greater kailash",
    "massage centre in greater kailash",
    "body massage near me greater kailash",
    "spa near m block market gk",
    "home spa in greater kailash",
    "hotel spa in greater kailash",
    "couple massage in greater kailash",
    "russian spa in greater kailash",
    "spa with female therapists in greater kailash",
    "night spa in greater kailash",
    "spa near kailash colony metro",
  ],
  openGraph: {
    title: "Best Spa in Greater Kailash - GK-1 & GK-2 Body Spa | Luxury Russian Spa",
    description:
      "Best spa in Greater Kailash (spa GK 1 & GK 2) for body massage & body spa near M Block Market. Certified therapists, hygienic private rooms. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-greater-kailash",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-greater-kailash",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Greater Kailash", item: "https://www.luxuryrussianspa.com/spa-in-greater-kailash" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpaInGreaterkailash />
    </>
  );
}
