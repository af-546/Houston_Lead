import { chapterAreas } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="section-padding section-spacing-sm">
      <Reveal className="section-container">
        <p className="eyebrow text-center mb-3">Across Greater Houston</p>
        <p className="text-sm text-ink-soft text-center mb-10 max-w-lg mx-auto leading-relaxed">
          Chapters from The Woodlands to Clear Lake, Katy to Pearland—and everywhere in between.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {chapterAreas.map((area) => (
            <span key={area} className="pill">
              {area}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
