import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://craftlineprodeck.com'),
  title: "CraftLine Decking | Deck Builder & Restoration Sacramento, Folsom & Granite Bay",
  description: "Licensed deck builder and restoration contractor serving in Sacramento, Folsom, Granite Bay, Roseville and Auburn. Custom composite decks, repairs and wood restoration.",
  keywords: ["deck builder Sacramento", "deck installation", "Deck rebuild", "composite decking", "Deck repair", "deck restoration", "wood sanding and staining", "porch restoration", "pergola installation", "deck builder", "fence installation", "deck repair", "deck repair sacramento", "sacramento deck repair", "deck design", "deck railing", "sacramento balcony repair", "deck stairs repair", "deck cleaning carmichael"],
  authors: [{ name: "CraftLine Decking" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "CraftLine Decking | Deck Builder & Restoration Sacramento",
    description: "Professional deck builder and fence contractor in Sacramento. Expert deck installation, Deck repair, Sanding and staining, Deck restoration, composite decking, porch restoration.",
    url: "https://craftlineprodeck.com",
    siteName: "CraftLine Decking",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "CraftLine Decking Sacramento",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftLine Decking - Deck & Fence Installation, Repair and Composite Decking | Deck Builder Sacramento",
    description: "Professional deck builder and fence contractor in Sacramento. Expert deck installation, fence repair, composite decking.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: "https://craftlineprodeck.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
