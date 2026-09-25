import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function ExperiencePreview() {
  const currentRole = experience[0];

  return (
    <section className="section-shell experience-preview" aria-labelledby="experience-preview-title">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Frontend work that stays close to real operations."
          description="A compact view of my recent work. The full timeline, education, and engineering approach live on the About page."
        />
      </Reveal>
      <Reveal className="experience-preview-card" delay={0.08}>
        <div>
          <span>{currentRole.period}</span>
          <h3 id="experience-preview-title">{currentRole.role}</h3>
          <p>{currentRole.summary}</p>
        </div>
        <div>
          <strong>{currentRole.company}</strong>
          <p>{currentRole.highlights[0]}</p>
          <Link className="button secondary" href="/about">Read more about me <span>↗</span></Link>
        </div>
      </Reveal>
    </section>
  );
}
