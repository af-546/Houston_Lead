import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { membershipTiers } from "@/data/membership";
import { Reveal } from "@/components/ui/Reveal";
import { useApp } from "@/context/AppContext";

export function ApplyPage() {
  usePageTitle("Apply", "Apply for Houston LEAD membership");
  const { addToast } = useApp();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    chapter: "",
    tier: "basic",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    addToast("Application submitted! We'll be in touch soon.", "success");
  };

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container max-w-3xl">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4">Apply</p>
          <h1 className="heading-xl mb-6">Join Houston LEAD</h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Discover LEAD benefits and apply for membership. We'll connect you with a chapter
            and guide you through the next steps.
          </p>
          <p className="text-sm text-ink-muted mt-4">
            Review{" "}
            <Link to="/membership" className="text-brand-light hover:underline">
              membership levels
            </Link>{" "}
            before applying.
          </p>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="glass-panel rounded-2xl p-10 text-center">
              <span className="text-4xl mb-4 block text-brand-light">✓</span>
              <h2 className="heading-md mb-2">Application received</h2>
              <p className="text-ink-soft">
                Thank you for applying. A Houston LEAD representative will contact you shortly.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.05}>
            <form onSubmit={submit} className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
                />
                <input
                  required
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
                />
              </div>
              <input
                type="text"
                placeholder="Preferred chapter (optional)"
                value={form.chapter}
                onChange={(e) => setForm({ ...form, chapter: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
              />
              <select
                value={form.tier}
                onChange={(e) => setForm({ ...form, tier: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40 text-ink-soft"
              >
                {membershipTiers.map((tier) => (
                  <option key={tier.slug} value={tier.slug} className="bg-abyss">
                    {tier.name} — ${tier.price}/year
                  </option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your business and networking goals (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40 resize-none"
              />
              <button type="submit" className="btn-primary w-full" data-cursor="pointer">
                Submit application
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </div>
  );
}
