import type { Metadata } from "next";
import "./globals.css";
import { OrganizationJsonLd } from "@/app/components/seo/OrganizationJsonLd";
import { siteConfig } from "@/app/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Digital Engineering`, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["software engineering", "enterprise systems", "AI automation", "product development", "Melos Technologies"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: siteConfig.locale, url: "/", siteName: siteConfig.name, title: `${siteConfig.name} | Digital Engineering`, description: siteConfig.description },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} | Digital Engineering`, description: siteConfig.description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><OrganizationJsonLd />{children}</body>
    </html>
  );
}
