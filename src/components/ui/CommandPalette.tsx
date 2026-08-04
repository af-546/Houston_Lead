import { useEffect, useState, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { scrollToTop } from "@/lib/scrollToTop";

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

export function CommandPalette() {
  const { commandOpen, setCommandOpen } = useApp();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = useCallback(
    (path: string) => {
      setCommandOpen(false);
      if (pathname === path) {
        scrollToTop();
        return;
      }
      navigate(path);
    },
    [navigate, pathname, setCommandOpen],
  );

  const items = useMemo(() => {
    const q = query.toLowerCase();
    const all = pages.map((p) => ({ ...p, type: "page" as const }));
    if (!q) return all;
    return all.filter((i) => i.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (commandOpen) {
      setQuery("");
      setSelected(0);
    }
  }, [commandOpen]);

  useEffect(() => {
    if (!commandOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, items.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && items[selected]) {
        e.preventDefault();
        goTo(items[selected].path);
      }
      if (e.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [commandOpen, items, selected, goTo, setCommandOpen]);

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-void/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setCommandOpen(false)}
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
              onChange={(e) => {
                setQuery(e.target.value);
                setSelected(0);
              }}
              placeholder="Search pages..."
              className="w-full bg-transparent px-5 py-4 outline-none border-b border-white/10 text-ink placeholder:text-ink-muted"
            />
            <ul className="max-h-72 overflow-y-auto py-2">
              {items.length === 0 ? (
                <li className="px-5 py-3 text-sm text-ink-muted">No results</li>
              ) : (
                items.map((item, i) => (
                  <li key={item.path}>
                    <button
                      onClick={() => goTo(item.path)}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                        i === selected ? "bg-brand/15 text-brand-light" : "text-ink-soft hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
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
