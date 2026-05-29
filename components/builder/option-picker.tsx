"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useId } from "react";

interface OptionPickerProps<T extends string> {
  options: { value: T; label: string; icon?: React.ReactNode }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function OptionPicker<T extends string>({
  options,
  value,
  onChange,
  className,
  columns = 2,
}: OptionPickerProps<T>) {
  const id = useId();

  return (
    <div
      className={cn("grid gap-2", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => (
        <motion.button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className={cn(
            "relative flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-colors text-left overflow-hidden",
            value === opt.value
              ? "border-brand text-brand"
              : "border-border/50 hover:border-border text-muted-foreground hover:text-foreground hover:bg-accent/30"
          )}
        >
          {value === opt.value && (
            <motion.div
              layoutId={`${id}-active`}
              className="absolute inset-0 bg-brand/10 shadow-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {opt.icon && <span className="opacity-70">{opt.icon}</span>}
            {opt.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
