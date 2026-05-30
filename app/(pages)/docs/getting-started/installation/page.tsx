"use client";

import { motion } from "framer-motion";
import { DocsPager } from "@/components/docs/docs-pager";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

function CodeBlock({ title, lang = "bash", children }: { title?: string; lang?: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="my-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50">
        <span className="text-xs font-mono text-zinc-400">{title ?? lang}</span>
        <button onClick={handleCopy} className="text-zinc-500 hover:text-zinc-300 transition-colors">
          {copied ? <CheckCheck className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">{children.trim()}</pre>
    </div>
  );
}

export default function InstallationPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Getting Started</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-5">Installation</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-12">
        Set up ZekoUI locally in your own Next.js project. Follow the steps below to get started.
      </p>

      <div className="space-y-12 text-zinc-300 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
          <ul className="space-y-2 list-none pl-0">
            {["Node.js 18.17 or later", "pnpm, npm, or yarn", "A Next.js 14+ project (App Router)"].map((r) => (
              <li key={r} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Clone or create a Next.js app</h2>
          <CodeBlock title="terminal" lang="bash">{`npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app`}</CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Install dependencies</h2>
          <CodeBlock title="terminal" lang="bash">{`npm install framer-motion lucide-react
npx shadcn@latest init`}</CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Add required Shadcn components</h2>
          <CodeBlock title="terminal" lang="bash">{`npx shadcn@latest add button card badge tooltip dialog select switch slider`}</CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Start the development server</h2>
          <CodeBlock title="terminal" lang="bash">{`npm run dev`}</CodeBlock>
          <p className="mt-3 text-zinc-400">
            Your app will be running at <code className="text-brand bg-brand/10 px-1.5 py-0.5 rounded text-sm">http://localhost:3000</code>.
          </p>
        </section>

        <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5">
          <p className="text-sm text-blue-300 leading-relaxed">
            <strong className="text-blue-200">Note:</strong> ZekoUI is primarily a visual application — you use the builder at <code className="text-brand text-xs bg-brand/10 px-1 py-0.5 rounded">/generator</code> and export the output into your project. There is no npm package to install.
          </p>
        </div>
      </div>

      <DocsPager />
    </motion.article>
  );
}
