import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Fetan Outdoor Advertising",
  description:
    "Browse 400+ outdoor advertising campaigns for Ethiopia's leading brands.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
