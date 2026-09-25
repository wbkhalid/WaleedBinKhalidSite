import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "map") {
    return <div className="project-visual map-visual" aria-label="Replaceable CPD dashboard preview"><div className="preview-label">Dashboard preview</div><div className="map-grid" /><span className="pin p1" /><span className="pin p2" /><span className="pin p3" /><div className="map-panel"><b>Complaint density</b><span><i />Resolved <strong>Overview</strong></span><span><i />In review <strong>Live map</strong></span></div></div>;
  }
  if (project.visual === "membership") {
    return <div className="project-visual member-visual" aria-label="Replaceable Gymkhana dashboard preview"><div className="preview-label">Platform preview</div><div className="member-sidebar">WBK<br/><i/><i/><i/><i/></div><div className="member-main"><span>Membership overview</span><div className="member-kpis"><b>Members</b><b>Billing</b><b>Rooms</b></div><div className="member-table"><i/><i/><i/><i/></div></div></div>;
  }
  if (project.visual === "monitoring") {
    return <div className="project-visual monitoring-visual" aria-label="Replaceable Ramadan monitoring preview"><div className="preview-label">Field app preview</div><div className="phone"><span>Inspection</span><b>Step 2 of 3</b><div className="steps"><i/><i/><i/></div><em>Location verified</em><p>Evidence and beneficiary details</p><button type="button" tabIndex={-1}>Continue inspection</button></div><div className="districts"><b>District reporting</b><span>Lahore <i /></span><span>Faisalabad <i /></span><span>Rawalpindi <i /></span></div></div>;
  }
  return (
    <div className={`project-visual product-visual ${project.visual}-visual`} aria-label={`${project.name} project preview`}>
      <div className="preview-label">Project preview</div>
      <div className="product-window">
        <div className="product-window-bar"><i /><i /><i /></div>
        <div className="product-window-body">
          <span>{project.category}</span>
          <strong>{project.name}</strong>
          <div className="product-lines"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}
