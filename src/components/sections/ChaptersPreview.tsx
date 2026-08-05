import { chapters } from "@/data/chapters";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function ChaptersPreview() {
  const featured = chapters.filter((c) => c.featured).slice(0, 6);

  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container mb-12">
        <p className="eyebrow mb-4">Find a chapter</p>
        <h2 className="heading-lg mb-4">22+ chapters across Houston</h2>
        <p className="text-ink-soft max-w-xl">
          Breakfast, lunch, and afternoon meetings across Greater Houston. Find one near
          your office or target market.
        </p>
      </Reveal>

      <RevealStagger className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((chapter) => (
          <RevealItem key={chapter.slug}>
            <div className="glass-panel rounded-2xl p-6 h-full">
              <span className="font-mono text-xs text-brand-light uppercase tracking-wider">
                {chapter.area}
              </span>
              <h3 className="font-display font-semibold text-lg mt-2">{chapter.name}</h3>
              <div className="mt-4 space-y-1 text-sm text-ink-soft">
                <p>{chapter.day} · {chapter.time}</p>
                <p className="text-ink-muted">{chapter.venue}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
