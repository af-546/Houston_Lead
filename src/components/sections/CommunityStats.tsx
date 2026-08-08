import { communityStats } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function CommunityStats() {
  return (
    <section className="section-band-dark section-padding section-spacing-sm">
      <Reveal className="section-container text-center mb-10">
        <p className="eyebrow mb-4 text-brand-light">Our reach</p>
        <h2 className="heading-lg mb-4 text-ink-inverse">A network built to scale your business</h2>
        <p className="text-ink-inverse-soft max-w-xl mx-auto leading-relaxed">
          From chapter meetings to social platforms and email—Houston LEAD puts your business
          in front of engaged professionals.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {communityStats.map((stat) => (
          <RevealItem key={stat.label}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 text-center">
              <p className="stat-value text-brand-light">{stat.value}</p>
              <p className="text-sm text-ink-inverse-soft mt-2">{stat.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
