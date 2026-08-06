import { Container, SectionHeading } from "@/app/components/ui";
import { Reveal } from "@/app/components/motion/Reveal";
import { ServiceExperience } from "@/app/components/sections/ServiceExperience";

export function ServicesSection() {
  return <section id="services" className="py-20">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="How we plug into your team" title="Engineering capabilities that compound." description="We combine senior engineering depth with clear delivery structure so your roadmap stays on track and your product keeps moving." />
      </Reveal>
      <Reveal delay={.12}><ServiceExperience /></Reveal>
    </Container>
  </section>;
}
