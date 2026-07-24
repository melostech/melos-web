/** UI-support content only. Keep client, service, and case-study facts in landingContent.ts. */
export const trustSignals = ["Product teams", "Enterprise workflows", "AI-enabled operations", "Cloud modernization"];

export const deliverySteps = [
  { number: "01", title: "Align the problem", detail: "We clarify the outcome, constraints, system context, and the decision that matters most." },
  { number: "02", title: "Shape the system", detail: "Architecture, interface behavior, delivery milestones, and technical risk are made visible early." },
  { number: "03", title: "Build in the open", detail: "Small increments, rigorous reviews, and a shared view of progress keep momentum high." },
  { number: "04", title: "Launch with confidence", detail: "We harden the critical paths, instrument the system, and make handover deliberate." },
] as const;

export const serviceExperience = {
  "Custom Software Engineering": ["Product architecture", "Web & mobile delivery", "Integration-ready systems"],
  "Enterprise Systems": ["Workflow modeling", "Role-aware platforms", "Governed data flows"],
  "CRM & Customer Automation": ["Operational visibility", "Connected handoffs", "Automation design"],
  "Security & Compliance": ["Secure foundations", "Risk assessment", "Resilient access patterns"],
  "AI & Machine Learning": ["Practical AI workflows", "Decision support", "Data-informed automation"],
  "Delivery & Modernization": ["Technical direction", "Migration planning", "Team enablement"],
} as const;

export const heroCapabilityMeaning = {
  Build: "Turn a promising idea into a dependable product foundation.",
  Operate: "Make complex day-to-day work visible, connected, and reliable.",
  Intelligence: "Put useful signals and automation where decisions actually happen.",
  Evolve: "Keep the platform moving as priorities, scale, and technology change.",
} as const;
