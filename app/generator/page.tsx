"use client";

import { Sparkles, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectForm } from "@/components/generator/project-form";
import { DynamicPreview } from "@/components/generator/dynamic-preview";
import { useGenerator } from "@/hooks/use-generator";
import { toast } from "sonner";
import { useEffect } from "react";

export default function GeneratorPage() {
  const {
    config,
    updateConfig,
    status,
    resultData,
    errorMessage,
    usedFallback,
    cooldownRemaining,
    generate,
  } = useGenerator();

  useEffect(() => {
    if (status === "done") {
      if (errorMessage) {
        toast.error("Generation Issue", { description: errorMessage });
      } else if (usedFallback) {
        toast.info("Using Mock Data", { description: "Add your Gemini API key in .env.local for AI generation." });
      } else {
        toast.success("Generation Complete", { description: "Your UI has been successfully generated." });
      }
    }
  }, [status, errorMessage, usedFallback]);

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 sm:px-6 h-14 border-b glass shrink-0 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-sm group"
        >
          <span className="flex items-center justify-center size-7 rounded-lg gradient-brand shadow-sm">
            <Sparkles className="size-3.5 text-white" />
          </span>
          <span className="gradient-brand-text font-bold hidden sm:inline">
            AI UI Generator
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <span className="text-xs text-muted-foreground hidden sm:inline">
            {status === "done" && resultData
              ? usedFallback
                ? "Preview · Mock Data"
                : `AI Generated · ${config.projectType}`
              : status === "generating"
              ? "Generating…"
              : "Ready"}
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Main split layout */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Form panel — top on mobile, left on desktop */}
        <aside className="w-full md:w-80 lg:w-96 md:border-r border-b md:border-b-0 shrink-0 md:overflow-hidden overflow-visible flex flex-col bg-background/70 z-10 shadow-xl h-1/2 md:h-full">
          <ProjectForm
            config={config}
            onUpdate={updateConfig}
            onGenerate={generate}
            status={status}
            cooldownRemaining={cooldownRemaining}
          />
        </aside>

        {/* Preview panel — bottom on mobile, right on desktop */}
        <main className="flex-1 overflow-hidden relative bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,hsl(var(--muted)/0.3)_10px,hsl(var(--muted)/0.3)_11px)]">
          <div className="absolute inset-4 lg:inset-8 rounded-2xl overflow-hidden border shadow-2xl bg-background">
            <DynamicPreview 
              data={resultData} 
              status={status} 
              themeStyle={config.themeStyle}
              primaryColor={config.primaryColor}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
