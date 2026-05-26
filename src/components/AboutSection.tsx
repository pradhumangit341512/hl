"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="h-[500px] rounded-lg overflow-hidden card-shadow">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>About Us</p>
            <h2 className="heading-style text-3xl md:text-4xl mb-6" style={{ color: "#000" }}>
              A Legacy of Royal Taste
            </h2>
            <div className="w-[60px] h-[1px] mb-8" style={{ backgroundColor: "#baa383" }} />

            <p className="font-light leading-relaxed mb-4" style={{ color: "#666" }}>
              Located near the iconic Hawa Mahal in the heart of Pink City, Royal Jaipur
              has been serving culinary excellence since 1985. Founded by the Rathore family,
              our recipes trace back to the royal kitchens of Mewar and Marwar.
            </p>
            <p className="font-light leading-relaxed mb-8" style={{ color: "#666" }}>
              From our signature Laal Maas to artisan cafe blends, every dish is crafted
              with passion, premium local spices, and generations of culinary wisdom.
              Experience fine dining, rooftop views of Nahargarh Fort, and grand banquet
              celebrations — all under one royal roof.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { value: "40+", label: "Years" },
                { value: "25+", label: "Chefs" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-light" style={{ fontFamily: "var(--font-heading)", color: "#000" }}>{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#baa383" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/restaurant" className="btn-primary text-[13px] uppercase tracking-[0.1em]">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
