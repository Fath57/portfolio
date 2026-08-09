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
    slug: "tick-africa",
    title: "Tick Africa · Billetterie événementielle",
    year: "2025",
    summary:
      "Plateforme de billetterie pour l'Afrique de l'Ouest : vente en ligne, paiement mobile money, billets PDF avec QR code et gestion des tickets physiques.",
    stack: ["Laravel", "Next.js", "React", "FedaPay"],
    featured: false,
    caseStudy: {
      problem:
        "En Afrique de l'Ouest, la billetterie événementielle reste largement physique : vente en espèces, fraude sur les billets, aucun suivi des entrées ni des revenus pour les organisateurs.",
      solution:
        "Une plateforme complète : vente en ligne avec paiement mobile money (FedaPay), génération de billets PDF sécurisés par QR code, gestion des tickets physiques et portefeuille organisateur avec suivi des transactions.",
      role:
        "Développement fullstack : API Laravel, front-end Next.js / React, middleware et API mobile.",
      result:
        "Plateforme opérationnelle couvrant tout le cycle de la billetterie, de la création d'événement au contrôle des entrées.",
    },
  },
  {
    slug: "satis-gestion-plaintes",
    title: "Satis · Gestion des plaintes et réclamations",
    year: "2022",
    summary:
      "Application métier de gestion électronique des plaintes et réclamations pour banques, institutions de microfinance et compagnies d'assurance.",
    stack: ["Laravel", "PostgreSQL", "MongoDB", "Docker"],
    featured: true,
    caseStudy: {
      problem:
        "Les banques, institutions de microfinance et assurances doivent tracer et traiter les réclamations clients dans des délais réglementaires. Un processus jusque-là manuel, sans visibilité ni historique fiable.",
      solution:
        "Une application de gestion électronique des plaintes : enregistrement, workflow de traitement, suivi des délais et reporting de conformité.",
      role:
        "Architecture et développement de la solution : API REST sécurisées, packages Laravel réutilisables, optimisation des performances et du processus de mise en production.",
      result:
        "Solution adoptée par des banques, institutions de microfinance et compagnies d'assurance, avec maintenance évolutive et formation des utilisateurs.",
    },
  },
  {
    slug: "digit-immo",
    title: "Digit-Immo · Gestion des immobilisations",
    year: "2023",
    summary:
      "Application web de gestion du patrimoine et d'inventaire des biens, déployée au Port Autonome de Cotonou, à la SOBEBRA et à la Loterie Nationale du Bénin.",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    featured: true,
    caseStudy: {
      problem:
        "Le suivi des immobilisations et les campagnes d'inventaire reposaient sur des registres et tableurs, sources d'écarts et de pertes de traçabilité.",
      solution:
        "Une application web centralisant le patrimoine : fiches d'immobilisations, campagnes d'inventaire et états de restitution.",
      role:
        "Conception et développement en responsable technique, de la modélisation des données à la mise en production.",
      result:
        "En production dans trois organisations : le Port Autonome de Cotonou, la SOBEBRA et la Loterie Nationale du Bénin.",
    },
  },
  {
    slug: "saas-demenagement",
    title: "SaaS de gestion pour déménageurs",
    year: "2025",
    summary:
      "Plateforme de gestion opérationnelle à destination des professionnels du déménagement, développée au sein de L'Agence du Déménagement.",
    stack: ["Laravel", "Nuxt.js", "PostgreSQL", "Dokku"],
    featured: true,
    caseStudy: {
      problem:
        "Les professionnels du déménagement pilotaient leur activité avec des outils dispersés, sans plateforme métier dédiée.",
      solution:
        "Un SaaS couvrant les fonctionnalités métier de gestion opérationnelle, livré en continu par sprints.",
      role:
        "Développement fullstack (Laravel, Nuxt.js), architecture de l'API REST, modélisation PostgreSQL, mise en place du pipeline CI/CD (Dokku, GitHub Actions) et accompagnement de stagiaires.",
      result:
        "Plateforme en production avec déploiement automatisé et livraisons continues.",
    },
  },
  {
    slug: "procar-suivi-evaluation",
    title: "PROCAR · Plateforme de suivi-évaluation",
    year: "2024",
    summary:
      "Système de suivi-évaluation des activités et indicateurs d'un programme : saisie, suivi et reporting.",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    featured: false,
    caseStudy: {
      problem:
        "Le suivi des activités et des indicateurs du programme était consolidé manuellement, avec un reporting lent et difficile à fiabiliser.",
      solution:
        "Une plateforme de suivi-évaluation : saisie structurée des données, suivi des indicateurs et génération des rapports.",
      role: "Conception et développement en responsable technique.",
      result: "En exploitation au sein du projet PROCAR.",
    },
  },
  {
    slug: "fondation-claudine-talon",
    title: "Fondation Claudine Talon · Systèmes métier",
    year: "2024",
    summary:
      "Deux systèmes métier : pilotage d'un programme éducatif (indicateurs, bénéficiaires, reporting) et gestion des dons de sang (campagnes, donneurs, collectes).",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    featured: false,
    caseStudy: {
      problem:
        "La fondation suivait son programme éducatif et ses campagnes de don de sang sans outil centralisé, au détriment du reporting et du suivi des bénéficiaires.",
      solution:
        "Deux applications dédiées : un système de pilotage du programme éducatif et un système de gestion des dons de sang.",
      role: "Conception et développement des deux systèmes en responsable technique.",
      result: "Systèmes livrés et utilisés par la fondation pour le suivi et le reporting.",
    },
  },
  {
    slug: "zibaa-finplex",
    title: "Zibaa & Finplex · Produits SaaS",
    year: "2024",
    summary:
      "Produits SaaS développés et maintenus chez Nautilus Technology : nouvelles fonctionnalités, refactoring et optimisation des performances.",
    stack: ["Laravel", "Vue.js", "NestJS", "PostgreSQL"],
    featured: false,
    caseStudy: {
      problem:
        "Des produits SaaS en exploitation devaient évoluer sans régression : nouvelles fonctionnalités, dette technique et performances à maîtriser.",
      solution:
        "Évolution continue des produits : refactoring, optimisation des performances et industrialisation des déploiements (CI/CD).",
      role:
        "Développeur fullstack / lead : architecture technique, planification des sprints, encadrement de développeurs juniors.",
      result:
        "Produits maintenus en production avec des pipelines CI/CD automatisés (Dokku, Drone, GitHub Actions).",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
