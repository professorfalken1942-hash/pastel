import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Pastel Makeup and Style",
  description: "Transparent pricing for bridal, editorial, event, and production beauty services by Pastel Makeup and Style.",
};

const tiers = [
  {
    category: "Weddings",
    items: [
      { service: "Bridal Makeup (incl. trial)", price: "From $XXX" },
      { service: "Trial Session only", price: "From $XXX" },
      { service: "Bridesmaid / Bridal Party (per person)", price: "From $XXX" },
      { service: "Flower Girl", price: "From $XXX" },
    ],
  },
  {
    category: "Fashion & Editorial",
    items: [
      { service: "Half Day (up to 4 hrs)", price: "From $XXX" },
      { service: "Full Day (up to 8 hrs)", price: "From $XXX" },
      { service: "Wardrobe / Set Styling (half day)", price: "From $XXX" },
      { service: "Wardrobe / Set Styling (full day)", price: "From $XXX" },
    ],
  },
  {
    category: "TV & Film",
    items: [
      { service: "Day Rate", price: "From $XXX" },
      { service: "Buyout / Project Rate", price: "Enquire" },
    ],
  },
  {
    category: "Special Events",
    items: [
      { service: "Individual Event Glam", price: "From $XXX" },
      { service: "Group Booking (3+ people)", price: "From $XXX pp" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "12rem",
        paddingBottom: "5rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        textAlign: "center",
        borderBottom: "1px solid var(--blush)",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--mink)",
          marginBottom: "1.5rem",
        }}>
          Investment
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}>
          Pricing
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.82rem",
          fontWeight: 300,
          lineHeight: 1.9,
          color: "var(--mink)",
          maxWidth: "520px",
          margin: "0 auto",
        }}>
          All pricing is listed as a starting guide. Final quotes are tailored to your specific needs — reach out for a custom proposal.
        </p>
      </section>

      {/* Pricing tables */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 3rem" }}>
        {tiers.map((tier, i) => (
          <div key={tier.category} style={{ marginBottom: i < tiers.length - 1 ? "5rem" : 0 }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--mink)",
              marginBottom: "2rem",
            }}>
              {tier.category}
            </p>
            {tier.items.map((item, j) => (
              <div key={item.service} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "1.2rem 0",
                borderTop: j === 0 ? "1px solid var(--charcoal)" : "1px solid var(--blush)",
                borderBottom: j === tier.items.length - 1 ? "1px solid var(--charcoal)" : undefined,
              }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                }}>
                  {item.service}
                </span>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "var(--mink)",
                  letterSpacing: "0.05em",
                }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        ))}

        {/* Notes */}
        <div style={{
          marginTop: "5rem",
          padding: "2.5rem",
          backgroundColor: "var(--blush)",
          borderLeft: "3px solid var(--dusty-rose)",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--charcoal)",
          }}>
            <strong style={{ fontWeight: 500 }}>Travel:</strong> Travel fees may apply for locations outside Syracuse, NY.
            <br />
            <strong style={{ fontWeight: 500 }}>Deposits:</strong> A deposit is required to secure your date. Details provided on booking.
            <br />
            <strong style={{ fontWeight: 500 }}>Custom projects:</strong> Rates for TV, film, and large-scale productions are quoted individually.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section style={{
        padding: "6rem 3rem",
        textAlign: "center",
        borderTop: "1px solid var(--blush)",
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          fontWeight: 300,
          marginBottom: "2rem",
        }}>
          Ready to reserve your date?
        </h2>
        <Link href="/book" style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--white)",
          backgroundColor: "var(--charcoal)",
          padding: "1rem 2.5rem",
          textDecoration: "none",
        }}>
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
