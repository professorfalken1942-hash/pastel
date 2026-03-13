import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import LogoSplash from "@/components/layout/LogoSplash";

export const metadata: Metadata = {
  title: "Pastel Makeup and Style | Wedding Makeup Artist",
  description: "Pastel Makeup and Style — luxury wedding makeup artist based in Syracuse, NY. Available for travel.",
  metadataBase: new URL("https://pastelstyle.art"),
  openGraph: {
    title: "Pastel Makeup and Style | Wedding Makeup Artist",
    description: "Pastel Makeup and Style — luxury wedding makeup artist based in Syracuse, NY. Available for travel.",
    url: "https://pastelstyle.art",
    siteName: "Pastel Makeup and Style",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastel Makeup and Style | Wedding Makeup Artist",
    description: "Pastel Makeup and Style — luxury wedding makeup artist based in Syracuse, NY. Available for travel.",
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
        <LogoSplash />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
