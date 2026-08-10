import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Beyond } from "@/components/sections/beyond";
import { Contact } from "@/components/sections/contact";

// Accueil : fait 80 % du travail. Ordre pensé pour le regard du recruteur.
// Le blog est masqué pour le moment (routes dans app/_blog, section BlogPreview).
export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Beyond />
      <Contact />
    </>
  );
}
