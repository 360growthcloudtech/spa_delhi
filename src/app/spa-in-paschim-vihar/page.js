import PaschimViharPage from "./PaschimViharPage";
// src/app/spa-in-paschim-vihar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Paschim Vihar near the metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Paschim Vihar, close to Paschim Vihar East and West Metro Stations on the Blue Line, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Paschim Vihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Paschim Vihar for residents across West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Paschim Vihar for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Paschim Vihar welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a massage center in Paschim Vihar near Rani Bagh or Peeragarhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage center in Paschim Vihar is easy to reach from Rani Bagh, Peeragarhi, Meera Bagh, and Madipur, with home spa options across all of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a full body massage in Paschim Vihar at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer full body massage in Paschim Vihar as a home service across West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a body spa in Paschim Vihar for a quick session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search body spa in Paschim Vihar and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day slot.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Paschim Vihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Paschim Vihar outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Paschim Vihar cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Paschim Vihar at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Paschim Vihar", item: "https://www.luxuryrussianspa.com/spa-in-paschim-vihar" },
  ],
};

export const metadata = {
  title: "Best Spa in Paschim Vihar - Full Body Massage | Luxury Russian Spa",
  description:
    "Best spa in Paschim Vihar for full body & body massage near the metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in paschim vihar",
    "best spa in paschim vihar",
    "body massage in paschim vihar",
    "body spa in paschim vihar",
    "full body massage in paschim vihar",
    "full body massage paschim vihar",
    "massage center in paschim vihar",
    "massage in paschim vihar",
    "home spa in paschim vihar",
    "hotel spa in paschim vihar",
    "couple massage in paschim vihar",
    "russian spa in paschim vihar",
    "deep tissue massage in paschim vihar",
    "spa near paschim vihar metro station",
    "spa near rani bagh",
  ],
  openGraph: {
    title: "Best Spa in Paschim Vihar - Full Body Massage | Luxury Russian Spa",
    description:
      "Best spa in Paschim Vihar for full body & body massage near the metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-paschim-vihar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-paschim-vihar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-paschim-vihar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-paschim-vihar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PaschimViharPage />
    </>
  );
}
