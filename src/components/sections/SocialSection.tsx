import { socialLinks, socialCommunities } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MagneticLink } from "@/components/ui/MagneticButton";

export function SocialSection() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container mb-12 text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Stay connected</p>
        <h2 className="heading-lg mb-4">Follow Houston LEAD</h2>
        <p className="text-ink-soft leading-relaxed">
          Houston LEAD is making waves across social media—follow us for community updates,
          events, and networking opportunities across Greater Houston.
        </p>
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </Reveal>

      <RevealStagger className="section-container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socialCommunities.map((community) => (
          <RevealItem key={community.href}>
            <a
              href={community.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-xl px-5 py-4 block h-full hover:border-brand-light/30 transition-all duration-300 hover:-translate-y-0.5"
              data-cursor="pointer"
            >
              <p className="font-display font-semibold text-sm text-ink">{community.name}</p>
              <p className="text-xs text-brand-light mt-2">Facebook →</p>
            </a>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="section-container mt-10 text-center">
        <MagneticLink to="/contact" className="btn-ghost">
          Questions? Contact us →
        </MagneticLink>
      </Reveal>
    </section>
  );
}

export function SocialSectionCompact() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-soft">Follow us on social media</p>
      <SocialLinks />
      <ul className="space-y-2 pt-2">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-soft hover:text-brand-light transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
