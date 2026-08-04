import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { FooterPreferences } from "@/components/layout/FooterPreferences";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";
import { LogoLink } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const exploreLinks = [
  { to: "/chapters", label: "Chapters" },
  { to: "/professionals", label: "Find a Professional" },
  { to: "/events", label: "Events" },
  { to: "/sponsorships", label: "Sponsorships" },
];

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/apply", label: "Apply" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTopOnClick = useScrollToTopOnClick();
  return (
    <footer className="relative mt-12 bg-abyss/50">
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent via-void/40 to-abyss/50"
        aria-hidden
      />
      <div className="section-padding py-14">
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
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
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={scrollToTopOnClick(l.to)}
                    className="text-sm text-ink-soft hover:text-brand-light transition-colors"
                    data-cursor="pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={scrollToTopOnClick(l.to)}
                    className="text-sm text-ink-soft hover:text-brand-light transition-colors"
                    data-cursor="pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Stay updated
            </h4>
            <p className="text-sm text-ink-soft mb-4">Sign up and stay updated!</p>
            <NewsletterForm className="flex-col" />
            <ul className="space-y-2 text-sm text-ink-soft mt-6">
              <li>{site.hours.label}</li>
              <li>{site.hours.time}</li>
              <li className="pt-2">
                <Link
                  to="/apply"
                  onClick={scrollToTopOnClick("/apply")}
                  className="text-brand-light hover:underline"
                  data-cursor="pointer"
                >
                  Join us →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href={site.webSupportUrl} className="hover:text-brand-light transition-colors">
              Web Support
            </a>
            <FooterPreferences />
            <Link to="/privacy" onClick={scrollToTopOnClick("/privacy")} className="hover:text-brand-light transition-colors">
              Privacy
            </Link>
            <Link to="/terms" onClick={scrollToTopOnClick("/terms")} className="hover:text-brand-light transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
