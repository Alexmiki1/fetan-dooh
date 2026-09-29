import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    host: "https://dooh.et",
    sitemap: [
      "https://dooh.et/sitemap.xml",
      "https://fetanads.com/sitemap.xml",
    ],
  };
}
