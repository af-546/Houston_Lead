import { site } from "@/data/site";
import { FooterPreferences } from "@/components/layout/FooterPreferences";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";
import { LogoLink } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  const scrollToTopOnClick = useScrollToTopOnClick();

  return (
    <footer className="relative mt-12 bg-abyss/50">
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent via-void/40 to-abyss/50"
        aria-hidden
      />
      <div className="section-padding py-14">
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <LogoLink onClick={scrollToTopOnClick("/")} imageClassName="h-12 w-auto" />
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-brand-light">
              {site.acronym}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{site.subtitle}</p>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed">{site.description}</p>
            <p className="mt-4 text-sm text-ink-muted">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-light transition-colors"
              >
                {site.email}
              </a>
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>{site.hours.label}</li>
              <li>{site.hours.time}</li>
              <li className="pt-2">
                <a href={`mailto:${site.email}`} className="text-brand-light hover:underline">
                  Email us →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Stay updated
            </h4>
            <p className="text-sm text-ink-soft mb-4">Sign up and stay updated!</p>
            <NewsletterForm className="flex-col" />
          </div>
        </div>

        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href={site.webSupportUrl} className="hover:text-brand-light transition-colors">
              Web Support
            </a>
            <FooterPreferences />
          </div>
        </div>
      </div>
    </footer>
  );
}
