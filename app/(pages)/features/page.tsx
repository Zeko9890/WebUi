"use client";

import { motion } from "framer-motion";
import {
  MousePointer2, Palette, Layers, Code2, Smartphone, Zap,
  ArrowRight, Check,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MousePointer2,
    color: "text-brand",
    bg: "from-brand/20 to-brand/5",
    border: "border-brand/20",
    title: "Visual Builder",
    tagline: "Design without writing boilerplate.",
    desc: "A live, side-by-side editing environment. Add sections, edit text inline, reorder blocks with drag-and-drop, and watch your changes update in real time.",
    bullets: ["Drag-and-drop section reordering", "Click-to-edit inline text", "Instant live preview", "No page reload required"],
    link: "/docs/core-features/visual-builder",
  },
  {
    icon: Palette,
    color: "text-purple-400",
    bg: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    title: "Theme System",
    tagline: "One click, completely new look.",
    desc: "Switch between curated theme presets that control colors, typography, spacing, shadows, and border radii — all at once, all consistently.",
    bullets: ["6+ built-in theme presets", "Custom primary color picker", "Font family selector", "Border radius & shadow controls"],
    link: "/docs/core-features/theme-system",
  },
  {
    icon: Layers,
    color: "text-blue-400",
    bg: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    title: "Component Library",
    tagline: "Every section you need, pre-built.",
    desc: "Choose from Hero, Features, Stats, Testimonials, Pricing, FAQ, CTA, Navbar, and Footer sections. Each is theme-aware and fully customizable.",
    bullets: ["9+ page section types", "Each section is individually editable", "Animated counters on scroll", "Responsive out of the box"],
    link: "/docs/core-features/components",
  },
  {
    icon: Code2,
    color: "text-emerald-400",
    bg: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    title: "Code Export",
    tagline: "Your design, your code, your project.",
    desc: "Export production-ready React + Tailwind components, JSON config, or static HTML. Clean, readable, and zero vendor lock-in.",
    bullets: ["React + Tailwind CSS output", "Full JSON config export", "HTML with Tailwind CDN", "One-click copy to clipboard"],
    link: "/docs/core-features/exporting",
  },
  {
    icon: Smartphone,
    color: "text-orange-400",
    bg: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    title: "Responsive Preview",
    tagline: "See it on every screen, before you ship.",
    desc: "Switch between desktop, tablet, and mobile viewport modes directly within the builder canvas. Every section adapts responsively.",
    bullets: ["Desktop, tablet, mobile modes", "Accurate viewport simulation", "All sections mobile-first", "Test layout at any breakpoint"],
    link: "/docs/core-features/visual-builder",
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20",
    title: "Instant Generation",
    tagline: "From prompt to page in seconds.",
    desc: "Describe what you're building in natural language and our AI composes a fully structured, themed, and content-populated page instantly.",
    bullets: ["Natural language input", "AI-populated section content", "Automatic theme matching", "Ready to refine and export"],
    link: "/generator",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto pt-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand border border-brand/30 bg-brand/10 px-3 py-1.5 rounded-full mb-6">
            <Zap className="size-3.5" /> Platform Features
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Everything you need to{" "}
            <span className="gradient-brand-text">ship faster.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            ZekoUI combines a visual builder, AI generation, and clean code export into one seamless workflow. No trade-offs.
          </p>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        {features.map((f) => (
          <motion.div key={f.title} variants={item}>
            <Link
              href={f.link}
              className={`group flex flex-col h-full p-7 rounded-3xl border ${f.border} bg-gradient-to-b ${f.bg} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
            >
              <div className={`size-12 rounded-2xl bg-zinc-900/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className={`size-6 ${f.color}`} />
              </div>

              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${f.color}`}>{f.tagline}</p>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">{f.desc}</p>

              <ul className="space-y-2 mb-6">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className={`size-4 ${f.color} shrink-0 mt-0.5`} />
                    <span className="text-sm text-zinc-300">{b}</span>
                  </li>
                ))}
              </ul>

              <span className={`flex items-center gap-1.5 text-sm font-semibold ${f.color} mt-auto`}>
                Learn more <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 border-t border-zinc-800"
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to try it?</h2>
        <p className="text-zinc-400 mb-8">Open the builder and generate your first page in minutes. No account required.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors"
          >
            Start Building <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-200 font-semibold rounded-xl hover:bg-zinc-700 transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
