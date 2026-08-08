import { processSteps } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function ProcessInteractive() {
  return (
    <section className="section-padding section-spacing section-band">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">How to join</p>
        <h2 className="heading-lg mb-4">Your path to membership</h2>
        <p className="text-ink-soft max-w-2xl mb-12 leading-relaxed">
          Five steps from finding a chapter to building your referral network across Greater Houston.
        </p>
      </Reveal>

      <RevealStagger className="section-container grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {processSteps.map((step, index) => (
          <RevealItem key={step.title}>
            <div className="pro-card p-5 h-full">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate text-xs font-semibold text-brand-light mb-4">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-slate">{step.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mt-2">{step.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
