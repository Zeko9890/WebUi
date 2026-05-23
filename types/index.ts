export type ComponentType =
  | "button"
  | "card"
  | "form"
  | "navbar"
  | "hero"
  | "pricing"
  | "testimonial"
  | "dashboard"
  | "landing";

export type ColorScheme =
  | "violet"
  | "blue"
  | "emerald"
  | "rose"
  | "amber"
  | "slate";

export type StylePreset = "minimal" | "glassmorphism" | "brutalist" | "soft";

export type AnimationLevel = "none" | "subtle" | "moderate" | "energetic";

export interface GeneratorConfig {
  prompt: string;
  componentType: ComponentType;
  colorScheme: ColorScheme;
  stylePreset: StylePreset;
  animationLevel: AnimationLevel;
  darkMode: boolean;
  responsive: boolean;
  includeIcons: boolean;
  borderRadius: number;
}

export interface GeneratedResult {
  id: string;
  config: GeneratorConfig;
  html: string;
  createdAt: Date;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
