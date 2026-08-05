import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState("");

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
              placeholder="Search..."
              className="w-full bg-transparent px-5 py-4 outline-none border-b border-white/10 text-ink placeholder:text-ink-muted"
            />
            <p className="px-5 py-4 text-sm text-ink-muted">
              {query ? "No results on this page." : "Single-page site — scroll to explore."}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
