import { site } from "@/data/site";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";
import { LogoLink } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  const scrollToTopOnClick = useScrollToTopOnClick();

  return (
    <footer className="mt-16 bg-slate text-ink-inverse">
      <div className="section-padding py-14">
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <LogoLink onClick={scrollToTopOnClick("/")} imageClassName="h-12 w-auto" variant="dark" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-light">
              {site.acronym}
            </p>
            <p className="mt-2 text-sm text-ink-inverse-soft">{site.subtitle}</p>
            <p className="mt-4 text-sm text-ink-inverse-soft/90 leading-relaxed">{site.description}</p>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="text-brand-light hover:underline"
              >
                {site.email}
              </a>
            </p>
            <div className="mt-6">
              <SocialLinks theme="dark" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-ink-inverse-soft">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-4">
              Stay updated
            </h4>
            <p className="text-sm text-ink-inverse-soft mb-4">Sign up and stay updated!</p>
            <NewsletterForm className="flex-col" variant="dark" />
          </div>
        </div>

        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-ink-inverse-soft/80">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <a href={site.webSupportUrl} className="hover:text-brand-light transition-colors">
            Web Support
          </a>
        </div>
      </div>
    </footer>
  );
}
