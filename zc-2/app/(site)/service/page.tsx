import Link from "next/link";

const channels = [
  {
    title: "一张图数据库群服务通道",
    iconBg: "/images/Ellipse32.png",
    icon: "/images/Frame6.png",
    border: "blue" as const,
    line: "/images/Line102.png",
    buttons: [{ label: "联系我们", variant: "outline" as const }],
  },
  {
    title: "时空智能产品咨询通道",
    iconBg: "/images/Ellipse31.png",
    icon: "/images/Frame5.png",
    border: "gray" as const,
    line: "/images/Line101.png",
    buttons: [
      { label: "联系我们", variant: "outline" as const },
      { label: "申请试用", variant: "outline" as const },
    ],
  },
  {
    title: "行业解决方案咨询通道",
    iconBg: "/images/Ellipse30.png",
    icon: "/images/Frame4.png",
    border: "gray" as const,
    line: "/images/Line100.png",
    buttons: [
      { label: "联系我们", variant: "outline" as const },
      { label: "申请试用", variant: "filled" as const },
    ],
  },
  {
    title: "市场服务合作通道",
    iconBg: "/images/Ellipse3.png",
    icon: "/images/Frame3.png",
    border: "gray" as const,
    line: "/images/Line10.png",
    buttons: [{ label: "联系我们", variant: "outline" as const }],
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative flex h-[574px] items-center overflow-hidden bg-white">
        {/* Background layers - 1920px reference container */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            {/* Base bg */}
            <div
              className="absolute"
              style={{
                width: "1920px",
                height: "1080px",
                left: "-18px",
                top: "-505px",
                backgroundImage: "url(/images/0b5a5c1b68cbcc31ef67b248d29142a1c39506f7.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "18px 505px",
                WebkitMaskPosition: "18px 505px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            {/* Overlay bg */}
            <div
              className="absolute"
              style={{
                width: "2560px",
                height: "576px",
                left: "-395px",
                top: "-1px",
                backgroundImage: "url(/images/40fc45b0ff332559e56943e5648db66838ce1bce.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.78,
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
            {/* Decorative image 1 */}
            <img
              src="/images/Rectangle4159.png"
              alt=""
              className="absolute"
              style={{
                width: "431px",
                height: "432px",
                left: "999px",
                top: "77px",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "-999px -77px",
                WebkitMaskPosition: "-999px -77px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            {/* Decorative image 2 - person */}
            <img
              src="/images/b450da341ddd0f5b93f10dccfb6797b72d1d7abf.png"
              alt=""
              className="absolute"
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
            {/* Circle decoration */}
            <div
              className="absolute"
              style={{ left: "954px", top: "396px", width: "116px", height: "116px" }}
            >
              <img src="/images/Ellipse2.png" alt="" className="absolute inset-0 h-full w-full" />
              <img
                src="/images/Group34103.png"
                alt=""
                className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* Left text - 1920px reference frame */}
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            <div
              className="absolute flex flex-col gap-1"
              style={{ left: "240px", top: "226px" }}
            >
              <h1
                className="text-[40px] font-normal text-white"
                style={{ fontFamily: '"OPPOSans-Bold", "OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                服务中心
              </h1>
              <p
                className="text-lg font-normal uppercase text-white/50"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                service center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Channels */}
      <section className="relative flex justify-center overflow-hidden">
        <div
          className="relative flex w-[1920px] flex-shrink-0 flex-col items-center"
          style={{ padding: "56px 240px 64px", gap: "48px" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans-Bold", "OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              服务渠道
            </h2>
            <div
              className="text-center text-base leading-[160%] text-[#0A0A0A]/75"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              <p>智成时空专业致力于时空数据治理与智能化应用领域的技术研发与应用推广，为客户提供专业时空数据智能产品支持与高端行业解决方案咨询服务</p>
              <p>并为用户提供多种市场合作服务模式，以时空智能技术创造更多用户价值。</p>
            </div>
          </div>

          {/* Cards - flex row */}
          <div className="flex w-full flex-row items-start gap-6">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className={`relative flex flex-1 flex-shrink-0 flex-col items-start ${
                  channel.border === "blue"
                    ? "border-2 border-[#3D7BF2]"
                    : "border border-[#3E4757]/20"
                }`}
                style={{ flexBasis: 0 }}
              >
                <div
                  className="flex w-full flex-col items-start"
                  style={{ gap: "48px", padding: "48px 24px" }}
                >
                  {/* Icon + Title */}
                  <div className="flex w-full flex-col items-center gap-2.5">
                    <div className="relative h-24 w-24">
                      <img src={channel.iconBg} alt="" className="h-full w-full" />
                      <img
                        src={channel.icon}
                        alt=""
                        className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <h3
                      className="text-xl font-normal text-black"
                      style={{ fontFamily: '"OPPOSans-Bold", "OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    >
                      {channel.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <img src={channel.line} alt="" className="w-full" />

                  {/* Buttons */}
                  <div className="flex w-full flex-wrap items-start justify-center gap-2.5">
                    {channel.buttons.map((btn, bidx) =>
                      btn.variant === "outline" ? (
                        <Link
                          key={bidx}
                          href="#"
                          className="flex h-8 items-center gap-2.5 border border-[#3E4757] px-4 text-sm leading-[160%] text-[#3E4757] transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
                        >
                          <span>{btn.label}</span>
                          <img src="/images/swapright.png" alt="" className="h-4 w-4" />
                        </Link>
                      ) : (
                        <Link
                          key={bidx}
                          href="#"
                          className="flex h-8 items-center gap-2.5 bg-[#3D7BF2] px-4 text-sm leading-[160%] text-white transition-colors hover:bg-[#3570E0]"
                        >
                          <span>{btn.label}</span>
                          <img src="/images/swapright.png" alt="" className="h-4 w-4" />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
