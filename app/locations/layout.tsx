import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalDomain = process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || "https://dooh.et";

  return {
    title: "Screens — Fetan Outdoor Advertising",
    description:
      "Explore 10+ LED and outdoor advertising locations across Addis Ababa and Ethiopia.",
    alternates: {
      canonical: `${canonicalDomain}/locations`,
    },
  };
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
