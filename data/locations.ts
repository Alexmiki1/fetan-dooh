export type LocationType = "LED" | "BILLBOARD" | "TRANSIT";

export interface Location {
  id: string;
  name: string;
  area: string;
  type: LocationType;
  dailyTraffic: string;
  screenType: string;
  visibility: "High" | "Medium" | "Limited";
  image: string;
  lat: number;
  lng: number;
  designResolution?: string;
  physicalDimensions?: string;
  aspectRatio?: string;
  mapLink?: string;
}

export const locations: Location[] = [
  {
    id: "bole-friendship",
    name: "Bole Friendship",
    area: "Next to Friendship City Center",
    type: "LED",
    dailyTraffic: "150K+ daily",
    screenType: "LED",
    visibility: "High",
    image: "/images/bole-friendship.png",
    lat: 8.9892,
    lng: 38.7885,
    designResolution: "1920 × 576 px",
    physicalDimensions: "10 m × 3 m",
    aspectRatio: "3.33:1 (Ultra Wide)",
    mapLink: "https://maps.app.goo.gl/VBMgDoYqm2w5RutN7",
  },
  {
    id: "churchill",
    name: "Churchill",
    area: "Churchill Road, Tracon Tower",
    type: "LED",
    dailyTraffic: "95K+ daily",
    screenType: "LED",
    visibility: "High",
    image: "/images/churchill.png",
    lat: 9.0227,
    lng: 38.7489,
    designResolution: "1336 × 768 px",
    physicalDimensions: "7.6 m × 5.7 m",
    aspectRatio: "1.74:1",
    mapLink: "https://maps.app.goo.gl/X3jnWJpThK3kGxNaA",
  },
  {
    id: "bole-medhanialem",
    name: "Bole Medhanialem",
    area: "Bole",
    type: "LED",
    dailyTraffic: "130K+ daily",
    screenType: "LED",
    visibility: "High",
    image: "/images/bole-medhanialem.jpg",
    lat: 8.9925,
    lng: 38.7895,
    designResolution: "1280 × 1066 px",
    physicalDimensions: "6 m × 5 m",
    aspectRatio: "1.20:1",
    mapLink: "https://maps.app.goo.gl/wKMeprwehhpwyurg7",
  },
];

export const marqueeLocations = [
  "Bole Friendship – Next to Friendship City Center",
  "Churchill – Churchill Road, Tracon Tower",
  "Bole Medhanialem",
  "Bole Friendship"
];
