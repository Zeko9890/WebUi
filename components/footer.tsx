import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Generator", href: "/generator" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Examples", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-background border-gradient-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3 group">
              <span className="flex items-center justify-center size-7 rounded-lg gradient-brand group-hover:opacity-90 group-hover:scale-105 transition-all duration-200">
                <Sparkles className="size-3.5 text-white" />
              </span>
              <span className="font-bold text-sm gradient-brand-text">ZekoUi</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mb-5">
              Generate production-ready UI components instantly with AI.
            </p>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <a
                    id="footer-github"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center size-8 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-border hover:bg-accent/60 hover:scale-105 active:scale-95 transition-all"
                  >
                    <GithubIcon className="size-3.5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <a
                    id="footer-twitter"
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="flex items-center justify-center size-8 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-border hover:bg-accent/60 hover:scale-105 active:scale-95 transition-all"
                  >
                    <XIcon className="size-3.5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">Twitter / X</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 inline-block transition-all duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} ZekoUi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js &amp; shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
