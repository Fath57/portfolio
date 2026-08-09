import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-reading px-6 py-16 sm:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-accent"
      >
        <span aria-hidden>←</span> Tous les articles
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs text-ink-faint tabular-nums">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingTime}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-ink-muted">{post.excerpt}</p>
      </header>

      <div className="mt-10 space-y-5 border-t border-border pt-10 text-ink-muted">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
