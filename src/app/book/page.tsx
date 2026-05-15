'use client';

import type { Metadata } from "next";
import { useEffect } from "react";

// Server-side metadata export doesn't work in client components
// This will be handled via layout metadata

export default function BookPage() {
  useEffect(() => {
    // Load HoneyBook widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.setAttribute("data-pid", "68c33da0bc9cf000219cc809");
    document.body.appendChild(script);
  }, []);

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

      {/* HoneyBook widget embed */}
      <section style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "5rem 3rem 10rem",
      }}>
        <div className="hb-p-68c33da0bc9cf000219cc809-1"></div>
        <img 
          height="1" 
          width="1" 
          style={{ display: "none" }} 
          src="https://www.honeybook.com/p.png?pid=68c33da0bc9cf000219cc809"
          alt=""
        />
      </section>
    </>
  );
}
