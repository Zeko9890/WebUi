"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const positions = [
  {
    role: "Senior Full Stack Engineer",
    team: "Engineering",
    location: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    role: "Machine Learning Engineer (UI Generation)",
    team: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    role: "Product Designer",
    team: "Design",
    location: "San Francisco",
    type: "Full-time",
  },
  {
    role: "Developer Advocate",
    team: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Join us in building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">future</span>.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We're a small, fast-moving team looking for exceptional people to help us democratize software creation.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        
        <div className="space-y-4 mb-24">
          {positions.map((pos) => (
            <div key={pos.role} className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors cursor-pointer">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold mb-1 group-hover:text-brand transition-colors">{pos.role}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-300">{pos.team}</span>
                  <span className="flex items-center gap-1"><MapPin className="size-3" /> {pos.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                  {pos.type}
                </span>
                <ArrowRight className="size-5 text-zinc-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-8">Benefits & Perks</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <h3 className="font-bold mb-2">Remote-first Culture</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Work from anywhere. We value async communication and deep work over endless meetings.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <h3 className="font-bold mb-2">Top-tier Health & Wellness</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">100% covered premium medical, dental, and vision insurance for you and your dependents.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <h3 className="font-bold mb-2">Home Office Stipend</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">$2,000 to set up your ideal workspace, plus a brand new MacBook Pro on day one.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <h3 className="font-bold mb-2">Unlimited PTO</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Take the time you need to recharge. We mandate a minimum of 3 weeks off per year.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
