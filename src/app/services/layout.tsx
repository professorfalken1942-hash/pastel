import type { Metadata } from "next";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wedding Makeup & Styling Services in Syracuse NY",
  description: "Explore wedding makeup, bridal beauty, editorial makeup, TV/film makeup, wardrobe styling, and special event beauty services by Pastel Makeup and Style.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Wedding Makeup & Styling Services in Syracuse NY",
    description: "Wedding beauty, bridal makeup, editorial, TV/film, wardrobe styling, and special event services by Julianna Pastella.",
    url: absoluteUrl("/services"),
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
