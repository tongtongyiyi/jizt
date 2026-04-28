import type { Metadata } from "next";
import "./globals.css";
import FloatingActions from "@/components/site/FloatingActions";

export const metadata: Metadata = {
  title: "智成科技 - 时空智能产品与技术服务商",
  description: "做用户最值得信赖的时空智能产品与技术服务商",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
