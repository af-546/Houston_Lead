import { usePageTitle } from "@/hooks/usePageTitle";
import { Hero } from "@/components/sections/Hero";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { BenefitsBento } from "@/components/sections/BenefitsBento";
import { StudioHighlights } from "@/components/sections/StudioHighlights";
import { ProcessInteractive } from "@/components/sections/ProcessInteractive";
import { ChaptersPreview } from "@/components/sections/ChaptersPreview";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CommunityStats } from "@/components/sections/CommunityStats";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function HomePage() {
  usePageTitle("Business networking in Greater Houston");

  return (
    <>
      <Hero />
      <CapabilitiesMarquee />
      <TrustedBy />
      <BenefitsBento />
      <StudioHighlights />
      <ProcessInteractive />
      <ChaptersPreview />
      <CommunityStats />
      <TestimonialsCarousel />
      <FAQ />
      <ContactCTA />
    </>
  );
}
