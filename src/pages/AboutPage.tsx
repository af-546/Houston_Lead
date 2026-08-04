import { usePageTitle } from "@/hooks/usePageTitle";
import { principles, processSteps, site } from "@/data/site";
import { motion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function AboutPage() {
  usePageTitle("About", site.description);

  return (
    <div className="section-padding pt-32 pb-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start mb-20 md:mb-28">
          <Reveal>
            <p className="eyebrow mb-4">About us</p>
            <h1 className="heading-xl mb-6">
              Empower <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-xl text-ink-soft leading-relaxed max-w-2xl">
              Houston LEAD is the premier community for business leaders ready to connect,
              collaborate, and grow across Greater Houston.
            </p>
            <p className="text-ink-soft leading-relaxed mt-5 max-w-2xl">
              We offer more than networking—a strategic environment for business growth,
              professional development, and peer collaboration. Founded in {site.founded} and
              backed by over {site.experienceYears} years of networking experience, Houston LEAD
              helps members build referral teams, sales support networks, and trusted peer advisors.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-2xl p-7 md:p-8 space-y-5 lg:sticky lg:top-28">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-brand-light mb-2">Region</p>
                <p className="text-ink-soft text-sm">{site.address.street}</p>
                <p className="text-ink-soft text-sm">{site.address.city}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-brand-light mb-2">Meetings</p>
                <p className="text-ink-soft text-sm">{site.hours.label}</p>
                <p className="text-ink-soft text-sm">{site.hours.time}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-brand-light mb-2">Email</p>
                <a href={`mailto:${site.email}`} className="text-brand-light hover:underline text-sm">
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mb-6 md:mb-8">
          <p className="eyebrow mb-4">What we believe</p>
          <h2 className="heading-lg mb-4">Our principles</h2>
          <p className="text-ink-soft max-w-2xl leading-relaxed">
            Houston LEAD is built on structured referrals, peer advisory, and results-driven
            connections that elevate your business.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20 md:mb-28">
          {principles.map((principle, index) => (
            <RevealItem key={principle.title} className="h-full">
              <div className="bento-card h-full flex flex-col hover:border-brand-light/25">
                <span className="font-mono text-xs text-brand-light mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-lg">{principle.title}</h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed flex-1">
                  {principle.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mb-10 md:mb-14">
          <p className="eyebrow mb-4">How to join</p>
          <h2 className="heading-lg mb-4">Your path to membership</h2>
          <p className="text-ink-soft max-w-2xl leading-relaxed">
            Five steps from finding a chapter to building your referral network.
          </p>
        </Reveal>

        <div className="relative mb-20 md:mb-28">
          <div
            className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-light/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-8">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <div key={step.title} className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={isLeft ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}
                  >
                    <div className="glass-panel rounded-2xl p-6 md:p-8 hover:border-brand-light/20 transition-colors relative">
                      <div
                        className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-light border-4 border-[#0a0f1a] shadow-neonSm z-10"
                        style={isLeft ? { right: "-1.35rem" } : { left: "-1.35rem" }}
                      />
                      <span className="font-mono text-xs text-brand-light">{stepNumber}</span>
                      <h3 className="font-display text-xl md:text-2xl font-semibold mt-2">{step.title}</h3>
                      <p className="text-ink-soft leading-relaxed mt-3">{step.description}</p>
                    </div>
                  </motion.div>
                  <div
                    className={isLeft ? "hidden lg:block lg:order-2" : "hidden lg:block lg:order-1"}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
