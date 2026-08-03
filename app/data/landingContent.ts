import type { Capability, CaseStudy, NavigationItem, Service } from "@/app/types/content";

export const navLinks: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/#expertise" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

export const services: readonly Service[] = [
  { id: "web-development", slug: "web-development", title: "Web Development", description: "Web applications and websites designed around business requirements and user needs.", features: ["Responsive web applications", "Business websites", "Dashboards and portals"] },
  { id: "mobile-applications", slug: "mobile-applications", title: "Mobile Application Development", description: "Practical mobile applications with intuitive user experiences and reliable functionality.", features: ["Business applications", "Customer applications", "Custom mobile solutions"] },
  { id: "custom-software", slug: "custom-software", title: "Custom Software Development", description: "Software systems shaped around an organization’s real workflows and operational needs.", features: ["Workflow systems", "Data management", "Operational dashboards"] },
  { id: "system-development", slug: "system-development", title: "System Development", description: "Connected digital systems that bring interfaces, backend services, data, and administration together.", features: ["Business logic", "Authentication", "Integration-ready systems"] },
  { id: "it-consulting", slug: "it-consulting", title: "IT Consulting", description: "Technical guidance that helps clarify requirements, evaluate options, and plan a practical path forward.", features: ["Requirements discovery", "System evaluation", "Technical strategy"] },
  { id: "digital-transformation", slug: "digital-transformation", title: "Digital Transformation", description: "Digital workflows that help organizations improve how work is managed, connected, and delivered.", features: ["Workflow digitization", "Process improvement", "Connected operations"] },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const companyHighlights = [
  { value: "Addis Ababa", label: "Ethiopia" },
  { value: "Digital", label: "solutions for businesses and individuals" },
  { value: "End to end", label: "from discovery through support" },
] as const;

export const faqs = [
  { id: "project-start", question: "How do we start a project?", answer: "Start by sharing the problem you want to solve through the inquiry form. Melos can then discuss requirements, priorities, and an appropriate next step." },
  { id: "project-types", question: "What kinds of solutions can Melos help with?", answer: "Melos can help with web development, mobile applications, custom software, system development, IT consulting, and digital transformation." },
  { id: "technology", question: "How is technology selected for a project?", answer: "Technology choices should follow the project’s requirements, users, maintainability, security, and expected growth rather than a one-size-fits-all stack." },
  { id: "support", question: "What happens after launch?", answer: "A project can continue through monitoring, maintenance, improvements, and evolution based on real-world use and changing needs." },
] as const;

export const engineeringPrinciples = [
  { title: "Solve the problem first", description: "Technology should serve the business problem rather than exist for its own sake." },
  { title: "Build for people", description: "Every product should create a clearer, more useful experience for the people who rely on it." },
  { title: "Keep it simple", description: "We favor the simplest reliable solution that solves the real problem." },
  { title: "Engineer for the future", description: "Systems should be maintainable and ready to evolve as requirements change." },
] as const;

export const capabilities: readonly Capability[] = [
  { title: "Web products", description: "Digital experiences built for users, operations, and growth.", examples: ["Web applications", "Customer portals", "E-commerce platforms"] },
  { title: "Mobile products", description: "Mobile solutions designed for clear, reliable everyday use.", examples: ["Service applications", "Productivity tools", "Custom mobile solutions"] },
  { title: "Backend & APIs", description: "Reliable systems for business logic, data handling, and connected services.", examples: ["API development", "Authentication", "Third-party integrations"] },
  { title: "Systems & operations", description: "Complete systems that connect the moving parts of a digital product.", examples: ["Database design", "Deployment planning", "Administration"] },
];

/** Case studies remain intentionally empty until verified Melos project information is supplied. */
export const caseStudies: readonly CaseStudy[] = [];
