import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Container, SectionHeading } from "@/app/components/ui";

export const metadata = {
  title: "About Us",
  description: "Learn about Melos Technologies and our mission to build powerful software products.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pt-32">
      <Navbar />
      <main className="pb-24">
        <Container>
          <SectionHeading eyebrow="Our Mission" title="About Melos Technologies" align="center" />
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Melos Technologies is a forward-thinking software development company dedicated to building high-quality, scalable, and user-centric digital solutions. We help businesses transform ideas into powerful software products through expert engineering, creative problem-solving, and long-term partnership.
              </p>
              <p>
                Founded on the principles of disciplined architecture and operational reliability, we don't just write code—we build systems that grow alongside your business. From enterprise workflows to modern AI integrations, our focus is always on delivering measurable technical advantage.
              </p>
              <p>
                Our teams are structured to eliminate the friction between business goals and technical execution. By prioritizing direct communication and product-minded engineering, we ensure that every solution we ship creates genuine value.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="text-lg font-bold text-teal-400">01</span>
                  <div>
                    <h4 className="font-semibold text-white">Senior-only delivery teams</h4>
                    <p className="mt-1 text-sm text-slate-400">Every engagement is staffed with experienced engineers who own the work and guide the architecture.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-lg font-bold text-teal-400">02</span>
                  <div>
                    <h4 className="font-semibold text-white">Product-minded execution</h4>
                    <p className="mt-1 text-sm text-slate-400">We align engineering decisions with growth, reliability, and the realities of your operating model.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-lg font-bold text-teal-400">03</span>
                  <div>
                    <h4 className="font-semibold text-white">Clear technical leadership</h4>
                    <p className="mt-1 text-sm text-slate-400">From system design to rollout, the work is shaped by structured engineering judgment and precision.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
