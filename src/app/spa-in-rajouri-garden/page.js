import SpaInRajourigGrden from "./SpaInRajourigGrden";
// src/app/spa-in-rajouri-garden/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Rajouri Garden near the mall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Rajouri Garden, close to City Square Mall and the Rajouri Garden Metro interchange, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Rajouri Garden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa Rajouri Garden has for residents and visitors across West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa in Rajouri Garden Mall or nearby City Square Mall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our outlet is a short walk from Rajouri Garden Mall and City Square Mall, so it's easy to combine shopping with a relaxing massage in Rajouri Garden.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer massage in Rajouri Garden for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage in Rajouri Garden welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find the best body massage in Rajouri Garden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Rajouri Garden outlet delivers the best body massage in Rajouri Garden with certified therapists trained in full body, deep tissue, Swedish, and aromatherapy technique.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer home spa near Rajouri Garden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer home spa near Rajouri Garden and nearby Tagore Garden, Subhash Nagar, and Punjabi Bagh.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Rajouri Garden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Rajouri Garden outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Rajouri Garden cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Rajouri Garden at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Rajouri Garden - Near City Square Mall | Luxury Russian Spa",
  description:
    "Best spa in Rajouri Garden for body massage near the mall & metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in rajouri garden",
    "best spa in rajouri garden",
    "best spa rajouri garden",
    "massage in rajouri garden",
    "rajouri garden mall spa",
    "spa in rajouri garden mall",
    "spa near rajouri garden",
    "best body massage in rajouri garden",
    "body massage in rajouri garden",
    "body massage rajouri garden",
    "massage centre in rajouri garden",
    "full body massage in rajouri garden",
    "home spa in rajouri garden",
    "hotel spa in rajouri garden",
    "couple massage in rajouri garden",
    "spa near rajouri garden metro station",
    "spa near city square mall",
  ],
  openGraph: {
    title: "Best Spa in Rajouri Garden - Near City Square Mall | Luxury Russian Spa",
    description:
      "Best spa in Rajouri Garden for body massage near the mall & metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981994_female-masseur-preparing-bed-massage-session_23-2150461390.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-rajouri-garden",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-rajouri-garden",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981994_female-masseur-preparing-bed-massage-session_23-2150461390.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Rajouri Garden", item: "https://www.luxuryrussianspa.com/spa-in-rajouri-garden" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-rajouri-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-rajouri-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpaInRajourigGrden />
    </>
  );
}
