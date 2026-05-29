import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GenUi — Build Beautiful UIs Instantly",
    template: "%s | GenUi",
  },
  description:
    "Generate stunning, production-ready UI components and pages in seconds using the power of AI. Describe your vision, watch it come to life.",
  keywords: ["AI", "UI Generator", "design", "components", "Next.js"],
  openGraph: {
    title: "GenUi",
    description: "Generate beautiful UI components instantly with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster position="bottom-right" theme="system" toastOptions={{ className: "dark:bg-zinc-950 dark:border-zinc-800" }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
