export interface PortfolioItem {
  id: string;
  client: string;
  campaignType: string;
  industry: string;
  results: string;
  image?: string;
  youtubeId?: string;
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
    youtubeId: "kOXlxXSFgx0",
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
    campaignType: "LED Campaign",
    industry: "Finance",
    results: "Banking Made Simple",
    youtubeId: "yf0JFJHtpzY",
    title: "Dashen Bank – Banking Made Simple",
    headline: "Your Future. Your Money. Your Bank.",
    subheadline: "Showcase Dashen Bank on premium digital LED screens and connect with thousands of customers across Addis Ababa. Promote modern banking solutions designed for individuals, businesses, and the growing digital economy.",
    description: "Dashen Bank delivers convenient financial solutions through innovative banking services, digital platforms, payment cards, and customer-focused solutions. This LED campaign creates high visibility by placing the brand message in high-traffic locations where commuters, professionals, and businesses see it every day.",
    objectives: [
      "Increase brand awareness",
      "Promote digital banking services",
      "Encourage new account openings",
      "Promote mobile banking and card services",
      "Build customer trust and loyalty",
      "Reach business owners and professionals"
    ],
    targetAudience: [
      "Business owners",
      "Entrepreneurs",
      "Corporate customers",
      "Young professionals",
      "Students",
      "Digital banking users",
      "International customers"
    ],
    suggestedMessage: "Bank Smarter. Live Better.\nSecure Banking Solutions\nAnywhere. Anytime.\n\nDashen Bank"
  },
  {
    id: "bamacon-engineering",
    client: "BamaCon Engineering PLC",
    campaignType: "LED Campaign",
    industry: "Construction",
    results: "Strong Foundations. Modern Solutions.",
    image: "/images/bamacon-campaign.png",
    title: "BamaCon Engineering PLC – Building Ethiopia’s Future",
    headline: "Strong Foundations. Modern Solutions. Lasting Results.",
    subheadline: "Showcase BamaCon Engineering PLC on premium digital LED screens and reach thousands of potential clients, investors, and decision-makers across Addis Ababa. With experience in building construction, infrastructure projects, and engineering solutions, BamaCon delivers quality projects built for the future.",
    description: "BamaCon Engineering PLC transforms ideas into reliable structures through professional engineering, construction expertise, and innovative solutions. From commercial buildings and industrial projects to infrastructure development, BamaCon is committed to quality, safety, and excellence.",
    objectives: [
      "Increase brand visibility",
      "Build trust with potential customers",
      "Promote construction and engineering services",
      "Showcase completed and ongoing projects",
      "Reach businesses, investors, and property developers"
    ],
    targetAudience: [
      "Real estate developers",
      "Business owners",
      "Government organizations",
      "Investors",
      "Property owners",
      "Construction partners",
      "Engineering professionals"
    ],
    suggestedMessage: "Building Dreams Into Reality\n🏗️ Construction Excellence\n🏢 Engineering Solutions\nBamaCon Engineering PLC"
  },
  {
    id: "beu-delivery",
    client: "beU Delivery",
    campaignType: "LED Campaign",
    industry: "FMCG",
    results: "Fast Delivery • Hundreds of Restaurants",
    youtubeId: "3WJsBEsSRKw",
    title: "beU Delivery – Your Favorite Meals, Fast",
    headline: "Hungry? beU Delivers.",
    subheadline: "Promote beU Delivery, one of Ethiopia's leading food delivery platforms, on premium digital LED screens across Addis Ababa. Showcase your brand to thousands of commuters, office workers, students, and families every day. beU makes it easy to order meals from hundreds of restaurants with fast delivery, affordable prices, exclusive offers, and real-time order tracking.",
    description: "This Digital Out-of-Home (DOOH) campaign is designed to capture attention with vibrant visuals and compelling messaging in high-traffic locations. By displaying beU on premium LED screens throughout the city, the campaign reinforces brand awareness, encourages app downloads, and reminds people that delicious food is only a few taps away.",
    objectives: [
      "Increase brand awareness across Addis Ababa",
      "Drive mobile app downloads",
      "Promote fast and affordable food delivery",
      "Highlight restaurant variety and exclusive offers",
      "Increase daily customer orders"
    ],
    targetAudience: [
      "Office workers",
      "University students",
      "Busy professionals",
      "Families",
      "Young adults",
      "Anyone looking for fast, reliable food delivery"
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
    suggestedMessage: "Hungry? beU Delivers.\nFast Delivery • Hundreds of Restaurants • Great Deals\nOrder Food Anytime, Anywhere\nDownload the beU App Today",
    callToAction: "Enjoy your favorite meals delivered quickly to your home or office with beU Delivery."
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
  "Construction",
] as const;
