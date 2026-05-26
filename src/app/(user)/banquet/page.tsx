"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const halls = [
  { name: "Maharaja Hall", capacity: "500 Guests", size: "10,000 sq ft", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80" },
  { name: "Rani Hall", capacity: "200 Guests", size: "5,000 sq ft", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80" },
  { name: "Padmini Hall", capacity: "100 Guests", size: "3,000 sq ft", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80" },
];

export default function BanquetPage() {
  return (
    <>
      <PageHero subtitle="Grand Celebrations" title="Luxury" highlight="Banquet" description="Where every celebration becomes a royal affair" backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80" />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-style text-3xl md:text-4xl mb-4" style={{ color: "#000" }}>Our Venues</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {halls.map((hall, i) => (
              <motion.div key={hall.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group"
              >
                <div className="h-64 rounded-lg overflow-hidden card-shadow mb-5">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${hall.image}')` }} />
                </div>
                <h3 className="text-[16px] uppercase tracking-[0.08em] font-medium mb-1" style={{ color: "#000" }}>{hall.name}</h3>
                <p className="text-sm font-light" style={{ color: "#baa383" }}>{hall.capacity} &middot; {hall.size}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Services</p>
          <h2 className="heading-style text-3xl mb-6" style={{ color: "#000" }}>Complete Event Management</h2>
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left mb-12">
            {["Event Planning", "Royal Catering", "Photography & Video", "Floral Decor", "Valet Parking", "Live Entertainment"].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span style={{ color: "#baa383" }}>&#10003;</span>
                <span className="text-sm font-light" style={{ color: "#666" }}>{s}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary text-[13px] uppercase tracking-[0.1em]">Book Your Event</Link>
        </div>
      </section>
    </>
  );
}
