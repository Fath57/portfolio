// Configuration centrale du site. Édite ces valeurs — tout le reste s'y réfère.
export const site = {
  name: "Arafath ATTA YAYA",
  role: "Développeur fullstack",
  // Une phrase de promesse, factuelle, à la première personne.
  tagline:
    "Depuis 7 ans, je construis des applications métier : SaaS, banque, secteur public. De la base de données à la mise en production.",
  description:
    "Développeur fullstack à Nantes. 7 ans d'expérience sur des applications métier : Laravel, NestJS, Vue.js, React, PostgreSQL.",
  url: "https://arafathattayaya.dev",
  available: true, // affiche le badge « Disponible »
  email: "aattayaya@gmail.com",
  location: "Nantes, France",
  socials: {
    github: "https://github.com/Fath57",
    linkedin: "https://www.linkedin.com/in/arafath-atta-yaya-52610a133",
  },
  cvHref: "/cv.pdf",
} as const;

export const nav = [
  { href: "/projets", label: "Projets" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
] as const;
