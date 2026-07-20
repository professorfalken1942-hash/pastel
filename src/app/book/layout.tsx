import type { Metadata } from "next";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Bridal Makeup Consultation",
  description: "Book a consultation with Pastel Makeup and Style for wedding makeup, bridal beauty, special events, editorial, TV/film, and styling services.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Bridal Makeup Consultation",
    description: "Reserve your wedding makeup or styling consultation with Pastel Makeup and Style in Syracuse, NY.",
    url: absoluteUrl("/book"),
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
