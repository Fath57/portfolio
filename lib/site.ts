// Configuration centrale du site. Édite ces valeurs — tout le reste s'y réfère.
export const site = {
  name: "Arafath ATTA YAYA",
  role: "Développeur fullstack",
  // Une phrase de promesse, factuelle, à la première personne.
  tagline:
    "7 ans d'expérience dans la conception d'applications métier et de systèmes d'information de gestion — de l'architecture à la mise en production.",
  description:
    "Développeur fullstack. 7 ans d'expérience en applications métier : Laravel, NestJS, Vue.js, React, PostgreSQL.",
  url: "https://portfolio-six-ivory-69.vercel.app", // domaine perso à brancher plus tard (Vercel → Settings → Domains)
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
