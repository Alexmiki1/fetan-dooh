"use client";

import { contact } from "@/data/contact";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import LocationCard from "@/components/ui/LocationCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { locations, type LocationType } from "@/data/locations";

const filters: (LocationType | "ALL")[] = ["ALL", "LED", "BILLBOARD", "TRANSIT"];

export default function LocationsPage() {
  const [filter, setFilter] = useState<LocationType | "ALL">("ALL");

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
              description="85+ placements across Addis Ababa and major Ethiopian cities."
              center
            />
          </FadeIn>

          <FadeIn className="mb-12">
            <div className="rounded-2xl overflow-hidden border border-night/10 h-80 md:h-96">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fetan Locations Map"
              />
            </div>
          </FadeIn>

          <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
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
