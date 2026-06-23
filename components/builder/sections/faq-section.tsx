"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig, FaqItem } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } }
};

interface FaqSectionProps {
  config: BuilderConfig;
  onUpdateFaq: (index: number, field: keyof BuilderConfig["faqs"][0], value: string) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function FaqSection({ config, onUpdateFaq, viewport = "desktop" }: FaqSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  const isDark = config.darkMode;
  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-white/60" : "text-slate-500";
  const borderColor = isDark ? "border-white/10" : "border-slate-200";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <div className={cn("max-w-3xl mx-auto", isDesktop ? "px-8" : "px-6")}>
        <div className={cn("text-center", !isMobile ? "mb-16" : "mb-12")}>
          <h2 className={cn(
            "font-black tracking-tight mb-4",
            config.typographyScale === 'large' ? (!isMobile ? 'text-5xl' : 'text-4xl') :
            config.typographyScale === 'compact' ? (!isMobile ? 'text-3xl' : 'text-2xl') :
            (!isMobile ? 'text-4xl' : 'text-3xl'),
            textColor
          )}>
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {config.faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "border rounded-xl overflow-hidden transition-colors",
                borderColor,
                isDark ? "bg-white/[0.02] hover:bg-white/[0.04]" : "bg-white hover:bg-slate-50",
                config.borderRadius === 'none' ? 'rounded-none' :
                config.borderRadius === 'sm' ? 'rounded-md' :
                config.borderRadius === 'md' ? 'rounded-lg' : 'rounded-2xl'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={cn("font-bold pr-8", textColor)}>
                  <InlineText
                    value={faq.question}
                    onChange={(val) => onUpdateFaq(i, "question", val)}
                    editingMode={true}
                    label="Question"
                  />
                </span>
                <ChevronDown 
                  className={cn(
                    "size-5 transition-transform duration-300 shrink-0", 
                    mutedColor,
                    openIndex === i && "rotate-180"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className={cn("px-6 pb-6 pt-0 text-sm leading-relaxed", mutedColor)}>
                  <InlineText
                    value={faq.answer}
                    onChange={(val) => onUpdateFaq(i, "answer", val)}
                    editingMode={true}
                    multiline={true}
                    label="Answer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
