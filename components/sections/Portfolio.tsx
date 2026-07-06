import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import PortfolioCard from "@/components/ui/PortfolioCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  const featured = portfolio.slice(0, 3);

  return (
    <section id="portfolio" className="bg-night py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Portfolio"
            title="Recent campaigns."
            description="Brands that trust Fetan to deliver visibility at scale."
            light
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dim transition-colors font-medium"
          >
            View full portfolio →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
