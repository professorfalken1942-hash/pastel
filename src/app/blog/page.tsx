import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Journal | Pastel Makeup and Style",
  description: "Beauty tips, inspiration, and behind-the-scenes from Pastel Makeup and Style.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery).catch(() => []);

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
          Stories & Inspiration
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
        }}>
          Journal
        </h1>
      </section>

      {/* Posts */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 3rem" }}>
        <style>{`
          @media (max-width: 768px) {
            .blog-article { grid-template-columns: 1fr !important; gap: 1rem !important; padding: 2.5rem 0 !important; }
          }
        `}</style>

        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.6rem",
              fontWeight: 300,
              color: "var(--mink)",
            }}>
              Journal posts coming soon.
            </p>
          </div>
        ) : (
          posts.map((post: any, i: number) => (
            <article key={post._id} className="blog-article" style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              padding: "4rem 0",
              borderBottom: "1px solid var(--blush)",
              borderTop: i === 0 ? "1px solid var(--blush)" : undefined,
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--pink)",
                  marginBottom: "0.5rem",
                }}>
                  {post.category}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  color: "var(--mink)",
                  fontWeight: 300,
                }}>
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                    : "Draft"}
                </p>
              </div>
              <div>
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--mink)",
                  marginBottom: "1.5rem",
                }}>
                  {post.excerpt}
                </p>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  borderBottom: "1px solid var(--charcoal)",
                  paddingBottom: "2px",
                  cursor: "pointer",
                }}>
                  Read More
                </span>
              </div>
            </article>
          ))
        )}
      </section>
    </>
  );
}
