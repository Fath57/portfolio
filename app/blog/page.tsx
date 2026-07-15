import type { Metadata } from "next";
import Link from "next/link";
import { recentPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles techniques sur le développement web fullstack.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-reading px-6 py-16 sm:py-20">
      <header className="mb-12">
        <span className="font-mono text-sm text-accent">Blog</span>
        <h1 className="mt-3 font-display text-4xl font-bold">Notes de dev</h1>
        <p className="mt-4 text-lg text-ink-muted">
          Ce que j'apprends en construisant. Concret, testé en production.
        </p>
      </header>
      <ul className="divide-y divide-border">
        {recentPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block py-6">
              <span className="font-mono text-xs text-ink-faint tabular-nums">
                {formatDate(post.date)} · {post.readingTime}
              </span>
              <h2 className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 text-ink-muted">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
