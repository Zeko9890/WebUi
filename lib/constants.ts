import type {
  ColorScheme,
  ComponentType,
  StylePreset,
  AnimationLevel,
  Feature,
  NavLink,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "Generator", href: "/generator" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
];

export const FEATURES: Feature[] = [
  {
    icon: "⚡",
    title: "Instant Generation",
    description:
      "Describe your UI in plain English and watch it materialize in under a second. No prompting expertise required.",
    badge: "Fast",
  },
  {
    icon: "🎨",
    title: "Beautiful by Default",
    description:
      "Every output follows modern design principles — spacing, typography, color theory — baked in automatically.",
  },
  {
    icon: "🧩",
    title: "Component Library",
    description:
      "Generate buttons, cards, forms, navbars, dashboards, and more. Mix and match to build entire pages.",
    badge: "30+ Types",
  },
  {
    icon: "🌙",
    title: "Dark Mode Ready",
    description:
      "Every component ships with a polished dark and light mode. Zero extra configuration needed.",
  },
  {
    icon: "📱",
    title: "Responsive Layouts",
    description:
      "Mobile-first, fully responsive output by default. Looks perfect on any screen from 320px to 4K.",
  },
  {
    icon: "💾",
    title: "Export Anywhere",
    description:
      "Copy clean HTML, React, or Tailwind code. Drop it straight into your project — no lock-in.",
    badge: "New",
  },
];

export const COMPONENT_TYPES: { value: ComponentType; label: string }[] = [
  { value: "hero", label: "Hero Section" },
  { value: "navbar", label: "Navigation Bar" },
  { value: "card", label: "Card Component" },
  { value: "button", label: "Button Group" },
  { value: "form", label: "Form" },
  { value: "pricing", label: "Pricing Table" },
  { value: "testimonial", label: "Testimonials" },
  { value: "dashboard", label: "Dashboard" },
  { value: "landing", label: "Full Landing Page" },
];

export const COLOR_SCHEMES: { value: ColorScheme; label: string; class: string }[] = [
  { value: "violet", label: "Violet", class: "bg-violet-500" },
  { value: "blue", label: "Blue", class: "bg-blue-500" },
  { value: "emerald", label: "Emerald", class: "bg-emerald-500" },
  { value: "rose", label: "Rose", class: "bg-rose-500" },
  { value: "amber", label: "Amber", class: "bg-amber-500" },
  { value: "slate", label: "Slate", class: "bg-slate-500" },
];

export const STYLE_PRESETS: { value: StylePreset; label: string; description: string }[] = [
  { value: "minimal", label: "Minimal", description: "Clean, lots of whitespace" },
  { value: "glassmorphism", label: "Glass", description: "Frosted glass effects" },
  { value: "brutalist", label: "Brutalist", description: "Bold borders, raw aesthetics" },
  { value: "soft", label: "Soft UI", description: "Rounded, neumorphic feel" },
];

export const ANIMATION_LEVELS: { value: AnimationLevel; label: string }[] = [
  { value: "none", label: "None" },
  { value: "subtle", label: "Subtle" },
  { value: "moderate", label: "Moderate" },
  { value: "energetic", label: "Energetic" },
];

export const DEFAULT_CONFIG = {
  prompt: "",
  componentType: "hero" as ComponentType,
  colorScheme: "violet" as ColorScheme,
  stylePreset: "minimal" as StylePreset,
  animationLevel: "subtle" as AnimationLevel,
  darkMode: true,
  responsive: true,
  includeIcons: true,
  borderRadius: 8,
};
