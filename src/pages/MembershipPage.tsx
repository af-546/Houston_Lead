import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { membershipBenefits, membershipTiers } from "@/data/membership";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function MembershipPage() {
  usePageTitle("Membership", "Houston LEAD membership benefits and levels");

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4">Membership</p>
          <h1 className="heading-xl mb-6">Benefits that grow with you</h1>
          <p className="text-ink-soft text-lg max-w-2xl leading-relaxed">
            One annual membership fee. No hidden costs. Choose the tier that fits your business
            goals—from core networking to maximum visibility.
          </p>
        </Reveal>

        <Reveal className="mb-20">
          <h2 className="heading-md mb-8">Member benefits</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {membershipBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 glass-panel rounded-xl px-5 py-4 text-sm text-ink-soft"
              >
                <span className="text-brand-light mt-0.5">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-8">
          <h2 className="heading-md mb-4">Membership tiers</h2>
          <p className="text-ink-soft max-w-xl">
            All tiers include core member benefits. Higher tiers add visibility on the website
            and in the monthly newsletter.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {membershipTiers.map((tier) => (
            <RevealItem key={tier.slug}>
              <div
                className={`glass-panel rounded-2xl p-6 h-full flex flex-col ${
                  tier.featured ? "border-brand-light/40 ring-1 ring-brand/20" : ""
                }`}
              >
                {tier.featured && (
                  <span className="font-mono text-xs text-brand-light uppercase tracking-wider mb-3">
                    Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-xl">{tier.name}</h3>
                <p className="font-display text-3xl font-bold text-gradient mt-2">
                  ${tier.price}
                  <span className="text-sm text-ink-muted font-normal">/year</span>
                </p>
                <p className="text-sm text-ink-soft mt-3 flex-1">{tier.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-soft border-t border-white/5 pt-5">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-brand-light">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="text-center mb-20">
          <Link to="/apply" className="btn-primary inline-flex">
            Apply for membership →
          </Link>
        </Reveal>

        <ContactCTA />
      </div>
    </div>
  );
}
