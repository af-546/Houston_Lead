import { Link } from "react-router-dom";
import { welcomeCopy } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";

export function WelcomeSection() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">About Houston LEAD</p>
        <h2 className="heading-lg mb-8">{welcomeCopy.heading}</h2>
        <div className="space-y-5 text-ink-soft leading-relaxed text-left md:text-center">
          {welcomeCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 font-display text-xl font-semibold text-gradient">{welcomeCopy.cta}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticLink to="/apply" className="btn-primary">
            Apply for membership
          </MagneticLink>
          <Link to="/about" className="btn-ghost">
            Learn more about LEAD
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
