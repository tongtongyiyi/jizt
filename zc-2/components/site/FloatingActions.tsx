"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

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
        className="flex h-12 w-12 flex-col items-center justify-center gap-0.5 rounded-full bg-[#3D7BF2] text-white shadow-lg transition-transform hover:scale-110"
        title="售前咨询"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
        <span className="text-[10px] leading-none">售前</span>
      </button>

      {/* 电话 */}
      <a
        href="tel:029-88228108"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#333] shadow-lg transition-transform hover:scale-110"
        title="电话咨询"
      >
        <Phone size={18} />
      </a>

      {/* 微信 */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#333] shadow-lg transition-transform hover:scale-110"
        title="微信咨询"
      >
        <MessageCircle size={18} />
      </button>

      {/* 回到顶部 */}
      <button
        onClick={scrollToTop}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#3D7BF2] text-white shadow-lg transition-all hover:scale-110 ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
        title="回到顶部"
        aria-label="回到顶部"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
