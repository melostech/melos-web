export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: readonly string[];
};

export type Capability = {
  title: string;
  description: string;
  examples: readonly string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  detail: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
};
