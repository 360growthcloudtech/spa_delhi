"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJ9S9XMNXP"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJ9S9XMNXP');
          `}
        </Script>

      {/* LocalBusiness + DaySpa Schema (server-rendered so search engines see it without running JS) */}
      <script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "DaySpa"],
            name: "Luxury Russian Spa",
            url: "https://www.luxuryrussianspa.com/",
            logo: "https://www.luxuryrussianspa.com/images/luxuryrussianspa-logo.png",
            image: "https://www.luxuryrussianspa.com/images/luxurySpaRoom.jpg",
            telephone: "+91-8799716197",
            priceRange: "₹₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Indira Gandhi International Airport Assets 6, IGI Road, Near Lemon Tree Aerocity",
              addressLocality: "New Delhi",
              addressRegion: "DL",
              postalCode: "110037",
              addressCountry: "IN",
            },
            areaServed: [
              "Delhi",
              "Gurgaon",
              "Noida",
              "Aerocity",
              "Connaught Place",
              "Lajpat Nagar",
              "Saket",
              "Rajouri Garden",
              "Pitampura",
              "Greater Kailash",
              "Kalkaji",
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Luxury Russian Spa",
            url: "https://www.luxuryrussianspa.com/",
            logo: "https://www.luxuryrussianspa.com/images/luxuryrussianspa-logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8799716197",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          }),
        }}
      />
    </>
  );
}
