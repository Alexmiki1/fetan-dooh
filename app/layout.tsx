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
  title: "DOOH Advertising Addis Ababa | Premium LED Screens in Ethiopia",
  description:
    "Advertise on premium digital LED screens across Addis Ababa. Reach thousands daily with high impact DOOH advertising at prime locations in Ethiopia.",
  keywords: [
    "DOOH advertising Addis Ababa",
    "Digital Out of Home advertising Ethiopia",
    "LED billboard advertising Addis Ababa",
    "LED screen advertising Ethiopia",
    "Digital billboard Ethiopia",
    "Outdoor advertising Addis Ababa",
    "Digital advertising screens Ethiopia",
    "LED advertising company Ethiopia",
    "Digital signage Addis Ababa",
    "Billboard advertising Ethiopia"
  ],
  openGraph: {
    title: "DOOH Advertising Addis Ababa | Premium LED Screens in Ethiopia",
    description:
      "Advertise on premium digital LED screens across Addis Ababa. Reach thousands daily with high impact DOOH advertising at prime locations in Ethiopia.",
    url: "https://fetanads.et",
    siteName: "Fetan Outdoor Advertising",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOOH Advertising Addis Ababa | Premium LED Screens in Ethiopia",
    description:
      "Advertise on premium digital LED screens across Addis Ababa. Reach thousands daily with high impact DOOH advertising at prime locations in Ethiopia.",
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
