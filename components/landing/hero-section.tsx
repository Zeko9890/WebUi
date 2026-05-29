"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutTemplate, MousePointer2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-black -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(59,130,246,0.15),transparent_50%)] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 mb-8 backdrop-blur-md"
          >
            <Sparkles className="size-3 text-blue-400" />
            <span>The next generation of website building</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Build stunning websites,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              visually.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-medium"
          >
            Stop wrestling with code and templates. Design premium, responsive landing pages in real-time with our intuitive visual builder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/generator"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
            >
              Start Building Free
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 border border-white/10 transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Animated Builder Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.2 }}
          style={{ perspective: 1000 }}
          className="mt-20 md:mt-32 relative mx-auto max-w-5xl"
        >
          {/* Glow behind mockup */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full -z-10" />

          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col h-[500px] relative ring-1 ring-white/5">
            {/* Mock Window Chrome */}
            <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-white/20" />
                <div className="size-3 rounded-full bg-white/20" />
                <div className="size-3 rounded-full bg-white/20" />
              </div>
              <div className="mx-auto px-4 py-1.5 rounded-md bg-black/50 border border-white/5 text-[10px] font-mono text-white/40">
                app.antigravity.dev/builder
              </div>
            </div>

            {/* Mock Builder Interface */}
            <div className="flex-1 flex overflow-hidden">
              {/* Mock Sidebar */}
              <div className="w-64 border-r border-white/10 bg-[#0f0f0f] p-4 flex flex-col gap-4 hidden sm:flex">
                <div className="h-4 w-20 bg-white/10 rounded" />
                <div className="space-y-2">
                  <div className="h-8 w-full bg-white/5 rounded-md border border-white/10 flex items-center px-3 gap-2">
                    <LayoutTemplate className="size-3 text-white/40" />
                    <div className="h-2 w-16 bg-white/20 rounded" />
                  </div>
                  <div className="h-8 w-full bg-white/5 rounded-md border border-white/10" />
                  <div className="h-8 w-full bg-blue-500/20 rounded-md border border-blue-500/50 flex items-center px-3" />
                </div>
              </div>

              {/* Mock Canvas Area */}
              <div className="flex-1 bg-[url('/grid.svg')] bg-center relative p-8 flex items-center justify-center overflow-hidden">
                <motion.div 
                  className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
                  animate={{ 
                    scale: [0.95, 1, 0.95],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="h-12 border-b border-black/5 flex items-center justify-between px-6">
                    <div className="size-6 bg-black rounded-md" />
                    <div className="flex gap-4">
                      <div className="h-2 w-8 bg-black/10 rounded" />
                      <div className="h-2 w-8 bg-black/10 rounded" />
                    </div>
                  </div>
                  <div className="p-10 flex flex-col items-center text-center gap-4">
                    <div className="h-8 w-3/4 bg-black/90 rounded-md" />
                    <div className="h-3 w-full bg-black/20 rounded-md" />
                    <div className="h-3 w-5/6 bg-black/20 rounded-md" />
                    <div className="h-10 w-32 bg-blue-600 rounded-full mt-4" />
                  </div>
                </motion.div>
                
                {/* Floating Mouse Cursor Mock */}
                <motion.div
                  className="absolute z-50 text-white drop-shadow-lg"
                  animate={{
                    x: [100, -50, 20, 100],
                    y: [100, 50, -20, 100],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MousePointer2 className="size-6 text-white fill-black" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
