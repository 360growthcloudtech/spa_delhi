import AromatherapyMassageNoidaPage from "./AromatherapyMassageNoidaPage";
// src/app/aromatherapy-massage-in-noida/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for aromatherapy massage in Noida?", acceptedAnswer: { "@type": "Answer", text: "Our aromatherapy massage in Noida starts at just ₹1999 for a first-visit outlet session, close to Sector 18." } },
    { "@type": "Question", name: "Is your aromatherapy spa near Noida City Centre?", acceptedAnswer: { "@type": "Answer", text: "Yes, our outlet is close to Noida City Centre Metro Station, easy to reach from Sector 18, Sector 62, and Sector 63." } },
    { "@type": "Question", name: "Which essential oils do you use for aromatherapy massage in Noida?", acceptedAnswer: { "@type": "Answer", text: "We offer lavender for relaxation, eucalyptus and peppermint for a refreshing effect, and chamomile for calming, sensitive skin — your therapist can recommend the right blend." } },
    { "@type": "Question", name: "Is aromatherapy massage safe for people with allergies?", acceptedAnswer: { "@type": "Answer", text: "We always ask about allergies and skin sensitivities before your session, and can adjust the oil blend or skip aromatherapy oils altogether if needed." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for aromatherapy massage in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are trained in aromatherapy blending alongside our experienced Indian staff, with sessions available from ₹2,800." } },
    { "@type": "Question", name: "Can I book a night aromatherapy massage appointment in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer home aromatherapy massage near Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send a therapist to your home anywhere in Noida for the same calming, essential-oil-based technique." } },
    { "@type": "Question", name: "How much does an aromatherapy massage cost in Noida?", acceptedAnswer: { "@type": "Answer", text: "An aromatherapy massage at our Noida outlet starts from ₹1999 for the first visit. Home and hotel packages start from ₹15,000 depending on duration." } },
  ],
};

export const metadata = {
  title: "Aromatherapy Massage in Noida - Essential Oil Relief | Luxury Russian Spa",
  description:
    "Aromatherapy massage in Noida near Sector 18 for essential oil stress relief & relaxation. Certified therapists, hygienic setting. Book from ₹1999 today!",
  keywords: [
    "aromatherapy massage in noida",
    "aromatherapy massage near noida city centre",
    "best aromatherapy spa noida",
    "aromatherapy massage price in noida",
    "essential oil massage sector 62 noida",
    "russian aromatherapy massage noida",
    "night aromatherapy massage noida",
    "aromatherapy massage near me noida",
  ],
  openGraph: {
    title: "Aromatherapy Massage in Noida - Essential Oil Relief | Luxury Russian Spa",
    description:
      "Aromatherapy massage in Noida near Sector 18 for essential oil stress relief & relaxation. Certified therapists, hygienic setting. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/noidahotel.jpeg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-noida",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-noida",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/noidahotel.jpeg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Aromatherapy Massage in Noida", item: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-noida" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Aromatherapy Massage",
  name: "Aromatherapy Massage in Noida",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Noida",
  description:
    "Aromatherapy massage in Noida near Sector 18 for essential oil stress relief and relaxation, delivered by certified therapists in a hygienic setting.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-aromatherapy-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-aromatherapy-massage-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-aromatherapy-massage-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AromatherapyMassageNoidaPage />
    </>
  );
}
