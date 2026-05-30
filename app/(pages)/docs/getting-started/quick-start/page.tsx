"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="size-8 rounded-full bg-brand flex items-center justify-center text-sm font-bold text-white shrink-0">
          {n}
        </div>
        <div className="w-px flex-1 bg-zinc-800 mt-2" />
      </div>
      <div className="pb-10 flex-1">
        <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
        <div className="text-zinc-300 text-[15px] leading-relaxed space-y-3">{children}</div>
      </div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
      </div>
      <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">{children}</pre>
    </div>
  );
}

export default function QuickStartPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Getting Started</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Quick Start</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        Get from zero to a fully functional landing page in under 5 minutes.
      </p>

      <div className="space-y-0">
        <Step n={1} title="Open the Builder">
          <p>Navigate to the generator page. You can do this from the Navbar or by going to <code className="text-brand text-sm bg-brand/10 px-1.5 py-0.5 rounded">/generator</code> directly.</p>
        </Step>

        <Step n={2} title="Choose a Theme Preset">
          <p>In the right-hand sidebar, select a visual theme preset. Options include <strong className="text-white">Startup</strong>, <strong className="text-white">Luxury</strong>, <strong className="text-white">Gaming</strong>, and <strong className="text-white">Minimal</strong>. The preview updates in real time.</p>
        </Step>

        <Step n={3} title="Add or Reorder Sections">
          <p>Use the sidebar to add sections like <strong className="text-white">Hero</strong>, <strong className="text-white">Features</strong>, <strong className="text-white">Pricing</strong>, and <strong className="text-white">Testimonials</strong>. Drag the handles to reorder them.</p>
        </Step>

        <Step n={4} title="Edit Inline">
          <p>Click on any text in the preview pane to edit it directly. Changes are reflected instantly with no page reload required.</p>
        </Step>

        <Step n={5} title="Export Your Code">
          <p>When satisfied, click the <strong className="text-white">Export</strong> button. Choose between <strong className="text-white">React + Tailwind</strong>, <strong className="text-white">JSON Config</strong>, or <strong className="text-white">HTML</strong>. Copy the output and drop it into your project.</p>
          <CodeBlock>{`// Example exported component
export function HeroSection() {
  return (
    <section className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold">Your headline</h1>
      <p className="mt-4 text-lg text-muted-foreground">Your subheading</p>
    </section>
  );
}`}</CodeBlock>
        </Step>
      </div>

      <DocsPager />
    </motion.article>
  );
}
