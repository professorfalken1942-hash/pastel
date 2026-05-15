import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Pastel Makeup and Style",
  description: "Transparent pricing for wedding makeup, bridal packages, and styling services. Contact us for custom quotes.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
