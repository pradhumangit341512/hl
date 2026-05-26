"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        window.location.href = "/admin/dashboard";
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #fdf8f4, #f5ebe0)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#f0e6dc]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center gradient-pink">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "#c1624d" }}>Admin Panel</h1>
            <p className="text-sm mt-2" style={{ color: "#6b6b6b" }}>Royal Jaipur Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#c1624d" }} />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
                className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c1624d]/30"
                style={{ backgroundColor: "#f9f4ef", border: "1px solid #e8ddd3", color: "#2c2c2c" }}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#c1624d" }} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
                className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c1624d]/30"
                style={{ backgroundColor: "#f9f4ef", border: "1px solid #e8ddd3", color: "#2c2c2c" }}
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full py-3.5 gradient-pink text-white font-semibold uppercase tracking-wider rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 shadow-lg"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-xs text-center mt-6" style={{ color: "#999" }}>
            Default: admin / royaljaipur2024
          </p>
        </div>
      </motion.div>
    </div>
  );
}
