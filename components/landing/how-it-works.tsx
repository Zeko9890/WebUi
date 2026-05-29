"use client";

import { motion } from "framer-motion";
import { MousePointer2, Palette, Download } from "lucide-react";

const STEPS = [
  {
    icon: <Palette className="size-6" />,
    title: "Choose a Preset",
    description: "Start with a professionally crafted layout architecture. Don't worry, you can change it instantly later.",
  },
  {
    icon: <MousePointer2 className="size-6" />,
    title: "Customize Visually",
    description: "Click to edit text, swap colors, adjust borders, and toggle dark mode in real-time.",
  },
  {
    icon: <Download className="size-6" />,
    title: "Export React Code",
    description: "One click gives you clean, production-ready Next.js + Tailwind CSS code to drop into your project.",
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
            From idea to code in seconds
          </h2>
          <p className="text-white/60 text-lg font-medium leading-relaxed">
            The fastest way to build premium landing pages without writing a single line of boilerplate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="size-24 rounded-full bg-black border-2 border-white/10 flex items-center justify-center text-white mb-8 relative z-10 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors shadow-2xl">
                <div className="absolute inset-0 bg-white/5 rounded-full" />
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
