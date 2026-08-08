import { useState } from "react";
import { useApp } from "@/context/AppContext";

export function NewsletterForm({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const { addToast } = useApp();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToast("Subscribed! Welcome to the newsletter.", "success");
    setEmail("");
  };

  const inputClass =
    variant === "dark"
      ? "flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-ink-inverse placeholder:text-ink-inverse-soft/60 outline-none focus:border-brand-light"
      : "flex-1 bg-white border border-slate/15 rounded-md px-4 py-3 text-sm outline-none focus:border-brand";

  return (
    <form onSubmit={submit} className={`flex gap-3 ${className}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={inputClass}
      />
      <button type="submit" className="btn-primary text-sm py-3 px-5 shrink-0">
        Subscribe
      </button>
    </form>
  );
}
