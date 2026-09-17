"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import dynamic from "next/dynamic";
import { locations } from "@/data/locations";

const InteractiveMap = dynamic(
  () => import("@/components/ui/InteractiveMap"),
  { ssr: false }
);

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(locations[0]);
  const [mapType, setMapType] = useState<"roadmap" | "satellite" | "hybrid" | "terrain">("roadmap");

  return (
    <section id="locations" className="bg-night py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Our Network"
            title="Premium LED screens across Addis Ababa."
            description="High traffic placements in Ethiopia's most visible corridors."
            light
          />
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Side */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[500px] lg:h-[600px]">
              <InteractiveMap
                locations={locations}
                selectedLocation={selectedLocation}
                onLocationSelect={setSelectedLocation}
                mapType={mapType}
              />
            </div>

            {/* Locations List Side */}
            <div className="flex flex-col h-[500px] lg:h-[600px]">
              <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <h3 className="font-display text-2xl uppercase text-white tracking-wide">
                  Featured Screens
                </h3>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 text-amber hover:text-amber-dim transition-colors font-medium text-sm"
                >
                  View All Locations →
                </Link>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedLocation?.id === location.id
                      ? "bg-amber/10 border-amber"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-display text-lg uppercase text-white tracking-wide">
                            {location.name}
                          </h4>
                          <p className="text-white/60 text-sm mt-1">
                            {location.area}
                          </p>
                        </div>
                        {location.physicalDimensions && (
                          <span className="text-amber text-sm font-medium whitespace-nowrap">
                            {location.physicalDimensions}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                          {location.dailyTraffic}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                          {location.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
