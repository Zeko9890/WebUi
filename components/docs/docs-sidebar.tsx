"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/brand";

const DOC_SECTIONS = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      { label: "Introduction", slug: "introduction" },
      { label: "Quick Start", slug: "quick-start" },
      { label: "Installation", slug: "installation" },
    ],
  },
  {
    title: "Core Features",
    slug: "core-features",
    items: [
      { label: "Visual Builder", slug: "visual-builder" },
      { label: "Theme System", slug: "theme-system" },
      { label: "Components", slug: "components" },
      { label: "Exporting", slug: "exporting" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 hidden lg:block">
      <div className="sticky top-28 space-y-8 pr-4">
        <div className="px-2 mb-6">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <BrandLogo size={24} />
          </Link>
        </div>
        {DOC_SECTIONS.map((section) => (
          <div key={section.slug}>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const href = `/docs/${section.slug}/${item.slug}`;
                const isActive = pathname === href;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-all duration-150",
                        isActive
                          ? "text-brand font-semibold bg-brand/10"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 font-medium"
                      )}
                    >
                      {isActive && <ChevronRight className="size-3 shrink-0" />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
