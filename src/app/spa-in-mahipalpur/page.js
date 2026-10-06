import MahipalpurPage from "./MahipalpurPage";
// src/app/spa-in-mahipalpur/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Mahipalpur near IGI Airport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Mahipalpur, right in the NH8 hotel belt just minutes from IGI Airport Terminal 3, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Mahipalpur for both residents and airport travellers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a Russian spa in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our russian spa in Mahipalpur packages pair you with experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff — widely regarded as the best russian spa in Mahipalpur for guests wanting a genuine russian body spa mahipalpur experience.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a body massage in Mahipalpur cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A body massage in Mahipalpur at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide hotel spa service in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, hotel spa is one of our most popular services in Mahipalpur given the dense concentration of hotels here — our therapist arrives with everything needed for a relaxing, hygienic session at your room.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Mahipalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Mahipalpur outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "What are your spa timings in Mahipalpur? Do you offer night appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Mahipalpur outlet and hotel spa booking support run with flexible daily timings, including evening and night appointments booked in advance through our 24/7 help desk — ideal for guests with late-night flights.",
      },
    },
    {
      "@type": "Question",
      name: "Is massage in Mahipalpur available for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, massage in Mahipalpur is available for men and women with male and female therapist options — just mention your preference when booking your session.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Mahipalpur - Massage Near IGI Airport | Luxury Russian Spa",
  description:
    "Best spa in Mahipalpur for massage, body massage & russian spa near IGI Airport. Certified therapists, hygienic private rooms, hotel & home spa. Book from ₹1999!",
  keywords: [
    "spa in mahipalpur",
    "best spa in mahipalpur",
    "best spa mahipalpur",
    "massage in mahipalpur",
    "best massage in mahipalpur",
    "body massage in mahipalpur",
    "russian spa in mahipalpur",
    "best russian spa in mahipalpur",
    "russian body spa mahipalpur",
    "full body massage in mahipalpur",
    "massage centre in mahipalpur",
    "body massage near me mahipalpur",
    "spa near igi airport mahipalpur",
    "home spa in mahipalpur",
    "hotel spa in mahipalpur",
    "couple massage in mahipalpur",
    "spa with female therapists in mahipalpur",
    "night spa in mahipalpur",
    "spa near delhi airport",
  ],
  openGraph: {
    title: "Best Spa in Mahipalpur - Massage Near IGI Airport | Luxury Russian Spa",
    description:
      "Best spa in Mahipalpur for massage, body massage & russian spa near IGI Airport. Certified therapists, hygienic private rooms, hotel & home spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-mahipalpur",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-mahipalpur",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Mahipalpur", item: "https://www.luxuryrussianspa.com/spa-in-mahipalpur" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-mahipalpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-mahipalpur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MahipalpurPage />
    </>
  );
}
