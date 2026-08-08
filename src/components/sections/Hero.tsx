import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { HeroVideo } from "@/components/sections/HeroVideo";

export function Hero() {
  return (
    <section className="relative min-h-[85svh] flex items-center section-padding pt-28 pb-14 border-b border-slate/5">
      <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-3">{site.acronym}</p>
            <p className="text-sm font-medium text-ink-muted mb-5">{site.subtitle}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-xl mb-6">
              Connect. Collaborate.{" "}
              <span className="text-brand-dark underline decoration-brand-light decoration-[3px] underline-offset-4">
                Grow together.
              </span>
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
              <a href={`mailto:${site.email}?subject=Membership%20Inquiry`} className="btn-primary">
                Join us
              </a>
              <a href={`mailto:${site.email}?subject=Chapter%20Inquiry`} className="btn-ghost">
                Find a chapter
              </a>
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
