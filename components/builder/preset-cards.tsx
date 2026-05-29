"use client";

import { cn } from "@/lib/utils";
import type { BuilderConfig } from "@/types/builder";
import { motion } from "framer-motion";

interface PresetCardsProps {
  activeTheme: BuilderConfig["theme"];
  onSelect: (theme: string) => void;
}

const PRESET_DISPLAY = [
  { value: "startup", label: "Startup", desc: "Friendly & soft", color: "#8b5cf6", bg: "bg-purple-50", border: "border-purple-200" },
  { value: "luxury", label: "Luxury", desc: "Elegant & refined", color: "#d4af37", bg: "bg-[#fdfbf7]", border: "border-[#eaddb9]" },
  { value: "minimal", label: "Minimal", desc: "Clean & pure", color: "#000", bg: "bg-white", border: "border-gray-200" },
  { value: "gaming", label: "Gaming", desc: "Neon & edgy", color: "#00ff00", bg: "bg-[#0a0a0a]", border: "border-[#00ff00]/30" },
  { value: "creator", label: "Creator", desc: "Vibrant & bold", color: "#ff4500", bg: "bg-orange-50", border: "border-orange-200" },
  { value: "fitness", label: "Fitness", desc: "Aggressive & dark", color: "#ff003c", bg: "bg-zinc-950", border: "border-red-900/40" },
];

export function PresetCards({ activeTheme, onSelect }: PresetCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {PRESET_DISPLAY.map((p) => (
        <motion.button
          key={p.value}
          onClick={() => onSelect(p.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "flex flex-col items-start gap-2 p-3 rounded-xl border text-left transition-colors overflow-hidden relative group",
            activeTheme === p.value
              ? "border-brand ring-1 ring-brand shadow-sm bg-brand/5"
              : "border-border/50 hover:border-border hover:bg-accent/30"
          )}
        >
          {/* Mini preview thumbnail */}
          <div className={cn(
            "w-full h-10 rounded-md border flex items-center px-2 gap-1.5 overflow-hidden transition-transform",
            p.bg, p.border
          )}>
            <div className="size-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
            <div className="h-1.5 w-full rounded-sm bg-current opacity-20" />
          </div>
          
          <div className="flex flex-col">
            <span className={cn(
              "text-xs font-bold capitalize",
              activeTheme === p.value ? "text-brand" : "text-foreground"
            )}>
              {p.label}
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">{p.desc}</span>
          </div>
        </motion.button>
      ))}
      <div className="col-span-2 mt-1">
        <p className="text-[10px] text-muted-foreground text-center bg-muted/50 p-2 rounded-md">
          Selecting a preset will completely restructure the canvas layout, spacing, and styling.
        </p>
      </div>
    </div>
  );
}
