import Serpage from "./Serpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Massage Service in Delhi", item: "https://www.luxuryrussianspa.com/massage-service-in-delhi" },
  ],
};

export const metadata = {
  title: "Massage Service in Delhi - By Top Certified Therapists | Luxury Russian Spa",
  description: "Massage service in Delhi at the best spa centre with top certified therapists. Relaxing sessions across Delhi & NCR areas. Check availability and book now!",
  keywords: ["massage service in delhi", "spa and massage service delhi", "top massage therapists delhi", "massage centre in delhi"],
  openGraph: {
    title: "Best Spa & Massage Service in Delhi By Top Therapists",
    description: "Experience top-notch massage service in Delhi at the best spa centre in Delhi. Our top therapists are ready to give you relaxation in Delhi or NCR Areas. Check Out",
    images: ["https://www.luxuryrussianspa.com/images/banner1.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/massage-service-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/banner1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-massage-service-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Serpage />
    </>
  );
}
