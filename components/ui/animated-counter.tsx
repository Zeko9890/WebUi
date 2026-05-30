"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  children: (displayValue: string) => React.ReactNode;
}

export function AnimatedCounter({ value, children }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 80,
  });

  useEffect(() => {
    // Regex to match prefix, number (with optional decimals/commas), and suffix
    const match = value.match(/^([^0-9.-]*)([0-9.,]+)([^0-9]*)$/);
    if (!match) {
      setTimeout(() => setDisplayValue(value), 0);
      return;
    }

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const num = parseFloat(numStr);
    const suffix = match[3];

    if (isNaN(num)) {
      setTimeout(() => setDisplayValue(value), 0);
      return;
    }

    const hasDecimals = numStr.includes('.');

    const unsubscribe = springValue.on("change", (latest) => {
      // If we are very close to the target, just show the exact target string to preserve original formatting (like commas)
      if (Math.abs(latest - num) < 0.05) {
        setDisplayValue(value);
        return;
      }
      
      const formatted = hasDecimals ? latest.toFixed(1) : Math.floor(latest).toString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    if (isInView) {
      motionValue.set(num);
    } else {
      motionValue.set(0);
    }

    return () => unsubscribe();
  }, [value, isInView, springValue, motionValue]);

  return <span ref={ref} className="inline-block">{children(displayValue)}</span>;
}
