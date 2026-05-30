"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApiReferencePage() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Documentation */}
        <div className="flex-1 max-w-2xl lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">API Reference</h1>
            <p className="text-lg text-zinc-400 mb-12">
              Our API allows you to programmatically generate UI components and retrieve configuration payloads. All endpoints are authenticated using Bearer tokens.
            </p>

            <div className="space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-brand/20 text-brand rounded-md border border-brand/30">
                    POST
                  </span>
                  <h2 className="text-2xl font-bold">Generate UI</h2>
                </div>
                <p className="text-zinc-400 mb-6">
                  Generates a full JSON payload representing the UI schema based on natural language input.
                </p>

                <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-widest mb-3">Parameters</h4>
                <div className="border border-zinc-800 rounded-xl overflow-hidden mb-8">
                  <div className="grid grid-cols-3 p-4 border-b border-zinc-800 bg-zinc-900/50 text-sm font-semibold text-zinc-300">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Description</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 text-sm text-zinc-400">
                    <div className="font-mono text-white">prompt</div>
                    <div>string</div>
                    <div>The natural language description of the UI to generate.</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 border-t border-zinc-800 text-sm text-zinc-400">
                    <div className="font-mono text-white">theme <span className="opacity-50 text-xs">(optional)</span></div>
                    <div>string</div>
                    <div>The visual preset to apply (e.g., "startup", "luxury").</div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 rounded-md border border-blue-500/30">
                    GET
                  </span>
                  <h2 className="text-2xl font-bold">Retrieve Schema</h2>
                </div>
                <p className="text-zinc-400 mb-6">
                  Retrieves an existing UI schema configuration by its unique identifier.
                </p>
                <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-widest mb-3">Path Variables</h4>
                <div className="border border-zinc-800 rounded-xl overflow-hidden mb-8">
                  <div className="grid grid-cols-3 p-4 bg-zinc-900/50 text-sm text-zinc-400">
                    <div className="font-mono text-white">id</div>
                    <div>string</div>
                    <div>The unique identifier of the UI configuration.</div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Blocks */}
        <div className="flex-1 lg:w-[45%] lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Code Block 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
                <span className="text-xs font-mono text-zinc-400">Request: Generate UI</span>
                <button 
                  onClick={() => handleCopy("curl -X POST...")}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Copy className="size-4" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
                <span className="text-brand">curl</span> -X POST https://api.zeko.ui/v1/generate \
                <br />
                &nbsp;&nbsp;-H <span className="text-emerald-400">"Authorization: Bearer YOUR_API_KEY"</span> \
                <br />
                &nbsp;&nbsp;-H <span className="text-emerald-400">"Content-Type: application/json"</span> \
                <br />
                &nbsp;&nbsp;-d <span className="text-purple-400">{"'{"}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"prompt"</span>: <span className="text-emerald-400">"A modern SaaS landing page for a developer tool"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"theme"</span>: <span className="text-emerald-400">"startup"</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">{"}'"}</span>
              </div>
            </div>

            {/* Code Block 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
                <span className="text-xs font-mono text-zinc-400">Response</span>
                <button 
                  onClick={() => handleCopy("{ ... }")}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Copy className="size-4" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
                <span className="text-purple-400">{"{"}</span>
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">"id"</span>: <span className="text-emerald-400">"schema_9f8b2a..."</span>,
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">"config"</span>: <span className="text-purple-400">{"{"}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"brandName"</span>: <span className="text-emerald-400">"DevTool"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"theme"</span>: <span className="text-emerald-400">"startup"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">// ... truncated</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">{"}"}</span>
                <br />
                <span className="text-purple-400">{"}"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
