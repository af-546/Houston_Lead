import { capabilities } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesMarquee() {
  return (
    <section className="section-band section-padding py-8 border-b border-slate/5">
      <Reveal className="section-container">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-muted mb-5">
          What members gain
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {capabilities.map((cap) => (
            <span key={cap} className="pill font-medium text-slate">
              {cap}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
