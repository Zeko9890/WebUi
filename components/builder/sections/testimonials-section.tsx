"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig, TestimonialItem } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

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

interface TestimonialsSectionProps {
  config: BuilderConfig;
  onUpdateTestimonial: (index: number, field: keyof TestimonialItem, value: string) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function TestimonialsSection({ config, onUpdateTestimonial, viewport = "desktop" }: TestimonialsSectionProps) {
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
            Loved by thousands
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={cn("grid gap-6", isMobile ? "grid-cols-1" : "grid-cols-3")}
        >
          {config.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "p-8 relative group",
                config.cardStyle === 'elevated' && `bg-card shadow-${config.shadow} border-none`,
                config.cardStyle === 'bordered' && `bg-transparent border ${borderColor}`,
                config.cardStyle === 'flat' && `${bgColor} border-none`,
                config.cardStyle === 'glass' && "bg-white/5 backdrop-blur-xl border border-white/10",
                config.borderRadius === 'none' ? 'rounded-none' :
                config.borderRadius === 'sm' ? 'rounded-md' :
                config.borderRadius === 'md' ? 'rounded-xl' :
                config.borderRadius === 'lg' ? 'rounded-2xl' : 'rounded-3xl'
              )}
            >
              <Quote className="size-8 text-blue-500 mb-6 opacity-50" />
              <p className={cn(
                "text-lg mb-8 font-medium italic leading-relaxed",
                textColor
              )}>
                &quot;<InlineText
                  value={testimonial.quote}
                  onChange={(val) => onUpdateTestimonial(i, "quote", val)}
                  editingMode={true}
                  multiline={true}
                  label="Quote"
                />&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-500/20 shrink-0" />
                <div>
                  <h4 className={cn("font-bold text-sm", textColor)}>
                    <InlineText
                      value={testimonial.author}
                      onChange={(val) => onUpdateTestimonial(i, "author", val)}
                      editingMode={true}
                      label="Author"
                    />
                  </h4>
                  <p className={cn("text-xs font-medium", mutedColor)}>
                    <InlineText
                      value={testimonial.role}
                      onChange={(val) => onUpdateTestimonial(i, "role", val)}
                      editingMode={true}
                      label="Role"
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
