import Sandpage from "./Sandpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Sandwich Massage in Delhi", item: "https://www.luxuryrussianspa.com/sandwich-massage-in-delhi" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sandwich Massage",
  name: "Sandwich Massage in Delhi",
  provider: {
    "@type": "LocalBusiness",
    name: "Luxury Russian Spa",
    telephone: "+91-8799716197",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: "Delhi",
  description:
    "Sandwich massage in Delhi at our Karol Bagh spa for the perfect two-therapist session, with certified professionals in a hygienic setting.",
};

export const metadata = {
  title: "Sandwich Massage in Delhi - Starting Just From ₹1999 | Luxury Russian Spa",
  description: "Sandwich massage in Delhi at our Karol Bagh spa for the perfect two-therapist session. Certified professionals, hygienic setting. Book your session today!",
  keywords: ["sandwich massage in delhi", "sandwich massage price delhi", "sandwich massage karol bagh", "sandwich massage spa delhi"],
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://www.luxuryrussianspa.com/images/Sandwich%20Massage.webp"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/sandwich-massage-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Sandwich%20Massage.webp"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-sandwich-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-schema-sandwich-massage-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Sandpage />
    </>
  );
}
