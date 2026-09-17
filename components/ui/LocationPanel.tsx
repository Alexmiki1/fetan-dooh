"use client";

import Image from "next/image";
import type { Location } from "@/data/locations";

interface LocationPanelProps {
  location: Location | null;
  onClose: () => void;
}

const visibilityColors = {
  High: "bg-green-100 text-green-700",
  Medium: "bg-amber/10 text-amber-dim",
  Limited: "bg-red-100 text-red-600",
};

export default function LocationPanel({ location, onClose }: LocationPanelProps) {
  if (!location) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-night/5 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-night/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="font-display text-lg uppercase text-night tracking-wide mb-2">
            Select a Location
          </h3>
          <p className="text-sm text-night/60">
            Click on a marker on the map to view screen details
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-night p-2 rounded-full transition-colors"
          aria-label="Close panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="font-mono text-xs uppercase tracking-wider bg-amber text-white px-3 py-1 rounded-full inline-block mb-2">
            {location.type}
          </span>
          <h2 className="font-display text-2xl uppercase text-white tracking-wide">
            {location.name}
          </h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-night/40 mb-3">
              Location
            </h4>
            <p className="text-night font-medium">{location.area}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-night/40 mb-3">
              Daily Traffic
            </h4>
            <p className="text-amber font-semibold text-lg">{location.dailyTraffic}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-night/40 mb-3">
              Screen Specifications
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-night/60">Type:</span>
                <span className="text-night font-medium">{location.screenType}</span>
              </div>
              {location.designResolution && (
                <div className="flex justify-between">
                  <span className="text-night/60">Resolution:</span>
                  <span className="text-night font-medium">{location.designResolution}</span>
                </div>
              )}
              {location.physicalDimensions && (
                <div className="flex justify-between">
                  <span className="text-night/60">Dimensions:</span>
                  <span className="text-night font-medium">{location.physicalDimensions}</span>
                </div>
              )}
              {location.aspectRatio && (
                <div className="flex justify-between">
                  <span className="text-night/60">Aspect Ratio:</span>
                  <span className="text-night font-medium">{location.aspectRatio}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-night/40 mb-3">
              Visibility
            </h4>
            <span
              className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${visibilityColors[location.visibility]}`}
            >
              {location.visibility} Visibility
            </span>
          </div>

          <div className="pt-4 border-t border-night/10">
            <a
              href={location.mapLink || `https://www.google.com/maps?q=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dim text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
