"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";

const LocationDetailMap = dynamic(
  () => import("@/components/ui/LocationDetailMap"),
  { ssr: false }
);

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function LocationPage({ params }: PageProps) {
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day");
  const [isClient, setIsClient] = useState(false);
  const [locationId, setLocationId] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
    params.then((resolved) => setLocationId(resolved.id));
  }, [params]);

  const location = locations.find((l) => l.id === locationId);

  if (!location || !locationId) {
    return (
      <div className="pt-32 pb-24 md:pb-32 bg-paper min-h-screen flex items-center justify-center">
        <p className="text-night/60">Loading...</p>
      </div>
    );
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
            <div className="sticky top-32 space-y-6">
              {/* Image with Day/Night Toggle */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {/* Day/Night Toggle */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-1 flex items-center gap-1">
                  <button
                    onClick={() => setTimeOfDay("day")}
                    className={`p-2 rounded-full transition-colors ${
                      timeOfDay === "day" ? "bg-amber text-white" : "text-night/60 hover:text-amber"
                    }`}
                    aria-label="Day view"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setTimeOfDay("night")}
                    className={`p-2 rounded-full transition-colors ${
                      timeOfDay === "night" ? "bg-night text-white" : "text-night/60 hover:text-amber"
                    }`}
                    aria-label="Night view"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </button>
                </div>
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
                Located in the heart of {location.area}, this premium {location.type} digital billboard offers unparalleled visibility for DOOH advertising in Addis Ababa. With an estimated daily traffic of {location.dailyTraffic}, it&apos;s an ideal LED screen for brands looking to maximize their reach in a high density area in Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide mb-4 text-night">
                  LED Screen Specs
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
                  <li className="flex items-start gap-2 text-night/70">
                    <span className="text-amber">—</span>
                    <span><strong>Daily Traffic:</strong> {location.dailyTraffic}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Individual Map */}
            <div>
              <h3 className="font-display text-xl uppercase tracking-wide mb-4 text-night">
                Location Map
              </h3>
              <div className="rounded-2xl overflow-hidden border border-night/10 h-[300px]">
                {isClient && <LocationDetailMap lat={location.lat} lng={location.lng} />}
              </div>
              {location.mapLink && (
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber hover:text-amber-dim transition-colors mt-3 text-sm font-medium"
                >
                  Open in Google Maps →
                </a>
              )}
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
                <li className="flex justify-between items-center border-b border-night/5 pb-2">
                  <span className="text-night/60">Screen ID</span>
                  <span className="font-medium text-night font-mono">{location.id.toUpperCase()}</span>
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
