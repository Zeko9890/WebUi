"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            id="nav-logo"
            href="/"
            className="flex items-center gap-2 font-semibold text-[15px] tracking-tight shrink-0 group"
          >
            <span className="flex items-center justify-center size-8 rounded-lg gradient-brand shadow-sm group-hover:shadow-md transition-shadow">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="hidden sm:inline gradient-brand-text font-bold">
              AI UI Generator
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                  pathname === link.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/generator" id="nav-cta">
              <Button
                size="sm"
                className="hidden sm:inline-flex gradient-brand text-white border-0 shadow-sm hover:opacity-90 transition-opacity font-medium"
              >
                Start Generating
              </Button>
            </Link>
            {/* Mobile hamburger */}
            <Button
              id="nav-mobile-toggle"
              variant="ghost"
              size="icon"
              className="md:hidden size-9"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute top-16 inset-x-4 glass rounded-2xl p-4 shadow-xl transition-all duration-300 border",
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t">
              <Link href="/generator">
                <Button className="w-full gradient-brand text-white border-0 font-medium">
                  Start Generating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
