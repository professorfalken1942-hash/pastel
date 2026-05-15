export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pastelmakeupandstyle.com",
    name: "Pastel Makeup and Style",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMSzDJ_8PLDhFF32s98AefhuqK1a6YSw1X9rfvxo7jBjzU4MF5598Up_-FX4aLkJkCmVTZwSOw7CAaTSiGFF7jdcz9RW7oKJ3_DPH7CNS-UlnUS2Bw=w1400-h1000",
    description: "Luxury wedding makeup artist and stylist based in Syracuse, NY. Offering bridal makeup, editorial, TV/film makeup, and wardrobe styling services.",
    telephone: "+1-315-XXX-XXXX", // Add actual phone
    email: "julianna6380@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Syracuse",
      addressLocality: "Syracuse",
      addressRegion: "NY",
      postalCode: "13202", // General ZIP for Syracuse
      addressCountry: "US",
    },
    url: "https://pastelmakeupandstyle.com",
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
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "julianna6380@gmail.com",
      url: "https://pastelmakeupandstyle.com/contact",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
