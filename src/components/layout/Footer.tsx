import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #e8d5c4",
      padding: "4rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "var(--cream)",
    }}>
      <span style={{
        fontFamily: "var(--font-serif)",
        fontSize: "1.2rem",
        fontWeight: 300,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
      }}>
        Pastel
      </span>

      <nav style={{ display: "flex", gap: "2rem" }}>
        {["/services", "/pricing", "/blog", "/contact", "/book"].map((href) => (
          <Link key={href} href={href} style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--mink)",
            textDecoration: "none",
          }}>
            {href.replace("/", "")}
          </Link>
        ))}
      </nav>

      <span style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        color: "var(--mink)",
      }}>
        © {new Date().getFullYear()} Pastel Makeup and Style
      </span>
    </footer>
  );
}
