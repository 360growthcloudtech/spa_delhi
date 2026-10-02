import B2BMassageConnaughtPlacePage from "./B2BMassageConnaughtPlacePage";
// src/app/b2b-massage-in-connaught-place/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first visit offer for B2B massage in Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Our B2B massage in Connaught Place starts at ₹2999 for a first-visit outlet session, close to Rajiv Chowk Metro." } },
    { "@type": "Question", name: "Is your B2B massage spa near Rajiv Chowk Metro Station?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Connaught Place outlet is a short walk from Rajiv Chowk Metro Station, the Blue and Yellow Line interchange." } },
    { "@type": "Question", name: "Is B2B massage legal in India?", acceptedAnswer: { "@type": "Answer", text: "B2B massage is a legal wellness treatment in India when offered by a professional, licensed spa following proper hygiene and conduct standards." } },
    { "@type": "Question", name: "What is B2B massage and how is it different from a regular massage?", acceptedAnswer: { "@type": "Answer", text: "B2B massage is a specialised full body therapy performed with premium oils and smooth, controlled movements, designed for deeper relaxation than a standard massage." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for B2B massage in Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are available for B2B sessions alongside our experienced Indian staff, from ₹2,800 depending on the package." } },
    { "@type": "Question", name: "Can I book a night B2B massage appointment in Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
    { "@type": "Question", name: "Do you offer B2B massage at hotels near Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly serve guests staying at hotels around C.P. — just share your hotel and room details when booking." } },
    { "@type": "Question", name: "How much does a B2B massage cost in Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "A B2B massage at our Connaught Place outlet starts from ₹2999 for the first visit. Home and hotel packages start from ₹18,000 depending on duration." } },
    { "@type": "Question", name: "How long does a B2B massage session last?", acceptedAnswer: { "@type": "Answer", text: "Our standard B2B massage session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options available for a longer, more thorough session." } },
    { "@type": "Question", name: "What is the difference between B2B massage and a full body massage?", acceptedAnswer: { "@type": "Answer", text: "B2B massage is a signature full body technique focused on deep relaxation, while a full body massage is a broader head-to-toe session using hands-only technique. Both are available at our Connaught Place outlet." } },
    { "@type": "Question", name: "What oils are used during a B2B massage session?", acceptedAnswer: { "@type": "Answer", text: "We use premium, aromatherapy-grade massage oils selected for skin comfort and smooth, controlled movement throughout the session — your therapist can adjust based on any preference or sensitivity." } },
    { "@type": "Question", name: "Is B2B massage available for corporate or business travellers near Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Yes — a large share of our C.P. bookings are corporate professionals and business travellers looking for genuine stress relief between meetings, which is why we keep flexible daytime and evening slots available." } },
    { "@type": "Question", name: "Do I need to book in advance for a B2B massage in Connaught Place?", acceptedAnswer: { "@type": "Answer", text: "Same-day appointments are usually possible, but we recommend booking a couple of hours ahead over WhatsApp or Telegram, especially for evening and night slots, to guarantee your preferred time." } },
  ],
};

export const metadata = {
  title: "B2B Massage in Connaught Place - Near Rajiv Chowk | Luxury Russian Spa",
  description:
    "B2B massage in Connaught Place near Rajiv Chowk Metro for genuine B2B therapy. Certified therapists, private hygienic rooms. Book from ₹2999 today!",
  keywords: [
    "b2b massage in connaught place",
    "B2B massage near rajiv chowk",
    "b2b massage price in cp",
    "best b2b massage spa connaught place",
    "b2b massage near connaught place metro",
    "russian b2b massage connaught place",
    "night b2b massage connaught place",
    "b2b massage hotels near connaught place",
  ],
  openGraph: {
    title: "B2B Massage in Connaught Place - Near Rajiv Chowk | Luxury Russian Spa",
    description:
      "B2B massage in Connaught Place near Rajiv Chowk Metro for genuine B2B therapy. Certified therapists, private hygienic rooms. Book from ₹2999 today!",
    images: ["https://www.luxuryrussianspa.com/images/b2b_therapy.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/b2b-massage-in-connaught-place",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/b2b-massage-in-connaught-place",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/b2b_therapy.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "B2B Massage in Connaught Place", item: "https://www.luxuryrussianspa.com/b2b-massage-in-connaught-place" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "B2B Massage",
  name: "B2B Massage in Connaught Place",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Connaught Place",
  description:
    "B2B massage in Connaught Place near Rajiv Chowk Metro for genuine B2B therapy, with certified therapists and private hygienic rooms.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-b2b-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-b2b-massage-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-b2b-massage-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <B2BMassageConnaughtPlacePage />
    </>
  );
}
