import { usePageTitle } from "@/hooks/usePageTitle";
import { Hero } from "@/components/sections/Hero";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { BenefitsBento } from "@/components/sections/BenefitsBento";
import { StudioHighlights } from "@/components/sections/StudioHighlights";
import { ProcessInteractive } from "@/components/sections/ProcessInteractive";
import { ChaptersPreview } from "@/components/sections/ChaptersPreview";
import { CommunityStats } from "@/components/sections/CommunityStats";
import { SocialSection } from "@/components/sections/SocialSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function HomePage() {
  usePageTitle("Business networking in Greater Houston");

  return (
    <>
      <Hero />
      <QuickLinks />
      <WelcomeSection />
      <CapabilitiesMarquee />
      <TrustedBy />
      <BenefitsBento />
      <StudioHighlights />
      <ProcessInteractive />
      <ChaptersPreview />
      <CommunityStats />
      <SocialSection />
      <TestimonialsCarousel />
      <NewsletterSection />
      <FAQ />
      <ContactCTA />
    </>
  );
}
