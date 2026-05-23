"use client";

import { Sparkles, RotateCcw, Loader2, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  COMPONENT_TYPES,
  COLOR_SCHEMES,
  STYLE_PRESETS,
  ANIMATION_LEVELS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { GeneratorConfig } from "@/types";

interface FormPanelProps {
  config: GeneratorConfig;
  onUpdate: <K extends keyof GeneratorConfig>(key: K, value: GeneratorConfig[K]) => void;
  onGenerate: () => void;
  onReset: () => void;
  status: "idle" | "generating" | "done" | "error";
  error: string | null;
}

const PROMPT_SUGGESTIONS = [
  "A hero section for a SaaS startup with gradient background",
  "A pricing table with 3 tiers, dark mode",
  "A minimal dashboard with key metrics cards",
  "A contact form with glassmorphism style",
];

export function FormPanel({ config, onUpdate, onGenerate, onReset, status, error }: FormPanelProps) {
  const isGenerating = status === "generating";

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b shrink-0">
        <Settings2 className="size-4 text-muted-foreground" />
        <h2 className="font-semibold text-sm">Configuration</h2>
      </div>

      <div className="flex flex-col gap-5 p-5 flex-1">
        {/* Prompt */}
        <div className="flex flex-col gap-2">
          <label htmlFor="prompt-input" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Describe your UI
          </label>
          <Textarea
            id="prompt-input"
            placeholder="e.g. A hero section for a SaaS product with a gradient background, bold headline, and two CTA buttons..."
            className="min-h-[110px] resize-none text-sm leading-relaxed border-border/60 focus:border-primary/50 transition-colors"
            value={config.prompt}
            onChange={(e) => onUpdate("prompt", e.target.value)}
          />
          {/* Quick suggestions */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] text-muted-foreground font-medium">Quick suggestions:</p>
            <div className="flex flex-wrap gap-1.5">
              {PROMPT_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => onUpdate("prompt", s)}
                  className="text-[11px] px-2.5 py-1 rounded-full border bg-muted/40 hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors text-left"
                >
                  {s.length > 38 ? s.slice(0, 38) + "…" : s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Component Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Component Type
          </label>
          <Select
            value={config.componentType}
            onValueChange={(v) => onUpdate("componentType", v as GeneratorConfig["componentType"])}
          >
            <SelectTrigger id="component-type-select" className="h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {COMPONENT_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color Scheme */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Color Scheme
          </label>
          <div className="flex flex-wrap gap-2">
            {COLOR_SCHEMES.map((c) => (
              <button
                key={c.value}
                id={`color-${c.value}`}
                onClick={() => onUpdate("colorScheme", c.value)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                  config.colorScheme === c.value
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-border hover:border-primary/40 hover:shadow-md text-muted-foreground hover:text-foreground"
                )}
              >
                <span className={cn("size-2.5 rounded-full", c.class)} />
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Style Preset */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Style Preset
          </label>
          <div className="grid grid-cols-2 gap-2">
            {STYLE_PRESETS.map((p) => (
              <button
                key={p.value}
                id={`style-${p.value}`}
                onClick={() => onUpdate("stylePreset", p.value)}
                className={cn(
                  "flex flex-col items-start gap-0.5 p-3 rounded-xl border text-left transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                  config.stylePreset === p.value
                    ? "border-primary bg-primary/8 text-primary shadow-sm"
                    : "border-border hover:border-primary/40 hover:shadow-md text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-xs font-semibold">{p.label}</span>
                <span className="text-[10px] opacity-70">{p.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animation Level */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Animation Level
          </label>
          <div className="flex gap-2">
            {ANIMATION_LEVELS.map((a) => (
              <button
                key={a.value}
                onClick={() => onUpdate("animationLevel", a.value)}
                className={cn(
                  "flex-1 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                  config.animationLevel === a.value
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-border hover:border-primary/40 hover:shadow-md text-muted-foreground hover:text-foreground"
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Border Radius
            </label>
            <Badge variant="secondary" className="text-xs font-mono h-5 px-2">
              {config.borderRadius}px
            </Badge>
          </div>
          <Slider
            id="border-radius-slider"
            min={0}
            max={24}
            step={2}
            value={[config.borderRadius]}
            onValueChange={([v]) => onUpdate("borderRadius", v)}
            className="w-full"
          />
        </div>

        <Separator />

        {/* Toggles */}
        <div className="flex flex-col gap-3">
          {[
            { key: "darkMode" as const, label: "Dark Mode", description: "Include dark variant" },
            { key: "responsive" as const, label: "Responsive", description: "Mobile-first layout" },
            { key: "includeIcons" as const, label: "Include Icons", description: "Add icon elements" },
          ].map(({ key, label, description }) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-[11px] text-muted-foreground">{description}</p>
              </div>
              <Switch
                id={`toggle-${key}`}
                checked={config[key] as boolean}
                onCheckedChange={(v) => onUpdate(key, v)}
              />
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 p-5 border-t shrink-0">
        <Button
          id="reset-btn"
          variant="outline"
          size="icon"
          onClick={onReset}
          disabled={isGenerating}
          className="h-10 w-10 shrink-0"
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button
          id="generate-btn"
          onClick={onGenerate}
          disabled={isGenerating}
          className="flex-1 h-10 gradient-brand text-white border-0 font-semibold gap-2 hover:opacity-90 transition-opacity"
        >
          {isGenerating ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Generating…
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              Generate UI
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
