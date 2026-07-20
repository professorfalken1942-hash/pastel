'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PHOTOS = {
  hero: "/hero-banner.jpg",
};

export default function Home() {
  const [bookHover, setBookHover] = useState(false);

  return (
    <>
      {/* Hero — full bleed image with overlay text */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={PHOTOS.hero}
            alt="Pastel editorial wedding beauty"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
            unoptimized
          />
          {/* Soft overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(250,247,242,0.45) 0%, rgba(250,247,242,0.75) 100%)",
            }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "8rem 2rem 4rem",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--charcoal)",
              marginBottom: "2rem",
            }}
          >
            Hair, Makeup, Style
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--charcoal)",
              lineHeight: 1.6,
            }}
          >
            We cherish visions. And the most dreamiest of ones.
          </p>
        </div>
      </section>

      {/* About Jules Section */}
      <section
        style={{
          padding: "6rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ borderBottom: "1px solid #e8d5c4", paddingBottom: "1rem", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
            }}
          >
            Meet Jules
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* About text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              I'm an artist of a few trades. A soul led by instinct, weaving creativity through every era of life.
              I've shaped a world where dreams meet detail, a space where brides feel like visions, teams move like
              rhythm, and business breathes like art.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              It began with fabric almost 20 years ago, styling women in stories woven through their clothes for
              everything from everyday moments to the extraordinary. The flow led to the runways, the shoots, and
              somewhere between the slinging of dresses and flashing lights, makeup artistry found me.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--charcoal)",
              }}
            >
              The extension of my creative voice stays editorial—soft, refined, and always intentional.
            </p>
          </div>

          {/* Right column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              With the magic of wedding mornings, to the hushes on sets, I've poured myself into the creative
              direction of making things beautiful, I once sketched in the margins of notebooks. Each project is a
              brushstroke on the canvas of this career I've built.
            </p>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                fontStyle: "italic",
              }}
            >
              But now, a new chapter unfolds.
              <br />
              Gentle and fierce. Unknown, but deeply felt.
              <br />
              I am leaning into the wild wonder of motherhood—
              <br />
              another creation, perhaps the most sacred of all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "6rem 2rem",
          backgroundColor: "var(--canvas)",
          borderTop: "1px solid #e8d5c4",
          borderBottom: "1px solid #e8d5c4",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
              marginBottom: "3rem",
            }}
          >
            Our Offering
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "var(--charcoal)",
              marginBottom: "3rem",
              maxWidth: "700px",
            }}
          >
            As a leading editorial wedding team throughout New York, we offer an on-location boutique experience for
            wedding hair, makeup, and style for the best couples. Our makeup artistry is focused on soft, intentional
            finishes that photograph beautifully, hair styling that feels effortlessly like you, and a mutual trust,
            ensuring your entire look feels cohesive and personal.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "var(--charcoal)",
            }}
          >
            We have been honored to see these stories unfold in the cozy Adirondack mountains, the rolling countryside
            of the Finger Lakes, the carefree Thousand Islands, and, of course, in our city-chic hometown, Syracuse,
            New York, where our private downtown loft studio is located.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          backgroundColor: "var(--white)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "var(--charcoal)",
              marginBottom: "2rem",
            }}
          >
            We can't wait to hear your story.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--pink)",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--cream)",
          fontSize: "0.8rem",
          color: "var(--charcoal)",
        }}
      >
        <p>© 2026 Pastel. Syracuse, New York.</p>
      </footer>
    </>
  );
}
