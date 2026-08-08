import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";

export function NewsletterSection() {
  return (
    <section className="section-band section-padding section-spacing-sm">
      <Reveal className="section-container">
        <div className="pro-card p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Newsletter</p>
          <h2 className="heading-md mb-4">Sign up and stay updated</h2>
          <p className="text-ink-soft mb-8 max-w-lg mx-auto leading-relaxed">
            Get Houston LEAD news, event updates, and networking opportunities delivered to
            your inbox.
          </p>
          <NewsletterForm className="max-w-md mx-auto flex-col sm:flex-row" />
        </div>
      </Reveal>
    </section>
  );
}
