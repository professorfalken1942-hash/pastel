import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pastel | Bridal Makeup Artist",
  description: "Luxury bridal makeup artist based in Syracuse, NY. Available for travel.",
  metadataBase: new URL("https://pastelstyle.art"),
  openGraph: {
    title: "Pastel | Bridal Makeup Artist",
    description: "Luxury bridal makeup. Effortlessly beautiful.",
    url: "https://pastelstyle.art",
    siteName: "Pastel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastel | Bridal Makeup Artist",
    description: "Luxury bridal makeup. Effortlessly beautiful.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
