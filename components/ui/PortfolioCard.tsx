import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${item.id}`} className="group relative aspect-[4/5] rounded-2xl overflow-hidden block">
      {item.youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1`}
          title={item.client}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : item.image ? (
        <Image
          src={item.image}
          alt={item.client}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-amber">
          {item.campaignType}
        </span>
        <h3 className="font-display text-2xl uppercase text-white tracking-wide mt-1">
          {item.client}
        </h3>
        <p className="text-white/60 text-sm mt-2">{item.results}</p>
      </div>
    </Link>
  );
}
