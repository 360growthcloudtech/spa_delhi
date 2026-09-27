import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
  ],
};

export const metadata = {
  title: "5-Star Hotel Spa Outlets in Delhi - Rohini & Pitampura | Luxury Russian Spa",
  description: "Spa outlets in Delhi including Rohini & Pitampura at luxury 5-star hotels. Relaxing body massages by certified therapists. Find your nearest outlet - book now!",
  keywords: ["spa outlets in delhi", "hotel spa outlets delhi", "spa locations delhi", "spa branches delhi"],
  openGraph: {
    title: "Book 5 star Hotel Spa Outlets in Delhi | Spa in Rohini For complete relaxation",
    description: "Our luxury spa outlets in Delhi, including the best Spa in Rohini and Hotel Spa in Pitampura, offering relaxing body massages & complete service. Book Now",
    images: ["https://www.luxuryrussianspa.com/images/5StarHotelSpa.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/outlets",
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
        id="breadcrumb-schema-outlets"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Outpage />
    </>
  );
}
