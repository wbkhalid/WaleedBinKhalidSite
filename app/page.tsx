import { ContactCTA } from "@/sections/ContactCTA";
import { ExperiencePreview } from "@/sections/ExperiencePreview";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Skills />
      <Projects />
      <ExperiencePreview />
      <ContactCTA />
    </main>
  );
}
