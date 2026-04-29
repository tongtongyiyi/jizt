"use client";

import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-3 md:right-6">
      {/* 售前 */}
      <button
        className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        title="售前咨询"
      >
        <img
          src="/images/c9ad51b9800c322e32de14972e65cef9d5f54cff.png"
          alt="售前"
          className="h-12 w-auto"
        />
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-[#333] shadow-sm">
          售前
        </span>
      </button>

      {/* 电话 */}
      <a
        href="tel:029-88228108"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        title="电话咨询"
      >
        <img src="/images/callfilled.png" alt="电话" className="h-4 w-4" />
      </a>

      {/* 微信 */}
      <button
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        title="微信咨询"
      >
        <img
          src="/images/logowechatstrokefilled.png"
          alt="微信"
          className="h-4 w-4"
        />
      </button>

      {/* 回到顶部 */}
      <button
        onClick={scrollToTop}
        className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#3D7BF2] shadow-lg transition-all hover:scale-110 ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2"
        }`}
        title="回到顶部"
        aria-label="回到顶部"
      >
        <img src="/images/Frame.png" alt="回到顶部" className="h-4 w-4" />
      </button>
    </div>
  );
}
