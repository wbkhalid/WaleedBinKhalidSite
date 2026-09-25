export type Project = {
  name: string;
  category: string;
  description: string;
  contribution: string;
  features: string[];
  technologies: string[];
  featured: boolean;
  impact?: string;
  visual: "map" | "membership" | "monitoring" | "story" | "video" | "website";
};

export const projects: Project[] = [
  {
    name: "CPD Dashboard",
    category: "Government of Punjab / Complaint Management",
    description:
      "A production dashboard that manages the complete complaint lifecycle, from citizen submission to review, resolution, regulatory action, and case history.",
    contribution:
      "Led frontend implementation of the workflow, analytics, mapping, reporting, and live hearing experiences.",
    features: [
      "Role-driven complaint review and resolution",
      "Google Maps plotting and clustering",
      "Analytics with Excel and PDF exports",
      "PTCL live video hearings",
    ],
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "React Hook Form", "Zod", "Google Maps API", "jsPDF", "xlsx"],
    featured: true,
    visual: "map",
  },
  {
    name: "Gymkhana Club Management Platform",
    category: "Semi-Government / Operations Platform",
    description:
      "A multi-city management platform covering member registration, subscriptions, ledgers, facilities, billing, food, rooms, games, and daily operations.",
    contribution:
      "Built major modules, role-based experiences, reporting flows, and a redesigned dashboard used across multiple city clubs.",
    features: [
      "Admin, Manager, Cashier, and Receptionist roles",
      "Multi-step membership registration",
      "Billing, ledger, and subscription tracking",
      "Operational reporting and exports",
    ],
    technologies: ["Next.js", "Redux Toolkit", "TanStack Query", "TanStack Table", "React Hook Form", "Zod", "Framer Motion"],
    featured: true,
    impact: "Live across 12 cities in Punjab; the web portal reduced administrative workload by 70%.",
    visual: "membership",
  },
  {
    name: "Ramadan Dastarkhwan Monitoring System",
    category: "Government of Punjab / Field Monitoring",
    description:
      "A field inspection application for monitoring Ramadan Dastarkhwan operations across Punjab with location-aware evidence and district reporting.",
    contribution:
      "Developed the responsive inspection workflow, GPS-assisted locations, evidence handling, and reporting views.",
    features: [
      "Three-step GPS-verified inspections",
      "Menu and beneficiary tracking",
      "Image and video evidence",
      "District reports with PDF and Excel export",
    ],
    technologies: ["Next.js 16", "TypeScript", "Redux Toolkit", "React Hook Form", "Zod", "Google Places Autocomplete"],
    featured: true,
    visual: "monitoring",
  },
  {
    name: "Story Magician",
    category: "AI / Children's Publishing",
    description: "A personalized storybook platform with AI-created characters, illustrations, page-flip reading, and text-to-speech.",
    contribution: "Built responsive product flows, async AI states, uploads, and third-party integrations.",
    features: [],
    technologies: ["React", "Material UI", "PageFlip", "Microsoft Cognitive Services", "Stripe API", "Context API", "Axios"],
    featured: false,
    visual: "story",
  },
  {
    name: "Voice to Vision - Textopia",
    category: "AI / Text-to-Video",
    description: "A text-to-video interface combining generated scripts, speech, and visuals through multiple AI services.",
    contribution: "Implemented frontend API integrations, asynchronous states, responsive UI, and QA fixes.",
    features: [],
    technologies: ["React.js", "OpenAI API", "ElevenLabs", "Stable Diffusion", "Responsive Web Design"],
    featured: false,
    visual: "video",
  },
  {
    name: "Software House Portfolio Website",
    category: "Corporate Website",
    description: "A performant, reusable company website covering services, work, articles, and contact journeys.",
    contribution: "Built the responsive page system and on-page SEO, reaching 90+ Lighthouse scores across all categories.",
    features: [],
    technologies: ["Next.js", "JavaScript", "Semantic HTML", "SEO"],
    featured: false,
    visual: "website",
  },
  {
    name: "Asian Wok",
    category: "Hospitality / Multi-branch Website",
    description: "A five-branch restaurant site with branch-aware content, reservations, feedback, and notification workflows.",
    contribution: "Built the responsive experience and integrated reservation data and email notifications.",
    features: [],
    technologies: ["Next.js", "Google Sheets API", "EmailJS"],
    featured: false,
    visual: "website",
  },
  {
    name: "Stickball",
    category: "EdTech / Product Redesign",
    description: "A UI/UX redesign and public portfolio site that modernized the product while preserving its core behavior.",
    contribution: "Refined layout, navigation, typography, and reusable components into a responsive production UI.",
    features: [],
    technologies: ["React.js", "Next.js", "JavaScript", "Material UI", "Responsive Design"],
    featured: false,
    visual: "website",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
