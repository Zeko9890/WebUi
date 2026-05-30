"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    name: "SaaS Platform",
    description: "A modern, high-conversion landing page for software products.",
    color: "bg-blue-500",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Creator Portfolio",
    description: "Showcase your work with large imagery and bold typography.",
    color: "bg-orange-500",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  {
    name: "Fintech App",
    description: "Trustworthy and secure aesthetic for financial services.",
    color: "bg-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    name: "AI Startup",
    description: "Dark, glowing interfaces perfect for AI tools and APIs.",
    color: "bg-purple-500",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Luxury Brand",
    description: "Minimalist, elegant design with serif fonts and gold accents.",
    color: "bg-yellow-600",
    gradient: "from-yellow-600/20 to-yellow-600/5",
  },
  {
    name: "E-commerce",
    description: "Product-focused layout designed to maximize sales.",
    color: "bg-rose-500",
    gradient: "from-rose-500/20 to-rose-500/5",
  },
];

export default function ExamplesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Built with <span className="gradient-brand-text">ZekoUI</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Explore templates and examples generated entirely by our AI visual builder. Use these as a starting point for your next project.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, i) => (
          <motion.div
            key={template.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br ${template.gradient} border border-zinc-800/50 flex flex-col overflow-hidden relative`}>
              {/* Fake browser header */}
              <div className="h-8 border-b border-zinc-800/50 bg-zinc-900/50 flex items-center px-4 gap-1.5 shrink-0">
                <div className="size-2.5 rounded-full bg-zinc-700" />
                <div className="size-2.5 rounded-full bg-zinc-700" />
                <div className="size-2.5 rounded-full bg-zinc-700" />
              </div>
              {/* Fake content skeleton */}
              <div className="flex-1 p-6 flex flex-col gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-1/3 h-4 rounded-full bg-zinc-800" />
                <div className="w-3/4 h-12 rounded-xl bg-zinc-800" />
                <div className="w-1/2 h-4 rounded-full bg-zinc-800" />
                <div className="flex gap-2 mt-auto">
                  <div className={`w-24 h-8 rounded-lg ${template.color} opacity-80`} />
                  <div className="w-24 h-8 rounded-lg bg-zinc-800" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{template.name}</h3>
            <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{template.description}</p>
            <div className="flex items-center text-sm font-semibold text-brand">
              Preview Template <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
