import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "MoneyMatters by ET | Financial Education",
    template: "%s | MoneyMatters by ET",
  },
  description: SITE.description,
  keywords: [
    "financial education",
    "MoneyMatters by ET",
    "EquiTrust",
    "investing literacy",
    "risk awareness",
    "investment podcasts",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "MoneyMatters by ET | Financial Education",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@moneymatterset",
    title: "MoneyMatters by ET | Financial Education",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-js ${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-surface font-sans text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
