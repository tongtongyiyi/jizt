import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const configs = await prisma.config.findMany();
  const result: Record<string, string> = {};
  configs.forEach((c) => {
    result[c.key] = c.value;
  });
  return NextResponse.json({ success: true, data: result });
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ success: false, error: "未授权" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const upserts = Object.entries(body).map(([key, value]) =>
      prisma.config.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) },
      })
    );
    await prisma.$transaction(upserts);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "保存失败" }, { status: 400 });
  }
}
