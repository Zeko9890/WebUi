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
}

export function TestimonialsSection({ config, onUpdateTestimonial }: TestimonialsSectionProps) {
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
            Loved by thousands
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
