import { usePageTitle } from "@/hooks/usePageTitle";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

const eventTypes = [
  {
    title: "Monthly Networking Mixers",
    description: "Evening events to connect with members and guests across chapters.",
  },
  {
    title: "Chapter Luncheons & Breakfasts",
    description: "Weekly chapter meetings with structured referrals and peer advisory.",
  },
  {
    title: "Leadership Workshops & Panels",
    description: "Professional development sessions for business growth and leadership.",
  },
  {
    title: "Annual Celebration & Awards",
    description: "Houston LEAD's signature event celebrating member achievements.",
  },
  {
    title: "Community Outreach",
    description: "Volunteer and community events that give back to Greater Houston.",
  },
  {
    title: "Special Events",
    description: "Seasonal and partner events throughout the year.",
  },
];

export function EventsPage() {
  usePageTitle("Events", "Houston LEAD upcoming events and calendar");

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4">Events</p>
          <h1 className="heading-xl mb-6">Upcoming events</h1>
          <p className="text-ink-soft text-lg max-w-2xl leading-relaxed">
            From weekly chapter meetings to mixers, workshops, and our annual celebration—
            Houston LEAD keeps you connected and growing.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {eventTypes.map((event) => (
            <RevealItem key={event.title}>
              <div className="glass-panel rounded-2xl p-6 h-full hover:border-brand-light/25 transition-colors">
                <h2 className="font-display font-semibold text-lg">{event.title}</h2>
                <p className="text-sm text-ink-soft mt-3 leading-relaxed">{event.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="glass-panel rounded-2xl p-10 text-center mb-20">
          <h2 className="heading-md mb-4">Event calendar</h2>
          <p className="text-ink-soft max-w-lg mx-auto mb-6">
            Our full event calendar is being integrated into the new site. Contact us for
            upcoming dates or visit a chapter meeting as a guest.
          </p>
          <a href="mailto:info@houstonlead.com" className="btn-ghost inline-flex">
            Ask about upcoming events →
          </a>
        </Reveal>

        <ContactCTA />
      </div>
    </div>
  );
}
