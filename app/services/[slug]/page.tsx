import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/app/components/layout/Footer";
import { Navbar } from "@/app/components/layout/Navbar";
import { Card, Container } from "@/app/components/ui";
import { getServiceBySlug, services } from "@/app/data/landingContent";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <div className="min-h-screen bg-[#070b14] pt-32 text-slate-100">
    <Navbar />
    <main className="pb-24">
      <Container>
        <Link href="/services" className="text-sm font-semibold text-teal-300">
          ← All services
        </Link>
        <p className="mt-12 text-[11px] font-bold uppercase tracking-[.26em] text-teal-300">
          Service</p><h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white">
          {service.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {service.description}</p><Card className="mt-12 max-w-3xl p-8"><h2 className="text-xl font-semibold text-white">
            What this can include
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {service.features.map((feature) => <li key={feature} className="rounded-xl bg-white/5 p-4 text-sm text-slate-300">{feature}</li>)}
          </ul>
          <Link href="/#contact" className="mt-8 inline-block rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950">
            Discuss your project →
          </Link>
        </Card>
      </Container>
    </main>
    <Footer />
  </div>;
}
