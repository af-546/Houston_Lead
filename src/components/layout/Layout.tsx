import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useApp } from "@/context/AppContext";

export function Layout() {
  const { fontSize } = useApp();
  useSmoothScroll();

  return (
    <div className={`relative min-h-screen ${fontSize === "large" ? "text-lg" : ""}`}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <ToastContainer />
    </div>
  );
}
