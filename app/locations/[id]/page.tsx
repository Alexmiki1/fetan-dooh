import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return locations.map((loc) => ({
    id: loc.id,
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = locations.find((l) => l.id === resolvedParams.id);

  if (!location) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 md:pb-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-12">
          <Link
            href="/locations"
            className="text-amber hover:text-amber-dim transition-colors text-sm font-mono uppercase tracking-wider flex items-center gap-2"
          >
            ← Back to Locations
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="sticky top-32">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm font-mono uppercase tracking-wider text-night/60">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                  {location.type} Screen
                </span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                  {location.visibility} Visibility
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-10 text-night">
            <div>
              <SectionHead
                eyebrow={location.area}
                title={location.name}
                description={location.physicalDimensions ? `${location.screenType} — ${location.physicalDimensions}` : location.screenType}
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-night/70">
                Located in the heart of {location.area}, this premium {location.type} placement offers unparalleled visibility. With an estimated daily traffic of {location.dailyTraffic}, it&apos;s an ideal choice for brands looking to maximize their reach in a high-density area.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide mb-4 text-night">
                  Screen Specs
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-night/70">
                    <span className="text-amber">—</span>
                    <span><strong>Type:</strong> {location.screenType}</span>
                  </li>
                  <li className="flex items-start gap-2 text-night/70">
                    <span className="text-amber">—</span>
                    <span><strong>Category:</strong> {location.type}</span>
                  </li>
                  {location.physicalDimensions && (
                    <li className="flex items-start gap-2 text-night/70">
                      <span className="text-amber">—</span>
                      <span><strong>Dimensions:</strong> {location.physicalDimensions}</span>
                    </li>
                  )}
                  {location.designResolution && (
                    <li className="flex items-start gap-2 text-night/70">
                      <span className="text-amber">—</span>
                      <span><strong>Resolution:</strong> {location.designResolution}</span>
                    </li>
                  )}
                  {location.aspectRatio && (
                    <li className="flex items-start gap-2 text-night/70">
                      <span className="text-amber">—</span>
                      <span><strong>Aspect Ratio:</strong> {location.aspectRatio}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl uppercase tracking-wide mb-4 text-night">
                  Audience & Reach
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-night/70">
                    <span className="text-amber">—</span>
                    <span><strong>Visibility:</strong> {location.visibility}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-night/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                Location Details
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-night/5 pb-2">
                  <span className="text-night/60">Area</span>
                  <span className="font-medium text-night">{location.area}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-night/10">
              <p className="text-lg text-night/90 mb-6">Ready to secure this placement?</p>
              <Button href={`/contact?location=${location.id}`} className="!bg-night !text-white !shadow-none hover:!bg-night/90">
                Inquire About Availability
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
