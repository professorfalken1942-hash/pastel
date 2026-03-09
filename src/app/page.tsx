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
          A beauty and styling brand by Julianna Pastella.<br />
          Weddings, fashion, and special events — Syracuse, NY.
        </p>
        <div className="hero-buttons" style={{ display: "flex", gap: "1.5rem" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { title: "Bridal Beauty", desc: "Classic to couture — full wedding day artistry honoring your individuality." },
            { title: "Bridal Party", desc: "Cohesive, beautiful looks for your entire party from prep to last dance." },
            { title: "Fashion & Editorial", desc: "Striking runway and editorial designs for shoots, campaigns, and fashion events." },
            { title: "TV & Film", desc: "Professional makeup for television, film, and on-camera productions." },
            { title: "Wardrobe & Set Styling", desc: "Complete wardrobe curation and set styling for productions and events." },
            { title: "Special Events", desc: "Tailored beauty solutions for galas, corporate events, and milestone moments." },
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

      {/* About */}
      <section className="about-grid" style={{
        padding: "8rem 3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        maxWidth: "1100px",
        margin: "0 auto",
        alignItems: "center",
      }}>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; padding: 4rem 1.25rem !important; }
            .hero-buttons { flex-direction: column !important; align-items: center !important; }
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--mink)",
            marginBottom: "1rem",
          }}>
            About
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            marginBottom: "2rem",
          }}>
            Beauty rooted in<br /><em>individuality</em>
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--mink)",
            marginBottom: "1.5rem",
          }}>
            Pastel Makeup and Style is a unique beauty and styling brand established by Julianna Pastella in Syracuse, New York. Our mission is to honor individuality and creativity — offering everything from classic wedding beauty to striking runway designs.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--mink)",
          }}>
            We also specialize in wardrobe and set styling, makeup for TV and film, and tailored beauty solutions for events.
          </p>
        </div>
        {/* Placeholder for photo */}
        <div style={{
          aspectRatio: "3/4",
          backgroundColor: "var(--blush)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--mink)",
          }}>
            Photo coming soon
          </span>
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
