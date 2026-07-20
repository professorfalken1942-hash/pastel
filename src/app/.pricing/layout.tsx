import type { Metadata } from "next";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wedding Makeup Pricing & Bridal Beauty Packages",
  description: "View starting pricing for wedding makeup, bridal hair and makeup, trials, wedding party beauty, travel, add-ons, and custom styling services.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Wedding Makeup Pricing & Bridal Beauty Packages",
    description: "Transparent starting pricing for wedding beauty and styling services by Pastel Makeup and Style.",
    url: absoluteUrl("/pricing"),
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
