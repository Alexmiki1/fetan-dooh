import type { Metadata } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fetan Outdoor Advertising — Reach Thousands Every Day",
  description:
    "Premium LED screens, transit and event branding across Ethiopia.",
  openGraph: {
    title: "Fetan Outdoor Advertising — Reach Thousands Every Day",
    description:
      "Premium LED screens, transit and event branding across Ethiopia.",
    url: "https://fetanads.et",
    siteName: "Fetan Outdoor Advertising",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fetan Outdoor Advertising",
    description:
      "Premium LED screens, transit and event branding across Ethiopia.",
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
      className={`${anton.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="font-body bg-night text-paper antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
