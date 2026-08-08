import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function CookieConsent() {
  const { cookiesAccepted, acceptCookies } = useApp();

  if (cookiesAccepted !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[90] pro-card p-6 shadow-cardHover"
      >
        <p className="text-sm text-ink-soft mb-4 leading-relaxed">
          We use cookies to improve your experience and analyze site traffic.
        </p>
        <div className="flex gap-3">
          <button onClick={acceptCookies} className="btn-primary text-sm py-2.5 px-5">
            Accept
          </button>
          <button onClick={acceptCookies} className="btn-ghost text-sm py-2.5 px-5">
            Decline
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
