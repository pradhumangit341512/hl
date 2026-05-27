import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl tracking-[0.15em] uppercase text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Halli Jaipur
            </h3>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: "#baa383" }}>
              Restaurant & Cafe
            </p>
            <p className="text-sm font-light leading-relaxed text-white/60">
              Experience the grandeur of Rajasthani hospitality. Fine dining, rooftop views,
              and luxury celebrations in the heart of Pink City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Menu", "Restaurant", "Cafe", "Banquet", "Rooftop", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm font-light text-white/60 hover:text-[#baa383] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#baa383" }} />
                <span className="text-sm font-light text-white/60">123, MI Road, Near Panch Batti, Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#baa383" }} />
                <span className="text-sm font-light text-white/60">+91 141 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#baa383" }} />
                <span className="text-sm font-light text-white/60">info@royaljaipur.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              {[
                { venue: "Restaurant", time: "12:00 PM - 11:00 PM" },
                { venue: "Cafe", time: "8:00 AM - 10:00 PM" },
                { venue: "Rooftop", time: "5:00 PM - 1:00 AM" },
                { venue: "Banquet", time: "By Reservation" },
              ].map((h) => (
                <li key={h.venue} className="flex items-center gap-3">
                  <Clock className="w-4 h-4 shrink-0" style={{ color: "#baa383" }} />
                  <div>
                    <p className="text-sm font-light text-white/80">{h.venue}</p>
                    <p className="text-xs text-white/50">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Halli Jaipur. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-[#baa383] transition-colors">Facebook</a>
            <a href="#" className="text-xs text-white/40 hover:text-[#baa383] transition-colors">Instagram</a>
            <a href="#" className="text-xs text-white/40 hover:text-[#baa383] transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
