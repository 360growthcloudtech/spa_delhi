import Conpage from "./Conpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.luxuryrussianspa.com/contact" },
  ],
};

export const metadata = {
  title: "Contact Luxury Russian Spa - Book Luxury Body & Thai Massage | Luxury Russian Spa",
  description: "Contact Luxury Russian Spa for luxury body & Thai massage across Delhi NCR. Certified therapists, hygienic private rooms, quick response. Call or book your session today!",
  keywords: ["contact luxury russian spa", "book luxury russian spa", "luxury russian spa phone number", "luxury russian spa booking"],
  openGraph: {
    title: "Contact Us | Best Luxury Spa in Delhi for Body & Thai Massage",
    description: "Get in touch with Luxury Russian Spa for soothing body massages, Thai therapy, and relaxation treatments. Call or visit us today for your spa session.",
    images: ["https://www.luxuryrussianspa.com/images/contectusbanner.jpg"],
    type: "website",
  },
   alternates: {
    canonical: "https://www.luxuryrussianspa.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/contectusbanner.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function contact() {
  return (
    <>
      <script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Conpage />
    </>
  );
}
