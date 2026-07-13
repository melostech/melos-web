import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melos Software | Scalable Digital Engineering",
  description: "Melos Software builds modern digital ecosystems with engineering rigor, premium architecture, and scalable delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
