import LaxmiNagarPage from "./LaxmiNagarPage";
// src/app/spa-in-laxmi-nagar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Laxmi Nagar near the metro station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Laxmi Nagar, close to Laxmi Nagar Metro Station and Vikas Marg, offering full body, deep tissue, and B2B massage in a private, hygienic setting for guests across East Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Laxmi Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Laxmi Nagar for residents across East Delhi, from Shakarpur to Nirman Vihar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Laxmi Nagar for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Laxmi Nagar welcomes both men and women, with male and female therapist options available — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is your spa listed as spa in Laxminagar or spa laxmi nagar Delhi on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, guests find us searching both spa in Laxminagar and spa laxmi nagar Delhi — either way, it's the same trusted outlet with certified therapists and transparent pricing near Vikas Marg.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a spa near Laxmi Nagar for a same-day session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search spa near Laxmi Nagar and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day appointment depending on therapist availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a body spa in Laxmi Nagar Delhi at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer body spa in Laxmi Nagar Delhi as a home service across East Delhi. Our therapist arrives fully equipped for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Laxmi Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Laxmi Nagar outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a body massage in Laxmi Nagar Delhi cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A body massage in Laxmi Nagar Delhi at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Laxmi Nagar", item: "https://www.luxuryrussianspa.com/spa-in-laxmi-nagar" },
  ],
};

export const metadata = {
  title: "Best Spa in Laxmi Nagar Delhi - Full Body Massage | Luxury Russian Spa",
  description:
    "Best spa in Laxmi Nagar for full body & body spa near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in laxmi nagar",
    "spa in laxminagar",
    "body massage in laxmi nagar",
    "massage in laxmi nagar",
    "spa in laxmi nagar delhi",
    "spa laxmi nagar delhi",
    "spa near laxmi nagar",
    "best spa in laxmi nagar",
    "body massage in laxmi nagar delhi",
    "body massage spa in laxmi nagar delhi",
    "body massage spa laxmi nagar",
    "body spa in laxmi nagar",
    "body spa in laxmi nagar delhi",
    "full body massage in laxmi nagar",
    "massage center in laxmi nagar",
    "couple massage in laxmi nagar",
    "home spa in laxmi nagar",
    "hotel spa in laxmi nagar",
  ],
  openGraph: {
    title: "Best Spa in Laxmi Nagar Delhi - Full Body Massage | Luxury Russian Spa",
    description:
      "Best spa in Laxmi Nagar for full body & body spa near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-laxmi-nagar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-laxmi-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-laxmi-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-laxmi-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LaxmiNagarPage />
    </>
  );
}
