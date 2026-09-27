import B2Bpage from "./B2Bpage";
// src/app/b2b-massage-in-delhi/page.js
// <-- NO "use client" here -->

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is there a B2B massage spa in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, Luxury Russian Spa operates 24+ B2B massage spa locations across Delhi and Delhi NCR, including Karol Bagh, Connaught Place, Dwarka, and Saket, alongside home and five-star hotel spa options." } },
    { "@type": "Question", name: "What happens in a body-to-body massage?", acceptedAnswer: { "@type": "Answer", text: "After a short consultation about your preferences, your therapist applies premium oils and uses a full-contact, body-to-body technique with smooth, controlled movements — performed in a private, closed room from start to finish." } },
    { "@type": "Question", name: "Are body-to-body massages legal in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, body-to-body massage is a legal wellness treatment in India when offered by a professional, licensed spa following proper hygiene and conduct standards." } },
    { "@type": "Question", name: "What does a body-to-body massage include?", acceptedAnswer: { "@type": "Answer", text: "A standard session includes a consultation, full-contact massage using premium aromatherapy-grade oils, and a private room for the full duration — with optional add-ons like aromatherapy or a facial depending on your package." } },
    { "@type": "Question", name: "How much does a body to body massage cost in Delhi?", acceptedAnswer: { "@type": "Answer", text: "A body to body massage at our Delhi outlets starts from ₹1999 for the first visit. Home spa starts from ₹15,000 and five-star hotel spa from ₹20,000, depending on duration and location." } },
    { "@type": "Question", name: "Do you provide body to body massage at hotels in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly serve guests at five-star hotels across Delhi, including Andaz, The Park, The Suryaa, and JW Marriott — just share your hotel and room details when booking." } },
    { "@type": "Question", name: "Do you have Russian or other foreign therapists for body to body massage?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Russian, Thai, and Uzbek therapists are available for B2B sessions alongside our experienced Indian staff, depending on the package you choose." } },
    { "@type": "Question", name: "Do you offer female to male body to body massage in Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes, female to male body to body massage in Delhi is available at all our outlets, along with male and female therapist options — just mention your preference when booking." } },
  ],
};

export const metadata = {
  title: "Best Body to Body Massage in Delhi - 24+ Outlets | Luxury Russian Spa",
  description:
    "Best body to body massage in Delhi at 24+ outlets across Delhi NCR. Certified therapists, private rooms, hotel & home spa available. Book from ₹1999 today!",
  keywords: [
    "body to body massage in delhi",
    "best body to body massage in delhi",
    "b2b massage in delhi",
    "female to male body to body massage in delhi",
    "full body to body massage in delhi",
    "body to body massage at home in delhi",
    "body to body massage in delhi connaught place",
    "body to body massage in delhi ncr",
    "body to body massage near airport delhi",
    "body to body massage in dwarka delhi",
    "body to body massage spa in delhi",
    "body to body massage in saket delhi",
    "body to body massage in south delhi",
    "body to body massage in new delhi",
    "body to body massage price in delhi",
  ],
  openGraph: {
    title: "Best Body to Body Massage in Delhi - 24+ Outlets | Luxury Russian Spa",
    description:
      "Best body to body massage in Delhi at 24+ outlets across Delhi NCR. Certified therapists, private rooms, hotel & home spa available. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/b2b-massage.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/b2b-massage-in-delhi",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/b2b-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/b2b-massage.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "B2B Massage in Delhi", item: "https://www.luxuryrussianspa.com/b2b-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "B2B Massage",
  name: "B2B Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-9217255113",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Body to body massage in Delhi at 24+ outlets across Delhi NCR, with certified therapists, private rooms, and hotel and home spa options.",
};

export default function page() {
  return (
    <>
      <script
        id="faq-schema-b2b-massage-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-b2b-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-b2b-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <B2Bpage />
    </>
  );
}
