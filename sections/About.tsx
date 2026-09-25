import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const focus = ["Government systems", "Business dashboards", "Form-heavy workflows", "Responsive products"];

export function About() {
  return (
    <section id="about" className="section-shell about-grid">
      <Reveal><SectionHeading eyebrow="About" title="Complex requirements, made usable." /></Reveal>
      <Reveal className="about-copy" delay={0.08}>
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="focus-list">{focus.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
      </Reveal>
    </section>
  );
}
