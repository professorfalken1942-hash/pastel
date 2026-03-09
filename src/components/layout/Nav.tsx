"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; gap: 2.5rem; align-items: center; }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 0.25rem; z-index: 60; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(250,248,245,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e8d5c4",
      }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.4rem",
          fontWeight: 300,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--charcoal)",
          textDecoration: "none",
          zIndex: 60,
        }}>
          Pastel
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--charcoal)",
              textDecoration: "none",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/book" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--white)",
            backgroundColor: "var(--charcoal)",
            padding: "0.6rem 1.4rem",
            textDecoration: "none",
          }}>
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{
            display: "block",
            width: "24px",
            height: "1px",
            backgroundColor: "var(--charcoal)",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "1px",
            backgroundColor: "var(--charcoal)",
            transition: "opacity 0.3s",
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "1px",
            backgroundColor: "var(--charcoal)",
            transition: "transform 0.3s",
            transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        backgroundColor: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        transition: "opacity 0.3s, visibility 0.3s",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
      }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.2rem",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "var(--charcoal)",
            textDecoration: "none",
          }}>
            {link.label}
          </Link>
        ))}
        <Link href="/book" onClick={() => setOpen(false)} style={{
          marginTop: "1rem",
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
      </div>
    </>
  );
}
