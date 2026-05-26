"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Coffee, Cake, Leaf, BookOpen, Sun, Music } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Coffee, title: "Artisan Coffee", desc: "Single-origin beans & signature blends" },
  { icon: Cake, title: "Fresh Bakery", desc: "Croissants, cakes & pastries daily" },
  { icon: Leaf, title: "Organic Teas", desc: "Darjeeling, matcha & herbal infusions" },
  { icon: BookOpen, title: "Reading Corner", desc: "Curated library, comfortable seating" },
  { icon: Sun, title: "Garden Seating", desc: "Haveli courtyard with arches" },
  { icon: Music, title: "Acoustic Music", desc: "Live sessions on weekends" },
];

const specialties = [
  { name: "Royal Saffron Latte", price: "₹249" },
  { name: "Pink City Cold Brew", price: "₹199" },
  { name: "Rajasthani Masala Chai", price: "₹129" },
  { name: "Mawa Croissant", price: "₹179" },
  { name: "Kesar Kulfi Shake", price: "₹219" },
];

export default function CafePage() {
  return (
    <>
      <PageHero subtitle="Artisan Coffee & More" title="The Royal" highlight="Cafe" description="A tranquil haveli courtyard where heritage meets contemporary coffee culture" backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80" />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>The Cafe</p>
            <h2 className="heading-style text-3xl md:text-4xl mb-6" style={{ color: "#000" }}>Your Perfect Escape</h2>
            <div className="w-[60px] h-[1px] mb-8" style={{ backgroundColor: "#baa383" }} />
            <p className="font-light leading-relaxed mb-4" style={{ color: "#666" }}>
              Set in a beautifully restored haveli courtyard with traditional Rajasthani arches, jali screens, and lush greenery. Our cafe is a peaceful oasis in the bustling Pink City.
            </p>
            <p className="font-light leading-relaxed mb-8" style={{ color: "#666" }}>
              We source beans from the finest estates across India. Each cup is crafted with precision while our bakers create fresh Rajasthani-inspired pastries every morning.
            </p>
            <Link href="/menu" className="btn-primary text-[13px] uppercase tracking-[0.1em]">Cafe Menu</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-[400px] rounded-lg overflow-hidden card-shadow">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80')" }} />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-style text-3xl mb-4" style={{ color: "#000" }}>Specialties</h2>
            <div className="section-divider" />
          </div>
          <div className="space-y-0">
            {specialties.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex justify-between items-center py-5" style={{ borderBottom: "1px solid #eee" }}
              >
                <span className="text-[15px] font-light" style={{ color: "#333" }}>{item.name}</span>
                <span className="text-[15px]" style={{ color: "#baa383" }}>{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-style text-3xl mb-4" style={{ color: "#000" }}>Facilities</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[#f8f8f8] rounded-lg p-8 text-center"
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
