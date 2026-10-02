import PunjabiBaghPage from "./PunjabiBaghPage";
// src/app/spa-in-punjabi-bagh/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Punjabi Bagh Club Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Punjabi Bagh Club Road, close to Ring Road and Punjabi Bagh Metro Station, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Punjabi Bagh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Punjabi Bagh for residents across West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Punjabi Bagh for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Punjabi Bagh welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Are you close to A One Spa or B One Spa in Punjabi Bagh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our outlet sits in the same West Punjabi Bagh stretch as well-known landmarks like A One Spa Punjabi Bagh and B One Spa Punjabi Bagh, so our address is easy to find and navigate to.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a massage center in Punjabi Bagh near Shivaji Park or Ring Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage center in Punjabi Bagh is easy to reach from Shivaji Park, Ring Road, Club Road, and West Punjabi Bagh, with home spa options across all of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a full body massage Punjabi Bagh at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our outlet, we offer full body massage Punjabi Bagh as a home service across West Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Punjabi Bagh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Punjabi Bagh outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a body spa in Punjabi Bagh cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A body spa in Punjabi Bagh at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Punjabi Bagh", item: "https://www.luxuryrussianspa.com/spa-in-punjabi-bagh" },
  ],
};

export const metadata = {
  title: "Best Spa in Punjabi Bagh - Luxury Body Massage on Club Road | Luxury Russian Spa",
  description:
    "Best spa in Punjabi Bagh for luxury body massage & body spa near Club Road. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in punjabi bagh",
    "a one spa punjabi bagh",
    "b one spa punjabi bagh",
    "best spa in punjabi bagh",
    "spa in punjabi bagh club road",
    "body massage in punjabi bagh",
    "body massage spa in punjabi bagh",
    "body spa in punjabi bagh",
    "full body massage punjabi bagh",
    "luxury spa in punjabi bagh",
    "massage center in punjabi bagh",
    "massage spa in punjabi bagh",
    "punjabi bagh spa centre",
    "spa near punjabi bagh club",
    "spa near punjabi bagh metro station",
    "couple massage in punjabi bagh",
    "deep tissue massage in punjabi bagh",
    "russian spa in punjabi bagh",
  ],
  openGraph: {
    title: "Best Spa in Punjabi Bagh - Luxury Body Massage on Club Road | Luxury Russian Spa",
    description:
      "Best spa in Punjabi Bagh for luxury body massage & body spa near Club Road. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-punjabi-bagh",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-punjabi-bagh",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
  },
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-punjabi-bagh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-punjabi-bagh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PunjabiBaghPage />
    </>
  );
}
