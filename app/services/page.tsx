import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Container, SectionHeading, Card } from "@/app/components/ui";
import { services } from "@/app/data/landingContent";

export const metadata = {
  title: "Our Services",
  description: "End-to-end digital engineering services tailored to your operational realities.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pt-32">
      <Navbar />
      <main className="pb-24">
        <Container>
          <SectionHeading 
            eyebrow="What We Do" 
            title="Engineering Capabilities" 
            description="We provide end-to-end digital engineering services tailored to your operational realities and product goals. Our teams specialize in translating complex business requirements into dependable, high-performing systems."
            align="center"
          />
          
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card key={idx} className="flex h-full flex-col p-8 transition-transform hover:-translate-y-1">
                <div className="mb-6 h-12 w-12 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-300 font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-400 flex-grow">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
