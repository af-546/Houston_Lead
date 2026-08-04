import { usePageTitle } from "@/hooks/usePageTitle";
import { sponsorshipTypes, sponsorshipAudience } from "@/data/membership";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function SponsorshipsPage() {
  usePageTitle("Sponsorships", "Partner with Houston LEAD");

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container">
        <Reveal className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">Partner with us</p>
          <h1 className="heading-xl mb-6">Sponsorship opportunities</h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Houston LEAD offers partner sponsorship packages designed to give your business
            maximum exposure through continuous, exclusive, and single-event opportunities.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-3 gap-5 mb-16">
          {sponsorshipAudience.map((item) => (
            <RevealItem key={item.label}>
              <div className="glass-panel rounded-2xl p-6 text-center">
                <p className="font-display text-2xl font-bold text-gradient">{item.value}</p>
                <p className="text-sm text-ink-soft mt-2">{item.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mb-8">
          <h2 className="heading-md mb-4">Sponsorship packages</h2>
          <p className="text-ink-soft max-w-2xl">
            Whether you want to make a big impact at one event, maintain consistent visibility,
            or secure exclusive rights as the only sponsor in your industry—we have a package
            for your goals.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-3 gap-5 mb-16">
          {sponsorshipTypes.map((type) => (
            <RevealItem key={type.title}>
              <div className="glass-panel rounded-2xl p-6 md:p-8 h-full hover:border-brand-light/25 transition-colors">
                <span className="text-brand-light text-xl">🔹</span>
                <h3 className="font-display font-semibold text-lg mt-4">{type.title}</h3>
                <p className="text-sm text-ink-soft mt-3 leading-relaxed">{type.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="glass-panel rounded-2xl p-8 md:p-10 mb-20">
          <h2 className="heading-md mb-4">Who we reach</h2>
          <p className="text-ink-soft leading-relaxed mb-6">
            Partnering with Houston LEAD puts your brand in front of business owners,
            entrepreneurs, sales and marketing professionals, real estate and finance experts,
            health practitioners, and community leaders across Greater Houston.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-ink-soft">
            <li>Social media: 50,000+ followers across platforms</li>
            <li>Email: 4,000+ verified opt-in professionals</li>
            <li>Events: All member and non-member attendees</li>
            <li>Platforms: Facebook, LinkedIn, Eventbrite, Meetup, and more</li>
          </ul>
        </Reveal>

        <ContactCTA />
      </div>
    </div>
  );
}
