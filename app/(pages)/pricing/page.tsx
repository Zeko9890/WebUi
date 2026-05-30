"use client";

import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for exploring the platform and personal projects.",
    features: [
      "Up to 3 projects",
      "Basic UI templates",
      "Community support",
      "Standard exports",
    ],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professionals who need more power and custom domains.",
    features: [
      "Unlimited projects",
      "Premium templates & themes",
      "Priority email support",
      "Custom domains",
      "Advanced export options",
      "Team collaboration (up to 3)",
    ],
    cta: "Get Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/mo",
    description: "For scaling teams that need advanced security and support.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "24/7 dedicated support",
      "SSO & advanced security",
      "Custom SLA",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Simple, transparent <span className="gradient-brand-text">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs. Always know what you&apos;ll pay.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl border ${
              plan.highlight
                ? "bg-zinc-900/80 border-brand/50 shadow-2xl shadow-brand/20"
                : "bg-zinc-900/30 border-zinc-800"
            } backdrop-blur-xl`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="flex items-center gap-1.5 bg-brand text-brand-foreground text-xs font-bold px-3 py-1 rounded-full">
                  <Sparkles className="size-3.5" />
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground min-h-[40px]">
                {plan.description}
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className="text-lg text-muted-foreground font-medium">{plan.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="size-5 text-brand shrink-0" />
                  <span className="text-sm text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full py-6 text-base font-semibold ${
                plan.highlight
                  ? "bg-brand hover:bg-brand/90 text-brand-foreground"
                  : "bg-zinc-800 hover:bg-zinc-700 text-white"
              }`}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
