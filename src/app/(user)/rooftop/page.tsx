"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { CloudSun, Wine, Music, Telescope, Flame, Star } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: CloudSun, title: "Panoramic Views", desc: "Nahargarh Fort & city skyline" },
  { icon: Wine, title: "Craft Cocktails", desc: "Signature Rajasthani-inspired drinks" },
  { icon: Music, title: "Live Music", desc: "Curated performances nightly" },
  { icon: Telescope, title: "Stargazing", desc: "Premium telescope available" },
  { icon: Flame, title: "Fire Pit", desc: "Cozy winter evening lounge" },
  { icon: Star, title: "Private Cabanas", desc: "Exclusive reservations" },
];

export default function RooftopPage() {
  return (
    <>
      <PageHero subtitle="Dine Under the Stars" title="The" highlight="Rooftop" description="Jaipur's most spectacular rooftop with panoramic views of Nahargarh Fort" backgroundImage="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80" />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>7th Floor</p>
            <h2 className="heading-style text-3xl md:text-4xl mb-6" style={{ color: "#000" }}>Where Sky Meets Royalty</h2>
            <div className="w-[60px] h-[1px] mb-8" style={{ backgroundColor: "#baa383" }} />
            <p className="font-light leading-relaxed mb-4" style={{ color: "#666" }}>
              Watch the sun paint Nahargarh Fort in gold as the entire Pink City transforms into a glittering tapestry below. Our mixologists craft cocktails inspired by Rajasthan.
            </p>
            <p className="font-light leading-relaxed mb-8" style={{ color: "#666" }}>
              Open 5 PM - 1 AM daily. Perfect for date nights, celebrations, or simply unwinding with the best view in Jaipur.
            </p>
            <Link href="/contact" className="btn-primary text-[13px] uppercase tracking-[0.1em]">Reserve a Table</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-[450px] rounded-lg overflow-hidden card-shadow">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80')" }} />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-style text-3xl mb-4" style={{ color: "#000" }}>The Experience</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-lg p-8 text-center card-shadow"
              >
                <f.icon className="w-8 h-8 mx-auto mb-4" style={{ color: "#baa383" }} />
                <h3 className="text-[14px] uppercase tracking-[0.08em] font-medium mb-2" style={{ color: "#000" }}>{f.title}</h3>
                <p className="text-sm font-light" style={{ color: "#666" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
