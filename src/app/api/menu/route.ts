import { NextRequest, NextResponse } from "next/server";
import { getMenuItems, saveMenuItems } from "@/lib/store";
import { cookies } from "next/headers";

async function isAuthenticated() {
  const cookieStore = await cookies();
  return !!cookieStore.get("admin_token")?.value;
}

export async function GET() {
  const items = getMenuItems();
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const items = getMenuItems();
  const newItem = {
    ...body,
    id: Date.now().toString(),
  };
  items.push(newItem);
  saveMenuItems(items);

  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const items = getMenuItems();
  const index = items.findIndex((item) => item.id === body.id);

  if (index === -1) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  items[index] = { ...items[index], ...body };
  saveMenuItems(items);

  return NextResponse.json(items[index]);
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 });
  }

  const items = getMenuItems();
  const filtered = items.filter((item) => item.id !== id);
  saveMenuItems(filtered);

  return NextResponse.json({ success: true });
}
