"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ControlGroupProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function ControlGroup({
  title,
  icon,
  children,
  defaultExpanded = true,
}: ControlGroupProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-border/30">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full px-4 py-3 hover:bg-muted/30 transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {icon && <span className="opacity-80">{icon}</span>}
          {title}
        </span>
        {expanded ? (
          <ChevronDown className="size-4 text-muted-foreground opacity-50" />
        ) : (
          <ChevronRight className="size-4 text-muted-foreground opacity-50" />
        )}
      </button>
      {expanded && <div className="px-4 pb-4 pt-0.5 space-y-4 animate-in slide-in-from-top-1 fade-in duration-200">{children}</div>}
    </div>
  );
}

export function ControlLabel({ children, description }: { children: React.ReactNode; description?: string }) {
  return (
    <div className="mb-1.5">
      <label className="text-[11px] font-bold text-foreground/80 uppercase tracking-wide">
        {children}
      </label>
      {description && <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{description}</p>}
    </div>
  );
}
