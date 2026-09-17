"use client";

import { useEffect, useState } from "react";
import type { Location } from "@/data/locations";

interface InteractiveMapProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  mapType: "roadmap" | "satellite" | "hybrid" | "terrain";
}

export default function InteractiveMap({
  locations,
  selectedLocation,
  onLocationSelect,
  mapType,
}: InteractiveMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Leaflet components only on client side
    import("react-leaflet").then(({ MapContainer, TileLayer, Marker, Popup, useMap }) => {
      import("leaflet").then((L) => {
        // Fix for default marker icons in Leaflet with Next.js
        delete (L.default.Icon.Default.prototype as any)._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        import("leaflet/dist/leaflet.css");

        function MapView({ selectedLocation }: { selectedLocation: Location | null }) {
          const map = useMap();

          useEffect(() => {
            if (selectedLocation) {
              map.setView([selectedLocation.lat, selectedLocation.lng], 14);
            }
          }, [selectedLocation, map]);

          return null;
        }

        function DynamicMap() {
          const tileLayer =
            mapType === "satellite"
              ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

          const attribution =
            mapType === "satellite"
              ? 'Tiles &copy; Esri'
              : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

          return (
            <MapContainer
              center={[9.0145, 38.76] as [number, number]}
              zoom={13}
              className="w-full h-full"
              style={{ background: "#f5f5f5" }}
            >
              <TileLayer url={tileLayer} />
              <MapView selectedLocation={selectedLocation} />
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng] as [number, number]}
                  eventHandlers={{
                    click: () => onLocationSelect(location),
                  }}
                >
                  <Popup>
                    <div className="text-sm">
                      <strong className="block">{location.name}</strong>
                      <span className="text-gray-600">{location.area}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          );
        }

        setMapComponent(() => DynamicMap);
      });
    });
  }, [locations, selectedLocation, onLocationSelect, mapType]);

  if (!isClient || !MapComponent) {
    return (
      <div className="w-full h-full bg-night/5 flex items-center justify-center">
        <p className="text-white/40">Loading map...</p>
      </div>
    );
  }

  return <MapComponent />;
}
