import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-reading px-6 py-16 sm:py-20">
      <Link
        href="/blog"
        className="font-mono text-xs text-ink-muted hover:text-accent"
      >
        ← Tous les articles
      </Link>
      <header className="mt-6">
        <span className="font-mono text-xs text-ink-faint tabular-nums">
          {formatDate(post.date)} · {post.readingTime}
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold">{post.title}</h1>
      </header>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
