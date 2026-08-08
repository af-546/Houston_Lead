import { principles } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function StudioHighlights() {
  const highlights = principles.slice(0, 3);

  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container mb-10">
        <p className="eyebrow mb-4">Why Houston LEAD</p>
        <h2 className="heading-lg">Empower Growth</h2>
      </Reveal>
      <RevealStagger className="section-container grid md:grid-cols-3 gap-5">
        {highlights.map((item, index) => (
          <RevealItem key={item.title}>
            <div className="pro-card p-6 md:p-7 h-full">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-subtle text-sm font-semibold text-brand-dark mb-4">
                {index + 1}
              </span>
              <h3 className="font-display font-semibold text-lg mb-2 text-slate">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
