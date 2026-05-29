"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const COLORS = [
  { value: "#000000", label: "Midnight" },
  { value: "#3b82f6", label: "Blue" },
  { value: "#8b5cf6", label: "Violet" },
  { value: "#10b981", label: "Emerald" },
  { value: "#f43f5e", label: "Rose" },
  { value: "#f59e0b", label: "Amber" },
  { value: "#0ea5e9", label: "Sky" },
  { value: "#d4af37", label: "Gold" },
];

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {COLORS.map((c) => (
        <Tooltip key={c.value}>
          <TooltipTrigger
            onClick={() => onChange(c.value)}
            className={cn(
                "size-8 rounded-full flex items-center justify-center transition-all relative ring-offset-2 ring-offset-background",
                value.toLowerCase() === c.value.toLowerCase()
                  ? "ring-2 ring-brand scale-110 shadow-sm"
                  : "hover:scale-110 ring-0 hover:shadow-sm border border-border/10"
              )}
              style={{ backgroundColor: c.value }}
              aria-label={`Select ${c.label} color`}
            >
              {value.toLowerCase() === c.value.toLowerCase() && (
                <Check className={cn(
                  "size-4 stroke-[3px] animate-in zoom-in-50 duration-200",
                  c.value === "#000000" ? "text-white" : "text-white drop-shadow-md"
                )} />
              )}
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            {c.label}
          </TooltipContent>
        </Tooltip>
      ))}
      <div className="flex items-center gap-2 w-full mt-1">
        <div className="size-8 rounded-full border border-border overflow-hidden shrink-0 shadow-sm relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute -top-2 -left-2 size-12 cursor-pointer"
          />
        </div>
        <div className="text-xs font-mono px-2.5 py-1.5 bg-muted/50 rounded-md border flex-1 text-muted-foreground uppercase tracking-wider">
          {value}
        </div>
      </div>
    </div>
  );
}
