import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SolutionsPage() {
  const solutions = await prisma.solution.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-white md:min-h-[574px]">
        {/* 右侧背景装饰 */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] overflow-hidden md:w-[60%]">
          <img
            src="/images/472dc73c63f086a21fe24631b4a414e5da898f6c.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-none object-cover"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
          <img
            src="/images/b450da341ddd0f5b93f10dccfb6797b72d1d7abf.png"
            alt=""
            className="absolute bottom-0 right-[5%] h-[85%] w-auto object-contain opacity-60"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
          {/* 图标组 */}
          <div className="absolute bottom-[15%] left-[20%] hidden h-[116px] w-[116px] md:block">
            <img
              src="/images/Ellipse2.png"
              alt=""
              className="absolute inset-0 h-full w-full"
            />
            <img
              src="/images/Frame4.png"
              alt=""
              className="absolute left-[26%] top-[26%] h-12 w-12"
            />
            <img
              src="/images/Frame3.png"
              alt=""
              className="absolute right-[15%] bottom-[15%] h-8 w-8"
            />
          </div>
        </div>

        {/* 左侧文字 */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 md:px-6">
          <div className="flex flex-col gap-1 py-20 md:py-0">
            <h1
              className="text-3xl font-bold text-white md:text-[40px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              时空智能领域解决方案
            </h1>
            <p
              className="text-base uppercase text-white/50 md:text-lg"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              Spatiotemporal intelligence solution
            </p>
          </div>
        </div>
      </section>

      {/* 解决方案区域 */}
      <section className="relative overflow-hidden bg-white backdrop-blur-[4px]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          {/* 标题区 */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              解决方案
            </h2>
            <p
              className="text-center text-base text-[#0A0A0A]/75 md:text-base"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              以全量源代码自主可控技术体系为驱动，以时空智能领域全行业需求为导向，为用户提供时空智能领域专业性解决方案
            </p>
          </div>

          {/* 卡片网格 */}
          <div className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`flex flex-1 flex-col gap-6 pb-6 ${
                  index === 0
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
            ))}
          </div>

          {/* 按钮区 */}
          <div className="mt-12 flex flex-row items-center justify-center gap-[10px]">
            <a
              href="/partners"
              className="flex h-8 items-center gap-[10px] border border-[#3E4757] px-4 transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
            >
              <span
                className="text-sm text-[#3E4757]"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                合作咨询
              </span>
              <img
                src="/images/swapright.png"
                alt=""
                className="h-4 w-4"
              />
            </a>
            <a
              href="/partners"
              className="flex h-8 items-center gap-[10px] bg-[#3D7BF2] px-4 transition-colors hover:bg-[#3570E0]"
            >
              <span
                className="text-sm text-white"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                申请试用
              </span>
              <img
                src="/images/swapright.png"
                alt=""
                className="h-4 w-4"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
