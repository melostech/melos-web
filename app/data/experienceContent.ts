import type { ProcessStep } from "@/app/types/content";

/** UI-support content only. It does not claim clients, outcomes, or a specific technology stack. */
export const trustSignals = ["Web development", "Mobile applications", "Custom software", "Digital transformation"] as const;

export const deliverySteps: readonly ProcessStep[] = [
  { number: "01", title: "Discover", detail: "Understand the client, users, requirements, and problem." },
  { number: "02", title: "Plan", detail: "Define the product requirements, architecture, and implementation strategy." },
  { number: "03", title: "Design", detail: "Shape the user experience, information architecture, and technical design." },
  { number: "04", title: "Develop", detail: "Build the required frontend, backend, data, integrations, and functionality." },
  { number: "05", title: "Test", detail: "Check functionality, usability, performance, security, and compatibility." },
  { number: "06", title: "Deploy", detail: "Prepare the production environment and launch the product." },
  { number: "07", title: "Support & improve", detail: "Maintain and evolve the product using real-world feedback." },
];

export const serviceExperience = {
  "Web Development": ["Responsive applications", "Business websites", "Customer portals"],
  "Mobile Application Development": ["Service applications", "Productivity tools", "Custom mobile solutions"],
  "Custom Software Development": ["Workflow systems", "Data management", "Operational dashboards"],
  "System Development": ["Connected components", "Business logic", "Administration"],
  "IT Consulting": ["Requirements discovery", "System evaluation", "Technical planning"],
  "Digital Transformation": ["Digital workflows", "Process improvement", "Connected operations"],
} as const;

export const heroCapabilityMeaning = {
  Build: "Turn a promising idea into a dependable digital product.",
  Operate: "Make day-to-day work clearer, connected, and reliable.",
  Intelligence: "Use data and automation where they are genuinely useful.",
  Evolve: "Keep the system maintainable as priorities and requirements change.",
} as const;
