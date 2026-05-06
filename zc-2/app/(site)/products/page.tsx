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
      <section className="relative flex h-[574px] items-center overflow-hidden bg-white">
        {/* Decorative background images - 1920px reference container */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            {/* Background decoration */}
            <img
              src="/images/2bc0f69c7378eaff63c248330d27aeeb234aa86d.png"
              alt=""
              className="absolute"
              style={{
                width: "2560px",
                height: "576px",
                left: "-395px",
                top: "-1px",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "395px 1px",
                WebkitMaskPosition: "395px 1px",
              }}
            />
            {/* Main product image */}
            <img
              src="/images/7c4c26048dd33b739a36638f82b445d917833eac.png"
              alt=""
              className="absolute"
              style={{
                width: "874px",
                height: "536px",
                left: "856px",
                top: "-7px",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "-856px 7px",
                WebkitMaskPosition: "-856px 7px",
              }}
            />
          </div>
        </div>

        {/* Left text */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-6">
          <div className="flex flex-col gap-12" style={{ paddingLeft: "240px", paddingTop: "211px" }}>
            <div className="flex flex-col gap-1">
              <h1
                className="text-[40px] font-normal text-[#0A0A0A]"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                产品中心
              </h1>
              <p
                className="text-lg font-normal uppercase text-[#0A0A0A]/50"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                product center
              </p>
            </div>
            <div
              className="text-base leading-[160%] text-black/85"
              style={{
                fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif',
                width: "880px",
              }}
            >
              <p>智成时空专业致力于时空数据治理与智能化应用领域的技术研发与应用推广，目前已形</p>
              <p>成了以时空智能基础产品+时空数据智能中台+定制派生平台级产品为核心，全量源码自</p>
              <p>主创新、具备安全自主可控架构、全面适配信创环境的产品体系，为各行各业时空数据</p>
              <p>智能应用提供技术支撑。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品体系区域 */}
      <section className="relative h-[1012px] overflow-hidden backdrop-blur-[4px]">
        {/* Background image - 1920px reference container */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            <img
              src="/images/e882aa5a0d24cb4514e2c77014cf8a8da8378ccd.png"
              alt=""
              className="absolute opacity-40"
              style={{
                width: "3643px",
                height: "1046px",
                left: "-1173px",
                top: "-21px",
              }}
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 py-14 md:px-6">
          <h2
            className="text-[32px] font-normal text-[#222]"
            style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
          >
            产品体系
          </h2>
          <div className="relative mt-8 flex flex-1 items-center justify-center">
            <img
              src="/images/b674c63de0684b9abf2b0a63cd8951aad9ed9afe.png"
              alt=""
              className="h-auto w-full max-w-[1440px]"
            />
          </div>
        </div>
      </section>

      {/* 产品详情列表 */}
      <section className="relative overflow-hidden backdrop-blur-[4px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]"
        >
          <div className="flex flex-col gap-[72px]"
          >
            {products.map((product) => {
              let featureTexts: string[] = [];
              try {
                if (product.features)
                  featureTexts = JSON.parse(product.features);
              } catch {}

              // 将子项分成每行3个的组
              const rows: string[][] = [];
              for (let i = 0; i < featureTexts.length; i += 3) {
                rows.push(featureTexts.slice(i, i + 3));
              }

              return (
                <div key={product.id} className="flex flex-col gap-6"
                >
                  {/* 标题区 */}
                  <div className="border-b border-[#3E4757]/20 pb-6"
                  >
                    <h3
                      className="text-[26px] font-normal text-[#222]"
                      style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="mt-2 text-base text-[#222]/75"
                      style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* 子项列表 - 每行3个，flex布局 */}
                  <div className="flex flex-col gap-[10px]"
                  >
                    {rows.map((row, ridx) => (
                      <div
                        key={ridx}
                        className="flex flex-col gap-[10px] sm:flex-row sm:justify-between"
                      >
                        {row.map((text, cidx) => (
                          <div
                            key={cidx}
                            className="flex flex-1 items-center justify-between border-b border-[#0A357C] pb-1"
                          >
                            <span
                              className="text-base text-[#0A357C]"
                              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
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
                        {/* 填充空位以保持对齐 */}
                        {row.length < 3 &&
                          Array.from({ length: 3 - row.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="flex-1" />
                          ))}
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
