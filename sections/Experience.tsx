import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal><SectionHeading eyebrow="Experience" title="From product interfaces to public-sector platforms." description="A career focused on shipping dependable frontend systems and supporting them after launch." /></Reveal>
      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal className="timeline-item" delay={index * 0.08} key={`${job.company}-${job.role}`}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="timeline-meta"><p>{job.period}</p><span>{job.company}</span></div>
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <p>{job.summary}</p>
              <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="badge-row">{job.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
