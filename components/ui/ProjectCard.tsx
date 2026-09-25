import type { Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-card-top"><span>{project.category}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="badge-row">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
    </article>
  );
}
