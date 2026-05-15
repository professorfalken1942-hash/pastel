import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import LogoSplash from "@/components/layout/LogoSplash";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import FAQSchema from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Pastel Makeup and Style | Wedding Makeup Artist Syracuse NY",
  description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY. Specializing in wedding beauty, editorial makeup, TV/film, and wardrobe styling. Available for travel.",
  keywords: "wedding makeup Syracuse, bridal makeup artist, makeup artist near me, wedding beauty",
  metadataBase: new URL("https://pastelmakeupandstyle.com"),
  openGraph: {
    title: "Pastel Makeup and Style | Wedding Makeup Artist",
    description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY. Specializing in wedding beauty, editorial makeup, TV/film, and wardrobe styling.",
    url: "https://pastelmakeupandstyle.com",
    siteName: "Pastel Makeup and Style",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMSzDJ_8PLDhFF32s98AefhuqK1a6YSw1X9rfvxo7jBjzU4MF5598Up_-FX4aLkJkCmVTZwSOw7CAaTSiGFF7jdcz9RW7oKJ3_DPH7CNS-UlnUS2Bw=w1400-h1000",
        width: 1400,
        height: 1000,
        alt: "Pastel Makeup and Style - Wedding Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastel Makeup and Style | Wedding Makeup Artist",
    description: "Luxury wedding makeup artist and bridal stylist in Syracuse, NY.",
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
