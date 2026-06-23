"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import type { BuilderConfig } from "@/types/builder";
import { InlineText } from "@/components/generator/inline-edit";
import { EditableImage } from "@/components/generator/editable-image";

interface HeroSectionProps {
  config: BuilderConfig;
  onUpdate: <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => void;
  viewport?: "desktop" | "tablet" | "mobile";
}

export function HeroSection({ config, onUpdate, viewport = "desktop" }: HeroSectionProps) {
  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";
  const isDesktop = viewport === "desktop";

  const isSplit = config.heroStyle === "split";
  const isMinimal = config.heroStyle === "minimal";
  const isBold = config.heroStyle === "bold";

  return (
    <section className={cn(
      "relative z-10 flex justify-center overflow-hidden",
      isSplit ? (isDesktop ? "flex-row items-center text-left" : "flex-col items-center text-left") : "flex-col items-center text-center",
      isDesktop ? "px-10" : "px-6",
      "py-[calc(var(--canvas-py)*1.2)] min-h-[70vh]"
    )}>
      
      {/* Premium Background Glows */}
      {!isMinimal && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
          <div 
            className="w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.08]"
            style={{ background: `radial-gradient(circle, var(--canvas-primary) 0%, transparent 70%)` }}
          />
        </div>
      )}

      {isBold && (
        <>
          <div 
            className="absolute top-0 left-0 w-full h-[500px] opacity-20 pointer-events-none -z-10"
            style={{ background: `linear-gradient(180deg, var(--canvas-primary), transparent)` }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none mix-blend-overlay -z-10" />
        </>
      )}

      <div className={cn(
        "flex flex-col relative z-10 w-full",
        isSplit ? (isDesktop ? "w-[55%] pr-16" : "w-full pr-0") : "max-w-4xl items-center"
      )}>
        {/* Badge */}
        {!isMinimal && (
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold mb-8 rounded-full border shadow-sm transition-transform hover:scale-105 cursor-default backdrop-blur-md"
            style={{
              color: "var(--canvas-primary)",
              backgroundColor: "color-mix(in srgb, var(--canvas-primary) 8%, transparent)",
              borderColor: "color-mix(in srgb, var(--canvas-primary) 20%, transparent)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: "var(--canvas-primary)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--canvas-primary)" }} />
            </span>
            <span className="tracking-wide">
              <InlineText
                value={config.tagline}
                onChange={(v) => onUpdate("tagline", v)}
                editingMode={true}
                placeholder="Tagline..."
              />
            </span>
          </div>
        )}

        {/* Title */}
        <h1 
          className="font-black tracking-tighter mb-6 leading-[1.05] text-[var(--canvas-fg)]"
          style={{ fontSize: "var(--canvas-h1)" }}
        >
          <span className="relative whitespace-nowrap inline-block">
            We are building
          </span>{" "}
          <span className="relative inline-block pb-2">
            <span 
              className="relative z-10 text-transparent bg-clip-text" 
              style={{ 
                backgroundImage: `linear-gradient(to right, var(--canvas-primary), color-mix(in srgb, var(--canvas-primary) 50%, white))` 
              }}
            >
               the future.
            </span>
            {config.theme === "startup" && (
              <span
                className="absolute bottom-2 left-0 w-full h-3 opacity-20 z-0 rounded-full"
                style={{ backgroundColor: "var(--canvas-primary)" }}
              />
            )}
          </span>
        </h1>

        {/* Subtitle */}
        <div 
          className="opacity-60 mb-10 text-[var(--canvas-fg)] leading-relaxed font-medium"
          style={{ 
            fontSize: "var(--canvas-p)", 
            maxWidth: isSplit ? "100%" : "680px"
          }}
        >
          <InlineText
            value={config.subtitle}
            onChange={(v) => onUpdate("subtitle", v)}
            editingMode={true}
            multiline
            placeholder="Write a compelling subtitle..."
          />
        </div>

        {/* Buttons */}
        <div className={cn(
          "flex gap-4 w-full",
          isMobile ? "flex-col" : "flex-row w-auto",
          !isSplit && "justify-center"
        )}>
          <button
            className={cn(
              "px-8 py-4 text-[15px] text-white flex items-center justify-center gap-2 font-bold transition-all duration-300",
              "rounded-[var(--canvas-button-radius)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group/primary"
            )}
            style={{ 
              backgroundColor: "var(--canvas-primary)",
              boxShadow: `0 10px 25px -5px color-mix(in srgb, var(--canvas-primary) 40%, transparent)`
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/primary:opacity-100 transition-opacity" />
            <span className="relative z-10">
              <InlineText
                value={config.ctaLabel}
                onChange={(v) => onUpdate("ctaLabel", v)}
                editingMode={true}
                placeholder="Primary CTA"
              />
            </span>
            <ArrowRight className="size-4 shrink-0 relative z-10 group-hover/primary:translate-x-1 transition-transform" />
          </button>
          
          <button
            className={cn(
              "px-8 py-4 text-[15px] flex items-center justify-center gap-2 font-bold transition-all duration-300",
              "rounded-[var(--canvas-button-radius)] text-[var(--canvas-fg)] hover:bg-black/5 dark:hover:bg-white/5",
              "border border-transparent hover:border-[var(--canvas-card-border)]"
            )}
            style={{ 
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
            }}
          >
            <Play className="size-4 shrink-0 opacity-70" />
            <InlineText
              value={config.ctaSecondaryLabel}
              onChange={(v) => onUpdate("ctaSecondaryLabel", v)}
              editingMode={true}
              placeholder="Secondary CTA"
            />
          </button>
        </div>
      </div>

      {/* Split image placeholder */}
      {isSplit && (
        <div className={cn(
          "relative group",
          isDesktop ? "w-[45%] mt-0" : "w-full mt-16"
        )}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--canvas-primary)] to-purple-500 rounded-[calc(var(--canvas-radius)+4px)] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <EditableImage
            value={config.heroImage}
            onChange={(v) => onUpdate("heroImage", v)}
            className={cn(
              "w-full shadow-2xl relative z-10",
              isDesktop ? "aspect-[4/3]" : "aspect-square"
            )}
          />
        </div>
      )}
    </section>
  );
}
