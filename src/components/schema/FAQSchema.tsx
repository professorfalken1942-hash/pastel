export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Pastel Makeup and Style offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pastel Makeup and Style offers wedding beauty, bridal makeup, editorial makeup, TV/film makeup, wardrobe and set styling, and special event makeup services.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Pastel Makeup and Style located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in Syracuse, New York and are available for travel nationwide for weddings and events.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For weddings, we recommend booking as early as possible. Contact us at least 2-3 months in advance to ensure availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can you travel for events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are available for travel nationwide for weddings, editorial shoots, and special events.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can use our online contact form at pastelmakeupandstyle.com/contact or book directly through our HoneyBook portal at pastelmakeupandstyle.com/book.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
