import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const news = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ success: true, data: news });
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const news = await prisma.news.create({
      data: {
        title: body.title,
        summary: body.summary || null,
        content: body.content,
        cover: body.cover || null,
        isActive: body.isActive ?? true,
      },
    });
    return NextResponse.json({ success: true, data: news });
  } catch {
    return NextResponse.json({ success: false, error: "创建失败" }, { status: 400 });
  }
}
