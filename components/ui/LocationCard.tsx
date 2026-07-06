import Link from "next/link";
import Image from "next/image";
import type { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
}

const availabilityColors = {
  High: "bg-green-100 text-green-700",
  Medium: "bg-amber/10 text-amber-dim",
  Limited: "bg-red-100 text-red-600",
};

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
        <span className="absolute top-4 left-4 font-mono text-xs uppercase tracking-wider bg-amber text-white px-3 py-1 rounded-full">
          {location.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl uppercase text-night tracking-wide">
          {location.name}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-night/60">
          <p className="flex items-center gap-2">
            <span className="text-amber">→</span>
            {location.dailyTraffic}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-amber">→</span>
            {location.screenType}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${availabilityColors[location.availability]}`}
          >
            {location.availability} Availability
          </span>
          <Link
            href="/contact"
            className="text-sm text-amber hover:text-amber-dim transition-colors font-medium"
          >
            Inquire →
          </Link>
        </div>
      </div>
    </div>
  );
}
