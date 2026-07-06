import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations — Fetan Outdoor Advertising",
  description:
    "Explore 85+ LED and outdoor advertising locations across Addis Ababa and Ethiopia.",
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
