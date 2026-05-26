"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", text: "The Laal Maas is the most authentic I've ever tasted. The ambiance transports you to a royal era. Absolute must-visit!", rating: 5 },
  { name: "Rajesh Mehra", text: "Hosted our corporate gala at Maharaja Hall. Impeccable service, stunning Amer Fort-inspired decor, and incredible food.", rating: 5 },
  { name: "Sarah Williams", text: "The rooftop view of Nahargarh Fort at sunset with their signature saffron lassi — one of India's best dining experiences.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Testimonials</p>
          <h2 className="heading-style text-3xl md:text-4xl mb-4" style={{ color: "#000" }}>
            What Our Guests Say
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: "#baa383", fill: "#baa383" }} />
                ))}
              </div>
              <p className="font-light leading-relaxed mb-6 italic" style={{ color: "#666" }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "#000" }}>
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
