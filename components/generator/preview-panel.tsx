"use client";

import { useState } from "react";
import { Copy, Check, Monitor, Smartphone, Code2, Eye, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button"; // used for copy button only
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { GeneratedResult } from "@/types";

interface PreviewPanelProps {
  status: "idle" | "generating" | "done" | "error";
  result: GeneratedResult | null;
}

type ViewMode = "preview" | "code";
type DeviceMode = "desktop" | "mobile";

export function PreviewPanel({ status, result }: PreviewPanelProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!result?.html) return;
    await navigator.clipboard.writeText(result.html);
    setCopied(true);
    toast.success("Copied to clipboard", { description: "You can now paste the code into your project." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b shrink-0">
        <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
          <button
            id="view-preview"
            onClick={() => setViewMode("preview")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
              viewMode === "preview"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="size-3.5" />
            Preview
          </button>
          <button
            id="view-code"
            onClick={() => setViewMode("code")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
              viewMode === "code"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code2 className="size-3.5" />
            Code
          </button>
        </div>

        <div className="flex items-center gap-2">
          {viewMode === "preview" && (
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger
                  id="device-desktop"
                  onClick={() => setDeviceMode("desktop")}
                  className={cn("flex items-center justify-center size-8 rounded-md transition-colors hover:bg-accent", deviceMode === "desktop" && "bg-accent")}
                >
                  <Monitor className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Desktop</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  id="device-mobile"
                  onClick={() => setDeviceMode("mobile")}
                  className={cn("flex items-center justify-center size-8 rounded-md transition-colors hover:bg-accent", deviceMode === "mobile" && "bg-accent")}
                >
                  <Smartphone className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Mobile</TooltipContent>
              </Tooltip>
            </div>
          )}

          {result && (
            <Button
              id="copy-btn"
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 text-xs"
              onClick={handleCopy}
            >
              {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          )}

          {result && (
            <Badge variant="secondary" className="text-[10px] font-semibold px-2 h-6 gap-1">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Ready
            </Badge>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-hidden relative bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,hsl(var(--muted)/0.3)_10px,hsl(var(--muted)/0.3)_11px)]">

        {/* Idle state */}
        {status === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center bg-background/90">
            <div className="flex items-center justify-center size-16 rounded-2xl bg-muted border">
              <Sparkles className="size-7 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Your preview will appear here</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Fill in the form on the left and click{" "}
                <span className="font-medium text-primary">Generate UI</span> to see your component come to life.
              </p>
            </div>
          </div>
        )}

        {/* Generating state */}
        {status === "generating" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/90 backdrop-blur-sm">
            <div className="relative">
              <div className="size-16 rounded-2xl gradient-brand flex items-center justify-center shadow-lg">
                <Loader2 className="size-7 text-white animate-spin" />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-primary/20 animate-ping" style={{ animationDuration: "1.5s" }} />
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Generating your UI…</p>
              <p className="text-sm text-muted-foreground">AI is crafting your component</p>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="size-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Preview mode */}
        {status === "done" && result && viewMode === "preview" && (
          <div className="absolute inset-0 overflow-auto flex items-start justify-center p-6 bg-background">
            <div
              className={cn(
                "bg-white rounded-xl shadow-2xl overflow-auto transition-all duration-500",
                deviceMode === "desktop" ? "w-full min-h-full" : "w-[375px] min-h-[667px] border-4 border-foreground/10 rounded-[2rem]"
              )}
              style={{ maxWidth: deviceMode === "mobile" ? 375 : "100%" }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: result.html }}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Code mode */}
        {status === "done" && result && viewMode === "code" && (
          <div className="absolute inset-0 overflow-auto bg-[#0d1117]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 sticky top-0 bg-[#0d1117] z-10">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-rose-500/60" />
                <span className="size-3 rounded-full bg-amber-500/60" />
                <span className="size-3 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-xs text-white/30 ml-1 font-mono">component.html</span>
            </div>
            <pre className="p-5 text-xs font-mono text-[#e6edf3] leading-relaxed overflow-x-auto whitespace-pre-wrap break-words">
              <code>{result.html}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
