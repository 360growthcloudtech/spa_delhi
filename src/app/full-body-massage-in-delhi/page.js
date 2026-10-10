import Fullbodypage, { faqs } from "./Fullbodypage";

const PAGE_URL = "https://www.luxuryrussianspa.com/full-body-massage-in-delhi";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/full-body/hero-1024.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Full Body Massage in Delhi).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.luxuryrussianspa.com/massage-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Full Body Massage in Delhi", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  serviceType: "Full Body Massage",
  name: "Full Body Massage in Delhi",
  url: PAGE_URL,
  image: IMAGE_URL,
  description:
    "Full body massage in Delhi at 24+ outlets across Delhi NCR, with home and hotel visits. Russian, Thai and Indian therapists. From ₹1999.",
  provider: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
  ],
  offers: [
    { "@type": "Offer", name: "Full body massage at outlet, 60 min", price: "1999", priceCurrency: "INR" },
    { "@type": "Offer", name: "Full body massage at home or hotel, 90 min", price: "14999", priceCurrency: "INR" },
    { "@type": "Offer", name: "5 star hotel spa, 120 min", price: "19999", priceCurrency: "INR" },
  ],
};

export const metadata = {
  title: "Full Body Massage in Delhi - Price From ₹1999 | Luxury Russian Spa",
  description:
    "Full body massage in Delhi at 24+ outlets or at your home. Saket, Rohini, Lajpat Nagar, Mahipalpur, Laxmi Nagar & more. See prices and book on WhatsApp.",
  keywords: [
    "full body massage in delhi",
    "body massage in delhi",
    "full body massage in delhi price",
    "full body massage price in delhi",
    "best full body massage in delhi",
    "full body massage at home delhi",
    "full body massage at home in delhi price",
    "full body massage home service delhi",
    "full body massage service in delhi",
    "full body massage spa in delhi",
    "delhi full body massage centre",
    "full body spa delhi",
    "full body spa price in delhi",
    "full massage in delhi",
    "full body massage in new delhi",
    "full body massage in delhi ncr",
    "full body massage in delhi contact no",
    "full body massage in south delhi",
    "full body massage in west delhi",
    "full body massage in north delhi",
    "full body massage east delhi",
    "russian body spa mahipalpur",
    "full body massage in mahipalpur",
    "body massage centre in mahipalpur",
    "full body massage near delhi airport",
    "full body massage in saket",
    "body massage in saket delhi",
    "full body massage in malviya nagar",
    "full body massage in hauz khas",
    "body massage spa in hauz khas",
    "full body massage in green park",
    "full body massage in lajpat nagar",
    "body massage in lajpat nagar",
    "full body massage in kalkaji",
    "full body massage in south extension",
    "full body massage in vasant kunj",
    "full body massage in munirka",
    "full body massage in safdarjung enclave",
    "full body massage in jasola",
    "full body massage in sarita vihar",
    "full body massage near badarpur border",
    "full body massage in govindpuri",
    "body massage in kailash colony",
    "full body massage in rohini",
    "full body massage in pitampura",
    "full body massage in netaji subhash place delhi",
    "full body massage in shalimar bagh",
    "body massage in gtb nagar",
    "full body massage in janakpuri",
    "full body massage in rajouri garden",
    "full body massage in tilak nagar",
    "full body massage in uttam nagar",
    "full body massage dwarka",
    "full body massage in paschim vihar",
    "full body massage punjabi bagh",
    "full body massage in patel nagar",
    "full body massage in palam new delhi",
    "full body massage in laxmi nagar",
    "full body massage in preet vihar delhi",
    "full body massage in mayur vihar phase 1",
    "full body massage spa in anand vihar",
    "full body massage in shahdara delhi",
    "full body massage in dilshad garden",
    "full body massage in karol bagh",
    "full body massage in paharganj",
    "full body massage in delhi chandni chowk",
    "full body massage near new delhi railway station",
    "full body massage near nizamuddin railway station",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Full Body Massage in Delhi | 24+ Outlets & Home Service From ₹1999",
    description:
      "Head to toe, in a private room or at your home. Russian, Thai and Indian therapists across Delhi NCR. Price confirmed on WhatsApp before you book.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1024, height: 683, alt: "Full body massage in Delhi at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Body Massage in Delhi | 24+ Outlets & Home Service From ₹1999",
    description:
      "Head to toe, in a private room or at your home. Russian, Thai and Indian therapists across Delhi NCR. Price confirmed on WhatsApp before you book.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-full-body-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-full-body-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="faq-schema-full-body-massage-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Fullbodypage />
    </>
  );
}
