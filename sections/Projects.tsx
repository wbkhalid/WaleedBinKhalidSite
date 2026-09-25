import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { featuredProjects, projects } from "@/data/projects";
import Link from "next/link";

type ProjectsProps = {
  showAll?: boolean;
};

export function Projects({ showAll = false }: ProjectsProps) {
  const projectList = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section-shell projects-section">
      <Reveal>
        <SectionHeading
          eyebrow={showAll ? "Projects" : "Selected work"}
          title={showAll ? "A broader look at production work." : "Systems built for real operations."}
          description="Production work spanning public service workflows, multi-city administration, reporting, and AI-powered products."
        />
      </Reveal>
      {showAll ? (
        <div className="featured-projects projects-page-list">
          {projectList.map((project, index) => (
            <Reveal className={`case-study ${index % 2 ? "reverse" : ""}`} key={project.name}>
              <div className="case-copy">
                <div className="case-index">PROJECT {String(index + 1).padStart(2, "0")}</div>
                <p className="case-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="case-description">{project.description}</p>
                <div className="case-detail"><span>My contribution</span><p>{project.contribution}</p></div>
                {project.features.length ? <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
                {project.impact ? <p className="impact"><span>Impact</span>{project.impact}</p> : null}
                <div className="badge-row">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              </div>
              <ProjectVisual project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <>
          <div className="home-project-grid">
            {projectList.map((project, index) => <Reveal key={project.name} delay={index * 0.05}><ProjectCard project={project} index={index} /></Reveal>)}
          </div>
          <Reveal className="projects-cta"><Link className="button secondary" href="/projects">View all projects <span>↗</span></Link></Reveal>
        </>
      )}
    </section>
  );
}
