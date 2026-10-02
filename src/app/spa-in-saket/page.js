import SpaInSaket from "./spainsaket";
// src/app/spa-in-saket/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a good spa in Saket near Select Citywalk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luxury Russian Spa runs a genuine spa in Saket, close to Select Citywalk and Saket District Centre, offering full body, deep tissue, and B2B massage in a private, hygienic setting.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Luxury Russian Spa the best spa in Saket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified therapists, transparent pricing, hygienic private rooms, and flexible outlet, home, and hotel spa options make us the best spa in Saket and the best massage spa in Saket for guests across South Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer body massage in Saket for both men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our body massage in Saket welcomes both men and women, with male and female therapist options — just mention your preference when booking your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a massage center in Saket near Malviya Nagar or Pushp Vihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our massage center in Saket is easy to reach from Malviya Nagar, Pushp Vihar, Saidulajab, and Saket Metro Station, with home spa options across all of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a full body massage in Saket at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, alongside our saket spa centre, we offer full body massage in Saket as a home service across South Delhi. Our therapist arrives with all the equipment needed for a relaxing, hygienic session.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a spa near Saket for a quick session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search spa near Saket and message us on WhatsApp or Telegram — our outlet, home spa, and hotel spa teams can usually confirm a same-day slot.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a couple massage in Saket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Saket outlet has private rooms designed for couple massage, including our popular couple massage with female therapists, so two people can relax together in comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full body massage in Saket cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body massage in Saket at our outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000, depending on duration and treatment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Saket", item: "https://www.luxuryrussianspa.com/spa-in-saket" },
  ],
};

export const metadata = {
  title: "Spa in Saket - Best Body Massage Near Select Citywalk | Luxury Russian Spa",
  description:
    "Best spa in Saket for full body & body massage near Select Citywalk. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in saket",
    "best spa in saket",
    "body massage in saket",
    "massage in saket",
    "saket spa centre",
    "spa near saket",
    "best massage spa in saket",
    "body massage near saket",
    "body spa in saket",
    "full body massage in saket",
    "massage center in saket",
    "massage spa in saket",
    "spa center in saket",
    "couple massage in saket",
    "deep tissue massage in saket",
    "spa near select citywalk",
    "spa near saket metro station",
  ],
  openGraph: {
    title: "Spa in Saket - Best Body Massage Near Select Citywalk | Luxury Russian Spa",
    description:
      "Best spa in Saket for full body & body massage near Select Citywalk. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/steptodown.com800611.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-saket",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-saket",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/steptodown.com800611.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        id="faq-schema-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpaInSaket />
    </>
  );
}
