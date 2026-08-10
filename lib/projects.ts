// Tes projets. Les 2–3 premiers (featured) remontent sur l'accueil.
// Chaque étude de cas suit : problème → solution → rôle → résultat.
export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  stack: string[];
  featured: boolean;
  /** Capture d'écran dans public/ ; sinon l'illustration SVG du slug est utilisée. */
  image?: string;
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
      "Billetterie en ligne pour l'Afrique de l'Ouest : paiement mobile money, billets QR code et gestion des tickets physiques.",
    stack: ["Laravel", "Next.js", "React", "FedaPay"],
    featured: false,
    image: "/projects/tick-africa.jpg",
    links: { demo: "https://tick.africa" },
    caseStudy: {
      problem:
        "En Afrique de l'Ouest, les billets d'événements se vendent encore beaucoup en espèces, de la main à la main. Résultat : de la fraude, et des organisateurs qui ne savent pas vraiment combien de personnes sont entrées ni combien ils ont encaissé.",
      solution:
        "Tick Africa permet de vendre ses billets en ligne et d'encaisser par mobile money. Les billets sont des PDF sécurisés par QR code, les tickets physiques sont gérés aussi, et chaque organisateur suit ses ventes depuis son portefeuille.",
      role: "J'ai développé l'API Laravel, le front Next.js et l'API mobile.",
      result:
        "La plateforme est en ligne sur tick.africa et couvre le Bénin, la Côte d'Ivoire et le Togo.",
    },
  },
  {
    slug: "satis-gestion-plaintes",
    title: "Satis · Gestion des plaintes et réclamations",
    year: "2022",
    summary:
      "Gestion des plaintes et réclamations pour les banques, les institutions de microfinance et les assurances.",
    stack: ["Laravel", "PostgreSQL", "MongoDB", "Docker"],
    featured: true,
    caseStudy: {
      problem:
        "Les banques et les institutions de microfinance ont l'obligation de traiter les réclamations de leurs clients dans des délais réglementaires. Beaucoup le faisaient encore à la main, sans historique fiable ni visibilité sur les dossiers en retard.",
      solution:
        "Satis enregistre chaque plainte, la fait passer par un circuit de traitement avec des délais à respecter, et produit les rapports de conformité attendus par le régulateur.",
      role:
        "J'ai conçu l'architecture et développé la solution : API sécurisées, packages Laravel réutilisables, mise en production.",
      result:
        "Satis est utilisé par des banques, des institutions de microfinance et des compagnies d'assurance. J'en ai aussi assuré la maintenance et formé les utilisateurs.",
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
        "Le suivi des immobilisations se faisait sur des registres papier et des tableurs. À chaque inventaire, des écarts et des biens introuvables.",
      solution:
        "Une application web qui centralise tout le patrimoine : fiches d'immobilisations, campagnes d'inventaire et états de restitution.",
      role:
        "J'ai mené le projet en responsable technique, de la modélisation des données à la mise en production.",
      result:
        "L'application tourne au Port Autonome de Cotonou, à la SOBEBRA et à la Loterie Nationale du Bénin.",
    },
  },
  {
    slug: "saas-demenagement",
    title: "DemCRM · SaaS pour déménageurs",
    year: "2025",
    summary:
      "CRM de gestion pour les professionnels du déménagement : devis, plannings, factures et suivi client, développé au sein de L'Agence du Déménagement.",
    stack: ["Laravel", "Nuxt.js", "PostgreSQL", "Dokku"],
    featured: true,
    image: "/projects/demcrm.png",
    links: { demo: "https://demcrm.com" },
    caseStudy: {
      problem:
        "Les déménageurs jonglaient entre tableurs, agendas et outils de facturation séparés. Rien n'était centralisé, et les informations se perdaient entre le devis et le jour du déménagement.",
      solution:
        "DemCRM regroupe tout au même endroit : devis, plannings, factures et suivi client.",
      role:
        "Développement fullstack en Laravel et Nuxt.js : architecture de l'API, modélisation de la base PostgreSQL, pipeline CI/CD, et accompagnement de stagiaires.",
      result:
        "Le produit est en ligne sur demcrm.com, avec un déploiement automatisé à chaque livraison.",
    },
  },
  {
    slug: "procar-suivi-evaluation",
    title: "PROCAR · Plateforme de suivi-évaluation",
    year: "2024",
    summary:
      "Suivi-évaluation d'un programme : saisie des données, suivi des indicateurs et reporting.",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    featured: false,
    caseStudy: {
      problem:
        "Le suivi des indicateurs du programme se faisait à la main, en consolidant des fichiers. Le reporting prenait des semaines et restait difficile à fiabiliser.",
      solution:
        "Une plateforme où les équipes saisissent leurs données, suivent leurs indicateurs et génèrent leurs rapports.",
      role: "J'ai conçu et développé la plateforme en responsable technique.",
      result: "Elle est en exploitation au sein du projet PROCAR.",
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
        "La fondation suivait son programme éducatif et ses collectes de sang sans outil centralisé. Difficile dans ces conditions de suivre les bénéficiaires ou de produire un reporting fiable.",
      solution:
        "Deux applications dédiées : l'une pour piloter le programme éducatif (bénéficiaires, indicateurs, reporting), l'autre pour gérer les campagnes de don de sang.",
      role: "J'ai conçu et développé les deux systèmes en responsable technique.",
      result: "Les deux sont livrés et utilisés par les équipes de la fondation.",
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
        "Des produits SaaS déjà en production devaient continuer d'évoluer sans rien casser : nouvelles fonctionnalités, dette technique à résorber, performances à tenir.",
      solution:
        "Un travail de fond continu : refactoring, optimisation des performances et automatisation des déploiements.",
      role:
        "Lead développeur : choix d'architecture, planification des sprints, encadrement des juniors.",
      result:
        "Les produits sont toujours en production, avec des pipelines CI/CD automatisés (Dokku, Drone, GitHub Actions).",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
