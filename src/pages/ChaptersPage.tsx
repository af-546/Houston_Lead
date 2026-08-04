import { useState, useMemo } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { chapters, chapterAreas } from "@/data/chapters";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function ChaptersPage() {
  usePageTitle("Chapters", "Find a Houston LEAD chapter near you");
  const [areaFilter, setAreaFilter] = useState("All");

  const filtered = useMemo(() => {
    if (areaFilter === "All") return chapters;
    return chapters.filter((c) => c.area === areaFilter);
  }, [areaFilter]);

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4">Find a chapter</p>
          <h1 className="heading-xl mb-6">22+ chapters across Greater Houston</h1>
          <p className="text-ink-soft text-lg max-w-2xl leading-relaxed">
            Find a chapter near your office or target area. Breakfast, lunch, and afternoon
            meetings throughout the week.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setAreaFilter("All")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              areaFilter === "All"
                ? "bg-brand/20 text-brand-light border border-brand/30"
                : "glass-panel text-ink-soft hover:text-ink"
            }`}
          >
            All areas
          </button>
          {chapterAreas.map((area) => (
            <button
              key={area}
              onClick={() => setAreaFilter(area)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                areaFilter === area
                  ? "bg-brand/20 text-brand-light border border-brand/30"
                  : "glass-panel text-ink-soft hover:text-ink"
              }`}
            >
              {area}
            </button>
          ))}
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {filtered.map((chapter) => (
            <RevealItem key={chapter.slug}>
              <div className="glass-panel rounded-2xl p-6 h-full hover:border-brand-light/25 transition-colors">
                <span className="font-mono text-xs text-brand-light uppercase tracking-wider">
                  {chapter.area}
                </span>
                <h2 className="font-display font-semibold text-lg mt-2">{chapter.name}</h2>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-ink-soft">
                    <span className="text-ink-muted">When:</span> {chapter.day} · {chapter.time}
                  </p>
                  <p className="text-ink-soft">
                    <span className="text-ink-muted">Where:</span> {chapter.venue}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="glass-panel rounded-2xl p-8 text-center mb-20">
          <p className="text-ink-soft">
            Interested in starting a chapter in your area?{" "}
            <a href="mailto:info@houstonlead.com" className="text-brand-light hover:underline">
              Email info@houstonlead.com
            </a>
          </p>
        </Reveal>

        <ContactCTA />
      </div>
    </div>
  );
}
