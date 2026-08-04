import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";

import { LogoLink } from "@/components/ui/Logo";

const links = [
  { to: "/chapters", label: "Chapters" },
  { to: "/membership", label: "Membership" },
  { to: "/about", label: "About" },
];

const exploreLinks = [
  { to: "/professionals", label: "Find a Professional" },
  { to: "/events", label: "Events" },
  { to: "/sponsorships", label: "Sponsorships" },
];

export function Navbar() {
  const { setMenuOpen } = useApp();
  const location = useLocation();
  const scrollToTopOnClick = useScrollToTopOnClick();
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExploreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const exploreActive = exploreLinks.some((l) => location.pathname.startsWith(l.to));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-bar ${
        scrolled ? "nav-bar-scrolled py-3" : "py-5"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <LogoLink onClick={scrollToTopOnClick("/")} />

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setExploreOpen((open) => !open)}
              onMouseEnter={() => setExploreOpen(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                exploreActive
                  ? "text-brand-light bg-brand/10"
                  : "text-ink-soft hover:text-ink hover:bg-white/5"
              }`}
              data-cursor="pointer"
              aria-expanded={exploreOpen}
              aria-haspopup="true"
            >
              Explore
              <span className={`text-xs transition-transform ${exploreOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {exploreOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 nav-dropdown py-2"
                onMouseLeave={() => setExploreOpen(false)}
              >
                {exploreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={scrollToTopOnClick(link.to)}
                    className="block px-4 py-2.5 text-sm text-ink-soft hover:text-brand-light hover:bg-white/5"
                    data-cursor="pointer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={scrollToTopOnClick(link.to)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? "text-brand-light bg-brand/10"
                  : "text-ink-soft hover:text-ink hover:bg-white/5"
              }`}
              data-cursor="pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/apply"
            onClick={scrollToTopOnClick("/apply")}
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            data-cursor="pointer"
          >
            Apply now
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-lg glass-panel flex flex-col items-center justify-center gap-1"
            aria-label="Menu"
            data-cursor="pointer"
          >
            <span className="w-5 h-[2px] bg-ink rounded-full" />
            <span className="w-5 h-[2px] bg-ink rounded-full" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
