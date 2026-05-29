"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Track hydration without calling setState in an effect
const emptySubscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useHydrated();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("size-9", className)}>
        <span className="size-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      id="theme-toggle"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "size-9 rounded-lg transition-all duration-200",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
    >
      <span
        className="relative flex items-center justify-center"
        style={{ transition: "transform 0.4s cubic-bezier(.4,2,.6,1)" }}
      >
        {isDark ? (
          <Sun className="size-[18px] text-amber-400" />
        ) : (
          <Moon className="size-[18px]" />
        )}
      </span>
    </Button>
  );
}
