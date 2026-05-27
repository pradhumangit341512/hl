"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown, Plus, Pencil, Trash2, LogOut, Search,
  LayoutDashboard, UtensilsCrossed, Save, X
} from "lucide-react";
import type { MenuItem } from "@/lib/data";

interface FormData {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isSpecial: boolean;
}

const emptyForm: FormData = {
  name: "", description: "", price: 0, category: "starters",
  image: "", isVeg: true, isSpecial: false,
};

const categories = [
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Course" },
  { id: "tandoor", name: "Tandoor" },
  { id: "biryani", name: "Biryani & Rice" },
  { id: "breads", name: "Breads" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
  { id: "cafe", name: "Cafe" },
];

export default function AdminDashboard() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const fetchItems = useCallback(async () => {
    const res = await fetch("/api/menu");
    if (res.ok) {
      setItems(await res.json());
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? "PUT" : "POST";
    const res = await fetch("/api/menu", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      await fetchItems();
      setShowForm(false);
      setFormData(emptyForm);
      setEditing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    const res = await fetch(`/api/menu?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchItems();
  };

  const handleEdit = (item: MenuItem) => {
    setFormData(item);
    setEditing(true);
    setShowForm(true);
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.href = "/admin";
  };

  const filteredItems = items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "all" || item.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-warm-black">
      {/* Header */}
      <header className="bg-warm-black/95 border-b border-gold/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-gold" />
            <div>
              <h1 className="text-xl font-heading font-bold text-gold">Admin Panel</h1>
              <p className="text-cream/40 text-xs">Halli Jaipur Management</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-gold" />
              <div>
                <p className="text-2xl font-bold text-cream">{items.length}</p>
                <p className="text-cream/50 text-sm">Total Items</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="w-8 h-8 text-gold" />
              <div>
                <p className="text-2xl font-bold text-cream">{categories.length}</p>
                <p className="text-cream/50 text-sm">Categories</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-gold" />
              <div>
                <p className="text-2xl font-bold text-cream">
                  {items.filter((i) => i.isSpecial).length}
                </p>
                <p className="text-cream/50 text-sm">Chef Specials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream focus:outline-none focus:border-gold/50"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <button
            onClick={() => { setShowForm(true); setEditing(false); setFormData(emptyForm); }}
            className="px-6 py-3 gold-gradient text-warm-black font-semibold rounded-lg hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add Item
          </button>
        </div>

        {/* Items Table */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold/10">
                  <th className="text-left p-4 text-gold/80 text-sm font-medium">Name</th>
                  <th className="text-left p-4 text-gold/80 text-sm font-medium hidden md:table-cell">Category</th>
                  <th className="text-left p-4 text-gold/80 text-sm font-medium">Price</th>
                  <th className="text-left p-4 text-gold/80 text-sm font-medium hidden sm:table-cell">Type</th>
                  <th className="text-left p-4 text-gold/80 text-sm font-medium hidden lg:table-cell">Special</th>
                  <th className="text-right p-4 text-gold/80 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="text-cream font-medium">{item.name}</p>
                      <p className="text-cream/40 text-xs mt-1 line-clamp-1">{item.description}</p>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-cream/60 text-sm capitalize">{item.category}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gold font-bold">₹{item.price}</span>
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <span className={`text-xs px-2 py-1 rounded-full ${item.isVeg ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"}`}>
                        {item.isVeg ? "Veg" : "Non-Veg"}
                      </span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      {item.isSpecial && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold">Chef Special</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-cream/60 hover:text-gold transition-colors"
                          aria-label="Edit item"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-cream/60 hover:text-red-400 transition-colors"
                          aria-label="Delete item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredItems.length === 0 && (
            <div className="p-12 text-center text-cream/40">No items found.</div>
          )}
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass-card rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-gold">
                  {editing ? "Edit Item" : "Add New Item"}
                </h2>
                <button onClick={() => setShowForm(false)} className="text-cream/50 hover:text-cream">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Item Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                />

                <textarea
                  placeholder="Description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 resize-none"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Price (₹)"
                    required
                    min="0"
                    value={formData.price || ""}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                  />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream focus:outline-none focus:border-gold/50"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Image URL (optional)"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                />

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-cream/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isVeg}
                      onChange={(e) => setFormData({ ...formData, isVeg: e.target.checked })}
                      className="w-4 h-4 accent-gold"
                    />
                    Vegetarian
                  </label>
                  <label className="flex items-center gap-2 text-cream/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isSpecial}
                      onChange={(e) => setFormData({ ...formData, isSpecial: e.target.checked })}
                      className="w-4 h-4 accent-gold"
                    />
                    Chef Special
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 gold-gradient text-warm-black font-semibold uppercase tracking-wider rounded-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editing ? "Update Item" : "Add Item"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
