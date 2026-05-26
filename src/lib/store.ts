import { MenuItem, defaultMenuItems, Category, defaultCategories } from "./data";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "menu.json");
const CATEGORIES_FILE = path.join(process.cwd(), "data", "categories.json");

function ensureDataDir() {
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getMenuItems(): MenuItem[] {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultMenuItems, null, 2));
    return defaultMenuItems;
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

export function saveMenuItems(items: MenuItem[]) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
}

export function getCategories(): Category[] {
  ensureDataDir();
  if (!fs.existsSync(CATEGORIES_FILE)) {
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(defaultCategories, null, 2));
    return defaultCategories;
  }
  const data = fs.readFileSync(CATEGORIES_FILE, "utf-8");
  return JSON.parse(data);
}

export function saveCategories(categories: Category[]) {
  ensureDataDir();
  fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2));
}

// Admin credentials (in production, use env vars and hashed passwords)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "royaljaipur2024";

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
