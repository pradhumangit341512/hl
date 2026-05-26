"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Flame, Star, Search } from "lucide-react";
import type { MenuItem, Category } from "@/lib/data";

interface MenuClientProps {
  items: MenuItem[];
  categories: Category[];
}

export default function MenuClient({ items, categories }: MenuClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80')" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-6">
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Our Menu</p>
          <h1 className="heading-style text-4xl md:text-6xl text-white mb-4">Royal Flavors</h1>
          <div className="section-divider" />
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#baa383" }} />
              <input type="text" placeholder="Search dishes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]"
                style={{ backgroundColor: "#f8f8f8", border: "1px solid #eee", color: "#333" }}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button onClick={() => setActiveCategory("all")}
              className="px-5 py-2 rounded-full text-[12px] uppercase tracking-[0.1em] transition-all"
              style={activeCategory === "all" ? { backgroundColor: "#32373c", color: "#fff" } : { border: "1px solid #ddd", color: "#666" }}
            >All</button>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 rounded-full text-[12px] uppercase tracking-[0.1em] transition-all"
                style={activeCategory === cat.id ? { backgroundColor: "#32373c", color: "#fff" } : { border: "1px solid #ddd", color: "#666" }}
              >{cat.name}</button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory + searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}
                  className="rounded-lg overflow-hidden card-shadow group bg-white"
                >
                  <div className="h-44 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80')" }} />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.isVeg ? (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-green-500 text-white flex items-center gap-1"><Leaf className="w-3 h-3" />Veg</span>
                      ) : (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-red-500 text-white flex items-center gap-1"><Flame className="w-3 h-3" />Non-Veg</span>
                      )}
                    </div>
                    {item.isSpecial && (
                      <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: "#baa383", color: "#fff" }}>
                        <Star className="w-3 h-3" />Special
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[14px] uppercase tracking-[0.03em] font-medium" style={{ color: "#000" }}>{item.name}</h3>
                      <span className="text-[15px] font-medium whitespace-nowrap ml-3" style={{ color: "#baa383" }}>₹{item.price}</span>
                    </div>
                    <p className="text-[13px] font-light mt-2 leading-relaxed" style={{ color: "#888" }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm font-light" style={{ color: "#999" }}>No dishes found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
