import { Loader2, ArrowRight, PlayCircle, Menu, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LandingPageData, ThemeStyle } from "@/types/generator";

interface DynamicPreviewProps {
  data: LandingPageData | null;
  status: "idle" | "generating" | "done" | "error";
  themeStyle: ThemeStyle;
  primaryColor: string;
}

export function DynamicPreview({ data, status, themeStyle, primaryColor }: DynamicPreviewProps) {
  if (status === "idle") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-muted/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="size-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 border shadow-sm">
            <LayoutTemplate className="size-10 text-muted-foreground/50" />
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Ready to Build</h3>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Select your project parameters on the left and click <span className="font-medium text-foreground">Generate UI</span> to create a custom landing page in seconds.
          </p>
        </motion.div>
      </div>
    );
  }

  if (status === "generating") {
    return (
      <div className="h-full w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 p-6 lg:p-10 relative flex flex-col justify-between">
        {/* Animated background glow */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full blur-[120px] opacity-15 animate-pulse pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Top Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background/80 backdrop-blur-sm shadow-sm z-20">
          <Loader2 className="size-3.5 animate-spin" style={{ color: primaryColor }} />
          <span className="text-[11px] font-medium tracking-wide">AI Gen in Progress...</span>
        </div>

        {/* Skeleton Header */}
        <header className="flex justify-between items-center w-full opacity-60">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-muted animate-pulse" />
            <div className="h-4 w-24 rounded bg-muted animate-pulse" />
          </div>
          <div className="hidden md:flex gap-6">
            <div className="h-3 w-16 rounded bg-muted animate-pulse" />
            <div className="h-3 w-16 rounded bg-muted animate-pulse" />
            <div className="h-3 w-16 rounded bg-muted animate-pulse" />
          </div>
          <div className="h-8 w-20 rounded-lg bg-muted animate-pulse" />
        </header>

        {/* Skeleton Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto my-12 w-full gap-5">
          {/* Badge Skeleton */}
          <div className="h-6 w-36 rounded-full bg-muted animate-pulse mb-2" />
          
          {/* Main Title Skeletons */}
          <div className="h-10 w-full max-w-lg rounded-lg bg-muted animate-pulse" />
          <div className="h-10 w-3/4 max-w-sm rounded-lg bg-muted animate-pulse" />

          {/* Subtitle Skeletons */}
          <div className="h-4 w-full rounded bg-muted animate-pulse mt-4" />
          <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />

          {/* Action Buttons Skeletons */}
          <div className="flex gap-4 mt-6 w-full justify-center">
            <div className="h-12 w-36 rounded-lg bg-muted animate-pulse" />
            <div className="h-12 w-32 rounded-lg bg-muted animate-pulse" />
          </div>
        </main>

        {/* Skeleton Features/Stats Section */}
        <section className="w-full opacity-60">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="h-28 rounded-xl bg-muted animate-pulse" />
            <div className="h-28 rounded-xl bg-muted animate-pulse" />
            <div className="h-28 rounded-xl bg-muted animate-pulse" />
            <div className="h-28 rounded-xl bg-muted animate-pulse" />
          </div>
        </section>
      </div>
    );
  }

  if (!data) return null;

  // Derive style classes based on the selected theme
  const getThemeClasses = () => {
    switch (themeStyle) {
      case "minimal":
        return {
          bg: "bg-white dark:bg-black",
          text: "text-zinc-900 dark:text-zinc-50",
          card: "bg-zinc-50 dark:bg-zinc-900 border-transparent shadow-sm",
          radius: "rounded-sm",
          button: "rounded-sm font-medium",
        };
      case "bold":
        return {
          bg: "bg-zinc-950 dark:bg-black",
          text: "text-white",
          card: "bg-zinc-900 border-zinc-800 shadow-xl",
          radius: "rounded-none",
          button: "rounded-none font-bold uppercase tracking-wider",
        };
      case "retro":
        return {
          bg: "bg-[#f4ebd0] dark:bg-[#2c2a25]",
          text: "text-[#3d3828] dark:text-[#f4ebd0] font-serif",
          card: "bg-[#e8dec3] dark:bg-[#3d3828] border-2 border-[#3d3828] dark:border-[#f4ebd0] shadow-[4px_4px_0px_0px_rgba(61,56,40,1)] dark:shadow-[4px_4px_0px_0px_rgba(244,235,208,1)]",
          radius: "rounded-md",
          button: "rounded-md font-bold border-2 border-current shadow-[4px_4px_0px_0px_currentColor] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all",
        };
      case "vibrant":
        return {
          bg: "bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950 dark:via-zinc-950 dark:to-cyan-950",
          text: "text-zinc-900 dark:text-zinc-50",
          card: "bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl",
          radius: "rounded-3xl",
          button: "rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all",
        };
      case "modern":
      default:
        return {
          bg: "bg-zinc-50 dark:bg-zinc-950",
          text: "text-zinc-900 dark:text-zinc-50",
          card: "bg-white dark:bg-zinc-900 border shadow-md",
          radius: "rounded-xl",
          button: "rounded-lg font-semibold shadow-sm",
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className={cn("h-full w-full overflow-y-auto overflow-x-hidden transition-colors duration-500", theme.bg, theme.text)}>
      <div className="max-w-5xl mx-auto w-full min-h-full flex flex-col relative shadow-2xl ring-1 ring-border/20">
        
        {/* Decorative background for specific themes */}
        {(themeStyle === "vibrant" || themeStyle === "modern") && (
           <div 
             className="absolute top-0 right-0 w-3/4 h-96 rounded-bl-[100%] opacity-10 pointer-events-none"
             style={{ background: `linear-gradient(to bottom left, ${primaryColor}, transparent)` }}
           />
        )}

        {/* Navbar */}
        <header className="flex justify-between items-center p-6 lg:px-10 relative z-10">
          <div className="flex items-center gap-2">
            <div className={cn("size-8 flex items-center justify-center text-white", theme.radius)} style={{ backgroundColor: primaryColor }}>
              <span className="font-bold text-lg leading-none">
                {data.brandName.charAt(0)}
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight">{data.brandName}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
            {data.navLinks.map((link) => (
              <a key={link} href="#" className="hover:opacity-100 transition-opacity">{link}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu className="size-6" />
            </button>
            <button 
              className={cn("hidden md:flex items-center justify-center px-4 py-2 text-sm text-white", theme.button)}
              style={{ backgroundColor: primaryColor }}
            >
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-6 pt-20 pb-32 lg:px-10 relative z-10 flex-1 justify-center">
          <div 
            className={cn("inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-8 border", theme.radius)}
            style={{ 
              color: primaryColor, 
              backgroundColor: `${primaryColor}15`,
              borderColor: `${primaryColor}30`
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: primaryColor }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: primaryColor }}></span>
            </span>
            {data.badgeText}
          </div>

          <h1 className={cn("text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.1]", themeStyle === "retro" ? "font-serif" : "")}>
            {data.heroTitle}{" "}
            <span className="relative whitespace-nowrap inline-block">
              <span className="relative z-10" style={{ color: primaryColor }}>{data.heroHighlight}</span>
              {themeStyle === "modern" && (
                <span 
                  className="absolute bottom-1 left-0 w-full h-3 opacity-30 z-0" 
                  style={{ backgroundColor: primaryColor }}
                />
              )}
            </span>
          </h1>

          <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              className={cn("px-8 py-4 text-lg text-white flex items-center gap-2", theme.button)}
              style={{ backgroundColor: primaryColor }}
            >
              {data.cta}
              <ArrowRight className="size-5" />
            </button>
            <button 
              className={cn("px-8 py-4 text-lg flex items-center gap-2 border-2", theme.button)}
              style={{ 
                borderColor: `${primaryColor}30`,
                color: themeStyle === "bold" ? "white" : "inherit"
              }}
            >
              <PlayCircle className="size-5" />
              Watch Demo
            </button>
          </div>
          <p className="mt-4 text-sm opacity-50">{data.ctaSubtext}</p>
        </section>

        {/* Features / Stats Section */}
        <section className="px-6 py-20 lg:px-10 border-t border-border/10 relative z-10 bg-black/5 dark:bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat Box */}
            <div className={cn("p-8 flex flex-col justify-center items-start border-l-4", theme.card)} style={{ borderLeftColor: primaryColor }}>
              <h4 className="text-sm font-semibold opacity-60 uppercase tracking-wider mb-2">{data.statsLabel}</h4>
              <p className="text-4xl font-extrabold" style={{ color: primaryColor }}>{data.statsValue}</p>
            </div>

            {/* Feature Boxes */}
            {data.features.map((feature, i) => (
              <div key={i} className={cn("p-6 flex flex-col", theme.card, theme.radius)}>
                <div 
                  className={cn("size-12 flex items-center justify-center mb-4 text-2xl", theme.radius)}
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
