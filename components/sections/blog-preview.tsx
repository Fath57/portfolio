import Link from "next/link";
import { recentPosts, formatDate } from "@/lib/posts";
import { SectionHeading } from "./section-heading";

export function BlogPreview() {
  const posts = recentPosts.slice(0, 3);
  return (
    <section
      id="blog"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading
        num="03"
        title="Derniers articles"
        intro="J'écris sur ce que j'apprends en construisant. Du concret, testé en production."
      />
      <ul className="divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-display text-base font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{post.excerpt}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-ink-faint tabular-nums">
                {formatDate(post.date)} · {post.readingTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-[gap] hover:gap-2.5"
      >
        Tous les articles <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
