export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "led" | "transit" | "event" | "digital" | "creative";
  details: string[];
}

export const services: Service[] = [
  {
    id: "led",
    number: "01",
    title: "LED Screens",
    description:
      "Dynamic digital displays with rotating creatives, daypart targeting, and real-time content updates.",
    icon: "led",
    details: [
      "Full HD and 4K LED panels at high-traffic nodes",
      "15-second to 60-second spot rotations",
      "Remote content management dashboard",
      "Daypart scheduling for peak-hour visibility",
    ],
  },
  {
    id: "digital",
    number: "02",
    title: "Digital Campaigns",
    description:
      "Integrated outdoor-to-digital campaigns with QR codes, geo-targeting, and performance tracking.",
    icon: "digital",
    details: [
      "QR-enabled outdoor placements linking to landing pages",
      "Geo-fenced mobile retargeting",
      "Cross-channel campaign analytics",
      "A/B testing for creative optimization",
    ],
  },
  {
    id: "creative",
    number: "03",
    title: "Creative Services",
    description:
      "In-house design team crafting outdoor-ready artwork optimized for maximum visibility.",
    icon: "creative",
    details: [
      "LED and outdoor creative design",
      "Brand guideline compliance review",
      "3D mockups for client approval",
      "Fast turnaround, 48-hour rush available",
    ],
  },
];
