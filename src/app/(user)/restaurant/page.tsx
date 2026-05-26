"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { UtensilsCrossed, Clock, Users, Wifi, Music, Wine } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: UtensilsCrossed, title: "Multi-Cuisine", desc: "Rajasthani, North Indian, Continental & Chinese" },
  { icon: Clock, title: "Open Daily", desc: "12:00 PM - 11:00 PM" },
  { icon: Users, title: "150+ Seating", desc: "Indoor luxury seating" },
  { icon: Wifi, title: "Free WiFi", desc: "High-speed connectivity" },
  { icon: Music, title: "Live Music", desc: "Rajasthani folk weekends" },
  { icon: Wine, title: "Premium Bar", desc: "Wines & craft cocktails" },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero subtitle="Fine Dining" title="The" highlight="Restaurant" description="Where Rajasthani heritage meets culinary artistry in a palace-inspired setting" backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Our Story</p>
            <h2 className="heading-style text-3xl md:text-4xl mb-6" style={{ color: "#000" }}>An Experience Beyond Dining</h2>
            <div className="w-[60px] h-[1px] mb-8" style={{ backgroundColor: "#baa383" }} />
            <p className="font-light leading-relaxed mb-4" style={{ color: "#666" }}>
              Step into a world where every meal is a celebration. Our restaurant features hand-carved Rajasthani jharokha windows, traditional mirror work, and warm sandstone interiors that echo the grandeur of Jaipur&apos;s City Palace.
            </p>
            <p className="font-light leading-relaxed mb-8" style={{ color: "#666" }}>
              Our master chefs bring together authentic recipes from generations of royal kitchens, using the finest local ingredients and spices sourced directly from Rajasthan&apos;s markets.
            </p>
            <Link href="/menu" className="btn-primary text-[13px] uppercase tracking-[0.1em]">View Full Menu</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-lg overflow-hidden card-shadow"><div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80')" }} /></div>
              <div className="h-64 rounded-lg overflow-hidden card-shadow"><div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80')" }} /></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-lg overflow-hidden card-shadow"><div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80')" }} /></div>
              <div className="h-48 rounded-lg overflow-hidden card-shadow"><div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&q=80')" }} /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-style text-3xl mb-4" style={{ color: "#000" }}>Facilities</h2>
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
