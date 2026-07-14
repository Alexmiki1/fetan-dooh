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
    subheadline: "Take Yango's brand visibility to the next level with our premium digital LED screens across Addis Ababa. Showcase your campaigns in high-traffic locations and connect with thousands of commuters, professionals, students, and travelers every day. Our dynamic LED advertising network ensures Yango stays visible where it matters most, driving awareness and reaching more potential riders.",
    description: "Yango is making daily travel in Ethiopia faster, easier, and more comfortable. This LED campaign is designed to maximize visibility by delivering bold, high impact visuals in high traffic locations. Digital Out of Home advertising ensures the message reaches thousands of people throughout the day, increasing brand awareness and encouraging app downloads.",
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
    description: "Dashen Bank delivers convenient financial solutions through innovative banking services, digital platforms, payment cards, and customer focused solutions. This LED campaign creates high visibility by placing the brand message in high traffic locations where commuters, professionals, and businesses see it every day.",
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
    id: "beu-delivery",
    client: "beU Delivery",
    campaignType: "LED Campaign",
    industry: "FMCG",
    results: "Fast Delivery • Hundreds of Restaurants",
    youtubeId: "3WJsBEsSRKw",
    title: "beU Delivery – Your Favorite Meals, Fast",
    headline: "Hungry? beU Delivers.",
    subheadline: "Promote beU Delivery, one of Ethiopia's leading food delivery platforms, on premium digital LED screens across Addis Ababa. Showcase your brand to thousands of commuters, office workers, students, and families every day. beU makes it easy to order meals from hundreds of restaurants with fast delivery, affordable prices, exclusive offers, and real time order tracking.",
    description: "This Digital Out of Home (DOOH) campaign is designed to capture attention with vibrant visuals and compelling messaging in high traffic locations. By displaying beU on premium LED screens throughout the city, the campaign reinforces brand awareness, encourages app downloads, and reminds people that delicious food is only a few taps away.",
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
    id: "tracon-tower-churchill",
    client: "Tracon Tower",
    campaignType: "LED Campaign",
    industry: "All",
    results: "Premium City-Center Location",
    youtubeId: "4Nf9oPH91Ts",
    title: "Tracon Tower – Churchill LED Screen",
    headline: "Your Brand Deserves the Spotlight",
    subheadline: "Advertise your brand on the iconic Tracon Tower LED Screen, strategically positioned on Churchill Avenue in the heart of Addis Ababa. This premium digital billboard is located in one of the city's busiest commercial corridors, attracting thousands of commuters, pedestrians, business professionals, shoppers, and public transport passengers every day.",
    description: "The Tracon Tower LED display offers exceptional visibility for both daytime and nighttime advertising with bright, high resolution visuals. Whether you're launching a new product, promoting an event, or building brand awareness, this premium Digital Out of Home (DOOH) location ensures your campaign reaches a broad urban audience in one of Addis Ababa's highest traffic areas.",
    objectives: [
      "Build strong brand awareness",
      "Reach thousands of daily commuters",
      "Increase customer engagement",
      "Promote new products and services",
      "Drive foot traffic and sales"
    ],
    targetAudience: [
      "Daily commuters",
      "Office workers",
      "Business professionals",
      "University students",
      "Shoppers",
      "Local and international visitors"
    ],
    locations: [
      "Churchill Road – Tracon Tower"
    ],
    suggestedMessage: "Your Brand Deserves the Spotlight\nReach Thousands Every Day\nBold • Bright • Unforgettable\nAdvertise on Tracon Tower LED Screen\nBe Seen. Be Remembered."
  },
  {
    id: "emirates-airlines",
    client: "Emirates Airlines",
    campaignType: "LED Campaign",
    industry: "Aviation",
    results: "Connecting Addis Ababa to the World",
    youtubeId: "cc03Hz13ewU",
    title: "Emirates Airlines – Fly Better",
    headline: "Fly Better with Emirates",
    subheadline: "Promote Emirates, one of the world's most recognized international airlines, on premium digital LED screens across Addis Ababa. Showcase the airline to thousands of business travelers, tourists, professionals, students, and families every day. Emirates is renowned for its extensive global network, award winning onboard service, modern fleet, and seamless connections through its Dubai hub, serving destinations across six continents.",
    description: "This Digital Out of Home (DOOH) campaign is designed to capture attention with high impact visuals displayed on premium LED screens in Addis Ababa's busiest locations. Whether promoting international travel, holiday packages, or business destinations, the campaign delivers exceptional visibility, inspires travelers, and strengthens Emirates' premium brand presence.",
    objectives: [
      "Increase brand awareness in Ethiopia",
      "Promote international travel and holiday destinations",
      "Drive flight bookings",
      "Highlight Emirates' premium travel experience",
      "Reach travelers during peak commuting hours"
    ],
    targetAudience: [
      "Business professionals",
      "International travelers",
      "Tourists",
      "Families",
      "Students traveling abroad",
      "Frequent flyers"
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
    suggestedMessage: "Fly Better with Emirates\nWorldwide Destinations • Award Winning Service • Seamless Connections\nBook Your Next Journey Today",
    callToAction: "Promote your brand on our premium digital LED screens across Addis Ababa. Reach thousands of potential customers every day with high-impact advertising in strategic locations. Contact us today to launch your next campaign."
  },
  {
    id: "maleda-foam",
    client: "Maleda Foam",
    campaignType: "LED Campaign",
    industry: "All",
    results: "Sleep Better. Live Better.",
    youtubeId: "dctCqmgbwfw",
    title: "Maleda Foam – Upgrade Your Sleep",
    headline: "Sleep Better. Live Better.",
    subheadline: "Promote Maleda Foam, one of Ethiopia's trusted manufacturers of high quality mattresses, pillows, and sleep products, on premium digital LED screens across Addis Ababa. Put your brand in front of thousands of commuters, homeowners, families, newlyweds, students, and professionals every day. Maleda Foam is known for producing comfortable, durable, and affordable sleep solutions designed to improve everyday comfort and well-being.",
    description: "This Digital Out of Home (DOOH) campaign is designed to maximize visibility through vibrant, high impact visuals displayed on LED screens in Addis Ababa's busiest locations. Whether launching a new mattress collection, promoting seasonal offers, or strengthening brand recognition, this campaign helps Maleda Foam connect with customers at every stage of their buying journey.",
    objectives: [
      "Increase brand awareness",
      "Promote premium mattresses and sleep products",
      "Drive showroom visits",
      "Increase product sales",
      "Build customer trust and brand preference"
    ],
    targetAudience: [
      "Homeowners",
      "Families",
      "Newly married couples",
      "Apartment renters",
      "Hotels and guest houses",
      "Anyone looking for better sleep and quality mattresses"
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
    suggestedMessage: "Sleep Better. Live Better.\nPremium Mattresses • Quality Foam • Lasting Comfort\nUpgrade Your Sleep with Maleda Foam\nVisit your nearest Maleda Foam showroom today and discover the comfort you deserve."
  },
  {
    id: "dstv-ethiopia",
    client: "DStv Ethiopia",
    campaignType: "LED Campaign",
    industry: "Telecom",
    results: "Entertainment Lives Here",
    youtubeId: "3wZLc2xMPpU",
    title: "DStv Ethiopia – Entertainment Lives Here",
    headline: "Entertainment Lives Here",
    subheadline: "Promote DStv Ethiopia, one of the country's leading digital television and streaming platforms, on premium digital LED screens across Addis Ababa. Put your brand in front of thousands of families, football fans, movie lovers, professionals, and entertainment enthusiasts every day. DStv offers a wide range of live sports, blockbuster movies, international and local TV channels, kids' programming, news, and streaming services, delivering entertainment anytime, anywhere.",
    description: "This Digital Out of Home (DOOH) campaign is designed to maximize visibility with bold, high impact visuals displayed on LED screens in Addis Ababa's busiest locations. Whether promoting new subscription packages, exclusive sporting events, or premium entertainment, this campaign helps DStv reach potential subscribers and strengthen its position as Ethiopia's premier pay TV provider.",
    objectives: [
      "Increase brand awareness",
      "Drive new DStv subscriptions",
      "Promote premium sports and entertainment",
      "Highlight DStv Streaming and flexible viewing options",
      "Strengthen customer loyalty"
    ],
    targetAudience: [
      "Football and sports fans",
      "Families",
      "Movie and series enthusiasts",
      "Young adults",
      "Business professionals",
      "Anyone looking for premium home entertainment"
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
    suggestedMessage: "Entertainment Lives Here\nLive Sports • Movies • Series • Kids • News\nWatch More with DStv Ethiopia\nSubscribe Today and Enjoy Entertainment Anytime, Anywhere."
  }
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
