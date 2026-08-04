import { benefits } from "@/data/benefits";
import { TiltCard } from "@/components/ui/MagneticButton";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function BenefitsBento() {
  return (
    <section className="section-padding section-spacing section-band">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">Member benefits</p>
        <h2 className="heading-lg mb-4">More than networking.</h2>
        <p className="text-ink-soft max-w-xl mb-14">
          Houston LEAD provides a strategic environment for business growth, professional
          development, and peer collaboration. We call this Empower Growth.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
        {benefits.map((benefit) => (
          <RevealItem key={benefit.slug} className="h-full">
            <TiltCard className="h-full">
              <div className="bento-card flex flex-col h-full min-h-[280px] group">
                <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center mb-5 text-brand-light text-xl">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold group-hover:text-gradient transition-all">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed flex-1">
                  {benefit.tagline}
                </p>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
