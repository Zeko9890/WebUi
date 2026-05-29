"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Zap, Paintbrush, MonitorSmartphone, Layers, Code2 } from "lucide-react";

const FEATURES = [
  {
    icon: <Paintbrush className="size-5" />,
    title: "Visual Editing",
    description: "Click any text to edit inline. Swap themes and layouts instantly with the sidebar controls."
  },
  {
    icon: <MonitorSmartphone className="size-5" />,
    title: "True Responsiveness",
    description: "Preview how your site looks on desktop, tablet, and mobile instantly. No guessing required."
  },
  {
    icon: <Layers className="size-5" />,
    title: "Premium Layouts",
    description: "Built-in layout systems designed by experts. Choose from Startup, Luxury, Minimal, and more."
  },
  {
    icon: <Code2 className="size-5" />,
    title: "Production Ready Code",
    description: "Export clean, highly optimized Next.js + Tailwind code with a single click."
  },
  {
    icon: <Zap className="size-5" />,
    title: "Lightning Fast",
    description: "The builder runs entirely in your browser with zero latency. No loading spinners."
  },
  {
    icon: <MousePointerClick className="size-5" />,
    title: "Micro-interactions",
    description: "Subtle hover states, spring animations, and glassmorphism built right into the presets."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
            Engineered for excellence
          </h2>
          <p className="text-white/60 text-lg font-medium leading-relaxed">
            We combined the power of modern frameworks with the ease of visual editing. The result is a tool that feels like magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors group"
            >
              <div className="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
