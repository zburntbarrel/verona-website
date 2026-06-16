import type { Metadata } from "next";
import {
  EB_Garamond,
  Hedvig_Letters_Sans,
  Hedvig_Letters_Serif,
  Inter,
} from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Free substitutes for the brand fonts:
//   ITC Garamond Std  -> EB Garamond (display headings)
//   Hedvig Letters Sans  -> Hedvig Letters Sans (nav / UI)
//   Hedvig Letters Serif -> Hedvig Letters Serif (body copy)
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const hedvigSans = Hedvig_Letters_Sans({
  variable: "--font-hedvig-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Used for the "VIDEO" placeholder text.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Verona",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${hedvigSans.variable} ${hedvigSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-linen text-sea">{children}</body>
    </html>
  );
}
