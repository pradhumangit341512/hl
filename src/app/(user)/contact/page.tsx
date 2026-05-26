"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", guests: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", guests: "", date: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = { backgroundColor: "#f8f8f8", border: "1px solid #eee", color: "#333" };

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-[12px] uppercase tracking-[0.3em] mb-4" style={{ color: "#baa383" }}>Get in Touch</p>
          <h1 className="heading-style text-4xl md:text-5xl mb-4" style={{ color: "#000" }}>Reservation</h1>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Location", lines: ["123, MI Road, Near Panch Batti", "Jaipur, Rajasthan 302001"] },
                { icon: Phone, title: "Phone", lines: ["+91 141 456 7890", "+91 98765 43210"] },
                { icon: Mail, title: "Email", lines: ["info@royaljaipur.com", "reservations@royaljaipur.com"] },
                { icon: Clock, title: "Hours", lines: ["Mon - Sun: 11:00 AM - 11:00 PM", "Rooftop: 5:00 PM - 1:00 AM"] },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 py-4" style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#baa383" }} />
                  <div>
                    <h3 className="text-[14px] uppercase tracking-[0.08em] font-medium mb-1" style={{ color: "#000" }}>{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm font-light" style={{ color: "#666" }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="heading-style text-2xl mb-6" style={{ color: "#000" }}>Book a Table</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]" style={inputStyle} />
                <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]" style={inputStyle} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]" style={inputStyle} />
                <input type="number" placeholder="Guests" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]" style={inputStyle} />
              </div>
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383]" style={inputStyle} />
              <textarea placeholder="Special requests..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#baa383] resize-none" style={inputStyle} />

              <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.1em]">
                <Send className="w-4 h-4" />
                {submitted ? "Reservation Sent!" : "Send Reservation"}
              </button>

              {submitted && <p className="text-center text-sm font-light" style={{ color: "#baa383" }}>Thank you! We&apos;ll confirm shortly.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
