"use client";

import { useState } from "react";
import { Dialog, DialogPopup, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { BuilderConfig } from "@/types/builder";
import { exportToJson, exportToMarkdown, exportToReact } from "@/lib/export-engine";
import { Check, Copy, Download, Code2, FileJson, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ExportModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  config: BuilderConfig;
}

type TabType = "react" | "json" | "markdown";

export function ExportModal({ isOpen, onOpenChange, config }: ExportModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("react");
  const [copied, setCopied] = useState(false);

  const getExportData = () => {
    switch (activeTab) {
      case "react": return exportToReact(config);
      case "json": return exportToJson(config);
      case "markdown": return exportToMarkdown(config);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getExportData());
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const data = getExportData();
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const extension = activeTab === "react" ? "tsx" : activeTab === "json" ? "json" : "md";
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `landing-page.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded landing-page.${extension}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPopup className="max-w-4xl h-[80vh] flex flex-col p-0 overflow-hidden bg-background">
        <DialogHeader className="border-b border-border/40 pb-4 pt-6 px-6 shrink-0">
          <DialogTitle>Export Code</DialogTitle>
          <DialogDescription>
            Copy the generated code below, or download it as a file.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-1 border-b border-border/40 px-6 py-2 bg-muted/20 shrink-0">
            <button
              onClick={() => setActiveTab("react")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                activeTab === "react" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Code2 className="size-4" />
              React (Tailwind)
            </button>
            <button
              onClick={() => setActiveTab("json")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                activeTab === "json" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <FileJson className="size-4" />
              JSON Data
            </button>
            <button
              onClick={() => setActiveTab("markdown")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                activeTab === "markdown" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <FileText className="size-4" />
              Markdown
            </button>
          </div>

          <div className="flex-1 overflow-auto bg-[#0d1117] relative">
            <pre className="p-6 text-sm font-mono text-slate-300 w-full inline-block min-w-max">
              {getExportData()}
            </pre>
          </div>
        </div>

        <div className="p-4 border-t border-border/40 bg-muted/20 shrink-0 flex items-center justify-end gap-3">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border/60 bg-background hover:bg-muted transition-colors"
          >
            {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="size-4" />
            Download File
          </button>
        </div>
      </DialogPopup>
    </Dialog>
  );
}
