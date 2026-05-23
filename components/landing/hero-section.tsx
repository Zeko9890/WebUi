"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const FLOATING_BADGES = [
  { icon: "🎨", text: "Dark Mode Ready", delay: "0s", x: "-8%", y: "20%" },
  { icon: "⚡", text: "< 2s Generation", delay: "0.6s", x: "88%", y: "15%" },
  { icon: "📱", text: "Responsive", delay: "1.2s", x: "82%", y: "72%" },
  { icon: "🧩", text: "30+ Components", delay: "1.8s", x: "-4%", y: "70%" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 gradient-radial-glow" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-1/4 size-[300px] rounded-full bg-violet-500/6 blur-[80px] pointer-events-none animate-glow-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating badges — hidden on small screens */}
      <div className="hidden lg:block">
        {FLOATING_BADGES.map((badge) => (
          <div
            key={badge.text}
            className="absolute animate-float"
            style={{
              left: badge.x,
              top: badge.y,
              animationDelay: badge.delay,
              animationDuration: "4s",
            }}
          >
            <div className="glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium shadow-lg border whitespace-nowrap">
              <span>{badge.icon}</span>
              <span className="text-foreground/80">{badge.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Eyebrow badge */}
        <Badge
          id="hero-eyebrow"
          variant="secondary"
          className="gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide border-primary/20 bg-primary/8 text-primary"
        >
          <Sparkles className="size-3" />
          Powered by AI · Generate in seconds
        </Badge>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
          <span className="text-foreground">Build stunning</span>
          <br />
          <span className="gradient-brand-text">UI components</span>
          <br />
          <span className="text-foreground">instantly with AI</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Describe your vision in plain English. Get production-ready components
          built with modern design principles — dark mode, responsive, and
          export-ready.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link href="/generator" id="hero-cta-primary">
            <Button
              size="lg"
              className="gradient-brand text-white border-0 font-semibold px-7 h-12 glow-primary hover:opacity-90 transition-opacity gap-2"
            >
              Start Generating Free
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/#features" id="hero-cta-secondary">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 font-semibold gap-2 hover:bg-accent"
            >
              <Zap className="size-4" />
              See Features
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <p className="text-sm text-muted-foreground mt-1">
          No credit card required · Free tier available · Export to React &amp; HTML
        </p>

        {/* Code preview strip */}
        <div className="w-full max-w-2xl mt-6 glass rounded-2xl border overflow-hidden shadow-2xl text-left">
          <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
            <span className="size-3 rounded-full bg-rose-500/70" />
            <span className="size-3 rounded-full bg-amber-500/70" />
            <span className="size-3 rounded-full bg-emerald-500/70" />
            <div className="flex items-center gap-1.5 ml-2 text-xs text-muted-foreground">
              <Code2 className="size-3" />
              preview.tsx
            </div>
          </div>
          <div className="px-5 py-4 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground overflow-x-auto">
            <span className="text-violet-400">const</span>{" "}
            <span className="text-blue-400">HeroSection</span>{" "}
            <span className="text-foreground/70">= () =&gt; (</span>
            <br />
            <span className="pl-4 text-foreground/70">&lt;</span>
            <span className="text-emerald-400">section</span>
            <span className="text-amber-400"> className</span>
            <span className="text-foreground/70">=</span>
            <span className="text-rose-400">&quot;hero-gradient&quot;</span>
            <span className="text-foreground/70">&gt;</span>
            <br />
            <span className="pl-8 text-foreground/70">&lt;</span>
            <span className="text-emerald-400">h1</span>
            <span className="text-foreground/70">&gt;</span>
            <span className="text-foreground">Build faster with AI</span>
            <span className="text-foreground/70">&lt;/</span>
            <span className="text-emerald-400">h1</span>
            <span className="text-foreground/70">&gt;</span>
            <span className="animate-blink text-violet-400 ml-0.5">|</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
