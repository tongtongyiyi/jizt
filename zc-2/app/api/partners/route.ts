import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const partners = await prisma.partner.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ success: true, data: partners });
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const partner = await prisma.partner.create({
      data: {
        name: body.name,
        logo: body.logo || null,
        url: body.url || null,
        sortOrder: body.sortOrder || 0,
        isActive: body.isActive ?? true,
      },
    });
    return NextResponse.json({ success: true, data: partner });
  } catch {
    return NextResponse.json({ success: false, error: "创建失败" }, { status: 400 });
  }
}
