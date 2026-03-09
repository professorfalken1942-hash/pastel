import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
      padding: "1.5rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "rgba(250,248,245,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #e8d5c4",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1.5rem",
        fontWeight: 300,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--charcoal)",
        textDecoration: "none",
      }}>
        Pastel
      </Link>

      <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
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
    </header>
  );
}
