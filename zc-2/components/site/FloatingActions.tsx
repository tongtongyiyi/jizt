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
    <div className="fixed right-4 top-1/2 z-50 flex w-9 -translate-y-1/2 flex-col items-center gap-[9px] md:right-8"
         style={{ fontFamily: "OPPOSans, sans-serif" }}>
      {/* 售前 */}
      <button
        className="group relative flex h-11 w-11 items-center justify-center transition-transform hover:scale-110"
        title="售前咨询"
      >
        <img
          src="/images/c9ad51b9800c322e32de14972e65cef9d5f54cff.png"
          alt="售前"
          className="h-11 w-11 rounded-full object-cover"
        />
        <span className="absolute -bottom-1.5 flex h-4 items-center justify-center rounded-full bg-white px-1.5 text-[10px] text-black shadow-sm"
              style={{ fontFamily: "OPPOSans, sans-serif" }}>
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
          className="h-4 w-[16.5px]"
        />
      </button>

      {/* 回到顶部 */}
      <button
        onClick={scrollToTop}
        className={`relative flex h-9 w-9 items-center justify-center rounded-full bg-[#3D7BF2] shadow-lg transition-all hover:scale-110 ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2"
        }`}
        title="回到顶部"
        aria-label="回到顶部"
      >
        <img
          src="/images/Frame.png"
          alt="回到顶部"
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
}
