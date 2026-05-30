import { DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-12 min-h-screen">
      <DocsSidebar />
      <main className="flex-1 min-w-0 py-2 pb-32">
        {children}
      </main>
    </div>
  );
}
