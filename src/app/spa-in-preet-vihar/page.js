import PreetViharPage from "./PreetViharPage";
// src/app/spa-in-preet-vihar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Preet Vihar near the metro station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Preet Vihar, close to Preet Vihar Metro Station, Vikas Marg, and V3S Mall, offering full body, deep tissue, and B2B massage in a private, hygienic setting for guests across East Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Preet Vihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Preet Vihar for residents across East Delhi, from Karkardooma to Nirman Vihar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Preet Vihar for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage in Preet Vihar welcomes both men and women, with male and female therapist options available — just mention your preference when booking your session on WhatsApp or Telegram.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a massage center in Preet Vihar near Vikas Marg or Karkardooma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage center in Preet Vihar is easy to reach from Vikas Marg, Karkardooma, Nirman Vihar, and Anand Vihar, with home spa options available across all of these nearby areas.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a spa near Preet Vihar for a same-day session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search spa near Preet Vihar and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day appointment depending on therapist availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a body spa in Preet Vihar at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our preet vihar spa centre, we offer body spa in Preet Vihar as a home service across East Delhi. Our therapist arrives fully equipped for a relaxing, hygienic session at your residence.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Preet Vihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Preet Vihar outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in complete comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Preet Vihar cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Preet Vihar at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and the treatment you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Are there Russian or foreign therapists available at your Preet Vihar spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our russian spa in Preet Vihar packages include experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff, giving guests more variety in massage technique and style.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Preet Vihar", item: "https://www.luxuryrussianspa.com/spa-in-preet-vihar" },
  ],
};

export const metadata = {
  title: "Best Spa in Preet Vihar - Full Body Massage Near Vikas Marg | Luxury Russian Spa",
  description:
    "Best spa in Preet Vihar for full body & body massage near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in preet vihar",
    "best spa in preet vihar",
    "spa near preet vihar",
    "body spa in preet vihar",
    "massage in preet vihar",
    "preet vihar spa centre",
    "massage center in preet vihar",
    "full body massage in preet vihar",
    "body massage in preet vihar",
    "massage spa in preet vihar",
    "luxury spa in preet vihar",
    "couple massage in preet vihar",
    "deep tissue massage in preet vihar",
    "russian spa in preet vihar",
    "spa near preet vihar metro station",
    "spa near vikas marg",
    "home spa in preet vihar",
    "hotel spa in preet vihar",
  ],
  openGraph: {
    title: "Best Spa in Preet Vihar - Full Body Massage Near Vikas Marg | Luxury Russian Spa",
    description:
      "Best spa in Preet Vihar for full body & body massage near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-preet-vihar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-preet-vihar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-preet-vihar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-preet-vihar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PreetViharPage />
    </>
  );
}
