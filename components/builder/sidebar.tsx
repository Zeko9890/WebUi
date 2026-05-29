"use client";

import { Palette, LayoutTemplate, Type, Grid3X3, FileText, Smartphone } from "lucide-react";
import type { BuilderConfig } from "@/types/builder";
import { ControlGroup, ControlLabel } from "./control-group";
import { OptionPicker } from "./option-picker";
import { ColorPicker } from "./color-picker";
import { PresetCards } from "./preset-cards";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { SectionReorder } from "./section-reorder";
import { Layers } from "lucide-react";

interface SidebarProps {
  config: BuilderConfig;
  onUpdate: <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => void;
  onApplyPreset: (preset: string) => void;
}

export function Sidebar({ config, onUpdate, onApplyPreset }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-background md:border-r border-border/40 w-full overflow-y-auto overflow-x-hidden scrollbar-thin">
      
      {/* Theme Presets */}
      <ControlGroup title="Theme Presets" icon={<LayoutTemplate className="size-3.5" />} defaultExpanded={true}>
        <ControlLabel description="One-click beautifully crafted presets.">Select Preset</ControlLabel>
        <PresetCards activeTheme={config.theme} onSelect={onApplyPreset} />
      </ControlGroup>

      {/* Mode & Color */}
      <ControlGroup title="Color & Mode" icon={<Palette className="size-3.5" />} defaultExpanded={true}>
        <div className="flex items-center justify-between mb-4">
          <ControlLabel>Dark Mode</ControlLabel>
          <Switch 
            checked={config.darkMode} 
            onCheckedChange={(v) => onUpdate("darkMode", v)} 
            className="data-[state=checked]:bg-brand"
          />
        </div>
        
        <ControlLabel description="Accent color across the UI.">Primary Color</ControlLabel>
        <ColorPicker value={config.primaryColor} onChange={(v) => onUpdate("primaryColor", v)} />
      </ControlGroup>

      {/* Typography */}
      <ControlGroup title="Typography" icon={<Type className="size-3.5" />} defaultExpanded={false}>
        <ControlLabel>Font Family</ControlLabel>
        <OptionPicker
          value={config.font}
          onChange={(v) => onUpdate("font", v)}
          columns={2}
          options={[
            { value: "sans", label: "Sans Serif" },
            { value: "serif", label: "Serif" },
            { value: "mono", label: "Monospace" },
            { value: "display", label: "Display" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Scale</ControlLabel>
        <OptionPicker
          value={config.typographyScale}
          onChange={(v) => onUpdate("typographyScale", v)}
          columns={3}
          options={[
            { value: "compact", label: "Compact" },
            { value: "normal", label: "Normal" },
            { value: "large", label: "Large" },
          ]}
        />
      </ControlGroup>

      {/* Layout & Sections */}
      <ControlGroup title="Section Order" icon={<Layers className="size-3.5" />} defaultExpanded={false}>
        <ControlLabel description="Drag to visually reorder your page sections.">Page Structure</ControlLabel>
        <SectionReorder 
          order={config.sectionOrder} 
          onReorder={(newOrder) => onUpdate("sectionOrder", newOrder)} 
        />
      </ControlGroup>

      <ControlGroup title="Layout Options" icon={<Grid3X3 className="size-3.5" />} defaultExpanded={false}>
        <ControlLabel>Hero Style</ControlLabel>
        <OptionPicker
          value={config.heroStyle}
          onChange={(v) => onUpdate("heroStyle", v)}
          columns={2}
          options={[
            { value: "centered", label: "Centered" },
            { value: "split", label: "Split Grid" },
            { value: "minimal", label: "Minimal" },
            { value: "bold", label: "Bold Accent" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Navbar Style</ControlLabel>
        <OptionPicker
          value={config.navbarStyle}
          onChange={(v) => onUpdate("navbarStyle", v)}
          columns={2}
          options={[
            { value: "floating", label: "Floating" },
            { value: "stuck", label: "Sticky" },
            { value: "transparent", label: "Transparent" },
            { value: "bordered", label: "Bordered" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Features Layout</ControlLabel>
        <OptionPicker
          value={config.featureLayout}
          onChange={(v) => onUpdate("featureLayout", v)}
          columns={2}
          options={[
            { value: "3-col", label: "3 Columns" },
            { value: "2-col", label: "2 Columns" },
            { value: "list", label: "List View" },
            { value: "alternating", label: "Alternating" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Section Spacing</ControlLabel>
        <OptionPicker
          value={config.sectionSpacing}
          onChange={(v) => onUpdate("sectionSpacing", v)}
          columns={2}
          options={[
            { value: "tight", label: "Tight" },
            { value: "normal", label: "Normal" },
            { value: "relaxed", label: "Relaxed" },
            { value: "loose", label: "Loose" },
          ]}
        />
      </ControlGroup>

      {/* Component Styles */}
      <ControlGroup title="Component Styles" icon={<Smartphone className="size-3.5" />} defaultExpanded={false}>
        <ControlLabel>Card Style</ControlLabel>
        <OptionPicker
          value={config.cardStyle}
          onChange={(v) => onUpdate("cardStyle", v)}
          columns={2}
          options={[
            { value: "flat", label: "Flat" },
            { value: "elevated", label: "Elevated" },
            { value: "bordered", label: "Bordered" },
            { value: "glass", label: "Glassmorphism" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Border Radius</ControlLabel>
        <OptionPicker
          value={config.borderRadius}
          onChange={(v) => onUpdate("borderRadius", v)}
          columns={3}
          options={[
            { value: "none", label: "None" },
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
            { value: "full", label: "Full" },
          ]}
          className="mb-4"
        />

        <ControlLabel>Shadows</ControlLabel>
        <OptionPicker
          value={config.shadow}
          onChange={(v) => onUpdate("shadow", v)}
          columns={2}
          options={[
            { value: "none", label: "None" },
            { value: "sm", label: "Soft" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Deep" },
            { value: "glow", label: "Glow" },
          ]}
        />
      </ControlGroup>

      {/* Content Form */}
      <ControlGroup title="Global Content" icon={<FileText className="size-3.5" />} defaultExpanded={false}>
        <div className="space-y-4">
          <div>
            <ControlLabel>Brand Name</ControlLabel>
            <Input 
              value={config.brandName} 
              onChange={(e) => onUpdate("brandName", e.target.value)} 
              className="h-8 text-xs bg-muted/30"
            />
          </div>
          <div>
            <ControlLabel>Tagline / Badge</ControlLabel>
            <Input 
              value={config.tagline} 
              onChange={(e) => onUpdate("tagline", e.target.value)} 
              className="h-8 text-xs bg-muted/30"
            />
          </div>
          <div>
            <ControlLabel>Primary CTA</ControlLabel>
            <Input 
              value={config.ctaLabel} 
              onChange={(e) => onUpdate("ctaLabel", e.target.value)} 
              className="h-8 text-xs bg-muted/30"
            />
          </div>
          <div>
            <ControlLabel>Secondary CTA</ControlLabel>
            <Input 
              value={config.ctaSecondaryLabel} 
              onChange={(e) => onUpdate("ctaSecondaryLabel", e.target.value)} 
              className="h-8 text-xs bg-muted/30"
            />
          </div>
        </div>
      </ControlGroup>

      <div className="p-4 mt-auto border-t border-border/30 bg-muted/5">
        <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
          Tip: You can also click text directly on the preview canvas to edit it inline.
        </p>
      </div>
    </div>
  );
}
