import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "dooh.et";
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Portfolio — Fetan Outdoor Advertising",
    description:
      "Browse 400+ outdoor advertising campaigns for Ethiopia's leading brands.",
    alternates: {
      canonical: `${baseUrl}/portfolio`,
    },
  };
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
