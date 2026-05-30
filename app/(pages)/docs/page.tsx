"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Palette, Layers, Code2, Smartphone, ArrowRight } from "lucide-react";

const quickLinks = [
  {
    icon: Zap,
    color: "text-brand",
    bg: "bg-brand/10",
    title: "Quick Start",
    desc: "Get up and running in under 5 minutes.",
    href: "/docs/getting-started/quick-start",
  },
  {
    icon: Palette,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    title: "Theme System",
    desc: "Learn how to create global presets and manage design tokens.",
    href: "/docs/core-features/theme-system",
  },
  {
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Responsive Design",
    desc: "Master the mobile, tablet, and desktop preview system.",
    href: "/docs/core-features/visual-builder",
  },
  {
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Export Code",
    desc: "Export your design to React, Next.js, and Tailwind code.",
    href: "/docs/core-features/exporting",
  },
];

export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Documentation</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">ZekoUI Docs</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-2xl">
        Welcome to ZekoUI. Learn how to build, customize, and export stunning user interfaces with our AI-powered visual builder.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {quickLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all"
          >
            <div className={`size-11 rounded-xl ${link.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <link.icon className={`size-5 ${link.color}`} />
            </div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-bold mb-1.5 group-hover:text-brand transition-colors">{link.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{link.desc}</p>
              </div>
              <ArrowRight className="size-4 text-zinc-600 group-hover:text-brand group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
            </div>
          </Link>
        ))}
      </div>

      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-white tracking-tight">What is ZekoUI?</h2>
        <p>
          ZekoUI is an AI-powered visual website builder that lets you compose production-ready landing pages without writing boilerplate. Describe what you want, pick a theme, and get clean, typed React and Tailwind code instantly.
        </p>
        <p>
          The platform is built on modern web standards and outputs maintainable code using the following stack:
        </p>
        <ul className="space-y-2.5 pl-0 list-none">
          {[
            ["React 19 & Next.js App Router", "for rendering and routing"],
            ["Tailwind CSS v4", "for utility-first styling"],
            ["Framer Motion", "for declarative animations"],
            ["Shadcn UI", "for accessible primitive components"],
          ].map(([tech, desc]) => (
            <li key={tech} className="flex items-start gap-3">
              <span className="size-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span><strong className="text-white">{tech}</strong> — {desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
