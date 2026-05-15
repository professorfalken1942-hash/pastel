import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Pastel Makeup and Style",
  description: "Wedding makeup, bridal beauty, editorial makeup, TV/film makeup, wardrobe styling, and special event services. Syracuse-based, available for travel.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
