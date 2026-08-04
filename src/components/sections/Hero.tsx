import { MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { HeroVideo } from "@/components/sections/HeroVideo";

export function Hero() {
  return (
    <section className="hero-section relative min-h-[88svh] flex items-center section-padding pt-28 pb-12 overflow-x-hidden">
      <div className="section-container w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-3">{site.acronym}</p>
            <p className="text-sm text-ink-muted mb-6">{site.subtitle}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-xl mb-6">
              Connect. Collaborate.{" "}
              <span className="text-gradient">Grow together.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-ink-soft max-w-lg mb-10 leading-relaxed">
              {site.description} Join like-minded professionals for meaningful conversations
              and powerful networking that elevate your business to the next level.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <MagneticLink to="/apply" className="btn-primary">
                Join us →
              </MagneticLink>
              <MagneticLink to="/chapters" className="btn-ghost">
                Find a chapter
              </MagneticLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <HeroVideo />
        </Reveal>
      </div>
    </section>
  );
}
