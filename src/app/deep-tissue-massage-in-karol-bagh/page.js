import DeepTissueKarolBaghPage from "./DeepTissueKarolBaghPage";
// src/app/deep-tissue-massage-in-karol-bagh/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for deep tissue massage in Karol Bagh?", acceptedAnswer: { "@type": "Answer", text: "Our deep tissue massage in Karol Bagh starts at just ₹1999 for a first-visit outlet session — a good way to see if the technique suits you before booking anything longer." } },
    { "@type": "Question", name: "Is your deep tissue massage spa near Karol Bagh Metro Station?", acceptedAnswer: { "@type": "Answer", text: "Yes, our outlet is a short walk from Karol Bagh Metro Station on the Blue Line, easy to reach from Rajendra Place, Patel Nagar, and Jhandewalan." } },
    { "@type": "Question", name: "Is deep tissue massage painful?", acceptedAnswer: { "@type": "Answer", text: "You may feel some soreness in tight areas, but it should stay within a 'good hurt' range, never sharp. Your therapist checks in throughout and adjusts pressure to what you can actually handle." } },
    { "@type": "Question", name: "How is deep tissue massage different from a regular full body massage?", acceptedAnswer: { "@type": "Answer", text: "A regular full body massage uses lighter, flowing strokes mainly for relaxation. Deep tissue works more slowly and with real pressure, specifically targeting chronic muscle tension and knots." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists trained in deep tissue technique?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are trained in deep tissue work alongside our experienced Indian staff, with sessions available from ₹2,800." } },
    { "@type": "Question", name: "Can I book a night deep tissue massage appointment in Karol Bagh?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, subject to therapist availability." } },
    { "@type": "Question", name: "Do you offer home deep tissue massage near Karol Bagh?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send a therapist to your home anywhere in and around Karol Bagh for the same firm, focused technique." } },
    { "@type": "Question", name: "How much does a deep tissue massage cost in Karol Bagh?", acceptedAnswer: { "@type": "Answer", text: "A deep tissue massage at our Karol Bagh outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." } },
  ],
};

export const metadata = {
  title: "Deep Tissue Massage in Karol Bagh - Real Pain Relief | Luxury Russian Spa",
  description:
    "Deep tissue massage in Karol Bagh near Karol Bagh Metro for chronic pain & muscle knots. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "deep tissue massage in karol bagh",
    "deep tissue massage near karol bagh metro",
    "back pain massage karol bagh",
    "deep tissue massage price in karol bagh",
    "best deep tissue massage spa karol bagh",
    "muscle pain massage karol bagh",
    "deep tissue massage near rajendra place",
    "russian deep tissue massage karol bagh",
    "night deep tissue massage karol bagh",
  ],
  openGraph: {
    title: "Deep Tissue Massage in Karol Bagh - Real Pain Relief | Luxury Russian Spa",
    description:
      "Deep tissue massage in Karol Bagh near Karol Bagh Metro for chronic pain & muscle knots. Certified therapists, private hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/deep-tissue-massage-in-karol-bagh",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/deep-tissue-massage-in-karol-bagh",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Deep Tissue Massage in Karol Bagh", item: "https://www.luxuryrussianspa.com/deep-tissue-massage-in-karol-bagh" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Tissue Massage",
  name: "Deep Tissue Massage in Karol Bagh",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Karol Bagh",
  description:
    "Deep tissue massage in Karol Bagh near Karol Bagh Metro for chronic pain and muscle knots, with certified therapists in private hygienic rooms.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-deep-tissue-karol-bagh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-deep-tissue-massage-in-karol-bagh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-deep-tissue-massage-in-karol-bagh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DeepTissueKarolBaghPage />
    </>
  );
}
