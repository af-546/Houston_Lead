import { Link } from "react-router-dom";
import { quickLinks } from "@/data/site";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/MagneticButton";

export function QuickLinks() {
  return (
    <section className="section-band section-padding section-spacing-sm">
      <RevealStagger className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {quickLinks.map((link) => (
          <RevealItem key={link.to}>
            <TiltCard>
              <Link
                to={link.to}
                className="bento-card block h-full min-h-[220px] group"
                data-cursor="pointer"
              >
                <span className="text-brand-light text-2xl">{link.icon}</span>
                <h3 className="font-display text-xl font-bold mt-4 group-hover:text-gradient transition-all">
                  {link.title}
                </h3>
                <p className="text-sm text-ink-soft mt-3 leading-relaxed flex-1">{link.description}</p>
                <span className="inline-flex items-center gap-1 mt-5 pt-4 border-t border-white/5 text-sm text-brand-light">
                  Explore →
                </span>
              </Link>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
