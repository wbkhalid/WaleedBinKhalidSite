import { SkillCategory } from "@/components/portfolio/SkillCategory";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, skillGroups } from "@/data/skills";

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
            <SkillCategory {...group} />
          </Reveal>
        ))}
      </div>
      <Reveal className="capabilities">
        <div className="capability-head">
          <span>Frontend strengths</span>
          <i>WHAT I SHIP</i>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <div className="capability" key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{capability}</strong>
              <i>+</i>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
