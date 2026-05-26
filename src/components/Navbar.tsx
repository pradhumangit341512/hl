"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/cafe", label: "Cafe" },
  { href: "/banquet", label: "Banquet" },
  { href: "/rooftop", label: "Rooftop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: scrolled ? "#000" : "#fff" }}>
              Royal Jaipur
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: scrolled ? "#baa383" : "#baa383" }}>
              Restaurant & Cafe
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.1em] font-light transition-colors hover:opacity-70"
                style={{ color: scrolled ? "#32373c" : "#fff" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-[13px] uppercase tracking-[0.1em]">
              Book a Table
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "#000" : "#fff" }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-[15px] uppercase tracking-[0.1em] font-light border-b border-gray-50"
                  style={{ color: "#32373c" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center text-[13px] uppercase tracking-[0.1em]">
                  Book a Table
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
