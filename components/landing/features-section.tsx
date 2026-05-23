import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/8 text-primary text-xs font-semibold px-3 py-1">
            Everything you need
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Generate, customize,{" "}
            <span className="gradient-brand-text">ship faster</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From a single button to an entire landing page — our AI handles the
            design work so you can focus on building.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-12">
          {[
            { value: "30+", label: "Component types" },
            { value: "< 2s", label: "Generation time" },
            { value: "6", label: "Color schemes" },
            { value: "100%", label: "Responsive output" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold gradient-brand-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const isLarge = index === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl border bg-card p-6 flex flex-col gap-4",
        "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default",
        isLarge && "sm:col-span-2 lg:col-span-1"
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex items-start justify-between gap-3 relative">
        <div className="text-3xl leading-none">{feature.icon}</div>
        {feature.badge && (
          <Badge className="gradient-brand text-white border-0 text-[10px] font-bold px-2 py-0.5 shrink-0">
            {feature.badge}
          </Badge>
        )}
      </div>

      <div className="relative">
        <h3 className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
