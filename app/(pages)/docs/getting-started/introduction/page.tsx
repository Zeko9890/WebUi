"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroductionPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="prose prose-invert max-w-none"
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Getting Started</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Introduction</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-10">
        ZekoUI is an AI-powered visual website builder designed for developers who want to move fast without sacrificing quality.
      </p>

      <div className="space-y-8 text-zinc-300 leading-relaxed text-[15px]">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What problem does ZekoUI solve?</h2>
          <p>
            Building a landing page from scratch takes hours — even for experienced developers. You write the same Hero section, the same Features grid, the same Footer, for every project. ZekoUI eliminates this completely.
          </p>
          <p className="mt-4">
            You describe what you need, choose a visual theme, and our builder composes a fully-styled, responsive page instantly. Every section is editable inline, and when you&apos;re done, you export clean, production-ready code.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Core concepts</h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {[
              { title: "Builder Config", desc: "A single JSON state object that drives the entire page — colors, text, sections, and themes." },
              { title: "Section System", desc: "Pages are composed from reusable section blocks: Hero, Features, Pricing, Testimonials, and more." },
              { title: "Export Engine", desc: "The export engine transforms the Builder Config into typed React + Tailwind code you can drop into any project." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to try it?</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/docs/getting-started/quick-start"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand/90 transition-colors"
            >
              Quick Start <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Open Builder
            </Link>
          </div>
        </section>
      </div>

      <DocsPager />
    </motion.article>
  );
}
