import Link from "next/link";
import { Card, Container, SectionHeading } from "@/app/components/ui";
import { Reveal } from "@/app/components/motion/Reveal";
import { caseStudies } from "@/app/data/landingContent";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected engagements"
            title="Work shaped around real operational stakes."
            description="Verified project information will be published here as it becomes available."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.length ? (
            caseStudies.map((study, index) => (
              <Reveal
                key={study.id}
                delay={index * 0.08}
                direction={index % 2 ? "right" : "left"}
              >
                <Card className="h-full p-7 transition hover:border-violet-300/30">
                  <p className="text-[11px] font-bold uppercase tracking-[.2em] text-violet-300">
                    {study.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-7 text-sm leading-6 text-slate-400">
                    {study.description}
                  </p>
                </Card>
              </Reveal>
            ))
          ) : (
            <Card className="p-7 lg:col-span-3">
              <p className="text-slate-300">
                Case studies are being prepared.
                <Link href="/#contact" className="text-teal-300 underline underline-offset-4">
                  Contact Melos
                </Link>
                to discuss your project.
              </p>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}