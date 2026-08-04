import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ChaptersPage } from "@/pages/ChaptersPage";
import { MembershipPage } from "@/pages/MembershipPage";
import { ProfessionalsPage } from "@/pages/ProfessionalsPage";
import { EventsPage } from "@/pages/EventsPage";
import { SponsorshipsPage } from "@/pages/SponsorshipsPage";
import { ApplyPage } from "@/pages/ApplyPage";
import { ContactPage } from "@/pages/ContactPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename={basename === "/" ? undefined : basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="chapters" element={<ChaptersPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="professionals" element={<ProfessionalsPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="sponsorships" element={<SponsorshipsPage />} />
            <Route path="apply" element={<ApplyPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
