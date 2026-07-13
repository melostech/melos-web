import {
  caseStudies,
  expertise,
  services,
  stats,
  whyChoose,
} from "@/app/data/landingContent";
import { CaseStudyCard } from "@/app/components/CaseStudyCard";
import { Navigation } from "@/app/components/Navigation";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ServiceCard } from "@/app/components/ServiceCard";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const partnerNames = ["SaaS", "Fintech", "Health", "Commerce", "AI Products", "Enterprise"];
const techStack = ["React", "Next.js", "TypeScript", "Django", "Flutter", "Python", "AWS", "Azure", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100">
      <Navigation />

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(198,100,100,0.18),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(15,23,42,0.96))] p-8 shadow-2xl shadow-black/30 sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C66464]">
              Engineering capacity for ambitious product companies
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Senior, AI-leveraged engineering teams plugged into your product in two weeks.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              We build high-performance software with architectural discipline for startups, scale-ups, and regulated teams that need to move fast without compromising quality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#C66464] px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:opacity-90">
                Book a 30-min call
                <ArrowIcon />
              </a>
              <a href="#services" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#C66464] hover:text-white">
                Explore services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {partnerNames.map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="How we plug into your team"
            title="Most engagements fall into one of these six shapes."
            description="We combine senior engineering depth with clear delivery structure so your roadmap stays on track and your product keeps moving."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#C66464]">Why build with Melos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                We bring senior technical judgment to fast-moving teams without the hiring bottleneck.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Whether you need to launch a product, modernize an existing platform, or harden an enterprise workflow, the work is shaped by product clarity and engineering rigor.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Our portfolio of success."
            description="We build for startups, product teams, and enterprise systems where technical reliability matters."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.name}
                name={study.name}
                category={study.category}
                problem={study.problem}
                solution={study.solution}
                impact={study.impact}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-6 rounded-[32px] border border-white/10 bg-[#111827]/80 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#C66464]">By the numbers</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Delivering high-performance software with engineering rigor and clear execution.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-semibold text-[#C66464]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Technologies"
            title="The stack we use to build reliable digital products."
            description="From frontend systems to backend infrastructure and AI workflows, we bring the right tools to the job without overcomplicating the architecture."
          />
          <div className="mt-12 flex flex-wrap gap-3">
            {techStack.map((tool) => (
              <span key={tool} className="rounded-full border border-[#C66464]/30 bg-[#C66464]/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-[#C66464]">
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
          <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#C66464]">Get in touch</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Let’s talk about the system your business needs next.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Share your technical requirements and we’ll outline the most effective path from concept to delivery.
              </p>
              <div className="mt-8 space-y-3 text-slate-300">
                <p>melostechsolution@gmail.com</p>
                <p>+251 900 000 000</p>
                <p>Addis Ababa · Remote-first delivery</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-8">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#0F172A] px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Project domain</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#0F172A] px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Finance, healthcare, e-commerce..." />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Technical requirement</label>
                  <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-[#0F172A] px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Describe the platform, integrations, or automation you need." />
                </div>
                <button className="rounded-full bg-[#C66464] px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:opacity-90">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#020617]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Melos Software. Engineering rigor for scalable digital ecosystems.</p>
          <div className="flex gap-4">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
