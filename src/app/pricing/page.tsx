import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { servicesQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Pricing | Pastel Makeup and Style",
  description: "Transparent pricing for wedding, editorial, event, and production beauty services by Pastel Makeup and Style.",
};

export const revalidate = 60;

const CATEGORIES = ["Weddings", "Fashion & Editorial", "TV & Film", "Special Events"];

export default async function PricingPage() {
  const services = await client.fetch(servicesQuery).catch(() => []);

  // Group by category
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    items: services.filter((s: any) => s.category === cat),
  })).filter((g) => g.items.length > 0);

  // Fallback placeholder if Sanity is empty
  const tiers = grouped.length > 0 ? grouped : [
    {
      category: "Wedding Day Beauty",
      items: [
        { service: "Makeup", price: "$250.00" },
        { service: "Hair", price: "$250.00" },
      ],
    },
    {
      category: "Grooms, Grammies + Girls",
      description: "A freshen up application.",
      items: [
        { service: "Makeup", price: "$60.00" },
        { service: "Hair", price: "$60.00" },
      ],
    },
    {
      category: "Maids + Moms",
      description: "There is a $50.00 upgrade for luxury looks.",
      items: [
        { service: "Makeup", price: "$150.00" },
        { service: "Hair", price: "$150.00" },
      ],
    },
    {
      category: "In-Studio Trial",
      description: "For beauty preview only.",
      items: [
        { service: "Makeup (one look)", price: "$175.00" },
        { service: "Hair (one look)", price: "$175.00" },
      ],
    },
    {
      category: "Add-Ons & Services",
      items: [
        { service: "Booking Fee (non-refundable)", price: "$150.00" },
        { service: "Lodging Fee (4+ hr RT required)", price: "$250.00+" },
        { service: "Tattoo/Body Coverage", price: "$25.00+" },
        { service: "Clip-In Extensions", price: "$50.00" },
        { service: "On-Location Touch-Ups (per hour, 1 hr min)", price: "$100.00/hr" },
        { service: "Early Start Fee (before 8AM without lodging)", price: "$150.00" },
        { service: "Travel Fee", price: "$200.00/service" },
        { service: "Additional Artist (6+ people)", price: "$150.00" },
        { service: "Holiday Booking Fee", price: "$150.00" },
        { service: "Day-Of Coordination", price: "$2,800.00+" },
      ],
    },
    {
      category: "Special Packages",
      items: [
        { service: "Elopement Package", price: "Custom quote" },
      ],
    },
  ];

  return (
    <>
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

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "6rem 3rem" }}>
        {tiers.map((tier: any, i: number) => (
          <div key={tier.category} style={{ marginBottom: i < tiers.length - 1 ? "5rem" : 0 }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--mink)",
              marginBottom: tier.description ? "0.5rem" : "2rem",
            }}>
              {tier.category}
            </p>
            {tier.description && (
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 300,
                color: "var(--mink)",
                marginBottom: "1.5rem",
              }}>
                {tier.description}
              </p>
            )}
            {tier.items.map((item: any, j: number) => (
              <div key={item.title || item.service} style={{
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
                  {item.title || item.service}
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

        <div style={{
          marginTop: "5rem",
          padding: "2.5rem",
          backgroundColor: "var(--blush)",
          borderLeft: "3px solid var(--pink)",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--charcoal)",
          }}>
            <strong style={{ fontWeight: 500 }}>Travel:</strong> Travel fees may apply for locations outside Syracuse, NY.<br />
            <strong style={{ fontWeight: 500 }}>Deposits:</strong> A deposit is required to secure your date.<br />
            <strong style={{ fontWeight: 500 }}>Custom projects:</strong> TV, film, and large-scale productions are quoted individually.
          </p>
        </div>
      </div>

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
          color: "var(--charcoal)",
          backgroundColor: "var(--pink)",
          padding: "1rem 2.5rem",
          textDecoration: "none",
        }}>
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
