import { siteConfig } from "@/app/config/site";

export function OrganizationJsonLd() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
