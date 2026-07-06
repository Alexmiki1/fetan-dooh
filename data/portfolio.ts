export interface PortfolioItem {
  id: string;
  client: string;
  campaignType: string;
  industry: string;
  results: string;
  image: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "ethio-telecom",
    client: "Ethio Telecom",
    campaignType: "LED Campaign",
    industry: "Telecom",
    results: "3.2M impressions in 30 days",
    image: "/images/portfolio-telecom.svg",
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
] as const;
