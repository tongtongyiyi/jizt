"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品中心", href: "/products" },
  { label: "解决方案", href: "/solutions" },
  { label: "人才团队", href: "/team" },
  { label: "市场合作", href: "/partners" },
  { label: "服务中心", href: "/service" },
  { label: "关于智成", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/5a73b0b820a156b7c72bf6ccb0fc5feef884fe4f.png"
            alt="智成时空"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center gap-1 pb-1 pt-2"
              >
                <span
                  className={`text-sm ${
                    isActive
                      ? 'font-medium text-black/95'
                      : 'font-normal text-[#333333]'
                  }`}
                  style={{
                    fontFamily: isActive
                      ? '"Alibaba PuHuiTi", "PingFang SC", "Microsoft YaHei", sans-serif'
                      : '"Alibaba PuHuiTi", "PingFang SC", "Microsoft YaHei", sans-serif',
                    fontSize: isActive ? '16px' : '15px',
                  }}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="h-[3px] w-full bg-[#1D60FE]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/partners"
            className="rounded bg-[#3D7BF2] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3570E0]"
          >
            合作咨询
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-900/90 hover:text-[#1D60FE]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/partners"
            className="mt-2 rounded-lg bg-[#3D7BF2] px-5 py-2 text-center text-sm font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            合作咨询
          </Link>
        </nav>
      )}
    </header>
  );
}
