import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalDomain = process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || "https://dooh.et";

  return {
    title: "Contact — Fetan Outdoor Advertising",
    description:
      "Get in touch with Fetan Outdoor Advertising for LED and transit branding campaigns.",
    alternates: {
      canonical: `${canonicalDomain}/contact`,
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
