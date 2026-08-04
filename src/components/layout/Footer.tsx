import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { FooterPreferences } from "@/components/layout/FooterPreferences";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";

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
            <Link
              to="/"
              onClick={scrollToTopOnClick("/")}
              className="font-display text-2xl font-bold"
              data-cursor="pointer"
            >
              <span className="text-gradient">Houston</span>
              <span className="text-ink"> LEAD</span>
            </Link>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed">{site.description}</p>
            <p className="mt-4 text-sm text-ink-muted">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-light transition-colors"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-ink-muted">{site.address.city}</p>
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
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>{site.hours.label}</li>
              <li>{site.hours.time}</li>
              <li className="pt-2">
                <Link
                  to="/apply"
                  onClick={scrollToTopOnClick("/apply")}
                  className="text-brand-light hover:underline"
                  data-cursor="pointer"
                >
                  Apply for membership →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Houston LEAD. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
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
