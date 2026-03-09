import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book | Pastel Makeup and Style",
  description: "Book a consultation or check availability with Pastel Makeup and Style.",
};

export default function BookPage() {
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
          Availability
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}>
          Book a Consultation
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.82rem",
          fontWeight: 300,
          lineHeight: 1.9,
          color: "var(--mink)",
          maxWidth: "480px",
          margin: "0 auto",
        }}>
          Dates fill quickly, especially during wedding season. Reserve yours early.
        </p>
      </section>

      {/* HoneyBook embed placeholder */}
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "8rem 3rem",
        textAlign: "center",
      }}>
        {/* TODO: Replace this section with HoneyBook embed code */}
        <div style={{
          padding: "6rem 3rem",
          border: "1px dashed var(--blush)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--mink)",
          }}>
            Booking Widget
          </p>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.6rem",
            fontWeight: 300,
            color: "var(--charcoal)",
          }}>
            HoneyBook booking form coming soon
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "var(--mink)",
            maxWidth: "400px",
            lineHeight: 1.8,
          }}>
            In the meantime, use the contact form to reach Julianna directly and reserve your date.
          </p>
          <Link href="/contact" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--white)",
            backgroundColor: "var(--charcoal)",
            padding: "1rem 2.5rem",
            textDecoration: "none",
          }}>
            Contact Julianna
          </Link>
        </div>
      </section>
    </>
  );
}
