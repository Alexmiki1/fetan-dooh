export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Fetan delivered our LED campaign across 8 locations in under two weeks. The visibility on Bole Road alone drove a measurable spike in store visits.",
    name: "Selam Tadesse",
    role: "Marketing Director, Dashen Bank",
    initials: "ST",
  },
  {
    id: "2",
    quote:
      "Their team understood our brand guidelines perfectly. The creative mockups and installation quality exceeded our expectations for our nationwide launch.",
    name: "Daniel Mekonnen",
    role: "Brand Manager, Habesha Brewery",
    initials: "DM",
  },
  {
    id: "3",
    quote:
      "We've worked with Fetan for three years running. Reliable placements, transparent reporting, and a team that genuinely cares about campaign performance.",
    name: "Hanna Bekele",
    role: "Head of Communications, Ethio Telecom",
    initials: "HB",
  },
];
