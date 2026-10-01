import { ProjectMockup } from "@/components/portfolio/ProjectMockup";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (!project.mockup) return null;
  return (
    <a className="project-visual" href={project.mockup.main.src} target="_blank" rel="noreferrer" aria-label={`Open full-size preview of ${project.name} (opens in a new tab)`} title="Open full-size preview">
      <ProjectMockup
        mainImage={project.mockup?.main}
        secondaryImages={project.mockup?.secondary}
        alt={project.mockup?.alt ?? `${project.name} project preview`}
        title={project.name}
        variant={project.mockup?.variant}
        priority={priority}
      />
    </a>
  );
}
