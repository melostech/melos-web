import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Container, SectionHeading } from "@/app/components/ui";
import { engineeringPrinciples } from "@/app/data/landingContent";

export const metadata = { title: "About Us", description: "Learn about Melos Technologies PLC and our practical approach to digital product engineering." };

export default function AboutPage() {
  return <div className="min-h-screen bg-[#070b14] pt-32 text-slate-100">
    <Navbar />
    <main className="pb-24">
      <Container>
        <SectionHeading eyebrow="Our Mission" title="About Melos Technologies" align="center" />
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              Melos Technologies PLC is a technology and software development company based in Addis Ababa, Ethiopia.
            </p>
            <p>
              We design and build practical digital solutions for businesses and individuals, from user-facing experiences to the systems behind them.
            </p>
            <p>Technology should make work simpler, not more complicated. We build the simplest reliable solution that solves the real problem.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-xl font-bold text-white">
              How we work
            </h2><ul className="mt-8 space-y-6">{engineeringPrinciples.slice(0, 3).map((item, index) =>
              <li key={item.title} className="flex gap-4">
                <span className="text-lg font-bold text-teal-400">0{index + 1}
                </span><div><h3 className="font-semibold text-white">{item.title}
                </h3><p className="mt-1 text-sm text-slate-400">{item.description}
                  </p>
                </div>
              </li>)}
            </ul>
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </div>;
}
