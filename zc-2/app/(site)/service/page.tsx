import Link from "next/link";

const channels = [
  {
    title: "一张图数据库群服务通道",
    iconBg: "/images/Ellipse32.png",
    icon: "/images/Frame6.png",
    border: "blue" as const,
    buttons: [{ label: "联系我们", variant: "outline" as const }],
  },
  {
    title: "时空智能产品咨询通道",
    iconBg: "/images/Ellipse31.png",
    icon: "/images/Frame5.png",
    border: "gray" as const,
    buttons: [
      { label: "联系我们", variant: "outline" as const },
      { label: "申请试用", variant: "filled" as const },
    ],
  },
  {
    title: "行业解决方案咨询通道",
    iconBg: "/images/Ellipse30.png",
    icon: "/images/Frame4.png",
    border: "gray" as const,
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
    buttons: [{ label: "联系我们", variant: "outline" as const }],
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[574px] overflow-hidden bg-white">
        {/* Background layers with mask */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/0b5a5c1b68cbcc31ef67b248d29142a1c39506f7.png)`,
            WebkitMaskImage: `url(/images/Rectangle4132.png)`,
            maskImage: `url(/images/Rectangle4132.png)`,
            WebkitMaskSize: "1920px 574px",
            maskSize: "1920px 574px",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.78]"
          style={{
            backgroundImage: `url(/images/40fc45b0ff332559e56943e5648db66838ce1bce.png)`,
            WebkitMaskImage: `url(/images/Rectangle4132.png)`,
            maskImage: `url(/images/Rectangle4132.png)`,
            WebkitMaskSize: "1920px 574px",
            maskSize: "1920px 574px",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        {/* Decorative image 1 */}
        <img
          src="/images/Rectangle4159.png"
          alt=""
          className="absolute"
          style={{
            width: "430px",
            height: "432px",
            left: "52%",
            top: "13%",
            WebkitMaskImage: `url(/images/Rectangle4132.png)`,
            maskImage: `url(/images/Rectangle4132.png)`,
            WebkitMaskSize: "1920px 574px",
            maskSize: "1920px 574px",
            WebkitMaskPosition: "-52% -13%",
            maskPosition: "-52% -13%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
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
            right: "0",
            top: "6%",
            WebkitMaskImage: `url(/images/Rectangle4132.png)`,
            maskImage: `url(/images/Rectangle4132.png)`,
            WebkitMaskSize: "1920px 574px",
            maskSize: "1920px 574px",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        {/* Circle decoration */}
        <div
          className="absolute"
          style={{ left: "50%", top: "69%" }}
        >
          <img
            src="/images/Ellipse2.png"
            alt=""
            className="h-[116px] w-[116px]"
          />
          <img
            src="/images/Group34103.png"
            alt=""
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Text content */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <div className="flex flex-col gap-1">
            <h1
              className="text-[40px] font-normal text-white"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
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
      </section>

      {/* Service Channels */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-[32px] font-normal text-[#0A0A0A]"
            style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
          >
            服务渠道
          </h2>
          <div className="text-center text-base text-[#0A0A0A]/75">
            <p>智成时空专业致力于时空数据治理与智能化应用领域的技术研发与应用推广，为客户提供专业时空数据智能产品支持与高端行业解决方案咨询服务</p>
            <p>并为用户提供多种市场合作服务模式，以时空智能技术创造更多用户价值。</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col gap-12 p-6 ${
                channel.border === "blue"
                  ? "border-2 border-[#3D7BF2]"
                  : "border border-[#3E4757]/20"
              }`}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="relative h-24 w-24">
                  <img
                    src={channel.iconBg}
                    alt=""
                    className="h-full w-full"
                  />
                  <img
                    src={channel.icon}
                    alt=""
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h3
                  className="text-xl font-normal text-black"
                  style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                >
                  {channel.title}
                </h3>
              </div>

              {/* Divider */}
              <img
                src={`/images/Line10${idx === 0 ? "2" : idx === 1 ? "1" : idx === 2 ? "0" : ""}.png`}
                alt=""
                className="w-full"
              />

              {/* Buttons */}
              <div className="flex flex-wrap items-start justify-center gap-2.5">
                {channel.buttons.map((btn, bidx) =>
                  btn.variant === "outline" ? (
                    <Link
                      key={bidx}
                      href="#"
                      className="flex items-center gap-2.5 border border-[#3E4757] px-4 py-1.5 text-sm leading-[160%] text-[#3E4757] transition-colors hover:border-[#3D7BF2] hover:text-[#3D7BF2]"
                    >
                      <span>{btn.label}</span>
                      <img
                        src="/images/swapright.png"
                        alt=""
                        className="h-4 w-4"
                      />
                    </Link>
                  ) : (
                    <Link
                      key={bidx}
                      href="#"
                      className="flex items-center gap-2.5 bg-[#3D7BF2] px-4 py-1.5 text-sm leading-[160%] text-white transition-colors hover:bg-[#3570E0]"
                    >
                      <span>{btn.label}</span>
                      <img
                        src="/images/swapright.png"
                        alt=""
                        className="h-4 w-4"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
