import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="section-padding section-spacing pb-16 md:pb-20">
      <Reveal>
        <div className="section-container section-band-dark rounded-xl p-10 sm:p-14 md:p-16 text-center">
          <p className="eyebrow mb-4 text-brand-light">Ready to grow?</p>
          <h2 className="heading-lg mb-6 text-ink-inverse">Let's grow together</h2>
          <p className="text-ink-inverse-soft max-w-lg mx-auto mb-10 leading-relaxed">
            Join Houston LEAD and build your referral team, peer advisory network, and
            marketing partners—all with purpose and accountability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}?subject=Membership%20Application`}
              className="btn-primary"
            >
              Apply for membership
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-transparent px-6 py-3 font-body font-semibold text-ink-inverse transition-colors duration-200 hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
