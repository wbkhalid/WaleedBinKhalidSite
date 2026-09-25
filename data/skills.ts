export const skillGroups = [
  { title: "Frontend", items: ["HTML", "JSX", "CSS", "Sass", "JavaScript", "TypeScript", "React.js", "Next.js"] },
  { title: "State & Data", items: ["Redux Toolkit", "TanStack Query", "TanStack Table", "RESTful APIs", "Context API", "Axios"] },
  { title: "Forms & Validation", items: ["React Hook Form", "Zod"] },
  { title: "UI & Motion", items: ["Tailwind CSS", "Material UI", "Radix UI", "Ant Design", "Bootstrap", "Framer Motion"] },
  { title: "Integrations", items: ["Google Maps API", "Google Places Autocomplete", "jsPDF", "xlsx", "OpenAI API"] },
  { title: "Backend Familiarity", items: ["Node.js", "Express.js", "MongoDB"] },
  { title: "Tools & QA", items: ["Git", "GitHub", "Figma", "Postman", "Insomnia", "Apidog", "VS Code", "Manual functional testing"] },
  { title: "Deployment", items: ["Netlify", "Vercel", "Coolify", "On-premise deployment"] },
] as const;

export const capabilities = [
  "Dashboard architecture",
  "Complex forms and validation",
  "Role-based interfaces",
  "API integration",
  "Analytics and reporting",
  "Google Maps integration",
  "PDF and Excel export",
  "Responsive interfaces",
  "Reusable component systems",
] as const;
