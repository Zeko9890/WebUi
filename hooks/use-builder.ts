"use client";

import { useState, useCallback } from "react";
import type { BuilderConfig, FeatureItem } from "@/types/builder";

export const DEFAULT_BUILDER_CONFIG: BuilderConfig = {
  // Content
  brandName: "Acme Corp",
  tagline: "Build better software, faster.",
  subtitle: "We help modern teams ship high-quality products without the stress. Join thousands of developers who are building the future.",
  ctaLabel: "Get Started Free",
  ctaSecondaryLabel: "View Documentation",
  features: [
    { icon: "⚡", title: "Lightning Fast", description: "Experience unparalleled speed with our optimized infrastructure." },
    { icon: "🔒", title: "Secure by Default", description: "Enterprise-grade security built into every layer of the platform." },
    { icon: "🎨", title: "Beautiful UI", description: "Crafted with attention to every pixel for a stunning experience." }
  ],
  stats: [
    { label: "Active Users", value: "10k+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Support", value: "24/7" }
  ],
  testimonials: [
    { quote: "This is the best tool we've ever used. It changed how we build.", author: "Sarah Jenkins", role: "CTO at TechCorp" },
    { quote: "Incredible speed and ease of use. Highly recommended.", author: "Mark Davis", role: "Founder at StartupX" },
    { quote: "We shipped our product 10x faster thanks to this platform.", author: "Emily Chen", role: "Lead Engineer at DevStudio" }
  ],
  pricing: [
    { name: "Starter", price: "$0", description: "Perfect for hobbyists and side projects.", features: ["Up to 3 projects", "Basic support", "Community access"], isPopular: false },
    { name: "Pro", price: "$29", description: "For professionals building serious tools.", features: ["Unlimited projects", "Priority support", "Custom domains", "Analytics"], isPopular: true },
    { name: "Enterprise", price: "$99", description: "For large teams scaling up.", features: ["Everything in Pro", "Dedicated account manager", "SLA", "SSO"], isPopular: false }
  ],
  faqs: [
    { question: "How does the pricing work?", answer: "We offer a flexible monthly subscription with no hidden fees. Cancel anytime." },
    { question: "Can I use this for client work?", answer: "Yes! The Pro and Enterprise plans allow you to build unlimited projects for clients." },
    { question: "Do you offer refunds?", answer: "We offer a 14-day money-back guarantee if you are not satisfied with the product." },
    { question: "Is there a free trial?", answer: "Yes, you can try the Pro plan for free for 7 days." }
  ],
  sectionOrder: ["navbar", "hero", "features", "stats", "testimonials", "pricing", "faq", "cta", "footer"],
  heroImage: "",

  // Visual style
  theme: 'startup',
  primaryColor: "#0f172a",
  borderRadius: "md",
  shadow: "sm",
  font: "sans",
  typographyScale: "normal",
  sectionSpacing: "normal",

  // Sections
  heroStyle: "centered",
  navbarStyle: "floating",
  buttonStyle: "solid",
  cardStyle: "elevated",
  featureLayout: "3-col",

  // Mode
  darkMode: false,
};

