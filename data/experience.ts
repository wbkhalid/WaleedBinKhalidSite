export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Access Solution",
    role: "Frontend Developer",
    period: "May 2025 - Present",
    summary:
      "Leading frontend delivery for production government and semi-government platforms across Punjab.",
    highlights: [
      "Built three live operational dashboards spanning complaints, club management, and field monitoring.",
      "Own ongoing maintenance for CPD and Gymkhana, including fixes, improvements, and production support.",
      "Build, test, and deploy releases to client-managed local servers.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    company: "Musketeers Tech",
    role: "Frontend Developer",
    period: "Feb 2023 - Apr 2025",
    summary:
      "Delivered responsive products across AI, EdTech, hospitality, and company platforms in an Agile team.",
    highlights: [
      "Created reusable UI foundations used across internal projects.",
      "Integrated AI, payments, speech, data, email, and third-party APIs across production applications.",
      "Supported QA-led releases through GitHub and Coolify environments.",
    ],
    technologies: ["React.js", "Next.js", "Material UI", "Context API", "Axios", "Coolify"],
  },
  {
    company: "Finx Digital",
    role: "Frontend Developer Intern",
    period: "Nov 2022 - Jan 2023",
    summary:
      "Started professional frontend work by supporting client projects with interface fixes and features.",
    highlights: [
      "Built responsive, cross-browser pages and resolved frontend bugs before release.",
    ],
    technologies: ["JavaScript", "Responsive Web Design", "Cross-browser QA"],
  },
];
