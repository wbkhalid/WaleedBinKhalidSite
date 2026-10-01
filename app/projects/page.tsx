import { Projects } from "@/sections/Projects";
import type { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <main id="main" className="page-main">
      <Projects showAll />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "React and Next.js production projects, frontend contributions, dashboards, and product screenshots by Waleed Bin Khalid.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Waleed Bin Khalid",
    description: "React and Next.js production projects, frontend contributions, dashboards, and product screenshots by Waleed Bin Khalid.",
    url: "/projects",
  },
};
