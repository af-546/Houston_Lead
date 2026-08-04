import { usePageTitle } from "@/hooks/usePageTitle";
import { principles, processSteps, presidentMessage, site, welcomeCopy } from "@/data/site";
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
            <h1 className="heading-xl mb-4">
              Empower <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-sm text-ink-muted mb-6">{site.acronym}</p>
            <p className="text-xl text-ink-soft leading-relaxed max-w-2xl">
              {welcomeCopy.paragraphs[0]}
            </p>
            <p className="text-ink-soft leading-relaxed mt-5 max-w-2xl">
              Founded in {site.founded} and backed by over {site.experienceYears} years of
              networking experience, Houston LEAD helps members build referral teams, sales
              support networks, and trusted peer advisors across Greater Houston.
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

        <Reveal className="glass-panel rounded-2xl p-8 md:p-10 mb-20 md:mb-28">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
            {presidentMessage.intro}
          </p>
          <h2 className="heading-md mb-2">{presidentMessage.author}</h2>
          <p className="text-sm text-ink-muted mb-6">{presidentMessage.title}</p>
          <div className="space-y-4 text-ink-soft leading-relaxed max-w-3xl">
            {presidentMessage.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 glass-panel rounded-xl p-6 border-brand/10">
            <p className="font-display font-semibold mb-4">Ask yourself:</p>
            <ul className="space-y-2 text-ink-soft">
              {presidentMessage.questions.map((q) => (
                <li key={q} className="flex gap-2">
                  <span className="text-brand-light">·</span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-soft leading-relaxed">{presidentMessage.closing}</p>
          </div>
        </Reveal>

        <Reveal className="mb-6 md:mb-8">
          <p className="eyebrow mb-4">What we believe</p>
          <h2 className="heading-lg mb-4">Our principles</h2>
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
