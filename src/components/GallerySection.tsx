"use client";

import { motion } from "framer-motion";

const gallery = [
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", alt: "Hawa Mahal" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", alt: "Amer Fort" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80", alt: "Rajasthani Cuisine" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80", alt: "Nahargarh Fort" },
];

export default function GallerySection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Gallery</p>
          <h2 className="heading-style text-3xl md:text-4xl mb-4" style={{ color: "#000" }}>
            The Spirit of Jaipur
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 md:h-72 rounded-lg overflow-hidden group cursor-pointer card-shadow"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <p className="text-white text-[13px] uppercase tracking-[0.1em] p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
