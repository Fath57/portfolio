// Tes projets. Les 2–3 premiers (featured) remontent sur l'accueil.
// Chaque étude de cas suit : problème → solution → rôle → résultat.
export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  stack: string[];
  featured: boolean;
  links?: { demo?: string; code?: string };
  caseStudy?: {
    problem: string;
    solution: string;
    role: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "plateforme-reservation",
    title: "Plateforme de réservation",
    year: "2025",
    summary:
      "Application fullstack de réservation en temps réel. Paiement Stripe, tableau de bord admin, 12k utilisateurs actifs.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    featured: true,
    links: { demo: "https://exemple.com", code: "https://github.com/ton-pseudo/projet" },
    caseStudy: {
      problem:
        "Le client gérait ses réservations sur tableur : doublons, paiements manuels, aucune visibilité en temps réel.",
      solution:
        "Une application web avec disponibilités en direct, paiement intégré et tableau de bord admin.",
      role: "Conception complète, du schéma de base de données au déploiement.",
      result: "12k utilisateurs actifs, temps de traitement d'une réservation divisé par 5.",
    },
  },
  {
    slug: "tableau-de-bord-analytics",
    title: "Tableau de bord analytics",
    year: "2024",
    summary:
      "Visualisation de données en temps réel pour une équipe produit. Graphiques interactifs, export, temps de chargement 4s → 0,8s.",
    stack: ["React", "Node.js", "D3", "Redis"],
    featured: true,
    links: { code: "https://github.com/ton-pseudo/projet" },
    caseStudy: {
      problem: "Les rapports produits étaient générés à la main, avec un jour de retard.",
      solution:
        "Un tableau de bord temps réel branché sur les événements applicatifs, avec cache Redis.",
      role: "Frontend data-viz et pipeline d'agrégation côté serveur.",
      result: "Temps de chargement réduit de 4 s à 0,8 s, rapports disponibles en continu.",
    },
  },
  {
    slug: "api-facturation",
    title: "API de facturation",
    year: "2024",
    summary:
      "Service de facturation robuste : génération de PDF, relances automatiques, 99,9 % de disponibilité.",
    stack: ["NestJS", "PostgreSQL", "Docker"],
    featured: true,
    links: { code: "https://github.com/ton-pseudo/projet" },
    caseStudy: {
      problem: "La facturation manuelle générait des erreurs et des retards de paiement.",
      solution: "Une API qui génère les factures, envoie les relances et suit les paiements.",
      role: "Architecture backend, tests, mise en production conteneurisée.",
      result: "99,9 % de disponibilité, zéro erreur de facturation depuis la mise en ligne.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
