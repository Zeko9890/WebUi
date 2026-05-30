"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Building the <span className="gradient-brand-text">future</span> of web creation.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We believe that designing and developing software should be a seamless, unified experience.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-16 text-lg text-zinc-300 leading-relaxed"
      >
        <div className="aspect-[21/9] bg-zinc-900 rounded-3xl overflow-hidden relative">
           <img
             src="/sf-office.png"
             alt="San Francisco, California skyline at golden hour"
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
           <div className="absolute bottom-6 left-8 flex items-center gap-2">
             <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
             <span className="text-sm font-semibold text-white/90 tracking-wide">San Francisco, CA</span>
           </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Our Mission</h2>
          </div>
          <div className="md:col-span-8">
            <p className="mb-6">
              For too long, the gap between design tools and code repositories has caused friction, lost time, and compromised quality. ZekoUI was founded to eliminate this gap entirely.
            </p>
            <p>
              By leveraging generative AI, we're giving developers the power to move at the speed of thought. You shouldn't have to manually translate a mockup into React components—our platform does the heavy lifting, outputting clean, standard, and beautiful code instantly.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">The Team</h2>
          </div>
          <div className="md:col-span-8">
            <p className="mb-6">
              We are a group of engineers, designers, and dreamers who have built products at some of the world's largest tech companies. We experienced the pain of hand-coding UI boilerplate firsthand, and we decided to fix it for everyone.
            </p>
          </div>
        </div>

        <div className="aspect-[21/9] bg-zinc-900 rounded-3xl overflow-hidden relative">
           <img
             src="/workspace-ZekoUI.png"
             alt="Modern software engineer workspace with ZekoUI logo on laptop"
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
           <div className="absolute bottom-6 left-8 flex items-center gap-2">
             <span className="size-2 rounded-full bg-brand animate-pulse" />
             <span className="text-sm font-semibold text-white/90 tracking-wide">ZekoUI Workspace</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
