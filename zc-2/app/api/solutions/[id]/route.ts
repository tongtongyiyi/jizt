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
    const solution = await prisma.solution.update({
      where: { id: Number(id) },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        sortOrder: body.sortOrder,
        isActive: body.isActive,
      },
    });
    return NextResponse.json({ success: true, data: solution });
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
    await prisma.solution.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "删除失败" }, { status: 400 });
  }
}
