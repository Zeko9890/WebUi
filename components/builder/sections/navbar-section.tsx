"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { BuilderConfig, SectionId } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { Menu, X } from "lucide-react";

interface NavbarSectionProps {
  config: BuilderConfig;
  onUpdate: <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function NavbarSection({ config, onUpdate, viewport = "desktop" }: NavbarSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  const isStuck = config.navbarStyle === "stuck";
  const isFloating = config.navbarStyle === "floating";
  const isBordered = config.navbarStyle === "bordered";

  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.builder-scroll-container') || null;
    const sections = config.sectionOrder.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      // Find the most intersecting entry if multiple
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: container,
      threshold: 0.5,
    });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [config.sectionOrder]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ].filter(link => config.sectionOrder.includes(link.id as SectionId));

  return (
    <div className={cn(
      "w-full z-50 transition-all duration-500",
      isStuck ? "sticky top-0" : "relative",
      isFloating ? "py-6 px-4" : ""
    )}>
      <header className={cn(
        "flex items-center justify-between h-16 transition-all duration-500 group",
        isDesktop ? "px-10" : "px-6",
        isFloating ? "mx-auto max-w-5xl rounded-[var(--canvas-radius)] border border-[var(--canvas-card-border)] bg-[var(--canvas-card-bg)]/80 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-border/50" : "",
        isBordered ? "border-b border-[var(--canvas-card-border)] bg-[var(--canvas-bg)]/80 backdrop-blur-md" : "",
        (!isFloating && !isBordered) ? "bg-transparent" : ""
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center size-8 rounded-[calc(var(--canvas-button-radius)-2px)] text-white shadow-md relative overflow-hidden"
            style={{ backgroundColor: "var(--canvas-primary)" }}
          >
            <div className="absolute inset-0 bg-white/20 blur-[2px] rounded-full translate-y-4 translate-x-4 opacity-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            <span className="font-bold text-lg leading-none relative z-10 drop-shadow-sm">
              {config.brandName.charAt(0) || "B"}
            </span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[var(--canvas-fg)]">
            <InlineText
              value={config.brandName}
              onChange={(v) => onUpdate("brandName", v)}
              editingMode={true}
              placeholder="Brand Name"
            />
          </span>
        </div>

        {/* Desktop Links */}
        <nav className={cn("items-center gap-8 text-[13px] font-semibold text-[var(--canvas-fg)]", isMobile ? "hidden" : "flex")}>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)}
              className={cn(
                "transition-all relative",
                activeSection === link.id ? "opacity-100" : "opacity-60 hover:opacity-100"
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full" style={{ backgroundColor: "var(--canvas-primary)" }} />
              )}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "items-center justify-center px-4 py-2 text-[13px] text-white transition-all duration-300",
              isMobile ? "hidden" : "inline-flex",
              "rounded-[var(--canvas-button-radius)] shadow-md hover:shadow-lg hover:-translate-y-0.5",
              "relative overflow-hidden group/btn"
            )}
            style={{ backgroundColor: "var(--canvas-primary)" }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            <span className="relative z-10 font-semibold tracking-wide">
              <InlineText
                value={config.ctaLabel}
                onChange={(v) => onUpdate("ctaLabel", v)}
                editingMode={true}
                placeholder="CTA Label"
              />
            </span>
          </button>
          
          <button 
            className={cn("p-2 text-[var(--canvas-fg)] opacity-70 hover:opacity-100", !isMobile && "hidden")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {(mobileMenuOpen && isMobile) && (
        <div className="absolute top-full left-0 w-full p-4 z-40">
          <div className="bg-[var(--canvas-card-bg)] border border-[var(--canvas-card-border)] rounded-[var(--canvas-radius)] p-4 shadow-xl flex flex-col gap-4 backdrop-blur-xl">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-[var(--canvas-fg)]">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors",
                    activeSection === link.id ? "bg-[var(--canvas-primary)]/10" : "opacity-70"
                  )}
                  style={{ color: activeSection === link.id ? "var(--canvas-primary)" : undefined }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              className="w-full py-3 text-sm text-white font-bold rounded-[var(--canvas-button-radius)] shadow-md"
              style={{ backgroundColor: "var(--canvas-primary)" }}
            >
              {config.ctaLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
