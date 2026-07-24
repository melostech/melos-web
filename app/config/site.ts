const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://melostechnologies.com";

export const siteConfig = {
  name: "Melos Technologies",
  shortName: "Melos",
  description: "Melos Technologies engineers scalable digital products, enterprise systems, and AI-enabled workflows.",
  url: rawSiteUrl.replace(/\/$/, ""),
  email: "melostechsolution@gmail.com",
  locale: "en_US",
} as const;
