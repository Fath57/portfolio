import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";

// Accueil : fait 80 % du travail. Ordre pensé pour le regard du recruteur.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <BlogPreview />
      <Contact />
    </>
  );
}
