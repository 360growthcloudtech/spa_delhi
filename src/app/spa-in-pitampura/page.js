import Pitampurapage from "./pitampurapage";
// src/app/spa-in-pitampura/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Pitampura near NSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Pitampura, close to Netaji Subhash Place and Metro Walk Mall, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Pitampura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Pitampura for residents across North West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Pitampura for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Pitampura welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a massage center in Pitampura near Rani Bagh or Kohat Enclave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage center in Pitampura is easy to reach from Rani Bagh, Kohat Enclave, Shalimar Bagh, and Prashant Vihar, with home spa options across all of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a Russian spa in Pitampura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our russian spa in Pitampura packages pair you with experienced Russian, Thai, and Uzbek therapists alongside our skilled Indian staff.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a spa near Pitampura for a quick session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search spa near Pitampura and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day slot.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Pitampura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Pitampura outlet has private rooms designed for couple massage, including our popular female to male couple massage, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Pitampura cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Pitampura at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Spa in Pitampura - Luxury Body Massage Centre | Luxury Russian Spa",
  description:
    "Best spa in Pitampura for full body & body massage near NSP. Luxury spa Pitampura with certified therapists, hygienic private rooms. Book from ₹1999!",
  keywords: [
    "spa in pitampura",
    "best spa in pitampura",
    "body massage in pitampura",
    "luxury spa pitampura",
    "massage center in pitampura",
    "massage in pitampura",
    "russian spa in pitampura",
    "spa near pitampura",
    "body massage spa in pitampura",
    "full body massage in pitampura",
    "massage spa in pitampura",
    "spa near netaji subhash place",
    "spa near metro walk mall",
    "home spa in pitampura",
    "hotel spa in pitampura",
    "couple massage in pitampura",
  ],
  openGraph: {
    title: "Best Spa in Pitampura - Luxury Body Massage Centre | Luxury Russian Spa",
    description:
      "Best spa in Pitampura for full body & body massage near NSP. Luxury spa Pitampura with certified therapists, hygienic private rooms. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981956_female-masseur-preparing-bed-massage-session_23-2150461392.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-pitampura",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-pitampura",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981956_female-masseur-preparing-bed-massage-session_23-2150461392.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Pitampura", item: "https://www.luxuryrussianspa.com/spa-in-pitampura" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="faq-schema-pitampura"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-pitampura"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Pitampurapage />
    </>
  );
}
