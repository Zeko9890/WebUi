import type {
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
    title: "Instant UI Generation",
    description:
      "Describe what you want, select a theme, and get a completely functional, clean, modern UI in seconds.",
    badge: "Fast",
  },
  {
    icon: "🎨",
    title: "AI-Powered Themes",
    description:
      "Switch between custom presets like Cyberpunk, Luxury, and Minimal. Typography, border radii, colors, and shadows adjust dynamically.",
    badge: "Hot",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "Every generated section is built with responsive mobile-first grids and flexboxes, optimized for every viewport.",
  },
  {
    icon: "🔧",
    title: "Interactive Customization",
    description:
      "Edit content inline, regenerate specific blocks, adjust themes, and fine-tune live in the side-by-side preview.",
  },
  {
    icon: "✨",
    title: "Premium Design Tokens",
    description:
      "Crafted with modern CSS variables, glassmorphism, subtle animation curves, and professional accessibility details.",
  },
  {
    icon: "💾",
    title: "Export Anywhere",
    description:
      "Copy clean HTML, React, or Tailwind code. Drop it straight into your project — no lock-in.",
    badge: "New",
  },
];
