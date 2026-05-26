"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
  backgroundImage: string;
}

export default function PageHero({ subtitle, title, highlight, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>
          {subtitle}
        </p>
        <h1 className="heading-style text-4xl md:text-6xl text-white mb-4">
          {title} {highlight}
        </h1>
        <div className="section-divider mb-6" />
        <p className="text-white/70 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
