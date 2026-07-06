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
    id: "transit",
    number: "02",
    title: "Transit Branding",
    description:
      "Full-wrap bus and minibus branding that moves your message through the city all day long.",
    icon: "transit",
    details: [
      "Full and partial bus wraps on major routes",
      "Minibus (Anbessa, Sheger) fleet partnerships",
      "Route-specific targeting by neighborhood",
      "Durable vinyl with UV-resistant printing",
    ],
  },
  {
    id: "event",
    number: "03",
    title: "Event Branding",
    description:
      "Pop-up activations, stage backdrops, and branded environments for conferences and festivals.",
    icon: "event",
    details: [
      "Custom stage backdrops and step-and-repeat walls",
      "Pop-up booth design and fabrication",
      "On-site installation and teardown crews",
      "Ideal for product launches and cultural events",
    ],
  },
  {
    id: "digital",
    number: "04",
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
    number: "05",
    title: "Creative Services",
    description:
      "In-house design team crafting outdoor-ready artwork optimized for maximum visibility.",
    icon: "creative",
    details: [
      "LED and outdoor creative design",
      "Brand guideline compliance review",
      "3D mockups for client approval",
      "Fast turnaround — 48-hour rush available",
    ],
  },
];
