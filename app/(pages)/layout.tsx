import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white dark selection:bg-brand/30 selection:text-brand-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