export const PRESETS: Record<string, Partial<BuilderConfig>> = {
  "startup": {
    theme: "startup",
    primaryColor: "#8b5cf6",
    borderRadius: "full",
    shadow: "lg",
    font: "sans",
    buttonStyle: "solid",
    cardStyle: "elevated",
    darkMode: false,
    heroStyle: "split",
    navbarStyle: "floating",
    featureLayout: "alternating",
    typographyScale: "normal",
    sectionSpacing: "normal",
  },
  "luxury": {
    theme: "luxury",
    primaryColor: "#d4af37",
    borderRadius: "none",
    shadow: "sm",
    font: "serif",
    buttonStyle: "ghost",
    cardStyle: "flat",
    darkMode: false,
    heroStyle: "centered",
    navbarStyle: "bordered",
    featureLayout: "list",
    typographyScale: "large",
    sectionSpacing: "relaxed",
  },
  "minimal": {
    theme: "minimal",
    primaryColor: "#000000",
    borderRadius: "none",
    shadow: "none",
    font: "sans",
    buttonStyle: "solid",
    cardStyle: "flat",
    darkMode: false,
    heroStyle: "minimal",
    navbarStyle: "transparent",
    featureLayout: "2-col",
    typographyScale: "normal",
    sectionSpacing: "relaxed",
  },
  "gaming": {
    theme: "gaming",
    primaryColor: "#00ff00",
    borderRadius: "sm",
    shadow: "glow",
    font: "display",
    buttonStyle: "outline",
    cardStyle: "glass",
    darkMode: true,
    heroStyle: "bold",
    navbarStyle: "stuck",
    featureLayout: "3-col",
    typographyScale: "large",
    sectionSpacing: "normal",
  },
  "creator": {
    theme: "creator",
    primaryColor: "#ff4500",
    borderRadius: "md",
    shadow: "md",
    font: "sans",
    buttonStyle: "gradient",
    cardStyle: "bordered",
    darkMode: false,
    heroStyle: "split",
    navbarStyle: "floating",
    featureLayout: "3-col",
    typographyScale: "large",
    sectionSpacing: "tight",
  },
  "fitness": {
    theme: "fitness",
    primaryColor: "#ff003c",
    borderRadius: "sm",
    shadow: "sm",
    font: "display",
    buttonStyle: "solid",
    cardStyle: "elevated",
    darkMode: true,
    heroStyle: "bold",
    navbarStyle: "transparent",
    featureLayout: "alternating",
    typographyScale: "compact",
    sectionSpacing: "tight",
  },
};

export function useBuilder() {
  const [config, setConfig] = useState<BuilderConfig>(DEFAULT_BUILDER_CONFIG);

  const updateConfig = useCallback(
    <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const updateFeature = useCallback(
    (index: number, field: keyof FeatureItem, value: string) => {
      setConfig((prev) => {
        const features = prev.features.map((f, i) =>
          i === index ? { ...f, [field]: value } : f
        );
        return { ...prev, features };
      });
    },
    []
  );

  const updateStat = useCallback((index: number, field: keyof typeof DEFAULT_BUILDER_CONFIG.stats[0], value: string) => {
    setConfig((prev) => {
      const stats = prev.stats.map((s, i) => i === index ? { ...s, [field]: value } : s);
      return { ...prev, stats };
    });
  }, []);

  const updateTestimonial = useCallback((index: number, field: keyof typeof DEFAULT_BUILDER_CONFIG.testimonials[0], value: string) => {
    setConfig((prev) => {
      const testimonials = prev.testimonials.map((t, i) => i === index ? { ...t, [field]: value } : t);
      return { ...prev, testimonials };
    });
  }, []);

  const updatePricing = useCallback((index: number, field: keyof typeof DEFAULT_BUILDER_CONFIG.pricing[0], value: string) => {
    setConfig((prev) => {
      const pricing = prev.pricing.map((p, i) => i === index ? { ...p, [field]: value } : p);
      return { ...prev, pricing };
    });
  }, []);

  const updateFaq = useCallback((index: number, field: keyof typeof DEFAULT_BUILDER_CONFIG.faqs[0], value: string) => {
    setConfig((prev) => {
      const faqs = prev.faqs.map((f, i) => i === index ? { ...f, [field]: value } : f);
      return { ...prev, faqs };
    });
  }, []);

  const applyPreset = useCallback((presetName: keyof typeof PRESETS) => {
    const preset = PRESETS[presetName];
    if (preset) {
      setConfig((prev) => ({ ...prev, ...preset }));
    }
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(DEFAULT_BUILDER_CONFIG);
  }, []);

  return {
    config,
    updateConfig,
    updateFeature,
    updateStat,
    updateTestimonial,
    updatePricing,
    updateFaq,
    applyPreset,
    resetConfig,
  };
}
