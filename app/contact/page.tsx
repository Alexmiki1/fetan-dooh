import type { Metadata } from "next";
import { headers } from "next/headers";
import Contact from "@/components/sections/Contact";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "dooh.et";
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Contact — Fetan Outdoor Advertising",
    description:
      "Get in touch with Fetan Outdoor Advertising for LED and transit branding campaigns.",
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
