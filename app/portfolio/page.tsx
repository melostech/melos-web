import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Container, SectionHeading, Card } from "@/app/components/ui";
import { caseStudies } from "@/app/data/landingContent";

export const metadata = {
  title: "Portfolio",
  description: "Explore our past projects and case studies.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pt-32">
      <Navbar />
      <main className="pb-24">
        <Container>
          <SectionHeading 
            eyebrow="Case Studies" 
            title="Our Portfolio" 
            description="Discover how we've helped businesses transform their operations through thoughtful engineering and product design."
            align="center"
          />
          
          <div className="mt-20 space-y-12">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="overflow-hidden p-8 lg:p-12">
                <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="text-sm font-bold tracking-widest text-teal-400 uppercase">{study.category}</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">{study.name}</h3>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">The Problem</h4>
                      <p className="mt-2 text-lg leading-relaxed text-slate-300">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">The Solution</h4>
                      <p className="mt-2 text-lg leading-relaxed text-slate-300">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400">The Impact</h4>
                      <p className="mt-2 text-lg font-medium leading-relaxed text-white">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
