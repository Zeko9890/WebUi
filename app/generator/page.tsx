"use client";

import { Sparkles, ChevronLeft, Download } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/builder/sidebar";
import { PreviewCanvas } from "@/components/builder/preview-canvas";
import { ExportModal } from "@/components/builder/export-modal";
import { useBuilder } from "@/hooks/use-builder";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function BuilderPage() {
  const { 
    config, 
    updateConfig, 
    updateFeature, 
    updateStat,
    updateTestimonial,
    updatePricing,
    updateFaq,
    applyPreset 
  } = useBuilder();
  const [exportModalOpen, setExportModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden select-none">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 sm:px-5 h-12 border-b glass shrink-0 z-20">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="flex items-center gap-2">
            <span className="flex items-center justify-center size-5.5 rounded-md gradient-brand group-hover:scale-105 transition-all">
              <Sparkles className="size-3 text-white" />
            </span>
            <span className="hidden sm:inline font-bold gradient-brand-text">Visual Builder</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger
              onClick={() => setExportModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border/60 bg-muted/40 hover:bg-muted/70 transition-all shadow-sm text-muted-foreground hover:text-foreground cursor-pointer"
            >
                <Download className="size-3" />
                <span className="text-[10px] font-bold">Export Code</span>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              Export as React component
            </TooltipContent>
          </Tooltip>

          <ThemeToggle />
        </div>
      </header>

      {/* Main split layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative min-h-0">
        {/* Left Sidebar Control Panel */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full shrink-0 border-b md:border-b-0 md:border-r border-border/30 bg-background flex flex-col md:w-[380px] lg:w-[400px] md:h-full z-10 h-auto md:overflow-hidden"
        >
          <Sidebar
            config={config}
            onUpdate={updateConfig}
            onApplyPreset={applyPreset}
          />
        </motion.aside>

        {/* Right Preview Canvas */}
        <motion.main 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full shrink-0 min-h-[700px] md:min-h-0 md:flex-1 bg-muted/5 flex flex-col md:h-full overflow-hidden relative"
        >
          <PreviewCanvas 
            config={config} 
            onUpdateConfig={updateConfig} 
            onUpdateFeature={updateFeature} 
            onUpdateStat={updateStat}
            onUpdateTestimonial={updateTestimonial}
            onUpdatePricing={updatePricing}
            onUpdateFaq={updateFaq}
          />
        </motion.main>
      </div>

      {/* Export Modal */}
      <ExportModal 
        isOpen={exportModalOpen} 
        onOpenChange={setExportModalOpen} 
        config={config} 
      />
    </div>
  );
}
