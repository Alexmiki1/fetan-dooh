import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return portfolio.map((item) => ({
    id: item.id,
  }));
}

export default async function CampaignPage({ params }: PageProps) {
  const resolvedParams = await params;
  const item = portfolio.find((p) => p.id === resolvedParams.id);

  if (!item) {
    notFound();
  }

  return (
    <article className="pt-24 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-12">
          <Link
            href="/portfolio"
            className="text-amber hover:text-amber-dim transition-colors text-sm font-mono uppercase tracking-wider flex items-center gap-2"
          >
            ← Back to Portfolio
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="sticky top-32">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
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
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : null}
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm font-mono uppercase tracking-wider text-white/60">
                <span className="bg-night px-4 py-2 rounded-full border border-white/10">
                  {item.industry}
                </span>
                <span className="bg-night px-4 py-2 rounded-full border border-white/10">
                  {item.campaignType}
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-10 text-white">
            <div>
              <SectionHead
                eyebrow={item.client}
                title={item.title || item.client}
                description={item.headline || item.results}
              />
              
              {item.subheadline && (
                <p className="text-white/70 text-lg leading-relaxed mt-6">
                  {item.subheadline}
                </p>
              )}
            </div>

            {item.description && (
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/70">{item.description}</p>
              </div>
            )}

            {item.objectives && item.objectives.length > 0 && (
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-4">
                  Campaign Objectives
                </h3>
                <ul className="space-y-2">
                  {item.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="text-amber mt-1">✦</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {item.targetAudience && item.targetAudience.length > 0 && (
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide mb-4">
                    Target Audience
                  </h3>
                  <ul className="space-y-2">
                    {item.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70">
                        <span className="text-amber/50">—</span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.locations && item.locations.length > 0 && (
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide mb-4">
                    Locations
                  </h3>
                  <ul className="space-y-2">
                    {item.locations.map((loc, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70">
                        <span className="text-amber/50">—</span>
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {item.suggestedMessage && (
              <div className="bg-night p-8 rounded-2xl border border-white/10">
                <h3 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                  Suggested LED Message
                </h3>
                <p className="text-xl font-display uppercase tracking-wide leading-relaxed whitespace-pre-line">
                  {item.suggestedMessage}
                </p>
              </div>
            )}

            {item.callToAction && (
              <div className="pt-6 border-t border-white/10">
                <p className="text-lg text-white/90 mb-6">{item.callToAction}</p>
                <Button href="/contact">Start Your Campaign</Button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
