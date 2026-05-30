"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "Introducing ZekoUI 2.0: The Future of Visual Development",
    category: "Product",
    date: "Oct 24, 2026",
    readTime: "5 min read",
    excerpt: "Today we're thrilled to announce our biggest update yet. ZekoUI 2.0 brings AI-native component generation directly into your workflow.",
    featured: true,
  },
  {
    title: "How we scaled our Next.js architecture to handle 1M+ components",
    category: "Engineering",
    date: "Oct 12, 2026",
    readTime: "8 min read",
    excerpt: "A deep dive into our infrastructure and how we use edge computing to deliver instant UI previews globally.",
  },
  {
    title: "Design Systems in the Age of Artificial Intelligence",
    category: "Design",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    excerpt: "Why rigid design tokens are being replaced by fluid, intent-driven AI generation.",
  },
  {
    title: "Best Practices for Accessible AI-Generated Code",
    category: "Guides",
    date: "Sep 15, 2026",
    readTime: "4 min read",
    excerpt: "Ensuring that the speed of AI doesn't compromise the accessibility of your web applications.",
  },
];

export default function BlogPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Blog</h1>
          <p className="text-lg text-zinc-400">
            Thoughts, updates, and guides from the ZekoUI team.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Featured Article */}
        <div className="group cursor-pointer rounded-3xl border border-zinc-800/50 bg-zinc-900/30 overflow-hidden mb-16 flex flex-col md:flex-row hover:border-zinc-700 transition-colors">
          <div className="md:w-1/2 aspect-video md:aspect-auto bg-gradient-to-br from-brand/20 to-purple-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.2] mix-blend-overlay" />
            {/* Abstract decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-700">
               <div className="w-32 h-32 rounded-full border-[12px] border-brand/30 absolute -left-10 top-10" />
               <div className="w-48 h-48 rounded-full border-[2px] border-white/10 absolute right-10 -bottom-10" />
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider text-brand">
              <span>{featured.category}</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-4 group-hover:text-brand transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium">
              <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {featured.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="size-4" /> {featured.readTime}</span>
            </div>
          </div>
        </div>

        {/* Grid of Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article, i) => (
            <div key={article.title} className="group cursor-pointer flex flex-col">
              <div className="aspect-[16/9] rounded-2xl bg-zinc-900 border border-zinc-800/50 mb-5 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                 <div className="absolute bottom-4 left-4">
                   <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-md">
                     {article.category}
                   </span>
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between text-sm text-zinc-500 font-medium">
                <span>{article.date}</span>
                <span className="flex items-center text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Read article <ArrowRight className="size-4 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
