"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";
import { MousePointer2, Layers, RefreshCw, Sparkles } from "lucide-react";

export default function VisualBuilderPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Core Features</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Visual Builder</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        The visual builder is the heart of ZekoUI — a live, side-by-side editing environment where you compose sections and see results instantly.
      </p>

      <div className="space-y-12 text-zinc-300 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">How it works</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Layers, color: "text-brand bg-brand/10", title: "Section Composition", desc: "Add, remove, and reorder sections from the sidebar. Pages are composed from Hero, Features, Stats, Pricing, Testimonials, FAQ, and more." },
              { icon: MousePointer2, color: "text-purple-400 bg-purple-500/10", title: "Inline Editing", desc: "Click directly on any text in the preview to edit it in-place. All edits are reflected in the live preview without reloading." },
              { icon: RefreshCw, color: "text-blue-400 bg-blue-500/10", title: "Real-time Preview", desc: "Changes to theme, layout, content, and colors update the preview canvas instantly with smooth transitions." },
              { icon: Sparkles, color: "text-emerald-400 bg-emerald-500/10", title: "AI Assistance", desc: "Use the natural language input to describe sections and let AI populate content, headings, and copy automatically." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30">
                <div className={`size-10 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Builder Layout</h2>
          <p className="mb-4">The builder interface is divided into three main areas:</p>
          <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-950">
            <div className="h-10 border-b border-zinc-800 bg-zinc-900 flex items-center px-4 gap-2">
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="ml-4 text-xs font-mono text-zinc-500">Builder — ZekoUI</span>
            </div>
            <div className="flex h-48 text-xs font-mono">
              <div className="w-52 border-r border-zinc-800 bg-zinc-900/50 p-4 text-zinc-500">
                Left Panel<br />
                <span className="text-zinc-600">— Section list<br />— Add section<br />— Reorder</span>
              </div>
              <div className="flex-1 bg-zinc-950 flex items-center justify-center text-zinc-600">
                Preview Canvas (live)
              </div>
              <div className="w-56 border-l border-zinc-800 bg-zinc-900/50 p-4 text-zinc-500">
                Right Panel<br />
                <span className="text-zinc-600">— Theme settings<br />— Color picker<br />— Typography</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Responsive Preview</h2>
          <p>
            The builder includes a viewport toggle at the top of the canvas. You can switch between <strong className="text-white">Desktop</strong>, <strong className="text-white">Tablet</strong>, and <strong className="text-white">Mobile</strong> views to ensure your layout looks great on every device.
          </p>
        </section>
      </div>

      <DocsPager />
    </motion.article>
  );
}
