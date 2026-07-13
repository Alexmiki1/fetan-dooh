import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "DOOH Advertising Blog | Insights on LED Billboards in Ethiopia",
  description: "Read the latest insights on DOOH advertising, LED billboard costs, and outdoor marketing strategies in Addis Ababa and Ethiopia.",
  keywords: ["DOOH advertising Addis Ababa", "Outdoor digital advertising services Ethiopia", "LED billboard advertising company"],
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Our Blog"
            title="Insights & Strategies."
            description="Learn how DOOH advertising is transforming outdoor media in Ethiopia."
          />
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block bg-white p-8 rounded-2xl shadow-sm border border-night/5 hover:border-amber/30 transition-all hover:shadow-md h-full flex flex-col"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-amber mb-3">
                {post.date} • {post.readTime}
              </p>
              <h3 className="font-display text-xl text-night mb-3 group-hover:text-amber transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-night/60 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
