"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig, FeatureItem } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } }
};

interface FeaturesSectionProps {
  config: BuilderConfig;
  onUpdateFeature: (index: number, field: keyof FeatureItem, value: string) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function FeaturesSection({ config, onUpdateFeature, viewport = "desktop" }: FeaturesSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  const { featureLayout, cardStyle } = config;

  const isList = featureLayout === "list";
  const isAlt = featureLayout === "alternating";
  
  let cols = "grid-cols-1";
  if (isDesktop) {
    cols = featureLayout === "3-col" ? "grid-cols-3" : featureLayout === "2-col" ? "grid-cols-2" : "grid-cols-1";
  } else if (isTablet) {
    cols = featureLayout === "3-col" || featureLayout === "2-col" ? "grid-cols-2" : "grid-cols-1";
  }

  return (
    <section className={cn(
      "py-[var(--canvas-spacing)] relative z-10 border-t border-[var(--canvas-card-border)] bg-[var(--canvas-bg)]",
      isDesktop ? "px-10" : "px-6"
    )}>
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 
          className="font-black tracking-tight mb-5 text-[var(--canvas-fg)]"
          style={{ fontSize: "var(--canvas-h2)" }}
        >
          Everything you need
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-[var(--canvas-fg)] font-medium leading-relaxed" style={{ fontSize: "var(--canvas-p)" }}>
          Powerful features designed to help you build and scale your operations without friction. Experience engineering excellence at its finest.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "grid gap-6 max-w-6xl mx-auto",
          (!isList && !isAlt) ? cols : "grid-cols-1",
          isAlt && "gap-24"
        )}
      >
        {config.features.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              variants={item}
              key={i}
              className={cn(
                "p-8 transition-all duration-500 flex group relative overflow-hidden",
                cardStyle === "flat" ? "bg-[var(--canvas-card-bg)] hover:bg-[color-mix(in_srgb,var(--canvas-card-bg)_90%,transparent)]" : "",
                cardStyle === "elevated" ? "bg-[var(--canvas-card-bg)] shadow-[var(--canvas-shadow)] hover:shadow-xl border border-[var(--canvas-card-border)] hover:-translate-y-1" : "",
                cardStyle === "bordered" ? "bg-transparent border border-[var(--canvas-card-border)] hover:border-[var(--canvas-primary)]" : "",
                cardStyle === "glass" ? "backdrop-blur-2xl bg-white/5 dark:bg-black/20 border border-white/10 hover:border-white/20 shadow-xl" : "",
                "rounded-[var(--canvas-radius)]",
                (!isList && !isAlt) ? "flex-col text-left" : "",
                isList ? (!isMobile ? "flex-row items-start gap-8" : "flex-col items-start gap-8") : "",
                isAlt ? (isEven ? (!isMobile ? "flex-row items-center gap-16 text-left" : "flex-col items-center gap-8 text-left") : (!isMobile ? "flex-row-reverse items-center gap-16 text-left" : "flex-col items-center gap-8 text-left")) : ""
              )}
            >
              {/* Premium Hover Glow Effect for Cards */}
              {cardStyle !== "flat" && !isAlt && (
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, var(--canvas-primary), transparent 70%)` }}
                />
              )}

              {/* Icon Container */}
              <div
                className={cn(
                  "flex items-center justify-center shrink-0 relative z-10",
                  "rounded-[calc(var(--canvas-radius)*0.75)] text-2xl shadow-sm border border-black/5 dark:border-white/10",
                  (isList || isAlt) ? "mb-0" : "mb-8",
                  isAlt ? (!isMobile ? "w-80 h-80 text-7xl bg-[var(--canvas-card-bg)] shadow-2xl" : "w-full h-64 text-7xl bg-[var(--canvas-card-bg)] shadow-2xl") : "size-14"
                )}
                style={{ 
                  backgroundColor: !isAlt ? "color-mix(in srgb, var(--canvas-primary) 12%, transparent)" : undefined,
                  color: "var(--canvas-primary)" 
                }}
              >
                <div className="absolute inset-0 bg-white/20 blur-[2px] rounded-full translate-y-2 translate-x-2 opacity-30 mix-blend-overlay" />
                <span className="relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <InlineText
                    value={feature.icon}
                    onChange={(v) => onUpdateFeature(i, "icon", v)}
                    editingMode={true}
                    placeholder="✨"
                  />
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-[var(--canvas-fg)] tracking-tight">
                  <InlineText
                    value={feature.title}
                    onChange={(v) => onUpdateFeature(i, "title", v)}
                    editingMode={true}
                    placeholder="Feature Title"
                  />
                </h3>
                <div className="opacity-60 leading-relaxed text-[var(--canvas-fg)] text-[15px] font-medium">
                  <InlineText
                    value={feature.description}
                    onChange={(v) => onUpdateFeature(i, "description", v)}
                    editingMode={true}
                    multiline
                    placeholder="Feature description..."
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
