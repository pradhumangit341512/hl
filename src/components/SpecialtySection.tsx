"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dishes = [
  { name: "Laal Maas", price: "₹599", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
  { name: "Dal Baati Churma", price: "₹449", image: "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&q=80" },
  { name: "Royal Biryani", price: "₹499", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
  { name: "Paneer Tikka", price: "₹399", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80" },
  { name: "Tandoori Chicken", price: "₹549", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
  { name: "Mawa Kachori", price: "₹249", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
];

export default function SpecialtySection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>From Our Kitchen</p>
          <h2 className="heading-style text-3xl md:text-4xl mb-4" style={{ color: "#000" }}>
            Signature Dishes
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden card-shadow mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-[15px] uppercase tracking-[0.05em] font-medium" style={{ color: "#000" }}>
                  {dish.name}
                </h3>
                <span className="text-[15px] font-light" style={{ color: "#baa383" }}>
                  {dish.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/menu" className="btn-primary text-[13px] uppercase tracking-[0.1em]">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
