export const dynamic = "force-dynamic";

export default async function SolutionsPage() {
  const solutions = [
    {
      title: "测绘地理信息领域",
      image: "/images/70c1cc1d6967a866247f514cb99e84d930f07886.png",
      description: [
        "聚焦测绘地理信息领域项目生产汇交与全量资产管理体系，推",
        "动测绘地理信息数据管理由传统分散模式向一体化、云端化、",
        "服务化方向转型升级。",
      ],
    },
    {
      title: "自然资源数字化治理",
      image: "/images/4c992690dd8d5e387551a904302667ac0b9a3367.png",
      description: [
        "依托\"一张图\"与自然资源三维立体时空数据库，筑牢时空数据",
        "底座，推动自然资源管理数字化与高质量发展。",
      ],
    },
    {
      title: "行业数字化转型",
      image: "/images/32227567034b8d0c5e99b27520fb934d44bf8654.png",
      description: [
        "构建以时空数据为核心的行业数字化应用体系，全面推动各行",
        "业领域的智能化转型升级。",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex h-[574px] overflow-hidden bg-white">
        {/* Decorative background images - 1920px reference container */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            {/* Earth background */}
            <img
              src="/images/472dc73c63f086a21fe24631b4a414e5da898f6c.png"
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
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            {/* Person/image overlay */}
            <img
              src="/images/b450da341ddd0f5b93f10dccfb6797b72d1d7abf.png"
              alt=""
              className="absolute opacity-60"
              style={{
                width: "776px",
                height: "517px",
                left: "827px",
                top: "34px",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "-827px -34px",
                WebkitMaskPosition: "-827px -34px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            {/* Circle decoration with icons */}
            <div
              className="absolute"
              style={{ left: "954px", top: "397px", width: "116px", height: "116px" }}
            >
              <img src="/images/Ellipse2.png" alt="" className="absolute inset-0 h-full w-full" />
              <img
                src="/images/Frame4.png"
                alt=""
                className="absolute"
                style={{ left: "30px", top: "30px", width: "48px", height: "48px" }}
              />
              <img
                src="/images/Frame3.png"
                alt=""
                className="absolute"
                style={{ left: "53px", top: "53px", width: "32px", height: "32px" }}
              />
            </div>

            {/* Left text - positioned within the same 1920px reference frame */}
            <div
              className="absolute flex flex-col gap-1"
              style={{ left: "240px", top: "226px" }}
            >
              <h1
                className="text-[40px] font-normal text-white"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                时空智能领域解决方案
              </h1>
              <p
                className="text-lg font-normal uppercase text-white/50"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                Spatiotemporal intelligence solution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案区域 */}
      <section className="relative overflow-hidden bg-white backdrop-blur-[4px]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          {/* 标题区 */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              解决方案
            </h2>
            <p
              className="text-center text-base text-[#0A0A0A]/75"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              以全量源代码自主可控技术体系为驱动，以时空智能领域全行业需求为导向，为用户提供时空智能领域专业性解决方案
            </p>
          </div>

          {/* 3 cards grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col items-start overflow-hidden ${
                  idx === 0
                    ? "border-2 border-[#3D7BF2]"
                    : "border border-[#3E4757]/20"
                }`}
              >
                {/* Card image */}
                <div className="relative w-full" style={{ height: "179px" }}>
                  <img
                    src={solution.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Card content */}
                <div className="flex flex-col gap-2.5 px-4 pb-6 pt-4">
                  <h3
                    className="text-xl font-normal text-black"
                    style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                  >
                    {solution.title}
                  </h3>
                  <div
                    className="text-base leading-[160%] text-black/75"
                    style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                  >
                    {solution.description.map((line, lidx) => (
                      <p key={lidx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-row items-center justify-center gap-[10px]">
            <a
              href="/partners"
              className="flex h-8 items-center gap-[10px] border border-[#3E4757] px-4 transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
            >
              <span
                className="text-sm text-[#3E4757]"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                合作咨询
              </span>
              <img src="/images/swapright.png" alt="" className="h-4 w-4" />
            </a>
            <a
              href="/partners"
              className="flex h-8 items-center gap-[10px] bg-[#3D7BF2] px-4 transition-colors hover:bg-[#3570E0]"
            >
              <span
                className="text-sm text-white"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                申请试用
              </span>
              <img src="/images/swapright.png" alt="" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
