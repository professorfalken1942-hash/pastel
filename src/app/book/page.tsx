import type { Metadata } from "next";


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

      {/* HoneyBook embed */}
      <section style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "5rem 3rem 10rem",
      }}>
        <iframe
          src="https://1757625758.hbportal.co/public/68c33e10dc84ad00010b83ad"
          width="100%"
          height="900"
          frameBorder="0"
          style={{
            border: "none",
            display: "block",
          }}
          title="Book with Julianna — Pastel Makeup and Style"
          allowFullScreen
        />
      </section>
    </>
  );
}
