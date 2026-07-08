export interface PortfolioItem {
  id: string;
  client: string;
  campaignType: string;
  industry: string;
  results: string;
  image: string;
  title?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  objectives?: string[];
  targetAudience?: string[];
  locations?: string[];
  suggestedMessage?: string;
  callToAction?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "yango",
    client: "Yango Ethiopia",
    campaignType: "LED Campaign",
    industry: "Transport",
    results: "Reach Millions on the Move",
    image: "/images/yango-campaign.png",
    title: "Yango Ethiopia – Your Ride, Right on Time",
    headline: "Reach Millions on the Move with Yango",
    subheadline: "Promote one of Ethiopia's most trusted ride-hailing apps on premium digital LED screens located across Addis Ababa. Put your brand in front of commuters, professionals, students, and travelers every day. Yango emphasizes convenient ride booking, upfront fares, real-time tracking, and safety features for riders.",
    description: "Yango is making daily travel in Ethiopia faster, easier, and more comfortable. This LED campaign is designed to maximize visibility by delivering bold, high-impact visuals in high-traffic locations. Digital Out-of-Home advertising ensures the message reaches thousands of people throughout the day, increasing brand awareness and encouraging app downloads.",
    objectives: [
      "Increase brand awareness",
      "Drive app downloads",
      "Promote first-time ride offers",
      "Strengthen customer trust",
      "Reach commuters during peak traffic hours"
    ],
    targetAudience: [
      "Daily commuters",
      "University students",
      "Office workers",
      "Business professionals",
      "Tourists and visitors",
      "Anyone looking for reliable transportation"
    ],
    locations: [
      "Bole Friendship",
      "Churchill",
      "Merkato",
      "CMC Roundabout",
      "Bole Road",
      "Wello Sefer",
      "Bole Airport VIP Entrance",
      "Near Bambis"
    ],
    suggestedMessage: "Skip the Wait. Ride with Yango.\nFast Booking • Upfront Prices • Safe Rides\nDownload the Yango App Today",
    callToAction: "Book your next ride with Yango and travel smarter across Addis Ababa."
  },
  {
    id: "dashen-bank",
    client: "Dashen Bank",
    campaignType: "LED Series",
    industry: "Finance",
    results: "12 locations across Addis Ababa",
    image: "/images/portfolio-bank.svg",
  },
  {
    id: "habesha-brewery",
    client: "Habesha Brewery",
    campaignType: "Transit Wrap",
    industry: "FMCG",
    results: "45 branded buses on 8 routes",
    image: "/images/portfolio-brewery.svg",
  },
  {
    id: "safaricom",
    client: "Safaricom Ethiopia",
    campaignType: "LED + Digital",
    industry: "Telecom",
    results: "5.1M reach with QR integration",
    image: "/images/portfolio-safaricom.svg",
  },
  {
    id: "ethiopian-airlines",
    client: "Ethiopian Airlines",
    campaignType: "Airport LED",
    industry: "Aviation",
    results: "Bole Airport premium placement",
    image: "/images/portfolio-airlines.svg",
  },
  {
    id: "coca-cola",
    client: "Coca-Cola",
    campaignType: "Event Branding",
    industry: "FMCG",
    results: "Full festival activation at Meskel",
    image: "/images/portfolio-coke.svg",
  },
];

export const industries = [
  "All",
  "Telecom",
  "Finance",
  "FMCG",
  "Aviation",
  "Transport",
] as const;
