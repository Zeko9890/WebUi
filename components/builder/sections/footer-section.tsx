"use client";

import type { BuilderConfig, SectionId } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";

interface FooterSectionProps {
  config: BuilderConfig;
  onUpdate: (key: keyof BuilderConfig, value: string) => void;
}

export function FooterSection({ config, onUpdate }: FooterSectionProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasSection = (id: string) => config.sectionOrder.includes(id as SectionId);

  return (
    <footer className="px-6 lg:px-10 pt-20 pb-12 border-t border-[var(--canvas-card-border)] bg-[var(--canvas-bg)] text-[var(--canvas-fg)] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="flex items-center justify-center size-7 rounded-[calc(var(--canvas-radius)*0.5)] text-white text-xs shadow-sm relative overflow-hidden"
                style={{ backgroundColor: "var(--canvas-primary)" }}
              >
                <div className="absolute inset-0 bg-white/20 blur-[1px] translate-y-3 translate-x-3 opacity-50 mix-blend-overlay" />
                <span className="font-bold leading-none relative z-10">{config.brandName.charAt(0)}</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                <InlineText
                  value={config.brandName}
                  onChange={(v) => onUpdate("brandName", v)}
                  editingMode={true}
                  placeholder="Brand Name"
                />
              </span>
            </div>
            <p className="opacity-60 text-sm max-w-xs mb-8 font-medium leading-relaxed">
              <InlineText
                value={config.tagline}
                onChange={(v) => onUpdate("tagline", v)}
                editingMode={true}
                placeholder="Footer tagline..."
              />
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wide">Product</h4>
            <ul className="space-y-3 text-[13px] font-medium opacity-60">
              {hasSection("features") && (
                <li><a href="#features" onClick={(e) => scrollToSection(e, "features")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">Features</a></li>
              )}
              {hasSection("pricing") && (
                <li><a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">Pricing</a></li>
              )}
              {hasSection("stats") && (
                <li><a href="#stats" onClick={(e) => scrollToSection(e, "stats")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">Statistics</a></li>
              )}
              {hasSection("testimonials") && (
                <li><a href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">Testimonials</a></li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3 text-[13px] font-medium opacity-60">
              {hasSection("hero") && (
                <li><a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">Home</a></li>
              )}
              {hasSection("faq") && (
                <li><a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors">FAQ</a></li>
              )}
              <li><a href="#" className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors cursor-not-allowed">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors cursor-not-allowed">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3 text-[13px] font-medium opacity-60">
              <li><a href="#" className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors cursor-not-allowed">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--canvas-primary)] hover:opacity-100 transition-colors cursor-not-allowed">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--canvas-card-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] font-medium opacity-40">
            © {new Date().getFullYear()} {config.brandName}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <div className="size-8 rounded-full border border-[var(--canvas-card-border)] flex items-center justify-center opacity-40 hover:opacity-100 hover:border-[var(--canvas-primary)] transition-all cursor-pointer hover:-translate-y-1">
              <span className="text-[10px] font-bold">X</span>
            </div>
            <div className="size-8 rounded-full border border-[var(--canvas-card-border)] flex items-center justify-center opacity-40 hover:opacity-100 hover:border-[var(--canvas-primary)] transition-all cursor-pointer hover:-translate-y-1">
              <span className="text-[10px] font-bold">GH</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
