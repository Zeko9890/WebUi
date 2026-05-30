"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";

const sections = [
  { name: "Navbar", desc: "Fixed top navigation bar with logo, links, and CTA. Supports floating, bordered, and stuck styles." },
  { name: "Hero", desc: "Full-width headline section with a CTA button and optional badge or subheadline." },
  { name: "Features", desc: "3 or 4-column feature card grid with icons, titles, and descriptions." },
  { name: "Stats", desc: "Animated counter row showing key metrics. Counts up on scroll-into-view." },
  { name: "Testimonials", desc: "Customer quote cards with avatar, name, and role. Multiple layout variants." },
  { name: "Pricing", desc: "Tiered pricing cards with feature checklists and highlighted recommended plan." },
  { name: "FAQ", desc: "Accordion-style frequently asked questions section." },
  { name: "CTA", desc: "Full-width call-to-action banner with gradient background and button." },
  { name: "Footer", desc: "Multi-column footer with logo, link groups, and social icons." },
];

export default function ComponentsPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Core Features</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Components</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        ZekoUI provides a library of pre-built, theme-aware page sections. Each section is independently editable, reorderable, and included in the code export.
      </p>

      <div className="space-y-12 text-zinc-300 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Available Sections</h2>
          <div className="rounded-2xl border border-zinc-800 overflow-hidden divide-y divide-zinc-800">
            {sections.map((s) => (
              <div key={s.name} className="flex items-start gap-6 px-5 py-4 hover:bg-zinc-900/50 transition-colors">
                <code className="text-brand text-sm font-mono bg-brand/10 px-2 py-0.5 rounded shrink-0 min-w-[100px] text-center">
                  {s.name}
                </code>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Section Structure</h2>
          <p className="mb-4">
            Each section receives a <code className="text-brand bg-brand/10 px-1.5 py-0.5 rounded text-sm">config</code> prop derived from the central <code className="text-brand bg-brand/10 px-1.5 py-0.5 rounded text-sm">BuilderConfig</code> state, and an <code className="text-brand bg-brand/10 px-1.5 py-0.5 rounded text-sm">onUpdate</code> callback for inline editing:
          </p>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400">
              hero-section.tsx
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">{`interface HeroSectionProps {
  config: BuilderConfig;
  onUpdate: (key: keyof BuilderConfig, value: string) => void;
}

export function HeroSection({ config, onUpdate }: HeroSectionProps) {
  return (
    <section>
      <InlineText
        value={config.heroHeadline}
        onChange={(v) => onUpdate("heroHeadline", v)}
      />
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
