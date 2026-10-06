import HauzKhasPage from "./HauzKhasPage";
// src/app/spa-in-hauz-khas/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Hauz Khas Village?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Hauz Khas Village, close to Hauz Khas Market and Hauz Khas Metro Station, offering full body, deep tissue, and B2B massage in a private, hygienic setting for guests across South Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Hauz Khas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Hauz Khas and the best spa in Hauz Khas Village for residents and visitors alike.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage hauz khas for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage hauz khas service welcomes both men and women, with male and female therapist options available — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a spa in Hauz Khas Market I can walk into?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our spa in Hauz Khas Market location is easy to find, with a private, hygienic setting just a short walk from the main market and Deer Park.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a spa near Hauz Khas for a same-day session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search spa near Hauz Khas and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day appointment depending on therapist availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Hauz Khas Village at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer body massage in Hauz Khas Village as a home service across South Delhi. Our therapist arrives fully equipped for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a Russian spa in Hauz Khas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our russian spa in Hauz Khas packages include experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff, giving guests more variety in massage technique and style.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Hauz Khas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Hauz Khas outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Hauz Khas cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Hauz Khas at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹14,999 and hotel spa from ₹19,999, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Hauz Khas", item: "https://www.luxuryrussianspa.com/spa-in-hauz-khas" },
  ],
};

export const metadata = {
  title: "Best Spa in Hauz Khas Village - Body Massage | Luxury Russian Spa",
  description:
    "Best spa in Hauz Khas Village for full body & body massage near the market. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in hauz khas",
    "massage hauz khas",
    "spa near hauz khas",
    "best spa in hauz khas",
    "best spa in hauz khas village",
    "body massage hauz khas",
    "body massage in hauz khas village",
    "body massage spa in hauz khas",
    "body spa hauz khas",
    "full body massage in hauz khas",
    "massage spa in hauz khas",
    "russian spa in hauz khas",
    "spa in hauz khas market",
    "spa in hauz khas village",
    "massage center in hauz khas",
    "luxury spa in hauz khas",
    "couple massage in hauz khas",
    "deep tissue massage in hauz khas",
    "spa near hauz khas metro station",
    "spa near green park",
  ],
  openGraph: {
    title: "Best Spa in Hauz Khas Village - Body Massage | Luxury Russian Spa",
    description:
      "Best spa in Hauz Khas Village for full body & body massage near the market. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-hauz-khas",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-hauz-khas",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-hauz-khas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-hauz-khas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HauzKhasPage />
    </>
  );
}
