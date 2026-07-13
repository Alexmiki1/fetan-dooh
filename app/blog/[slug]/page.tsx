import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import FadeIn from "@/components/ui/FadeIn";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | DOOH Advertising Addis Ababa`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 md:pb-32 bg-paper min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-12">
          <Link
            href="/blog"
            className="text-amber hover:text-amber-dim transition-colors text-sm font-mono uppercase tracking-wider flex items-center gap-2"
          >
            ← Back to Blog
          </Link>
        </FadeIn>

        <FadeIn>
          <div className="mb-8">
            <p className="text-sm font-mono uppercase tracking-wider text-amber mb-4">
              {post.date} • {post.readTime}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-wide text-night mb-6">
              {post.title}
            </h1>
          </div>
          
          <div className="prose prose-lg prose-amber max-w-none">
            <p className="text-night/80 text-xl leading-relaxed font-medium mb-8">
              {post.excerpt}
            </p>
            <p className="text-night/70 whitespace-pre-wrap leading-relaxed">
              {post.content}
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
