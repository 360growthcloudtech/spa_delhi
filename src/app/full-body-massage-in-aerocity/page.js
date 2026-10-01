import FullBodyMassageAerocityPage from "./FullBodyMassageAerocityPage";
// src/app/full-body-massage-in-aerocity/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for full body massage in Aerocity?", acceptedAnswer: { "@type": "Answer", text: "Our full body massage in Aerocity starts at just ₹1999 for a first-visit outlet session, minutes from IGI Airport Terminal 3." } },
    { "@type": "Question", name: "Can I book a full body massage before my flight?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Aerocity outlet is a few minutes from Terminal 3, and we take same-day bookings depending on availability — message us as early as you can." } },
    { "@type": "Question", name: "Do you offer hotel spa for full body massage at Aerocity hotels?", acceptedAnswer: { "@type": "Answer", text: "Yes, hotel spa is one of our most requested services here given the density of hotels in Aerocity — your therapist comes straight to your room." } },
    { "@type": "Question", name: "How long does a full body massage session take?", acceptedAnswer: { "@type": "Answer", text: "A full body massage typically takes 60 to 90 minutes, giving the therapist time to properly work through your back, shoulders, arms, legs, and feet." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for full body massage in Aerocity?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are available alongside our experienced Indian staff, from ₹2,800 depending on the package." } },
    { "@type": "Question", name: "Can I book a night full body massage appointment in Aerocity?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk, useful for late-night arrivals." } },
    { "@type": "Question", name: "Is full body massage good for jet lag or travel fatigue?", acceptedAnswer: { "@type": "Answer", text: "Many travellers find a full body session genuinely helps — the combination of full-body coverage and relaxed pacing helps you reset after a long flight." } },
    { "@type": "Question", name: "How much does a full body massage cost in Aerocity?", acceptedAnswer: { "@type": "Answer", text: "A full body massage at our Aerocity outlet starts from ₹1999 for the first visit. Home and hotel spa packages start from ₹15,000 depending on duration." } },
  ],
};

export const metadata = {
  title: "Full Body Massage in Aerocity - Near IGI Airport | Luxury Russian Spa",
  description:
    "Full body massage in Aerocity near IGI Airport Terminal 3 for complete relaxation. Certified therapists, hotel & outlet options. Book from ₹1999 today!",
  keywords: [
    "full body massage in aerocity",
    "full body massage near igi airport",
    "hotel spa full body massage aerocity",
    "full body massage price in aerocity",
    "best full body massage aerocity",
    "full body massage near terminal 3",
    "russian full body massage aerocity",
    "night full body massage aerocity",
  ],
  openGraph: {
    title: "Full Body Massage in Aerocity - Near IGI Airport | Luxury Russian Spa",
    description:
      "Full body massage in Aerocity near IGI Airport Terminal 3 for complete relaxation. Certified therapists, hotel & outlet options. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/full-body-massage-in-aerocity",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/full-body-massage-in-aerocity",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Full Body Massage in Aerocity", item: "https://www.luxuryrussianspa.com/full-body-massage-in-aerocity" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Full Body Massage",
  name: "Full Body Massage in Aerocity",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Aerocity",
  description:
    "Full body massage in Aerocity near IGI Airport Terminal 3 for complete relaxation, with certified therapists and hotel or outlet options.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-full-body-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-full-body-massage-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-full-body-massage-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FullBodyMassageAerocityPage />
    </>
  );
}
