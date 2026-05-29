import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TemplatesShowcase } from "@/components/landing/templates-showcase";
import { ResponsiveShowcase } from "@/components/landing/responsive-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { CTASection } from "@/components/landing/cta-section";

export default function LandingPage() {
  return (
    // Force dark mode context for the entire landing page
    <div className="relative flex flex-col min-h-screen bg-black text-white dark selection:bg-brand/30 selection:text-brand-foreground">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <TemplatesShowcase />
        <ResponsiveShowcase />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
