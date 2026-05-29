"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

type AllowedTag = "h1" | "h2" | "h3" | "p" | "span" | "div";

// ─── Inline Text Field ───────────────────────────────────────────────────────
interface InlineTextProps {
  value: string;
  onChange: (v: string) => void;
  tag?: AllowedTag;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  multiline?: boolean;
  editingMode?: boolean;
  /** Extra label shown on the floating badge */
  label?: string;
}

export const InlineText = React.memo(function InlineText({
  value,
  onChange,
  tag = "span",
  className,
  style,
  placeholder = "Click to edit…",
  multiline = false,
  editingMode = false,
  label,
}: InlineTextProps) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  // Track last known value to avoid needless updates
  const lastValue = useRef(value);
  // Keep initial HTML reference static so React doesn't reconcile children on every render
  const htmlRef = useRef({ __html: value });

  // Sync external value into the contenteditable ONLY when not focused
  useEffect(() => {
    if (ref.current && !focused && value !== lastValue.current) {
      ref.current.textContent = value;
      lastValue.current = value;
      htmlRef.current = { __html: value };
    }
  }, [value, focused]);

  const handleInput = useCallback(() => {
    if (ref.current) {
      const currentText = ref.current.textContent ?? "";
      if (currentText !== lastValue.current) {
        lastValue.current = currentText;
        onChange(currentText);
      }
    }
  }, [onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!multiline && e.key === "Enter") {
        e.preventDefault();
        (e.currentTarget as HTMLElement).blur();
      }
      // Escape cancels focus
      if (e.key === "Escape") {
        (e.currentTarget as HTMLElement).blur();
      }
    },
    [multiline]
  );

  if (!editingMode) {
    // Plain non-editable view
    return React.createElement(tag, { className, style }, value);
  }

  const isEmpty = !value || value.trim() === "";

  return (
    <span className="relative group/inline-edit inline-block w-full">
      {/* Floating edit badge */}
      <span
        className={cn(
          "absolute -top-6 left-0 z-50 flex items-center gap-1 px-2 py-0.5 rounded-t-md text-[9px] font-bold uppercase tracking-wider",
          "bg-blue-500 text-white opacity-0 group-hover/inline-edit:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap"
        )}
      >
        <Pencil className="size-2.5" />
        {label ?? "Edit"}
      </span>

      {React.createElement(tag, {
        ref,
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: handleInput,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        onKeyDown: handleKeyDown,
        "data-placeholder": isEmpty ? placeholder : undefined,
        style,
        className: cn(
          className,
          "outline-none rounded-sm cursor-text transition-all duration-150 select-text",
          "ring-2 ring-transparent hover:ring-blue-400/40 focus:ring-blue-500/70",
          "focus:bg-blue-500/5 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]",
          isEmpty && "text-muted-foreground/50 italic"
        ),
        dangerouslySetInnerHTML: htmlRef.current,
      })}
    </span>
  );
});

// ─── Edit Mode Toolbar ────────────────────────────────────────────────────────
interface EditToolbarProps {
  isEditing: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  primaryColor: string;
}

export function EditToolbar({
  isEditing,
  onStart,
  onStop,
  onReset,
  primaryColor,
}: EditToolbarProps) {
  if (!isEditing) {
    return (
      <button
        onClick={onStart}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold",
          "border border-border/50 bg-background/90 backdrop-blur-sm text-muted-foreground",
          "hover:text-foreground hover:border-border hover:bg-accent/50 active:scale-95",
          "transition-all duration-150 shadow-sm"
        )}
        title="Enable live editing"
      >
        <Pencil className="size-3" />
        Edit Content
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Live indicator */}
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-blue-500/10 border-blue-500/30 text-[10px] font-bold text-blue-500 tracking-wide uppercase">
        <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
        Live Editing
      </span>

      <button
        onClick={onReset}
        className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-border/50 bg-background/90 text-muted-foreground hover:text-foreground hover:bg-accent/50 active:scale-95 transition-all"
        title="Reset to AI-generated content"
      >
        Reset
      </button>

      <button
        onClick={onStop}
        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white active:scale-95 transition-all shadow-sm"
        style={{ backgroundColor: primaryColor }}
        title="Done editing"
      >
        Done
      </button>
    </div>
  );
}
