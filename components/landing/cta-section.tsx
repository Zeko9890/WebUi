import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 gradient-radial-glow" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none animate-glow-pulse" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative glass rounded-3xl border p-10 sm:p-16 shadow-2xl"
        >
          <div className="flex items-center justify-center size-16 rounded-2xl gradient-brand shadow-lg mx-auto mb-6">
            <Sparkles className="size-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Ready to build{" "}
            <span className="gradient-brand-text">10× faster?</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Join thousands of developers and designers who use AI UI Generator
            to ship beautiful interfaces in minutes, not days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/generator" id="cta-primary">
              <Button
                size="lg"
                className="gradient-brand text-white border-0 font-semibold px-8 h-12 glow-primary hover:opacity-90 transition-opacity gap-2"
              >
                Start Generating Free
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              No signup needed · Free forever tier
            </p>
          </div>

          {/* Mini trust indicators */}
          <div className="mt-10 pt-8 border-t flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["✓ No credit card required", "✓ Export to React & HTML", "✓ Dark mode included"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1">
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
