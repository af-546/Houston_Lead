import { chapterAreas } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="section-band section-padding section-spacing-sm">
      <Reveal className="section-container">
        <p className="font-mono text-xs text-ink-muted uppercase tracking-wider text-center mb-3">
          Across Greater Houston
        </p>
        <p className="text-sm text-ink-soft text-center mb-12 max-w-md mx-auto">
          Chapters from The Woodlands to Clear Lake, Katy to Pearland—and everywhere in between.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {chapterAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 rounded-full glass-panel text-sm text-ink-soft hover:text-brand-light hover:border-brand-light/30 transition-all duration-300"
            >
              {area}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
