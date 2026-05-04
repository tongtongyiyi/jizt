"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface SolutionCarouselProps {
  solutions: Solution[];
}

export default function SolutionCarousel({ solutions }: SolutionCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(solutions.length / itemsPerPage);

  const goToPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleSolutions = solutions.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  if (solutions.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-[#3E4757]/30 py-12 text-center text-[#3E4757]">
        暂无解决方案数据
      </div>
    );
  }

  return (
    <div className="relative">
      {/* 卡片区域 */}
      <div className="flex flex-col gap-6 md:flex-row">
        {visibleSolutions.map((solution, index) => {
          const globalIndex = currentPage * itemsPerPage + index;
          return (
            <div
              key={solution.id}
              className={`flex flex-1 flex-col gap-6 pb-6 ${
                globalIndex === 0
                  ? "border-2 border-[#3D7BF2]"
                  : "border border-[#3E4757]/20"
              }`}
            >
              {solution.image && (
                <div className="h-[179px] w-full overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-[10px] px-4">
                <h3
                  className="text-xl font-bold text-black md:text-[20px]"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  {solution.title}
                </h3>
                <p
                  className="text-base leading-[26px] text-black/75"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  {solution.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 左右切换按钮 + 指示器 */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={goToPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3E4757]/30 text-[#3E4757] transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
            aria-label="上一页"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPage
                    ? "w-6 bg-[#3D7BF2]"
                    : "w-2 bg-[#3E4757]/30 hover:bg-[#3E4757]/50"
                }`}
                aria-label={`第 ${idx + 1} 页`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3E4757]/30 text-[#3E4757] transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
            aria-label="下一页"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
