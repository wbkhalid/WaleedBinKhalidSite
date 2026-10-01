import Link from "next/link";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { featuredProjects, projects } from "@/data/projects";

export function Projects({ showAll = false }: { showAll?: boolean }) {
  const projectList = showAll ? projects : featuredProjects;
  const showProjectImages = showAll;

  return (
    <section id="projects" className="section-shell projects-section">
      <Reveal>
        <SectionHeading
          as={showAll ? "h1" : "h2"}
          eyebrow={showAll ? "Projects" : "Selected work"}
          title={showAll ? "A broader look at production work." : "Systems built for real operations."}
          description="Production work spanning public service workflows, multi-city administration, reporting, and AI-powered products."
        />
      </Reveal>
      <div className={`featured-projects ${showAll ? "projects-page-list" : "home-project-showcase"}`}>
        {projectList.map((project, index) => (
          <Reveal className={`case-study ${index % 2 ? "reverse" : ""} ${showProjectImages && project.mockup ? "" : "text-only-project"}`} key={project.name}>
            {showProjectImages && project.mockup ? <ProjectVisual project={project} priority={index === 0} /> : null}
            <article className="case-copy">
              <div className="case-index">PROJECT {String(index + 1).padStart(2, "0")}</div>
              <p className="case-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="case-description">{project.description}</p>
              <div className="case-detail"><span>My contribution</span><p>{project.contribution}</p></div>
              {showAll && project.features.length ? <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
              {showAll && project.impact ? <p className="impact"><span>Impact</span>{project.impact}</p> : null}
              <div className="badge-row">{project.technologies.slice(0, 6).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
            </article>
            {!showProjectImages ? (
              <aside className="case-panel" aria-label={`${project.name} project summary`}>
                <div className="case-panel-top">
                  <span>Project snapshot</span>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                </div>
                <strong>{project.impact || "Key capabilities"}</strong>
                <div className="case-panel-list">
                  {project.features.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </aside>
            ) : null}
          </Reveal>
        ))}
      </div>
      {!showAll ? <Reveal className="projects-cta"><Link className="button secondary" href="/projects">View all projects <span aria-hidden="true">↗</span></Link></Reveal> : null}
    </section>
  );
}
