import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section className="section-shell education-section" aria-labelledby="education-title">
      <Reveal className="education-inner">
        <div><span className="eyebrow"><i />Education</span><h2 id="education-title">{education.degree}</h2></div>
        <div><strong>{education.institution}</strong><span>{education.period}</span></div>
      </Reveal>
    </section>
  );
}
