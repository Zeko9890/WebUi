"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TEMPLATES = [
  { name: "Startup", desc: "Friendly & soft", color: "#8b5cf6", styles: "bg-[#0f172a] border-purple-500/30", preview: "Rounded pill buttons, split hero sections, and subtle purple glows." },
  { name: "Luxury", desc: "Elegant & refined", color: "#d4af37", styles: "bg-[#111] border-[#d4af37]/30", preview: "Serif typography, sharp corners, minimal borders, and gold accents." },
  { name: "Gaming", desc: "Neon & edgy", color: "#00ff00", styles: "bg-[#050505] border-green-500/30", preview: "Dark mode native, display fonts, glowing shadows, and high contrast." },
  { name: "Creator", desc: "Vibrant & bold", color: "#ff4500", styles: "bg-[#1a0f0a] border-orange-500/30", preview: "Large typography, tight spacing, bold gradients, and floating navbars." },
];

export function TemplatesShowcase() {
  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Start with a system
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed">
              Our layout presets aren&apos;t just colors—they are complete architectural systems that instantly rewire spacing, typography, borders, and section compositions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TEMPLATES.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-3xl border flex flex-col h-[300px] relative overflow-hidden group",
                t.styles
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="size-3 rounded-full" style={{ backgroundColor: t.color, boxShadow: `0 0 20px ${t.color}` }} />
                <h3 className="text-2xl font-bold text-white">{t.name}</h3>
              </div>
              <p className="text-white/70 font-medium mb-auto relative z-10">
                {t.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-sm text-white/50 leading-relaxed">
                  {t.preview}
                </p>
              </div>

              {/* Decorative background glow */}
              <div 
                className="absolute -bottom-20 -right-20 size-64 blur-[80px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" 
                style={{ backgroundColor: t.color }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
