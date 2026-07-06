import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import LocationCard from "@/components/ui/LocationCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { locations } from "@/data/locations";

export default function Locations() {
  const featured = locations.slice(0, 4);

  return (
    <section id="locations" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Locations"
            title="Featured advertising locations."
            description="High-traffic placements across Addis Ababa's most visible corridors."
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dim transition-colors font-medium"
          >
            View all locations & map →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
