"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ALL_PAGES = [
  { label: "Introduction", href: "/docs/getting-started/introduction" },
  { label: "Quick Start", href: "/docs/getting-started/quick-start" },
  { label: "Installation", href: "/docs/getting-started/installation" },
  { label: "Visual Builder", href: "/docs/core-features/visual-builder" },
  { label: "Theme System", href: "/docs/core-features/theme-system" },
  { label: "Components", href: "/docs/core-features/components" },
  { label: "Exporting", href: "/docs/core-features/exporting" },
];

export function DocsPager() {
  const pathname = usePathname();
  const idx = ALL_PAGES.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? ALL_PAGES[idx - 1] : null;
  const next = idx < ALL_PAGES.length - 1 ? ALL_PAGES[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-zinc-800">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-0.5">Previous</div>
            {prev.label}
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group text-right"
        >
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-0.5">Next</div>
            {next.label}
          </div>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : <div />}
    </div>
  );
}
