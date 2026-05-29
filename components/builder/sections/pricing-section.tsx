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
}

export function PricingSection({ config, onUpdatePricing }: PricingSectionProps) {
  const isDark = config.darkMode;
  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-white/60" : "text-slate-500";
  const bgColor = isDark ? "bg-white/5" : "bg-slate-50";
  const borderColor = isDark ? "border-white/10" : "border-slate-200";

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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className={cn(
            "font-black tracking-tight mb-6",
            config.typographyScale === 'large' ? 'text-4xl md:text-6xl' :
            config.typographyScale === 'compact' ? 'text-3xl md:text-4xl' :
            'text-4xl md:text-5xl',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
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
                plan.isPopular && "ring-2 ring-[var(--canvas-primary)] md:-mt-8"
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
                <span className={cn("text-4xl md:text-5xl font-black", textColor)}>
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
