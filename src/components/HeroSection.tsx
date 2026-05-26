"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] uppercase tracking-[0.3em] mb-6"
          style={{ color: "#baa383" }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-style text-4xl md:text-6xl lg:text-7xl text-white mb-6"
        >
          Royal Jaipur
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="section-divider mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-4 font-light leading-relaxed"
        >
          Gather your friends and family for a truly authentic Rajasthani feast.
          Fine dining restaurant, rooftop cafe, luxury banquet & rooftop lounge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <MapPin className="w-4 h-4" style={{ color: "#baa383" }} />
          <span className="text-white/60 text-sm">MI Road, Jaipur, Rajasthan</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-[13px] uppercase tracking-[0.1em]">
            Book a Table
          </Link>
          <Link href="/menu" className="btn-outline text-[13px] uppercase tracking-[0.1em] !border-white/40 !text-white hover:!bg-white/10">
            Explore Menu
          </Link>
          <Link href="/restaurant" className="btn-outline text-[13px] uppercase tracking-[0.1em] !border-white/40 !text-white hover:!bg-white/10">
            Our Venues
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
