"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import PortfolioCard from "@/components/ui/PortfolioCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { portfolio, industries } from "@/data/portfolio";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.industry === filter);

  return (
    <div className="pt-24">
      <section className="bg-night py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead
              eyebrow="Portfolio"
              title="Campaigns that deliver."
              description="400+ campaigns for Ethiopia's leading brands."
              light
              center
            />
          </FadeIn>

          <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`font-mono text-xs uppercase tracking-wider px-5 py-2 rounded-full transition-colors ${
                  filter === ind
                    ? "bg-amber text-white"
                    : "bg-white/5 text-white/60 hover:text-amber border border-white/10"
                }`}
              >
                {ind}
              </button>
            ))}
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
