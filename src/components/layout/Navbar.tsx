import { LogoLink } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";
import { useEffect, useState } from "react";

export function Navbar() {
  const scrollToTopOnClick = useScrollToTopOnClick();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 nav-bar ${
        scrolled ? "nav-bar-scrolled py-3" : "py-4"
      }`}
    >
      <div className="section-padding flex items-center justify-between gap-4">
        <LogoLink onClick={scrollToTopOnClick("/")} />

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`mailto:${site.email}`}
            className="hidden sm:inline text-sm font-medium text-ink-soft hover:text-slate transition-colors"
          >
            {site.email}
          </a>
          <a href={`mailto:${site.email}`} className="btn-primary text-sm py-2.5 px-5">
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
}
