"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";
import { FileJson2, Code2, FileCode } from "lucide-react";

const formats = [
  {
    icon: Code2,
    color: "text-brand bg-brand/10",
    name: "React + Tailwind",
    desc: "Fully typed React components using Tailwind CSS utility classes. Drop them directly into any Next.js or React project.",
  },
  {
    icon: FileJson2,
    color: "text-emerald-400 bg-emerald-500/10",
    name: "JSON Config",
    desc: "The raw BuilderConfig JSON object, useful for saving and restoring builder state or transferring between sessions.",
  },
  {
    icon: FileCode,
    color: "text-purple-400 bg-purple-500/10",
    name: "HTML",
    desc: "Static HTML with inline Tailwind classes via CDN. No build step required — paste it into any HTML file.",
  },
];

export default function ExportingPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Core Features</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Exporting</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        When your page looks exactly how you want it, export the code and use it in your own project. There is no vendor lock-in — the output is standard, readable code.
      </p>

      <div className="space-y-12 text-zinc-300 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Export Formats</h2>
          <div className="space-y-4">
            {formats.map((f) => (
              <div key={f.name} className="flex items-start gap-5 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30">
                <div className={`size-10 rounded-lg ${f.color} flex items-center justify-center shrink-0`}>
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{f.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How to export</h2>
          <ol className="space-y-3 list-none pl-0">
            {[
              "Open the builder at /generator.",
              'Click the "Export" button in the top toolbar.',
              "Choose your format (React, JSON, or HTML) from the modal.",
              "Use the copy button to copy the full output to your clipboard.",
              "Paste it into your project.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="size-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Sample Output</h2>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400">
              exported-hero.tsx
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">{`import React from "react";

export function HeroSection() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden bg-white dark:bg-zinc-950">
      <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-bold
        rounded-full border border-brand/30 text-brand bg-brand/10">
        ✦ Now in Public Beta
      </span>
      <h1 className="text-6xl font-extrabold tracking-tight mb-6">
        Build interfaces <span className="text-brand">10× faster</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Generate beautiful, production-ready React components with AI.
      </p>
      <button className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90">
        Start Building Free
      </button>
    </section>
  );
}`}</pre>
          </div>
        </section>
      </div>

      <DocsPager />
    </motion.article>
  );
}
