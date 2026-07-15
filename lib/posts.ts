// Aperçus d'articles. Pour un vrai blog, on passera ces contenus en MDX
// (fichiers dans /content), mais la structure de données reste la même.
export type Post = {
  slug: string;
  title: string;
  date: string; // ISO — sert au tri et au SEO
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "typescript-au-quotidien",
    title: "TypeScript au quotidien : les patterns qui tiennent",
    date: "2026-05-12",
    readingTime: "6 min",
    excerpt:
      "Les quelques patterns TypeScript que j'utilise sur chaque projet pour attraper les bugs avant l'exécution.",
    body: [
      "Le typage n'est utile que s'il modélise vraiment le domaine. Voici les patterns que je garde d'un projet à l'autre.",
      "Les unions discriminées remplacent la plupart des booléens de statut : un état impossible devient inexprimable.",
    ],
  },
  {
    slug: "next-perf-lighthouse-100",
    title: "Viser 100 sur Lighthouse avec Next.js",
    date: "2026-03-28",
    readingTime: "8 min",
    excerpt:
      "Comment j'ai réduit le temps de chargement d'un site de 4s à 0,8s : images, polices, et rendu côté serveur.",
    body: [
      "La performance web se joue sur quelques leviers bien connus. Le plus rentable : les polices et les images.",
      "next/font auto-héberge les polices et supprime le CLS. next/image gère le lazy-loading et les formats modernes.",
    ],
  },
  {
    slug: "architecture-api-robuste",
    title: "Concevoir une API qu'on n'a pas à surveiller",
    date: "2026-02-04",
    readingTime: "7 min",
    excerpt:
      "Idempotence, files d'attente et observabilité : les trois piliers d'un backend qui tourne tout seul.",
    body: [
      "Une bonne API échoue proprement. L'idempotence garantit qu'une relance ne casse rien.",
      "Les files d'attente absorbent les pics, et l'observabilité vous prévient avant l'utilisateur.",
    ],
  },
];

export const recentPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
