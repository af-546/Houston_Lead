import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function ToastContainer() {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed top-20 right-6 z-[150] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`pointer-events-auto pro-card px-5 py-3 flex items-center gap-3 min-w-[280px] border-l-4 ${
              toast.type === "success"
                ? "border-l-brand"
                : toast.type === "error"
                  ? "border-l-accent"
                  : "border-l-slate/40"
            }`}
          >
            <p className="flex-1 text-sm text-slate">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-ink-muted hover:text-slate text-xs"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
