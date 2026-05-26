"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const venues = [
  {
    title: "Fine Dining Restaurant",
    description: "Authentic Rajasthani & North Indian cuisine in a palace-inspired setting",
    href: "/restaurant",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    title: "Royal Cafe",
    description: "Artisan coffee & fresh pastries in a heritage haveli courtyard",
    href: "/cafe",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
  },
  {
    title: "Luxury Banquet",
    description: "Grand Maharaja-style halls for celebrations up to 500 guests",
    href: "/banquet",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  },
  {
    title: "Rooftop Lounge",
    description: "Panoramic views of Nahargarh Fort with cocktails & live music",
    href: "/rooftop",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Our Venues</p>
          <h2 className="heading-style text-3xl md:text-4xl mb-4" style={{ color: "#000" }}>
            Four Royal Experiences
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={venue.href} className="group block">
                <div className="relative h-72 rounded-lg overflow-hidden mb-4 card-shadow">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${venue.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-[15px] uppercase tracking-[0.08em] font-medium mb-1 group-hover:opacity-70 transition-opacity" style={{ color: "#000" }}>
                  {venue.title}
                </h3>
                <p className="text-[13px] font-light" style={{ color: "#666" }}>
                  {venue.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
