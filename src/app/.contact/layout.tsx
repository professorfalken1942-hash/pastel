import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pastel Makeup and Style | Get in Touch",
  description: "Contact Pastel Makeup and Style for wedding makeup, bridal services, or bookings. Based in Syracuse, NY. Available for travel.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
