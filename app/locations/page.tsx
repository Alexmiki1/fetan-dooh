"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import LocationCard from "@/components/ui/LocationCard";
import LocationPanel from "@/components/ui/LocationPanel";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import dynamic from "next/dynamic";
import { locations, type LocationType } from "@/data/locations";

const InteractiveMap = dynamic(
  () => import("@/components/ui/InteractiveMap"),
  { ssr: false }
);

const filters: (LocationType | "ALL")[] = ["ALL", "LED", "BILLBOARD", "TRANSIT"];
const mapTypes = ["roadmap", "satellite", "hybrid", "terrain"] as const;

export default function LocationsPage() {
  const [filter, setFilter] = useState<LocationType | "ALL">("ALL");
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [mapType, setMapType] = useState<"roadmap" | "satellite" | "hybrid" | "terrain">("roadmap");
  const [showMap, setShowMap] = useState(true);

  const filtered =
    filter === "ALL"
      ? locations
      : locations.filter((l) => l.type === filter);

  return (
    <div className="pt-24">
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead
              eyebrow="Locations"
              title="Our advertising network."
              description="10+ placements across Addis Ababa and major Ethiopian cities."
              center
            />
          </FadeIn>

          <FadeIn className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`font-mono text-xs uppercase tracking-wider px-5 py-2 rounded-full transition-colors ${
                      filter === f
                        ? "bg-amber text-white"
                        : "bg-white text-night/60 hover:text-amber border border-night/10"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {mapTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setMapType(type)}
                    className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-colors ${
                      mapType === type
                        ? "bg-night text-white"
                        : "bg-white text-night/60 hover:text-amber border border-night/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px] lg:h-[700px]">
              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-night/10">
                <InteractiveMap
                  locations={filtered}
                  selectedLocation={selectedLocation}
                  onLocationSelect={setSelectedLocation}
                  mapType={mapType}
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-night/10">
                <LocationPanel
                  location={selectedLocation}
                  onClose={() => setSelectedLocation(null)}
                />
              </div>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
