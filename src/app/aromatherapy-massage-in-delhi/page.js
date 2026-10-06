import AromatherapyMassagePage from "./AromatherapyMassagePage";
// src/app/aromatherapy-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is aromatherapy massage and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aromatherapy massage combines gentle Swedish-style massage strokes with pure essential oils like lavender, eucalyptus, or rosemary. The oils are absorbed through the skin and inhaled during the session, working alongside the massage technique to relax both your body and your mind.",
      },
    },
    {
      "@type": "Question",
      name: "Which essential oils do you use for aromatherapy massage in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a range of essential oils including lavender for relaxation, eucalyptus and peppermint for a refreshing effect, and chamomile for calming, sensitive skin. Your therapist can recommend the right blend based on how you want to feel after your session.",
      },
    },
    {
      "@type": "Question",
      name: "Is aromatherapy massage safe for people with allergies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We always ask about allergies and skin sensitivities before your session. If you have a known reaction to certain oils or fragrances, let your therapist know and we will adjust the blend or skip aromatherapy oils altogether while still giving you a relaxing massage.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between aromatherapy massage and Swedish massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aromatherapy massage uses the same gentle, flowing strokes as a Swedish massage, but adds therapeutic essential oils for extra relaxation, mood benefits, and a more sensory experience.",
      },
    },
    {
      "@type": "Question",
      name: "What does an aromatherapy massage cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our aromatherapy massage in Delhi starts at ₹1999 for a first-visit outlet session, with home spa and hotel spa packages available from ₹14,999 depending on duration and setting.",
      },
    },
    {
      "@type": "Question",
      name: "Can aromatherapy massage help with stress and anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many guests choose aromatherapy massage specifically for stress relief. The combination of calming touch and essential oils like lavender and chamomile is widely used to help reduce anxiety and support a more peaceful state of mind.",
      },
    },
    {
      "@type": "Question",
      name: "Does aromatherapy massage help with sleep problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aromatherapy massage is a popular choice for people struggling with sleep. Lavender and chamomile oils are known for their calming properties, and combined with a relaxing full body massage, many guests find it easier to unwind and fall asleep afterward.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an aromatherapy massage session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full body aromatherapy massage in Delhi typically lasts 60 to 90 minutes, giving enough time for the oils to be properly massaged in while your therapist works through your entire body.",
      },
    },
  ],
};

export const metadata = {
  title: "Aromatherapy Massage in Delhi - Stress Relief | Luxury Russian Spa",
  description:
    "Aromatherapy massage in Delhi with calming essential oils for stress relief & better sleep. Certified therapists, hygienic setting. Book from ₹1999!",
  keywords: [
    "aromatherapy massage in delhi",
    "aromatherapy massage near me",
    "essential oil massage delhi",
    "aromatherapy massage benefits",
    "aromatherapy massage price in delhi",
    "best aromatherapy spa in delhi",
    "aromatherapy for stress relief",
    "full body aromatherapy massage delhi",
    "lavender oil massage delhi",
  ],
  openGraph: {
    title: "Aromatherapy Massage in Delhi - Stress Relief | Luxury Russian Spa",
    description:
      "Aromatherapy massage in Delhi with calming essential oils for stress relief & better sleep. Certified therapists, hygienic setting. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/aromatherapy-featured-jpg.webp"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-delhi",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/aromatherapy-featured-jpg.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Aromatherapy Massage in Delhi", item: "https://www.luxuryrussianspa.com/aromatherapy-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Aromatherapy Massage",
  name: "Aromatherapy Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Aromatherapy massage in Delhi with calming essential oils for stress relief and better sleep, delivered by certified therapists in a hygienic setting.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-aromatherapy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-aromatherapy-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-aromatherapy-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AromatherapyMassagePage />
    </>
  );
}
