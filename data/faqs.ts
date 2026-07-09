export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How long does it take to launch an outdoor campaign?",
    answer:
      "Most campaigns go live within 7–14 business days from creative approval. LED screen campaigns can be faster, often within 3–5 days, since content is uploaded digitally. Rush placements are available for an additional fee.",
  },
  {
    id: "2",
    question: "What is the minimum booking period?",
    answer:
      "LED screen placements require a minimum 7-day booking. Transit wraps typically run for 90-day cycles to maximize route exposure. Long-term contracts (6+ months) receive discounted rates.",
  },
  {
    id: "3",
    question: "Do you provide creative design services?",
    answer:
      "Yes. Our in-house design team creates outdoor-ready artwork optimized for visibility, bold typography, high contrast, and legible messaging at distance. We also review client-supplied artwork for compliance.",
  },
  {
    id: "4",
    question: "Which cities do you cover outside Addis Ababa?",
    answer:
      "We have active inventory in Hawassa, Bahir Dar, Dire Dawa, Mekelle, and Adama. Our network is expanding, contact us for availability in other regional cities.",
  },
  {
    id: "5",
    question: "How do I measure campaign performance?",
    answer:
      "We provide monthly impression reports based on traffic data, placement duration, and visibility studies. LED campaigns include play-count verification. Digital-integrated campaigns offer QR scan analytics and geo-targeted retargeting metrics.",
  },
];
