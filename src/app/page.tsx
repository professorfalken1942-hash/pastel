import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "8rem 2rem 4rem",
        backgroundColor: "var(--cream)",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--mink)",
          marginBottom: "2rem",
        }}>
          Luxury Bridal Makeup
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "0.02em",
          color: "var(--charcoal)",
          maxWidth: "900px",
          marginBottom: "2.5rem",
        }}>
          Your most beautiful day,<br />
          <em>effortlessly</em> yours.
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          fontWeight: 300,
          letterSpacing: "0.08em",
          color: "var(--mink)",
          maxWidth: "480px",
          lineHeight: 1.8,
          marginBottom: "3rem",
        }}>
          Bridal makeup and beauty artistry for the modern bride. 
          Based in Syracuse, NY — available for travel.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
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
          <Link href="/services" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--charcoal)",
            border: "1px solid var(--charcoal)",
            padding: "1rem 2.5rem",
            textDecoration: "none",
          }}>
            View Services
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "var(--blush)", margin: "0 3rem" }} />

      {/* Services Preview */}
      <section style={{ padding: "8rem 3rem" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--mink)",
          marginBottom: "1rem",
          textAlign: "center",
        }}>
          Services
        </p>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 300,
          textAlign: "center",
          marginBottom: "5rem",
        }}>
          What we offer
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "3rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { title: "Bridal Makeup", desc: "Full-day artistry for the bride, from morning prep to last dance." },
            { title: "Bridal Party", desc: "Cohesive, beautiful looks for your entire party." },
            { title: "Trial Session", desc: "Test your wedding day look before the big day." },
            { title: "Editorial", desc: "Fashion and creative beauty for shoots and campaigns." },
          ].map((s) => (
            <div key={s.title} style={{ borderTop: "1px solid var(--blush)", paddingTop: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.4rem",
                fontWeight: 300,
                marginBottom: "1rem",
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--mink)",
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "8rem 3rem",
        textAlign: "center",
        backgroundColor: "var(--charcoal)",
        color: "var(--cream)",
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 300,
          marginBottom: "1.5rem",
          color: "var(--cream)",
        }}>
          Ready to begin?
        </h2>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          fontWeight: 300,
          letterSpacing: "0.08em",
          color: "var(--blush)",
          marginBottom: "3rem",
        }}>
          Limited bookings available. Reserve your date early.
        </p>
        <Link href="/book" style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--charcoal)",
          backgroundColor: "var(--cream)",
          padding: "1rem 2.5rem",
          textDecoration: "none",
        }}>
          Check Availability
        </Link>
      </section>
    </>
  );
}
