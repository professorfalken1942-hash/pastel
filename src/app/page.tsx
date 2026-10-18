import Image from "next/image";

const LINKS = [
  { href: "https://www.pastelweddings.art", label: "Pastel Weddings" },
  // Plain path, not next/link: /artist-series is a static page served by a rewrite.
  { href: "/artist-series", label: "The Artist Series" },
];

export default function Home() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "4rem 1.5rem",
        backgroundColor: "var(--canvas)",
      }}
    >
      <style>{`
        .home-link {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 1rem 1.5rem;
          border: 1px solid var(--charcoal);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .home-link:hover, .home-link:focus-visible { background-color: var(--pink); }
      `}</style>

      <Image
        src="/pastel-logo.png"
        alt="Pastel"
        width={160}
        height={160}
        priority
        style={{ height: "160px", width: "auto", objectFit: "contain" }}
      />

      <nav
        aria-label="Pastel"
        style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "360px" }}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="home-link">
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
