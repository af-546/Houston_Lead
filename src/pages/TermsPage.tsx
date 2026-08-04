import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export function TermsPage() {
  usePageTitle("Terms of Use");

  return (
    <div className="section-padding pt-32 pb-20 max-w-3xl mx-auto">
      <h1 className="heading-lg mb-8">Terms of Use</h1>
      <p className="text-ink-soft text-sm mb-8">Last updated: August 2026</p>
      {[
        {
          title: "Membership",
          body: "By enrolling in Houston LEAD membership or using houstonlead.com, you agree to these Terms of Use. Membership fees are billed annually as described on the membership page.",
        },
        {
          title: "Communications",
          body: "By creating an account or applying for membership, you agree to receive emails, newsletters, and promotional materials from Houston LEAD. You may opt out at any time.",
        },
        {
          title: "Member conduct",
          body: "Members are expected to participate in good faith, provide qualified referrals, and uphold the professional standards of the Houston LEAD community.",
        },
        {
          title: "Contact",
          body: "Questions about these terms? Email info@houstonlead.com.",
        },
      ].map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">{section.title}</h2>
          <p className="text-ink-soft leading-relaxed">{section.body}</p>
        </section>
      ))}
      <Link to="/" className="text-brand-light hover:underline text-sm">
        ← Back to home
      </Link>
    </div>
  );
}
