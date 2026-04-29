import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
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
            src="/images/2bc0f69c7378eaff63c248330d27aeeb234aa86d.png"
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
            src="/images/7c4c26048dd33b739a36638f82b445d917833eac.png"
            alt=""
            className="absolute bottom-0 right-[5%] h-[85%] w-auto object-contain"
          />
        </div>

        {/* 左侧文字 */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 md:px-6">
          <div className="flex flex-col gap-10 py-20 md:gap-12 md:py-0">
            <div className="flex flex-col gap-1">
              <h1
                className="text-3xl font-bold text-[#0A0A0A] md:text-[40px]"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                产品中心
              </h1>
              <p
                className="text-base uppercase text-[#0A0A0A]/50 md:text-lg"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                product center
              </p>
            </div>
            <p
              className="max-w-[660px] text-sm leading-relaxed text-black/85 md:text-base md:leading-[1.6]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              智成时空专业致力于时空数据治理与智能化应用领域的技术研发与应用推广，目前已形成了以时空智能基础产品+时空数据智能中台+定制派生平台级产品为核心，全量源码自主创新、具备安全自主可控架构、全面适配信创环境的产品体系，为各行各业时空数据智能应用提供技术支撑。
            </p>
          </div>
        </div>
      </section>

      {/* 产品体系区域 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/e882aa5a0d24cb4514e2c77014cf8a8da8378ccd.png"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-6">
          <h2
            className="text-2xl font-bold text-[#222] md:text-[32px]"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            产品体系
          </h2>
          <div className="relative mt-8">
            <img
              src="/images/b674c63de0684b9abf2b0a63cd8951aad9ed9afe.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* 产品详情列表 */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="flex flex-col gap-16 md:gap-[72px]">
            {products.map((product) => {
              let featureTexts: string[] = [];
              try {
                if (product.features)
                  featureTexts = JSON.parse(product.features);
              } catch {}

              return (
                <div key={product.id} className="flex flex-col gap-6">
                  {/* 标题区 */}
                  <div className="border-b border-[#3E4757]/20 pb-6">
                    <h3
                      className="text-xl font-bold text-[#222] md:text-[26px]"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="mt-2 text-sm text-[#222]/75 md:text-base"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* 子项列表 - 三列布局 */}
                  <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                    {featureTexts.map((text, fidx) => (
                      <div
                        key={fidx}
                        className="flex items-center justify-between border-b border-[#0A357C] pb-1"
                      >
                        <span
                          className="text-sm text-[#0A357C] md:text-base"
                          style={{ fontFamily: "OPPOSans, sans-serif" }}
                        >
                          {text}
                        </span>
                        <img
                          src="/images/swapright.png"
                          alt=""
                          className="h-4 w-4 flex-shrink-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
