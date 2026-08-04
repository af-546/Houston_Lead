import { useState } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

const categories = [
  "All categories",
  "Financial Services",
  "Real Estate",
  "Insurance",
  "Legal",
  "Health & Wellness",
  "Marketing",
  "Technology",
  "Home Services",
  "Professional Services",
];

export function ProfessionalsPage() {
  usePageTitle("Find a Professional", "Search Houston LEAD member professionals");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container max-w-4xl">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4">Directory</p>
          <h1 className="heading-xl mb-6">Find a professional</h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Find trusted professionals for your home, finances, or business. Search by category
            and location to connect with the right experts in the Houston LEAD network.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="glass-panel rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="search"
              placeholder="Search by name or business..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40 text-ink-soft"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-abyss">
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <p className="text-sm text-ink-muted mt-6 text-center">
            The full member directory is coming soon. In the meantime, contact us and we'll
            connect you with the right professional.
          </p>
        </Reveal>

        <Reveal className="glass-panel rounded-2xl p-10 text-center mb-20">
          <p className="text-ink-soft mb-6">
            Need a referral to a trusted member? We'll help you find the right expert.
          </p>
          <a href="mailto:info@houstonlead.com" className="btn-primary inline-flex">
            Contact info@houstonlead.com
          </a>
        </Reveal>

        <ContactCTA />
      </div>
    </div>
  );
}
