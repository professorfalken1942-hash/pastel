import { absoluteUrl, contactEmail, defaultOgImage, siteName, siteUrl } from "@/lib/seo";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    "@id": `${siteUrl}/#business`,
    name: siteName,
    image: absoluteUrl(defaultOgImage),
    logo: absoluteUrl("/pastel-logo.png"),
    description: "Luxury wedding makeup artist and stylist based in Syracuse, NY. Offering bridal makeup, editorial, TV/film makeup, wardrobe styling, and special event beauty services.",
    email: contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Syracuse",
      addressRegion: "NY",
      addressCountry: "US",
    },
    url: siteUrl,
    priceRange: "$$$",
    areaServed: [
      {
        "@type": "City",
        name: "Syracuse",
      },
      {
        "@type": "State",
        name: "New York",
      },
      {
        "@type": "Place",
        name: "Available for travel nationwide",
      },
    ],
    serviceType: [
      "Wedding Makeup",
      "Bridal Makeup",
      "Editorial Makeup",
      "TV/Film Makeup",
      "Wardrobe Styling",
      "Special Event Makeup",
    ],
    sameAs: ["https://instagram.com/pastelmakeupandstyle"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Bookings",
      email: contactEmail,
      url: absoluteUrl("/book"),
    },
    makesOffer: [
      "Wedding makeup",
      "Bridal hair and makeup",
      "Editorial makeup",
      "TV and film makeup",
      "Wardrobe styling",
      "Special event makeup",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        areaServed: "Syracuse, NY",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
