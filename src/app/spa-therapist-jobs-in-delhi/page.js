import Hotstone from "./Hotstone";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa Therapist Jobs in Delhi", item: "https://www.luxuryrussianspa.com/spa-therapist-jobs-in-delhi" },
  ],
};

export const metadata = {
  title: "Spa Therapist Jobs in Delhi - Part & Full Time | Luxury Russian Spa",
  description: "Spa therapist jobs in Delhi, Noida & Gurgaon with part-time and full-time openings. Join a trusted, growing wellness brand. Contact us to apply today!",
  keywords: ["spa therapist jobs in delhi", "massage therapist jobs delhi", "spa jobs delhi", "part time spa jobs delhi"],
  openGraph: {
    title: "Looking for Spa Therapist jobs in Delhi? Part Time & Full Time",
    description: "Get the best Spa Therapist jobs in Delhi. We have part time and full time spa jobs available. Just contact us and get your spa therapist jobs in Delhi, Noida and Gurgaon. Contact Now",
    images: ["https://www.luxuryrussianspa.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-therapist-jobs-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/5StarHotelSpa.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-therapist-jobs-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hotstone />
    </>
  );
}
