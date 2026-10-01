import { ContactCTA } from "@/sections/ContactCTA";
import { ExperiencePreview } from "@/sections/ExperiencePreview";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import type { Metadata } from "next";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Projects />
      <Skills />
      <ExperiencePreview />
      <ContactCTA />
    </main>
  );
}

export const metadata: Metadata = { alternates: { canonical: "/" } };
