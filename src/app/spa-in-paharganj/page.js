import PaharganjPage from "./PaharganjPage";
// src/app/spa-in-paharganj/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is there a spa in Paharganj?", acceptedAnswer: { "@type": "Answer", text: "Yes, Luxury Russian Spa runs a genuine spa in Paharganj, right next to New Delhi Railway Station, offering full body, B2B, Thai, and couple massage in a private, hygienic setting." } },
    { "@type": "Question", name: "Do you offer a 24 hours spa in Paharganj?", acceptedAnswer: { "@type": "Answer", text: "Yes, our booking desk runs 24 hours — message us on WhatsApp or Telegram anytime and we'll confirm your massage in Paharganj session." } },
    { "@type": "Question", name: "Where can I find a body massage spa in Paharganj?", acceptedAnswer: { "@type": "Answer", text: "Our Paharganj spa center is a short walk from New Delhi Railway Station and Main Bazaar, offering full body, B2B, and Thai spa options." } },
    { "@type": "Question", name: "Do you provide home spa service near Paharganj?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send a therapist to your home anywhere in Central Delhi, including areas around Paharganj." } },
    { "@type": "Question", name: "How much does a body spa in Paharganj cost?", acceptedAnswer: { "@type": "Answer", text: "A session at our Paharganj outlet starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and hotel spa from ₹20,000." } },
    { "@type": "Question", name: "Do you provide spa services at hotels near Paharganj?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly serve guests staying at hotels around Paharganj and Connaught Place — just share your hotel and room details when booking." } },
  ],
};

export const metadata = {
  title: "Best Spa in Paharganj - Near New Delhi Railway Station | Luxury Russian Spa",
  description:
    "Best spa in Paharganj near New Delhi Railway Station & Main Bazaar. 24 hours booking, certified therapists, home & hotel spa available. Book from ₹1999!",
  keywords: [
    "best spa in paharganj",
    "spa in paharganj",
    "body massage in paharganj",
    "massage in paharganj",
    "paharganj spa center",
    "spa near paharganj",
    "24 hours spa in paharganj",
    "b2b spa paharganj",
    "body massage spa in paharganj",
    "body spa in paharganj",
    "full body massage in paharganj",
    "massage spa in paharganj",
    "spa center in paharganj",
    "thai spa in paharganj",
  ],
  openGraph: {
    title: "Best Spa in Paharganj - Near New Delhi Railway Station | Luxury Russian Spa",
    description:
      "Best spa in Paharganj near New Delhi Railway Station & Main Bazaar. 24 hours booking, certified therapists, home & hotel spa available. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-paharganj",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-paharganj",
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
    { "@type": "ListItem", position: 2, name: "Spa in Paharganj", item: "https://www.luxuryrussianspa.com/spa-in-paharganj" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-paharganj"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-paharganj"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PaharganjPage />
    </>
  );
}
