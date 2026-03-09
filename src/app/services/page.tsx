import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Pastel Makeup and Style",
  description: "Bridal beauty, fashion, editorial, TV & film, wardrobe styling, and special events — by Julianna Pastella in Syracuse, NY.",
};

const services = [
  {
    category: "Weddings",
    items: [
      {
        title: "Bridal Beauty",
        desc: "Your wedding day is unlike any other. Julianna works closely with each bride to create a look that feels entirely, authentically her — from timeless classics to modern couture. Full-day availability.",
        note: "Includes trial session",
      },
      {
        title: "Bridal Party",
        desc: "Cohesive, beautiful looks for your entire wedding party. Coordinated to complement the bride while honoring each individual's natural beauty.",
        note: "Pricing per person",
      },
      {
        title: "Trial Session",
        desc: "A dedicated session before your wedding day to test your look, refine every detail, and arrive on the morning of your wedding with total confidence.",
        note: "Recommended 4–6 weeks before",
      },
    ],
  },
  {
    category: "Fashion & Editorial",
    items: [
      {
        title: "Editorial Makeup",
        desc: "Striking, concept-driven looks for editorial shoots, lookbooks, and campaigns. Julianna brings a director's eye to every brief.",
        note: "Half & full day rates available",
      },
      {
        title: "Runway",
        desc: "Fast, precise, and show-ready. Runway looks executed to creative direction with the experience to handle high-volume show calls.",
        note: "Show call rates available",
      },
      {
        title: "Wardrobe & Set Styling",
        desc: "Complete wardrobe curation and set styling. From mood board to final pull, Julianna handles every visual detail.",
        note: "Available for photoshoots & productions",
      },
    ],
  },
  {
    category: "TV & Film",
    items: [
      {
        title: "On-Camera Makeup",
        desc: "Professional makeup for television, film, commercial, and digital productions. Camera-tested techniques that hold under studio lighting.",
        note: "Day rates & buyouts available",
      },
    ],
  },
  {
    category: "Special Events",
    items: [
      {
        title: "Event Beauty",
        desc: "Tailored beauty solutions for galas, corporate events, milestone birthdays, and any occasion that deserves to look exceptional.",
        note: "Single & group bookings",
      },
    ],
  },
];

export default function ServicesPage() {
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
          What We Offer
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}>
          Services
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.82rem",
          fontWeight: 300,
          lineHeight: 1.9,
          color: "var(--mink)",
          maxWidth: "560px",
          margin: "0 auto",
        }}>
          From intimate weddings to major productions, Pastel Makeup and Style brings creativity, precision, and a genuine love of beauty to every project.
        </p>
      </section>

      {/* Services */}
      {services.map((group) => (
        <section key={group.category} style={{
          padding: "6rem 3rem",
          borderBottom: "1px solid var(--blush)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--mink)",
            marginBottom: "3rem",
          }}>
            {group.category}
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}>
            {group.items.map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid var(--blush)", paddingTop: "2rem" }}>
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}>
                  {item.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--mink)",
                  marginBottom: "1rem",
                }}>
                  {item.desc}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--dusty-rose)",
                }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: "8rem 3rem",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          fontWeight: 300,
          marginBottom: "1.5rem",
        }}>
          Have something in mind?
        </h2>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          fontWeight: 300,
          color: "var(--mink)",
          marginBottom: "2.5rem",
        }}>
          Every project is different. Get in touch and we'll find the right fit.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
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
            Book Now
          </Link>
          <Link href="/pricing" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--charcoal)",
            border: "1px solid var(--charcoal)",
            padding: "1rem 2.5rem",
            textDecoration: "none",
          }}>
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
