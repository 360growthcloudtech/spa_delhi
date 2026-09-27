import Gurpage from "./Gurpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Gurgaon", item: "https://www.luxuryrussianspa.com/spa-in-gurgaon" },
  ],
};

export const metadata = {
  title: "Spa in Gurgaon - Genuine Full Body Massage Service | Luxury Russian Spa",
  description: "Spa in Gurgaon offering genuine full body massage by top-rated certified therapists. Claim our first-visit offer for a relaxing session. Book your slot today!",
  keywords: ["spa in gurgaon", "massage in gurgaon", "full body massage gurgaon", "body spa gurgaon"],
  openGraph: {
    title: "Get Full Body Massage At Our Spa In Gurgaon",
    description: "We offer genuine full body massage at our best spa in gurgaon. Experience our top -notch spa service by our top rated spa massage therapists. Claim our First visit offer and enjoy your spa Session.",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-gurgaon",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-gurgaon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Gurpage />
    </>
  );
}
