"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";

const themes = [
  { name: "Startup", primary: "#6366f1", bg: "#f9fafb", desc: "Clean, modern, high-contrast." },
  { name: "Luxury", primary: "#b8860b", bg: "#1a1209", desc: "Gold accents, dark, refined." },
  { name: "Gaming", primary: "#22d3ee", bg: "#050505", desc: "Neon glows, futuristic." },
  { name: "Minimal", primary: "#111827", bg: "#ffffff", desc: "Pure white, neutral, simple." },
];

export default function ThemeSystemPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Core Features</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Theme System</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        ZekoUI&apos;s theme system lets you switch the entire visual language of your page — colors, typography, spacing, and more — using a single preset selection.
      </p>

      <div className="space-y-12 text-zinc-300 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Built-in Theme Presets</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {themes.map((t) => (
              <div key={t.name} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex items-start gap-4">
                <div className="size-10 rounded-full shrink-0 border-2 border-zinc-700" style={{ backgroundColor: t.bg }}>
                  <div className="size-full rounded-full" style={{ border: `3px solid ${t.primary}`, padding: 3 }}>
                    <div className="size-full rounded-full" style={{ backgroundColor: t.primary }} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.name}</h3>
                  <p className="text-zinc-400 text-sm">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How themes work</h2>
          <p className="mb-4">
            Themes are implemented as CSS custom property sets applied to the <code className="text-brand bg-brand/10 px-1.5 py-0.5 rounded text-sm">data-theme</code> attribute on the preview canvas root element. When you switch a theme, all design tokens — primary color, background, card surfaces, borders — update simultaneously.
          </p>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="flex items-center px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400">
              globals.css
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">{`[data-theme="startup"] {
  --canvas-bg: oklch(0.99 0 0);
  --canvas-fg: oklch(0.2 0 0);
  --canvas-primary: oklch(0.55 0.22 270);
  --canvas-card-bg: oklch(1 0 0);
  --canvas-card-border: oklch(0.92 0 0);
}`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Additional controls</h2>
          <p>Beyond preset selection, you can individually control:</p>
          <ul className="mt-4 space-y-2 list-none pl-0">
            {[
              "Primary color (with a custom color picker)",
              "Font family (Sans, Serif, Mono, Display)",
              "Border radius (None → Full pill)",
              "Shadow intensity",
              "Section spacing",
              "Typography scale",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <DocsPager />
    </motion.article>
  );
}
