'use client';

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [instagramHover, setInstagramHover] = useState(false);
  return (
    <footer style={{
      borderTop: "1px solid var(--pink)",
      padding: "4rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "var(--pink)",
    }}>
      <span style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1.2rem",
        fontWeight: 300,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--charcoal)",
      }}>
        Pastel
      </span>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["/services", "/pricing", "/blog", "/contact"].map((href) => (
          <Link key={href} href={href} style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--charcoal)",
            textDecoration: "none",
          }}>
            {href.replace("/", "")}
          </Link>
        ))}
        
        {/* Instagram */}
        <a
          href="https://instagram.com/pastelmakeupandstyle"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on Instagram"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            color: "var(--charcoal)",
            textDecoration: "none",
            opacity: instagramHover ? 0.6 : 1,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={() => setInstagramHover(true)}
          onMouseLeave={() => setInstagramHover(false)}
        >
          {/* Monotone Instagram logo */}
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        </a>
      </nav>

      <span style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        color: "var(--charcoal)",
      }}>
        © {new Date().getFullYear()} Pastel Makeup and Style
      </span>
    </footer>
  );
}
