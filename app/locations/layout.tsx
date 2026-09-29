import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "dooh.et";
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Screens — Fetan Outdoor Advertising",
    description:
      "Explore 10+ LED and outdoor advertising locations across Addis Ababa and Ethiopia.",
    alternates: {
      canonical: `${baseUrl}/locations`,
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
