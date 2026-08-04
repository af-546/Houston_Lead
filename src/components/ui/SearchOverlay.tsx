import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { chapters } from "@/data/chapters";
import { benefits } from "@/data/benefits";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Chapters", path: "/chapters" },
  { label: "Membership", path: "/membership" },
  { label: "Find a Professional", path: "/professionals" },
  { label: "Events", path: "/events" },
  { label: "Sponsorships", path: "/sponsorships" },
  { label: "Apply", path: "/apply" },
  { label: "Contact", path: "/contact" },
];

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return [];
    const items: { label: string; path: string; type: string }[] = [];
    pages.forEach((p) => {
      if (p.label.toLowerCase().includes(q))
        items.push({ label: p.label, path: p.path, type: "Page" });
    });
    chapters.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.area.toLowerCase().includes(q))
        items.push({ label: c.name, path: "/chapters", type: "Chapter" });
    });
    benefits.forEach((b) => {
      if (b.title.toLowerCase().includes(q))
        items.push({ label: b.title, path: "/membership", type: "Benefit" });
    });
    return items.slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [searchOpen, setSearchOpen]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-void/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden shadow-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chapters, pages, benefits..."
              className="w-full bg-transparent px-5 py-4 outline-none border-b border-white/10 text-ink placeholder:text-ink-muted"
            />
            <ul className="max-h-72 overflow-y-auto py-2">
              {query && results.length === 0 ? (
                <li className="px-5 py-3 text-sm text-ink-muted">No results</li>
              ) : (
                results.map((item) => (
                  <li key={`${item.path}-${item.label}`}>
                    <Link
                      to={item.path}
                      onClick={() => setSearchOpen(false)}
                      className="block px-5 py-3 text-sm text-ink-soft hover:bg-white/5 hover:text-brand-light transition-colors"
                    >
                      <span className="text-ink-muted text-xs mr-2">{item.type}</span>
                      {item.label}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
