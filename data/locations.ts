export type LocationType = "LED" | "BILLBOARD" | "TRANSIT";

export interface Location {
  id: string;
  name: string;
  area: string;
  type: LocationType;
  dailyTraffic: string;
  screenType: string;
  availability: "High" | "Medium" | "Limited";
  image: string;
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  {
    id: "bole-mega",
    name: "Bole Road — Mega Building",
    area: "Bole",
    type: "LED",
    dailyTraffic: "120K+ daily",
    screenType: "4K LED — 6m × 3m",
    availability: "High",
    image: "/images/location-bole.svg",
    lat: 8.9975,
    lng: 38.7895,
  },
  {
    id: "meskel-square",
    name: "Meskel Square",
    area: "Kirkos",
    type: "BILLBOARD",
    dailyTraffic: "200K+ daily",
    screenType: "14×48 ft Backlit",
    availability: "High",
    image: "/images/location-meskel.svg",
    lat: 9.0105,
    lng: 38.7612,
  },
  {
    id: "cmc-road",
    name: "CMC Road Junction",
    area: "Yeka",
    type: "BILLBOARD",
    dailyTraffic: "85K+ daily",
    screenType: "12×36 ft Static",
    availability: "Medium",
    image: "/images/location-cmc.svg",
    lat: 9.0342,
    lng: 38.8231,
  },
  {
    id: "piassa",
    name: "Piassa — Churchill Ave",
    area: "Arada",
    type: "LED",
    dailyTraffic: "95K+ daily",
    screenType: "Full HD LED — 4m × 2.5m",
    availability: "High",
    image: "/images/location-piassa.svg",
    lat: 9.0317,
    lng: 38.7489,
  },
  {
    id: "mexico-square",
    name: "Mexico Square",
    area: "Kirkos",
    type: "BILLBOARD",
    dailyTraffic: "110K+ daily",
    screenType: "14×48 ft Illuminated",
    availability: "Medium",
    image: "/images/location-mexico.svg",
    lat: 9.0053,
    lng: 38.7498,
  },
  {
    id: "summit-hotel",
    name: "Summit Hotel Roundabout",
    area: "Bole",
    type: "LED",
    dailyTraffic: "75K+ daily",
    screenType: "4K LED — 5m × 3m",
    availability: "Limited",
    image: "/images/location-summit.svg",
    lat: 8.9891,
    lng: 38.8012,
  },
];

export const marqueeLocations = [
  "Bole Road",
  "Meskel Square",
  "CMC Junction",
  "Piassa",
  "Mexico Square",
  "Summit Hotel",
  "Kazanchis",
  "Sarbet",
  "Gerji",
  "Megenagna",
];
