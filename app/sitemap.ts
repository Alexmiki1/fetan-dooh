import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { locations } from "@/data/locations";
import { portfolio } from "@/data/portfolio";

const baseUrls = ["https://dooh.et", "https://fetanads.com"];

export default function sitemap(): MetadataRoute.Sitemap {
  const allUrls: MetadataRoute.Sitemap = [];

  baseUrls.forEach((baseUrl) => {
    const staticPages: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/locations`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];

    const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
      url: `${baseUrl}/locations/${location.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const portfolioPages: MetadataRoute.Sitemap = portfolio.map((item) => ({
      url: `${baseUrl}/portfolio/${item.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    allUrls.push(...staticPages, ...locationPages, ...portfolioPages, ...blogPages);
  });

  return allUrls;
}
