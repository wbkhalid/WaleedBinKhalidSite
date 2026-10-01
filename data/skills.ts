export const skillGroups = [
  {
    title: "Frontend systems",
    eyebrow: "Core specialization",
    description: "Production interfaces built with typed React, app-router Next.js, reusable component patterns, and responsive UI foundations.",
    featured: ["Next.js", "React.js", "TypeScript"],
    items: ["HTML", "JSX", "CSS", "Sass", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Application state and data",
    eyebrow: "Complex workflows",
    description: "Reliable client state, server data, tables, and API integration for dashboards with real operational depth.",
    featured: ["Redux Toolkit", "TanStack Query", "RESTful APIs"],
    items: ["Redux Toolkit", "TanStack Query", "TanStack Table", "RESTful APIs", "Context API", "Axios"],
  },
  {
    title: "Interface craft",
    eyebrow: "Design systems",
    description: "Component libraries, motion, form UX, and validation flows shaped into interfaces that feel polished and predictable.",
    featured: ["Tailwind CSS", "React Hook Form", "Zod"],
    items: ["Tailwind CSS", "Material UI", "Radix UI", "Ant Design", "Bootstrap", "Framer Motion", "React Hook Form", "Zod"],
  },
  {
    title: "Product integrations",
    eyebrow: "Real-world features",
    description: "Maps, exports, documents, AI APIs, and service integrations that turn frontend screens into usable business tools.",
    featured: ["Google Maps API", "jsPDF", "OpenAI API"],
    items: ["Google Maps API", "Google Places Autocomplete", "jsPDF", "xlsx", "OpenAI API"],
  },
  {
    title: "Delivery and collaboration",
    eyebrow: "Testing and deployment",
    description: "Manual functional and cross-browser testing, PR reviews, and deployment across hosted and on-premise environments.",
    featured: ["GitHub", "Vercel", "Coolify"],
    items: ["Git", "GitHub", "Figma", "Postman", "Manual functional testing", "Netlify", "Vercel", "Coolify", "On-premise deployment"],
  },
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
