import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const solutions = await prisma.solution.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json({ success: true, data: solutions });
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const solution = await prisma.solution.create({
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon || null,
        sortOrder: body.sortOrder || 0,
        isActive: body.isActive ?? true,
      },
    });
    return NextResponse.json({ success: true, data: solution });
  } catch {
    return NextResponse.json({ success: false, error: "创建失败" }, { status: 400 });
  }
}
