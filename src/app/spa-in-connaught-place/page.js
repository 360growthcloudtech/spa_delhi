import Conaughtpage from "./Conaughtpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Connaught Place", item: "https://www.luxuryrussianspa.com/spa-in-connaught-place" },
  ],
};

export const metadata = {
  title: "Spa in Connaught Place - Full Body Massage in C.P. | Luxury Russian Spa",
  description: "Spa in Connaught Place for full body, sandwich & B2B massage in Central Delhi. Best certified therapists offer comfort and relaxation. Book your session now!",
  keywords: ["spa in connaught place", "massage in connaught place", "body massage cp delhi", "spa in cp"],
  openGraph: {
    title: "Best Massage centre in connaught place | Get body massage in C.P",
    description: "Visit our Massage centre in connaught place to Experience full body massage, sandwich massage and B2B therapy etc. We have the best therapists to provide you comfort in C.P",
    images: ["https://www.luxuryrussianspa.com/images/JwMarriott_CP.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-connaught-place",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/JwMarriott_CP.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Conaughtpage />
    </>
  );
}
