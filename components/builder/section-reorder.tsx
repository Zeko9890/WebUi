"use client";

import { Reorder } from "framer-motion";
import { GripVertical } from "lucide-react";
import type { SectionId } from "@/types/builder";
import { cn } from "@/lib/utils";

interface SectionReorderProps {
  order: SectionId[];
  onReorder: (newOrder: SectionId[]) => void;
}

const SECTION_LABELS: Record<SectionId, string> = {
  navbar: "Navigation Bar",
  hero: "Hero Header",
  features: "Features Grid",
  stats: "Statistics",
  testimonials: "Testimonials",
  pricing: "Pricing Tables",
  faq: "FAQ Accordion",
  cta: "Call to Action",
  footer: "Footer Area",
};

export function SectionReorder({ order, onReorder }: SectionReorderProps) {
  // Ensure we don't have undefined items if the state gets out of sync
  const validOrder = order.filter(Boolean);

  return (
    <Reorder.Group 
      axis="y" 
      values={validOrder} 
      onReorder={onReorder} 
      className="flex flex-col gap-2 w-full select-none mb-4"
    >
      {validOrder.map((id) => (
        <Reorder.Item
          key={id}
          value={id}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md bg-muted/40 border border-border/50",
            "hover:bg-muted/70 hover:border-border/80 transition-colors",
            "cursor-grab active:cursor-grabbing group relative",
            "shadow-sm"
          )}
        >
          <GripVertical className="size-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
          <span className="text-xs font-medium text-foreground capitalize">
            {SECTION_LABELS[id] || id}
          </span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
