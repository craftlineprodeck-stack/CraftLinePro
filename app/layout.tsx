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
  title: "Deck Builder & Restoration Sacramento | CraftLine Decking",
  description: "Deck builder in Sacramento, Fair Oaks and Folsom. Redwood and Trex decks, Redwood deck restoration, Ipe & hardwood restoration, deck repair and railings.",
  authors: [{ name: "CraftLine Decking" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Deck Builder & Restoration Sacramento | CraftLine Decking",
    description: "Deck builder in Sacramento, Fair Oaks and Folsom. Redwood and Trex decks, Redwood deck restoration, Ipe & hardwood restoration, deck repair and railings.",
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
    title: "Deck Builder & Restoration Sacramento | CraftLine Decking",
    description: "Deck builder in Sacramento, Fair Oaks and Folsom. Redwood and Trex decks, Redwood deck restoration, Ipe & hardwood restoration, deck repair and railings.",
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
