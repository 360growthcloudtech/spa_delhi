import Noipage from "./Noipage";
// src/app/spa-in-noida/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you have a massage spa in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, we operate a genuine massage spa in Noida with certified therapists, private rooms, and multiple treatment options including full body, B2B, and aromatherapy massage." } },
    { "@type": "Question", name: "Is there a spa in Greater Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, our spa in Greater Noida serves hotels like Crowne Plaza and Jaypee Greens, along with home spa bookings across the area." } },
    { "@type": "Question", name: "Do you offer spa services in Noida Sector 18?", acceptedAnswer: { "@type": "Answer", text: "Yes, our spa in Noida Sector 18 is available by female and male therapists, offering top-notch massage service in a private, hygienic room." } },
    { "@type": "Question", name: "What is included in a body spa in Noida?", acceptedAnswer: { "@type": "Answer", text: "A body spa in Noida session includes a consultation, full body massage using premium oils, and a private room for the full duration — with optional add-ons like aromatherapy." } },
    { "@type": "Question", name: "How much does a massage spa in Noida cost?", acceptedAnswer: { "@type": "Answer", text: "Sessions at our spa centre in Noida start from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration." } },
    { "@type": "Question", name: "Do you provide home spa service in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer home spa in Noida at affordable prices with certified, well-trained therapists visiting your address." } },
    { "@type": "Question", name: "Which hotels in Noida offer your spa service?", acceptedAnswer: { "@type": "Answer", text: "We're available at Radisson Blu, Sandal Suites by Lemon Tree, Crowne Plaza Greater Noida, and Jaypee Greens Golf & Spa Resort, among others." } },
    { "@type": "Question", name: "Can I pay online for spa services in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer secure online payment options — UPI, card, or cash — for your convenience." } },
    { "@type": "Question", name: "How long does a session at your spa centre in Noida last?", acceptedAnswer: { "@type": "Answer", text: "Our standard session runs 60 minutes at the outlet, with 90-minute home spa and 120-minute hotel spa options for a longer, more thorough experience." } },
    { "@type": "Question", name: "Can I book a night appointment at your massage spa in Noida?", acceptedAnswer: { "@type": "Answer", text: "Yes, evening and night appointments can be booked in advance through our 24/7 WhatsApp and Telegram help desk." } },
  ],
};

export const metadata = {
  title: "Massage Spa in Noida - Luxury Spa Centre | Luxury Russian Spa",
  description:
    "Best massage spa in Noida covering Sector 18 & Greater Noida. Certified therapists, private rooms, hotel & home spa available. Book your session from ₹1999!",
  keywords: [
    "spa in noida",
    "massage spa in noida",
    "luxury massage spa",
    "spa centre in noida",
    "massage centre in noida",
    "spa in greater noida",
    "spa in noida sector 18",
    "spa in noida sector 50",
    "spa in noida sector 52",
    "spa in noida sector 62",
    "spa in noida sector 63",
    "spa in noida sector 104",
    "body spa in noida",
    "best spa in noida",
    "home spa in noida",
    "hotel spa in noida",
  ],
  openGraph: {
    title: "Massage Spa in Noida - Luxury Spa Centre | Luxury Russian Spa",
    description:
      "Best massage spa in Noida covering Sector 18 & Greater Noida. Certified therapists, private rooms, hotel & home spa available. Book your session from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982527_side-view-woman-getting-massaged-spa_23-2149871279.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-noida",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-noida",
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
    { "@type": "ListItem", position: 2, name: "Spa in Noida", item: "https://www.luxuryrussianspa.com/spa-in-noida" },
  ],
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-spa-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-spa-in-noida"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Noipage />
    </>
  );
}
