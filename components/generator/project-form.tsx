"use client";

import { Loader2, Sparkles, Settings2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { ProjectFormInput, ProjectType, ThemeStyle, BrandVibe } from "@/types/generator";

interface ProjectFormProps {
  config: ProjectFormInput;
  onUpdate: <K extends keyof ProjectFormInput>(key: K, value: ProjectFormInput[K]) => void;
  onGenerate: () => void;
  status: "idle" | "generating" | "done" | "error";
  cooldownRemaining?: number;
}

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "ai-saas", label: "AI SaaS" },
  { value: "fitness", label: "Fitness App" },
  { value: "restaurant", label: "Restaurant" },
  { value: "clothing", label: "Clothing Brand" },
  { value: "portfolio", label: "Portfolio" },
];

const THEME_STYLES: { value: ThemeStyle; label: string }[] = [
  { value: "modern", label: "Modern" },
  { value: "minimal", label: "Minimal" },
  { value: "bold", label: "Bold" },
  { value: "retro", label: "Retro" },
  { value: "vibrant", label: "Vibrant" },
];

const BRAND_VIBES: { value: BrandVibe; label: string }[] = [
  { value: "professional", label: "Professional" },
  { value: "playful", label: "Playful" },
  { value: "luxurious", label: "Luxurious" },
  { value: "energetic", label: "Energetic" },
  { value: "trustworthy", label: "Trustworthy" },
];

const COLORS = [
  { value: "#8b5cf6", label: "Violet" },
  { value: "#3b82f6", label: "Blue" },
  { value: "#10b981", label: "Emerald" },
  { value: "#f43f5e", label: "Rose" },
  { value: "#f59e0b", label: "Amber" },
  { value: "#64748b", label: "Slate" },
];

export function ProjectForm({ config, onUpdate, onGenerate, status, cooldownRemaining = 0 }: ProjectFormProps) {
  const isGenerating = status === "generating";
  const isDisabled = isGenerating || cooldownRemaining > 0;

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b shrink-0">
        <Settings2 className="size-4 text-muted-foreground" />
        <h2 className="font-semibold text-sm">Project Settings</h2>
      </div>

      <div className="flex flex-col gap-5 p-5 flex-1">
        {/* Project Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Project Type
          </label>
          <Select
            value={config.projectType}
            onValueChange={(v) => onUpdate("projectType", v as ProjectType)}
            disabled={isGenerating}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Theme/Style */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Theme Style
          </label>
          <div className="grid grid-cols-2 gap-2">
            {THEME_STYLES.map((t) => (
              <button
                key={t.value}
                onClick={() => onUpdate("themeStyle", t.value)}
                disabled={isGenerating}
                className={cn(
                  "px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 text-left hover:-translate-y-0.5 active:translate-y-0",
                  config.themeStyle === t.value
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-border hover:border-primary/40 hover:shadow-md text-muted-foreground hover:text-foreground",
                  isGenerating && "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Brand Vibe */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Brand Vibe
          </label>
          <div className="flex flex-wrap gap-2">
            {BRAND_VIBES.map((v) => (
              <button
                key={v.value}
                onClick={() => onUpdate("brandVibe", v.value)}
                disabled={isGenerating}
                className={cn(
                  "px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                  config.brandVibe === v.value
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-border hover:border-primary/40 hover:shadow-md text-muted-foreground hover:text-foreground",
                  isGenerating && "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none"
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Primary Color */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <Palette className="size-3.5" />
            Primary Color
          </div>
          <div className="flex flex-wrap gap-3 mt-1">
            {COLORS.map((c) => (
              <button
                key={c.value}
                onClick={() => onUpdate("primaryColor", c.value)}
                disabled={isGenerating}
                className={cn(
                  "size-8 rounded-full border-2 transition-transform hover:scale-110",
                  config.primaryColor === c.value
                    ? "border-foreground scale-110"
                    : "border-transparent",
                  isGenerating && "opacity-50 cursor-not-allowed"
                )}
                style={{ backgroundColor: c.value }}
                aria-label={`Select ${c.label} color`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t shrink-0">
        <Button
          onClick={onGenerate}
          disabled={isDisabled}
          className="w-full h-12 gradient-brand text-white border-0 font-semibold gap-2 hover:opacity-90 transition-all shadow-md hover:shadow-lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Generating Preview...
            </>
          ) : cooldownRemaining > 0 ? (
            `Wait ${cooldownRemaining}s to Generate`
          ) : (
            <>
              <Sparkles className="size-5" />
              Generate Landing Page
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
