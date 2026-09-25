import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <Reveal>
        <SectionHeading
          eyebrow="Engineering toolkit"
          title="A practical stack for ambitious interfaces."
          description="Technologies used across frontend delivery, integrations, QA, and deployment."
        />
      </Reveal>
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <Reveal
            className="skill-group"
            key={group.title}
            delay={index * 0.03}
          >
            <h3>
              <span>{">"}</span>
              {group.title}
            </h3>
            <div className="skill-tile-grid">
              {group.items.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
