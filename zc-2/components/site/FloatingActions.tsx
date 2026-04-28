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
    <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-3 md:right-8">
      {/* Pre-sales badge */}
      <div className="flex h-10 w-10 items-center justify-center rounded bg-[#3D7BF2] text-xs font-medium text-white shadow-lg">
        售前
      </div>

      {/* Phone */}
      <a
        href="tel:029-88228108"
        className="flex h-10 w-10 items-center justify-center rounded bg-white shadow-lg transition-transform hover:scale-105"
      >
        <img src="/images/callfilled.png" alt="电话" className="h-5 w-5" />
      </a>

      {/* WeChat */}
      <button className="flex h-10 w-10 items-center justify-center rounded bg-white shadow-lg transition-transform hover:scale-105">
        <img src="/images/logowechatstrokefilled.png" alt="微信" className="h-5 w-5" />
      </button>

      {/* Back to top */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded bg-white shadow-lg transition-transform hover:scale-105"
        >
          <img src="/images/Frame.png" alt="回到顶部" className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
