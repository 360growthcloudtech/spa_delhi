import CoupleMassageSaketPage from "./CoupleMassageSaketPage";
// src/app/couple-massage-in-saket/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for couple massage in Saket?", acceptedAnswer: { "@type": "Answer", text: "Our couple massage in Saket starts at ₹3999 for a first-visit session at our outlet, near Select Citywalk." } },
    { "@type": "Question", name: "Is your couple spa near Select Citywalk Mall?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Saket outlet is a short drive from Select Citywalk, so it's easy to combine a movie or dinner with your couple massage." } },
    { "@type": "Question", name: "Do we get one room or two separate rooms?", acceptedAnswer: { "@type": "Answer", text: "One private room for both of you, with two therapists working at the same time — a genuinely shared experience, not two separate sessions." } },
    { "@type": "Question", name: "Can each of us choose a different massage style?", acceptedAnswer: { "@type": "Answer", text: "Yes, you don't need to match — one partner can choose Swedish while the other goes for deep tissue, based on what each of you actually needs." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for couple massage in Saket?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are available for couple sessions alongside our experienced Indian staff, from ₹2,800 per therapist depending on the package." } },
    { "@type": "Question", name: "Can we book a night couple massage appointment in Saket?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer home couple massage near Saket?", acceptedAnswer: { "@type": "Answer", text: "Yes, alongside our outlet, we send two therapists to your home anywhere in and around Saket for the same private couple experience." } },
    { "@type": "Question", name: "How much does a couple massage cost in Saket?", acceptedAnswer: { "@type": "Answer", text: "A couple massage at our Saket outlet starts from ₹3999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." } },
    { "@type": "Question", name: "How long does a couple massage session last?", acceptedAnswer: { "@type": "Answer", text: "Our standard couple massage session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options for a longer, more indulgent experience." } },
    { "@type": "Question", name: "Is couple massage a good gift for an anniversary or birthday?", acceptedAnswer: { "@type": "Answer", text: "Yes — couple massage is one of our most-booked anniversary and birthday experiences, especially paired with an aromatherapy add-on and a dinner or movie at Select Citywalk." } },
    { "@type": "Question", name: "Do both partners have to choose the same massage type?", acceptedAnswer: { "@type": "Answer", text: "No, each partner can pick a different technique — Swedish, deep tissue, or aromatherapy — since you're each assigned a dedicated therapist." } },
    { "@type": "Question", name: "Is couple massage only for married couples?", acceptedAnswer: { "@type": "Answer", text: "No, couple massage is open to any two adults booking together — partners, friends, or family members are all welcome." } },
    { "@type": "Question", name: "Do you need advance booking for a couple massage in Saket?", acceptedAnswer: { "@type": "Answer", text: "Weekday slots are often available same-day, but weekends fill up faster, so we recommend booking a few hours ahead over WhatsApp or Telegram." } },
  ],
};

export const metadata = {
  title: "Couple Massage in Saket - Near Select Citywalk | Luxury Russian Spa",
  description:
    "Couple massage in Saket near Select Citywalk Mall for a private, relaxing session together. Certified therapists, hygienic setting. Book from ₹3999 today!",
  keywords: [
    "couple massage in saket",
    "couple spa near select citywalk",
    "romantic couple massage saket",
    "couple massage price in saket",
    "best couple spa in saket",
    "couple massage near saket metro",
    "russian spa couple massage saket",
    "night couple massage saket",
  ],
  openGraph: {
    title: "Couple Massage in Saket - Near Select Citywalk | Luxury Russian Spa",
    description:
      "Couple massage in Saket near Select Citywalk Mall for a private, relaxing session together. Certified therapists, hygienic setting. Book from ₹3999 today!",
    images: ["https://www.luxuryrussianspa.com/images/couple-bathrobes-posing-embraced.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/couple-massage-in-saket",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/couple-massage-in-saket",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/couple-bathrobes-posing-embraced.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Couple Massage in Saket", item: "https://www.luxuryrussianspa.com/couple-massage-in-saket" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Couple Massage",
  name: "Couple Massage in Saket",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Saket",
  description:
    "Couple massage in Saket near Select Citywalk Mall for a private, relaxing session together, with certified therapists in a hygienic setting.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-couple-massage-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-couple-massage-in-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-couple-massage-in-saket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CoupleMassageSaketPage />
    </>
  );
}
