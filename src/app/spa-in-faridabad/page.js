import FaridabadPage from "./FaridabadPage";
// src/app/spa-in-faridabad/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Faridabad near NIT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Faridabad, close to NIT Faridabad and Sector 15, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Faridabad for residents across NCR.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage Faridabad for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage Faridabad service welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Are there good Faridabad massage centres near Neelam Chowk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Faridabad massage centre is easy to reach from Neelam Chowk, Ballabhgarh, and NIT Faridabad, with home spa options across all of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a Russian spa in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our russian spa in Faridabad packages pair you with experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff — widely regarded as the best body spa in Faridabad for guests wanting genuine variety in technique.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a night spa in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Faridabad outlet and home spa booking support run with flexible daily timings, including a night spa in Faridabad booked in advance through our 24/7 help desk.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Faridabad outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage Faridabad session cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage Faridabad session at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Faridabad", item: "https://www.luxuryrussianspa.com/spa-in-faridabad" },
  ],
};

export const metadata = {
  title: "Best Spa in Faridabad - Body Massage Near NIT | Luxury Russian Spa",
  description:
    "Best spa in Faridabad for body massage & body spa near NIT. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in faridabad",
    "russian spa in faridabad",
    "best spa in faridabad",
    "body massage faridabad",
    "body spa faridabad",
    "faridabad massage centres",
    "full body massage faridabad",
    "night spa in faridabad",
    "best body spa in faridabad",
    "massage center in faridabad",
    "home spa in faridabad",
    "hotel spa in faridabad",
    "couple massage in faridabad",
    "deep tissue massage in faridabad",
    "spa near nit faridabad",
    "spa near sector 15 faridabad",
    "spa near neelam chowk faridabad",
  ],
  openGraph: {
    title: "Best Spa in Faridabad - Body Massage Near NIT | Luxury Russian Spa",
    description:
      "Best spa in Faridabad for body massage & body spa near NIT. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-faridabad",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-faridabad",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-faridabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-faridabad"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaridabadPage />
    </>
  );
}
