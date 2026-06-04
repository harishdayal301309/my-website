import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const links = await prisma.linkHub.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(links);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, url, order } = await req.json();
    
    if (!title || !url) {
      return NextResponse.json({ error: "Title and URL are required" }, { status: 400 });
    }

    const link = await prisma.linkHub.create({
      data: { title, url, order: order || 0 },
    });

    return NextResponse.json(link, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
  }
}
