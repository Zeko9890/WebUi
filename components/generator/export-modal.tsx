"use client";

import { useState, useCallback, useTransition } from "react";
import { Check, Copy, Download, FileJson, FileText, Code2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  generateExport,
  getFileName,
  getMimeType,
  type ExportFormat,
} from "@/lib/export-formatters";
import type { BuilderConfig } from "@/types/builder";

interface ExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  config: BuilderConfig;
}

const FORMAT_TABS: {
  value: ExportFormat;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  { value: "json", label: "JSON", icon: <FileJson className="size-3.5" />, description: "Structured data" },
  { value: "markdown", label: "Markdown", icon: <FileText className="size-3.5" />, description: "Documentation" },
  { value: "react", label: "React", icon: <Code2 className="size-3.5" />, description: "Component code" },
];

export function ExportModal({ open, onOpenChange, config }: ExportModalProps) {
  const [format, setFormat] = useState<ExportFormat>("json");
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const exportContent = config ? generateExport(format, config) : "";

  const handleCopy = useCallback(async () => {
    if (!exportContent) return;
    try {
      await navigator.clipboard.writeText(exportContent);
      setCopied(true);
      toast.success("Copied to clipboard", {
        description: `${FORMAT_TABS.find((t) => t.value === format)?.label} content copied.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Copy failed", {
        description: "Your browser blocked clipboard access. Try the download button instead.",
      });
    }
  }, [exportContent, format]);

  const handleDownload = useCallback(() => {
    if (!exportContent) return;
    startTransition(() => {
      try {
        const blob = new Blob([exportContent], { type: getMimeType(format) });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = getFileName(format);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Download started", {
          description: `Saved as ${getFileName(format)}`,
        });
      } catch {
        toast.error("Download failed", {
          description: "Could not create the file. Please try copying instead.",
        });
      }
    });
  }, [exportContent, format]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup>
        {/* Header */}
        <DialogHeader>
          <DialogTitle>Export Landing Page</DialogTitle>
          <DialogDescription>
            Choose a format and copy or download the generated content.
          </DialogDescription>
        </DialogHeader>

        {/* Format Tabs */}
        <div className="px-6 pb-4 shrink-0">
          <div className="flex gap-2 p-1 rounded-xl bg-muted/50 border border-border/40">
            {FORMAT_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFormat(tab.value)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 relative",
                  format === tab.value
                    ? "bg-background text-foreground shadow-sm border border-border/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Code Preview */}
        <div className="flex-1 min-h-0 px-6 overflow-hidden">
          <div className="relative h-full max-h-[45vh] rounded-xl border border-border/40 bg-zinc-950 dark:bg-zinc-950 overflow-hidden flex flex-col">
            {/* Code area header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-zinc-700" />
                  <span className="size-2.5 rounded-full bg-zinc-700" />
                  <span className="size-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 ml-2">
                  {getFileName(format)}
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-600">
                {exportContent.split("\n").length} lines
              </span>
            </div>

            {/* Scrollable code */}
            <div className="flex-1 overflow-y-auto overflow-x-auto p-4 scrollbar-thin">
              {isPending ? (
                <div className="flex items-center justify-center h-full gap-2 text-zinc-500">
                  <Loader2 className="size-4 animate-spin" />
                  <span className="text-xs font-medium">Processing…</span>
                </div>
              ) : (
                <pre className="text-[12px] leading-relaxed font-mono text-zinc-300 whitespace-pre select-text">
                  {exportContent}
                </pre>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 px-6 py-5 shrink-0">
          <p className="text-[11px] text-muted-foreground hidden sm:block">
            {format === "react" && "Paste into a .tsx file with Tailwind configured."}
            {format === "json" && "Use this data to hydrate any frontend framework."}
            {format === "markdown" && "Perfect for README files and documentation."}
          </p>
          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant="outline"
              size="default"
              onClick={handleCopy}
              disabled={!exportContent}
              className="gap-1.5 text-xs font-semibold min-w-[100px]"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  Copy
                </>
              )}
            </Button>
            <Button
              onClick={handleDownload}
              disabled={!exportContent || isPending}
              className="gap-1.5 text-xs font-semibold gradient-brand text-white border-0 hover:opacity-90 min-w-[120px]"
            >
              {isPending ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <Download className="size-3.5" />
              )}
              Download
            </Button>
          </div>
        </div>
      </DialogPopup>
    </Dialog>
  );
}
