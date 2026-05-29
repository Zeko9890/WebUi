"use client";

import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ResponsiveShowcase() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Auto cycle devices for the demo
  useEffect(() => {
    const interval = setInterval(() => {
      setDevice(prev => prev === "desktop" ? "tablet" : prev === "tablet" ? "mobile" : "desktop");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
            Flawlessly responsive
          </h2>
          <p className="text-white/60 text-lg font-medium leading-relaxed">
            Toggle between viewports instantly. The builder canvas resizes to show you exactly how your layout wraps and stacks on every device.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-12 overflow-hidden flex flex-col items-center">
          
          <div className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl mb-12">
            <button
              onClick={() => setDevice("desktop")}
              className={cn("px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all", device === "desktop" ? "bg-white/10 text-white shadow-sm" : "text-white/50 hover:text-white")}
            >
              <Monitor className="size-4" /> Desktop
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={cn("px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all", device === "tablet" ? "bg-white/10 text-white shadow-sm" : "text-white/50 hover:text-white")}
            >
              <Tablet className="size-4" /> Tablet
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={cn("px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all", device === "mobile" ? "bg-white/10 text-white shadow-sm" : "text-white/50 hover:text-white")}
            >
              <Smartphone className="size-4" /> Mobile
            </button>
          </div>

          <motion.div
            layout
            transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
            className={cn(
              "h-[400px] rounded-xl border border-white/10 bg-[#111] overflow-hidden flex flex-col relative",
              device === "desktop" ? "w-full max-w-4xl" : device === "tablet" ? "w-[600px]" : "w-[320px]"
            )}
          >
            {/* Mock Nav */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
              <div className="size-6 rounded bg-white/20" />
              <div className="flex gap-4">
                <div className={cn("h-2 bg-white/10 rounded transition-all", device === "mobile" ? "hidden" : "w-12")} />
                <div className={cn("h-2 bg-white/10 rounded transition-all", device === "mobile" ? "hidden" : "w-12")} />
                <div className="h-6 w-16 bg-blue-500 rounded-md -my-2" />
              </div>
            </div>

            {/* Mock Hero */}
            <div className={cn(
              "p-8 flex gap-8 flex-1 transition-all",
              device === "desktop" ? "flex-row items-center" : "flex-col justify-center"
            )}>
              <div className={cn("flex flex-col gap-4 flex-1", device !== "desktop" && "items-center text-center")}>
                <div className={cn("h-6 bg-white/20 rounded-md", device === "mobile" ? "w-3/4" : "w-5/6")} />
                <div className={cn("h-6 bg-white/20 rounded-md", device === "mobile" ? "w-1/2" : "w-2/3")} />
                <div className="h-3 w-full bg-white/5 rounded-md mt-4" />
                <div className="h-3 w-4/5 bg-white/5 rounded-md" />
                <div className="h-10 w-32 bg-blue-500 rounded-lg mt-4" />
              </div>
              <div className={cn(
                "rounded-xl bg-white/5 border border-white/5",
                device === "desktop" ? "flex-1 h-full" : "w-full h-40"
              )} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
