import Link from "next/link";
import Image from "next/image";

const PHOTOS = {
  hero:    "https://lh3.googleusercontent.com/pw/AP1GczMSzDJ_8PLDhFF32s98AefhuqK1a6YSw1X9rfvxo7jBjzU4MF5598Up_-FX4aLkJkCmVTZwSOw7CAaTSiGFF7jdcz9RW7oKJ3_DPH7CNS-UlnUS2Bw=w1400-h1000",
  about:   "https://lh3.googleusercontent.com/pw/AP1GczMVJJknwRn2fpX35QXVenHdds6y2HozTg2GB_bc5GljuhMXnw6zc8m4JDZC9cE7lhxzwGTiCm88Dy0-DI4TYGo_LppdJaol5bZNZlqXe8nGDuVENUM=w900-h1200",
  gallery: [
    "https://lh3.googleusercontent.com/pw/AP1GczMCVpxqDytS1Jw29dAQvNPRLjr-kNzeCCCM020J3wjKAb4wWJC4c11Ij1AqFV25hcFyHqFnsNm7ZNgqJIPCOzOrR8ZA2xVBAQVsYUKKQfDB38qb8UA=w900-h1200",
    "https://lh3.googleusercontent.com/pw/AP1GczMF7qQUBzApKLkzJ-6lWsEsJVe2-APYoOiYGcLVPmj-kRdSR5RW7QSMhVfuHsfzVEs6ICt50lY7BOxAByDmFP8z015mzeRj35XbnyfG1cI82wu1N88=w900-h1200",
    "https://lh3.googleusercontent.com/pw/AP1GczMRnJ0CBfgN-gz7iOFbo3NOOEYL_dAdPXujq1AL6GAq-_PWvePXjJn9NL7ZlwvCzogKlTMSdanRS0GNn82Lm8c5-JQlyUuGt6ekaVQS8sDzHwmhv-Q=w900-h1200",
  ],
};

export default function Home() {
  return (
    <>
      {/* Hero — full bleed image with overlay text */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={PHOTOS.hero}
            alt="Julianna Pastella bridal makeup"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
            unoptimized
          />
          {/* Soft overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(250,247,242,0.35) 0%, rgba(250,247,242,0.65) 100%)",
          }} />
        </div>

        {/* Text */}
        <div style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "8rem 2rem 4rem",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--charcoal)",
            marginBottom: "2rem",
          }}>
            Wedding + Style
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--pink-primary)",
            maxWidth: "900px",
            marginBottom: "2.5rem",
            textTransform: "lowercase",
          }}>
            Your Most<br />
            Beautiful Day
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--charcoal)",
            maxWidth: "480px",
            lineHeight: 1.8,
            marginBottom: "3rem",
            margin: "0 auto 3rem",
          }}>
            A beauty and styling brand by Julianna Pastella.<br />
            Weddings, fashion, and special events — Syracuse, NY.
          </p>
          <div className="hero-buttons" style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <Link href="/services" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--charcoal)",
              border: "1px solid var(--charcoal)",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              backgroundColor: "rgba(250,247,242,0.6)",
              borderRadius: "50px",
            }}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "var(--blush)", margin: "0 3rem" }} />

      {/* Gallery strip — 3 photos */}
      <section style={{ padding: "6rem 3rem" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--mink)",
          marginBottom: "3rem",
          textAlign: "center",
        }}>
          Portfolio
        </p>
        <div className="gallery-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {PHOTOS.gallery.map((src, i) => (
            <div key={i} style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}>
              <Image
                src={src}
                alt={`Julianna Pastella portfolio ${i + 1}`}
                fill
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                unoptimized
              />
            </div>
          ))}
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
            { title: "Wedding Beauty", desc: "Classic to couture — full wedding day artistry honoring your individuality." },
            { title: "Wedding Party", desc: "Cohesive, beautiful looks for your entire party from prep to last dance." },
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
            .gallery-grid { grid-template-columns: 1fr !important; }
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
        {/* About photo */}
        <div style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
        }}>
          <Image
            src={PHOTOS.about}
            alt="Julianna Pastella"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            unoptimized
          />
        </div>
      </section>


    </>
  );
}
