import Link from "next/link";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Container, SectionHeading, Card } from "@/app/components/ui";
import { caseStudies } from "@/app/data/landingContent";

export const metadata = { title: "Portfolio", description: "Verified Melos Technologies project and case-study information." };

export default function PortfolioPage() {
  return <div className="min-h-screen bg-[#070b14] pt-32 text-slate-100"><Navbar /><main className="pb-24"><Container><SectionHeading eyebrow="Case Studies" title="Our Portfolio" description="Verified project information will be added as it becomes available." align="center" /><div className="mt-20 space-y-12">{caseStudies.length ? caseStudies.map((study) => <Card key={study.id} className="overflow-hidden p-8 lg:p-12"><p className="text-sm font-bold uppercase tracking-widest text-teal-400">{study.category}</p><h2 className="mt-2 text-3xl font-semibold text-white">{study.title}</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">{study.description}</p></Card>) : <Card className="p-8 text-center"><p className="text-slate-300">No verified case studies have been published yet.</p><Link href="/#contact" className="mt-5 inline-block text-sm font-semibold text-teal-300">Start a conversation →</Link></Card>}</div></Container></main><Footer /></div>;
}
