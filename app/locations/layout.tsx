import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screens — Fetan Outdoor Advertising",
  description:
    "Explore 10+ LED and outdoor advertising locations across Addis Ababa and Ethiopia.",
  alternates: {
    canonical: "https://dooh.et/locations",
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
