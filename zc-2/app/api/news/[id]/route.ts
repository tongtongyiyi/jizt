import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: Params) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const news = await prisma.news.update({
      where: { id: Number(id) },
      data: {
        title: body.title,
        summary: body.summary,
        content: body.content,
        cover: body.cover,
        isActive: body.isActive,
      },
    });
    return NextResponse.json({ success: true, data: news });
  } catch {
    return NextResponse.json({ success: false, error: "更新失败" }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const { id } = await params;
    await prisma.news.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "删除失败" }, { status: 400 });
  }
}
