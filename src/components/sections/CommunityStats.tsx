import { communityStats } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function CommunityStats() {
  return (
    <section className="section-band section-padding section-spacing-sm">
      <Reveal className="section-container text-center mb-12">
        <p className="eyebrow mb-4">Our reach</p>
        <h2 className="heading-lg mb-4">A network built to scale your business</h2>
        <p className="text-ink-soft max-w-xl mx-auto">
          From chapter meetings to social platforms and email—Houston LEAD puts your business
          in front of engaged professionals.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {communityStats.map((stat) => (
          <RevealItem key={stat.label}>
            <div className="glass-panel rounded-2xl p-6 md:p-8 text-center hover:border-brand-light/25 transition-colors">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-ink-soft mt-2">{stat.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
