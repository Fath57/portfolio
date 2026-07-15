// Configuration centrale du site. Édite ces valeurs — tout le reste s'y réfère.
export const site = {
  name: "Ton Nom",
  role: "Développeur fullstack",
  // Une phrase de promesse, factuelle, à la première personne.
  tagline:
    "Je conçois et livre des applications web de bout en bout — de la base de données à l'interface.",
  description:
    "Développeur fullstack. Je conçois et livre des applications web de bout en bout, de la base de données à l'interface.",
  url: "https://ton-domaine.dev",
  available: true, // affiche le badge « Disponible »
  email: "toi@exemple.com",
  location: "France",
  socials: {
    github: "https://github.com/ton-pseudo",
    linkedin: "https://linkedin.com/in/ton-profil",
  },
  cvHref: "/cv.pdf", // dépose ton CV dans /public/cv.pdf
} as const;

export const nav = [
  { href: "/projets", label: "Projets" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;
