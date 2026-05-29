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
  onUpdateStat: (index: number, field: keyof StatItem, value: string) => void;
}

export function StatsSection({ config, onUpdateStat }: StatsSectionProps) {
  // Theme styling overrides
  const isDark = config.darkMode;
  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-white/60" : "text-slate-500";

  return (
    <section 
      className={cn(
        "w-full py-16 md:py-24 relative overflow-hidden transition-colors duration-500",
        config.sectionSpacing === 'tight' ? 'py-12 md:py-16' : 
        config.sectionSpacing === 'relaxed' ? 'py-24 md:py-32' : 
        config.sectionSpacing === 'loose' ? 'py-32 md:py-48' : ''
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-border/20"
        >
          {config.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "flex flex-col items-center text-center",
                i !== 0 ? "pt-8 md:pt-0" : ""
              )}
            >
              <h3 
                className={cn(
                  "font-black tracking-tight mb-2",
                  config.typographyScale === 'large' ? 'text-5xl md:text-7xl' :
                  config.typographyScale === 'compact' ? 'text-4xl md:text-5xl' :
                  'text-5xl md:text-6xl',
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
