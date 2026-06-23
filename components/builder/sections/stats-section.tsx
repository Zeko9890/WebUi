"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig, StatItem } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3 } }
};

interface StatsSectionProps {
  config: BuilderConfig;
  onUpdateStat: (index: number, field: keyof BuilderConfig["stats"][0], value: string) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function StatsSection({ config, onUpdateStat, viewport = "desktop" }: StatsSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  // Theme styling overrides
  const isDark = config.darkMode;
  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-white/60" : "text-slate-500";

  return (
    <section 
      className={cn(
        "w-full relative overflow-hidden transition-colors duration-500",
        !isMobile ? "py-24" : "py-16",
        config.sectionSpacing === 'tight' ? (!isMobile ? 'py-16' : 'py-12') : 
        config.sectionSpacing === 'relaxed' ? (!isMobile ? 'py-32' : 'py-24') : 
        config.sectionSpacing === 'loose' ? (!isMobile ? 'py-48' : 'py-32') : ''
      )}
    >
      <div className={cn("max-w-7xl mx-auto", isDesktop ? "px-8" : "px-6")}>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={cn("grid divide-border/20", isMobile ? "grid-cols-1 gap-8 divide-y" : "grid-cols-3 gap-12 divide-x")}
        >
          {config.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "flex flex-col items-center text-center",
                i !== 0 ? (isMobile ? "pt-8" : "pt-0") : ""
              )}
            >
              <h3 
                className={cn(
                  "font-black tracking-tight mb-2",
                  config.typographyScale === 'large' ? (!isMobile ? 'text-7xl' : 'text-5xl') :
                  config.typographyScale === 'compact' ? (!isMobile ? 'text-5xl' : 'text-4xl') :
                  (!isMobile ? 'text-6xl' : 'text-5xl'),
                  textColor
                )}
              >
                <AnimatedCounter value={stat.value}>
                  {(displayValue) => (
                    <InlineText
                      value={displayValue}
                      onChange={(val) => onUpdateStat(i, "value", val)}
                      editingMode={true}
                      label="Value"
                    />
                  )}
                </AnimatedCounter>
              </h3>
              <p className={cn("text-lg font-medium uppercase tracking-wider", mutedColor)}>
                <InlineText
                  value={stat.label}
                  onChange={(val) => onUpdateStat(i, "label", val)}
                  editingMode={true}
                  label="Label"
                />
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
