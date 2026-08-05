import { motion } from "framer-motion";
import { LogoLink } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { useScrollToTopOnClick } from "@/hooks/useScrollToTopOnClick";
import { useEffect, useState } from "react";

export function Navbar() {
  const scrollToTopOnClick = useScrollToTopOnClick();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <a
          href={`mailto:${site.email}`}
          className="btn-primary text-sm py-2.5 px-5"
          data-cursor="pointer"
        >
          Contact us
        </a>
      </div>
    </motion.header>
  );
}
