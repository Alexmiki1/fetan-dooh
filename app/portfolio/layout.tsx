import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalDomain = process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || "https://dooh.et";

  return {
    title: "Portfolio — Fetan Outdoor Advertising",
    description:
      "Browse 400+ outdoor advertising campaigns for Ethiopia's leading brands.",
    alternates: {
      canonical: `${canonicalDomain}/portfolio`,
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
