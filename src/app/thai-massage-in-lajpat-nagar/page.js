import ThaiMassageLajpatNagarPage from "./ThaiMassageLajpatNagarPage";
// src/app/thai-massage-in-lajpat-nagar/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for Thai massage in Lajpat Nagar?", acceptedAnswer: { "@type": "Answer", text: "Our Thai massage in Lajpat Nagar starts at just ₹1999 for a first-visit outlet session, close to Central Market." } },
    { "@type": "Question", name: "Is your Thai massage spa near Lajpat Nagar Metro Station?", acceptedAnswer: { "@type": "Answer", text: "Yes, our outlet is a short walk from Lajpat Nagar Metro Station, easy to reach from Central Market, Moolchand, and Defence Colony." } },
    { "@type": "Question", name: "Is Thai massage painful?", acceptedAnswer: { "@type": "Answer", text: "Thai massage involves firm pressure and stretching, so you may feel intensity in tight areas, but it should never be sharply painful. Your therapist adjusts to your comfort throughout." } },
    { "@type": "Question", name: "How is Thai massage different from a regular full body massage?", acceptedAnswer: { "@type": "Answer", text: "Thai massage combines acupressure and assisted stretching along the body's energy lines, improving flexibility as well as relaxation — a regular massage focuses mainly on kneading muscles." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists trained in Thai technique?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are trained in traditional Thai stretching alongside our experienced Indian staff, with sessions available from ₹2,800." } },
    { "@type": "Question", name: "Can I book a night Thai massage appointment in Lajpat Nagar?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer home Thai massage near Lajpat Nagar?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send a therapist to your home anywhere in and around Lajpat Nagar for the same traditional technique." } },
    { "@type": "Question", name: "How much does a Thai massage cost in Lajpat Nagar?", acceptedAnswer: { "@type": "Answer", text: "A Thai massage at our Lajpat Nagar outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." } },
  ],
};

export const metadata = {
  title: "Thai Massage in Lajpat Nagar - Stretch Therapy | Luxury Russian Spa",
  description:
    "Thai massage in Lajpat Nagar near Central Market for traditional stretching & stress relief. Certified therapists. Book from ₹1999 today!",
  keywords: [
    "thai massage in lajpat nagar",
    "thai massage near lajpat nagar metro",
    "best thai massage spa lajpat nagar",
    "thai massage price in lajpat nagar",
    "traditional thai massage central market",
    "russian thai massage lajpat nagar",
    "night thai massage lajpat nagar",
    "thai massage near me lajpat nagar",
  ],
  openGraph: {
    title: "Thai Massage in Lajpat Nagar - Stretch Therapy | Luxury Russian Spa",
    description:
      "Thai massage in Lajpat Nagar near Central Market for traditional stretching & stress relief. Certified therapists. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/lajpatnagar.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/thai-massage-in-lajpat-nagar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/thai-massage-in-lajpat-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/lajpatnagar.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Thai Massage in Lajpat Nagar", item: "https://www.luxuryrussianspa.com/thai-massage-in-lajpat-nagar" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Thai Massage",
  name: "Thai Massage in Lajpat Nagar",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Lajpat Nagar",
  description:
    "Thai massage in Lajpat Nagar near Central Market for traditional stretching and stress relief, with certified therapists from ₹1999.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-thai-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-thai-massage-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-thai-massage-in-lajpat-nagar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ThaiMassageLajpatNagarPage />
    </>
  );
}
