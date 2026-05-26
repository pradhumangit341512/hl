import { getMenuItems, getCategories } from "@/lib/store";
import MenuClient from "./MenuClient";

export default function MenuPage() {
  const items = getMenuItems();
  const categories = getCategories();

  return <MenuClient items={items} categories={categories} />;
}
