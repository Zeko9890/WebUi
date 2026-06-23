"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  config: BuilderConfig;
  onUpdate: <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function CtaSection({ config, onUpdate, viewport = "desktop" }: CtaSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  return (
    <section className={cn("py-[var(--canvas-py)] relative z-10", isDesktop ? "px-10" : "px-6")}>
      <div 
        className="max-w-5xl mx-auto rounded-[var(--canvas-radius)] overflow-hidden relative shadow-2xl border border-white/10"
        style={{ backgroundColor: "var(--canvas-primary)" }}
      >
        {/* Stripe-style Abstract Gradients */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
        
        <div className={cn("relative z-10 px-8 text-center text-white flex flex-col items-center", !isMobile ? "py-28" : "py-20")}>
          <h2 className={cn("font-black tracking-tighter mb-6 max-w-2xl leading-[1.1] drop-shadow-sm", !isMobile ? "text-5xl" : "text-3xl")}>
             Ready to accelerate your workflow?
          </h2>
          <p className={cn("text-white/80 mb-12 max-w-xl font-medium leading-relaxed", !isMobile ? "text-xl" : "text-lg")}>
             Join thousands of other companies who are building the future with our platform today.
          </p>
          
          <button
            className={cn(
              "px-8 py-4 text-[15px] flex items-center justify-center gap-2 font-bold transition-all duration-300 group",
              "rounded-[var(--canvas-button-radius)] text-[var(--canvas-primary)] bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
            )}
          >
            <span className="relative z-10">
              <InlineText
                value={config.ctaLabel}
                onChange={(v) => onUpdate("ctaLabel", v)}
                editingMode={true}
                placeholder="CTA Label"
              />
            </span>
            <ArrowRight className="size-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
