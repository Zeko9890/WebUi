"use client";

import { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { BuilderConfig, FeatureItem } from "@/types/builder";
import { NavbarSection } from "./sections/navbar-section";
import { HeroSection } from "./sections/hero-section";
import { FeaturesSection } from "./sections/features-section";
import { StatsSection } from "./sections/stats-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { PricingSection } from "./sections/pricing-section";
import { FaqSection } from "./sections/faq-section";
import { CtaSection } from "./sections/cta-section";
import { FooterSection } from "./sections/footer-section";

interface PreviewCanvasProps {
  config: BuilderConfig;
  onUpdateConfig: <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => void;
  onUpdateFeature: (index: number, field: keyof FeatureItem, value: string) => void;
  onUpdateStat: (index: number, field: keyof BuilderConfig["stats"][0], value: string) => void;
  onUpdateTestimonial: (index: number, field: keyof BuilderConfig["testimonials"][0], value: string) => void;
  onUpdatePricing: (index: number, field: keyof BuilderConfig["pricing"][0], value: string) => void;
  onUpdateFaq: (index: number, field: keyof BuilderConfig["faqs"][0], value: string) => void;
}

export function PreviewCanvas({ 
  config, 
  onUpdateConfig, 
  onUpdateFeature,
  onUpdateStat,
  onUpdateTestimonial,
  onUpdatePricing,
  onUpdateFaq
}: PreviewCanvasProps) {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile": return 375;
      case "tablet": return 768;
      case "desktop":
      default: return 1280;
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-4 md:p-8 lg:p-12 overflow-y-auto relative z-0 dot-grid">
      
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradient-radial-glow -z-10 opacity-50 pointer-events-none" />
      
      {/* Viewport Toolbar */}
      <div className="flex items-center gap-1 p-1 bg-background border border-border/50 rounded-lg shadow-sm mb-6 shrink-0 z-10">
        <button
          onClick={() => setViewport("desktop")}
          className={cn("p-2 rounded-md transition-all", viewport === "desktop" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")}
          title="Desktop view"
        >
          <Monitor className="size-4" />
        </button>
        <button
          onClick={() => setViewport("tablet")}
          className={cn("p-2 rounded-md transition-all", viewport === "tablet" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")}
          title="Tablet view"
        >
          <Tablet className="size-4" />
        </button>
        <button
          onClick={() => setViewport("mobile")}
          className={cn("p-2 rounded-md transition-all", viewport === "mobile" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")}
          title="Mobile view"
        >
          <Smartphone className="size-4" />
        </button>
      </div>

      {/* Constraint container that looks like a browser window */}
      <div 
        className={cn(
          "w-full bg-[var(--canvas-bg)] rounded-xl border border-border/40 shadow-2xl flex flex-col overflow-hidden relative shrink-0 my-auto",
          "transition-all duration-500 ease-in-out origin-top",
          "ring-1 ring-border/20 ring-offset-2 ring-offset-background/50",
          "@container"
        )}
        style={{
          maxWidth: getViewportWidth(),
          "--canvas-primary": config.primaryColor,
        } as React.CSSProperties}
        data-theme={config.theme}
        data-mode={config.darkMode ? "dark" : "light"}
        data-font={config.font}
        data-radius={config.borderRadius}
        data-shadow={config.shadow}
        data-spacing={config.sectionSpacing}
        data-scale={config.typographyScale}
      >
        
        {/* Browser Chrome Mockup */}
        <div className="h-10 border-b border-border/30 bg-muted/20 flex items-center px-4 gap-2 shrink-0 relative z-50">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-400/80 border border-red-500/20" />
            <div className="size-3 rounded-full bg-amber-400/80 border border-amber-500/20" />
            <div className="size-3 rounded-full bg-emerald-400/80 border border-emerald-500/20" />
          </div>
          <div className="flex-1 flex justify-center opacity-40">
            <div className="w-1/2 max-w-[200px] h-5 rounded-md bg-background border border-border/50 text-[9px] flex items-center justify-center font-medium font-mono text-muted-foreground select-none">
              localhost:3000
            </div>
          </div>
        </div>

        {/* Scrollable Canvas Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative builder-scroll-container scroll-smooth">
          <motion.div 
            layout
            transition={{ type: "spring", bounce: 0.1, duration: 0.7 }}
            className="min-h-full flex flex-col font-[family-name:var(--canvas-font)] transition-colors duration-500 bg-[var(--canvas-bg)]"
          >
            {config.sectionOrder.map((id) => {
              const content = (() => {
                switch (id) {
                  case "navbar": return <NavbarSection config={config} onUpdate={onUpdateConfig} viewport={viewport} />;
                  case "hero": return <HeroSection config={config} onUpdate={onUpdateConfig} viewport={viewport} />;
                  case "features": return <FeaturesSection config={config} onUpdateFeature={onUpdateFeature} viewport={viewport} />;
                  case "stats": return <StatsSection config={config} onUpdateStat={onUpdateStat} viewport={viewport} />;
                  case "testimonials": return <TestimonialsSection config={config} onUpdateTestimonial={onUpdateTestimonial} viewport={viewport} />;
                  case "pricing": return <PricingSection config={config} onUpdatePricing={onUpdatePricing} viewport={viewport} />;
                  case "faq": return <FaqSection config={config} onUpdateFaq={onUpdateFaq} viewport={viewport} />;
                  case "cta": return <CtaSection config={config} onUpdate={onUpdateConfig} viewport={viewport} />;
                  case "footer": return <FooterSection config={config} onUpdate={onUpdateConfig} viewport={viewport} />;
                  default: return null;
                }
              })();

              return (
                <motion.div id={id} key={id} layout="position" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
                  {content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
