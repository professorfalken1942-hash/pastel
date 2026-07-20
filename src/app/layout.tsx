import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import LogoSplash from "@/components/layout/LogoSplash";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { absoluteUrl, defaultOgImage, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Pastel Makeup and Style | Wedding Makeup Artist Syracuse NY",
    template: "%s | Pastel Makeup and Style",
  },
  description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY. Wedding beauty, editorial makeup, TV/film, wardrobe styling, and special event makeup.",
  keywords: [
    "wedding makeup Syracuse NY",
    "bridal makeup artist Syracuse",
    "Syracuse wedding makeup artist",
    "bridal hair and makeup Syracuse",
    "editorial makeup artist New York",
    "wardrobe stylist Syracuse",
  ],
  applicationName: siteName,
  authors: [{ name: "Julianna Pastella" }],
  creator: "Julianna Pastella",
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.gif",
  },
  openGraph: {
    title: "Pastel Makeup and Style | Wedding Makeup Artist Syracuse NY",
    description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY for weddings, editorial, TV/film, and special events.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: "Pastel Makeup and Style - Wedding Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastel Makeup and Style | Wedding Makeup Artist Syracuse NY",
    description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY.",
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
        <FAQSchema />
      </head>
      <body>
        <LogoSplash />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
