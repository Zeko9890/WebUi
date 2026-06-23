"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig, PricingItem } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

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

interface PricingSectionProps {
  config: BuilderConfig;
  onUpdatePricing: (index: number, field: keyof PricingItem, value: string) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function PricingSection({ config, onUpdatePricing, viewport = "desktop" }: PricingSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  const isDark = config.darkMode;
  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-white/60" : "text-slate-500";
  const bgColor = isDark ? "bg-white/5" : "bg-slate-50";
  const borderColor = isDark ? "border-white/10" : "border-slate-200";

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
        <div className={cn("text-center max-w-3xl mx-auto", !isMobile ? "mb-20" : "mb-16")}>
          <h2 className={cn(
            "font-black tracking-tight mb-6",
            config.typographyScale === 'large' ? (!isMobile ? 'text-6xl' : 'text-4xl') :
            config.typographyScale === 'compact' ? (!isMobile ? 'text-4xl' : 'text-3xl') :
            (!isMobile ? 'text-5xl' : 'text-4xl'),
            textColor
          )}>
            Simple, transparent pricing
          </h2>
          <p className={cn("text-lg font-medium max-w-2xl mx-auto", mutedColor)}>
            No hidden fees. No surprise charges.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={cn("grid items-start", isMobile ? "grid-cols-1 gap-6" : "grid-cols-3", isDesktop ? "gap-8" : "gap-6")}
        >
          {config.pricing.map((plan, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "p-8 relative flex flex-col h-full",
                config.cardStyle === 'elevated' && `bg-card shadow-${config.shadow} border-none`,
                config.cardStyle === 'bordered' && `bg-transparent border ${borderColor}`,
                config.cardStyle === 'flat' && `${bgColor} border-none`,
                config.cardStyle === 'glass' && "bg-white/5 backdrop-blur-xl border border-white/10",
                config.borderRadius === 'none' ? 'rounded-none' :
                config.borderRadius === 'sm' ? 'rounded-md' :
                config.borderRadius === 'md' ? 'rounded-xl' :
                config.borderRadius === 'lg' ? 'rounded-2xl' : 'rounded-3xl',
                plan.isPopular && cn("ring-2 ring-[var(--canvas-primary)]", !isMobile && "-mt-8")
              )}
            >
              {plan.isPopular && (
                <div 
                  className="absolute -top-4 left-0 right-0 mx-auto w-max px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn("text-xl font-bold mb-2", textColor)}>
                  <InlineText
                    value={plan.name}
                    onChange={(val) => onUpdatePricing(i, "name", val)}
                    editingMode={true}
                    label="Plan Name"
                  />
                </h3>
                <p className={cn("text-sm font-medium h-10", mutedColor)}>
                  <InlineText
                    value={plan.description}
                    onChange={(val) => onUpdatePricing(i, "description", val)}
                    editingMode={true}
                    multiline={true}
                    label="Description"
                  />
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className={cn("font-black", !isMobile ? "text-5xl" : "text-4xl", textColor)}>
                  <InlineText
                    value={plan.price}
                    onChange={(val) => onUpdatePricing(i, "price", val)}
                    editingMode={true}
                    label="Price"
                  />
                </span>
                <span className={cn("text-sm font-medium", mutedColor)}>/mo</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3">
                      <div className="size-5 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Check className="size-3" />
                      </div>
                      <span className={cn("text-sm font-medium", textColor)}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={cn(
                  "w-full py-3 px-4 font-bold text-sm transition-all text-center",
                  config.borderRadius === 'none' ? 'rounded-none' :
                  config.borderRadius === 'sm' ? 'rounded-md' :
                  config.borderRadius === 'md' ? 'rounded-lg' : 'rounded-full',
                  plan.isPopular
                    ? "text-white shadow-md hover:opacity-90"
                    : isDark 
                      ? "bg-white/10 hover:bg-white/20 text-white" 
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                )}
                style={plan.isPopular ? { backgroundColor: config.primaryColor } : {}}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
