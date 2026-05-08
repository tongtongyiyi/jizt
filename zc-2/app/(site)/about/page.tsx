import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const configs = await prisma.config.findMany();
  const configMap = Object.fromEntries(configs.map((c) => [c.key, c.value]));

  const companyName = configMap.company_name || "智成时空";
  const phone = configMap.contact_phone || "029-88228108";
  const email = configMap.contact_email || "support@scenemap.cn";
  const address = configMap.contact_address || "西安市高新区锦业路69号瞪羚谷F401室";

  const timeline = [
    {
      year: "2022.08",
      title: "成立",
      icon: "/images/Group341152.png",
      line: "/images/Line112.png",
      left: "244px",
      top: "113px",
      width: "240px",
      items: [
        "初始团队规模10余人",
        "成立之初就投资开启实景三维产品和时空数字孪生产品研发，形成产品雏形。",
      ],
    },
    {
      year: "2023",
      title: "全年产值近千万团队壮大至50人",
      icon: "/images/Group341151.png",
      line: "/images/Line111.png",
      left: "570px",
      top: "217px",
      width: "339px",
      items: [
        "自主研发实景三维数据管理系统通过全国专业测评，并名列前茅",
        "承研陕西省科技厅重点研发项目\"时空数字孪生基础产品\"",
        "研发知识产权38项（发明专利5项）",
        "市场覆盖陕西、宁夏、甘肃、青海、新疆",
      ],
    },
    {
      year: "2024",
      title: "产值2480万，团队扩大至80余人",
      icon: "/images/Group341150.png",
      line: "/images/Line110.png",
      left: "994px",
      top: "140px",
      width: "356px",
      items: [
        "自主研发三维实景桌面GIS、服务器GIS产品获得业内权威机构公开测评第一名",
        "参建项目获2024年度地理信息科技进步一等奖",
        "通过国家高新技术企业认定，累计研发知识产权73项（发明专利10项）",
        "市场布局新增覆盖山西、北京、内蒙、江苏区域",
      ],
    },
    {
      year: "2025",
      title: "稳步发展",
      icon: "/images/Group34115.png",
      line: "/images/Line11.png",
      left: "1436px",
      top: "53px",
      width: "176px",
      items: [
        "聚焦空间智能领域，加速产品升级迭代",
        "稳步推进品牌建设，拓展市场份额",
      ],
    },
  ];

  const cultureCards = [
    {
      bg: "/images/4232e5b18bbd81d297d84ddc757c3f95dd3929d6.png",
      overlay: "/images/204ffabd97be46622de4e3266daa74bfa1d905ae.png",
      borderWidth: "6px",
      borderColor: "rgba(255,255,255,0.7)",
      title: "时空智能技术创新用户价值",
    },
    {
      bg: "/images/76a915846398ff851b3c280cb0682d83f9966f56.png",
      overlay: null,
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.3)",
      title: "\"一\"个使命",
    },
    {
      bg: "/images/204ffabd97be46622de4e3266daa74bfa1d905ae.png",
      overlay: "/images/7a9c5d4d7f93aae430a6e68f6384318ade6be2fb.png",
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.3)",
      title: "\"一\"个套工作准则",
    },
    {
      bg: "/images/204ffabd97be46622de4e3266daa74bfa1d905ae.png",
      overlay: "/images/9d7ebee88a28cbcbf1904c3313f0e8987fb6c19d.png",
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.3)",
      title: "\"三\"条价值观",
    },
    {
      bg: "/images/e7f2fe0ea6e892c4bde0c084228b92be1aa663e7.png",
      overlay: "rgba(0,0,0,0.2)",
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.3)",
      title: "\"三\"条人才观",
    },
    {
      bg: "/images/204ffabd97be46622de4e3266daa74bfa1d905ae.png",
      overlay: "/images/b275c28654ced14b9eea23a1713a29641d265b83.png",
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.3)",
      title: "\"五\"个精神文化",
    },
  ];

  const qualifications = [
    { icon: "/images/Ellipse106.png", text: "规模以上企业" },
    { icon: "/images/Ellipse105.png", text: "专精特新中小企业" },
    { icon: "/images/Ellipse104.png", text: "国家高新技术企业" },
    { icon: "/images/Ellipse103.png", text: "CMMI3级软件成熟度认证" },
    { icon: "/images/Ellipse102.png", text: "ISO质量管理体系认证" },
    { icon: "/images/Ellipse101.png", text: "信息安全管理体系认证" },
    { icon: "/images/Ellipse100.png", text: "信息技术服务管理体系认证" },
    { icon: "/images/Ellipse10.png", text: "测绘资质乙级" },
  ];

  const contactCards = [
    {
      icon: "/images/Frame6.png",
      title: "总部地址",
      lines: [
        "1.西安市高新区锦业路69号瞪羚谷F401室",
        "2.西咸新区沣东自贸产业园项目二期一号楼302室/402室",
      ],
    },
    {
      icon: "/images/callfilled.png",
      title: "请致电我们",
      lines: [phone],
    },
    {
      icon: "/images/Frame5.png",
      title: "联系邮箱",
      lines: [email],
    },
    {
      icon: "/images/Frame3.png",
      title: "联系邮编",
      lines: ["710000"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex h-[574px] items-center overflow-hidden bg-[#F3F8FB]">
        {/* Decorative background images - 1920px reference container */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <div className="relative h-full w-[1920px] flex-shrink-0">
            {/* Background decoration */}
            <img
              src="/images/eb1cb1dbb4941c6ccb07e5390327aadf1fb5f92d.png"
              alt=""
              className="absolute"
              style={{
                width: "2018px",
                height: "681px",
                left: "-10px",
                top: "-20px",
                maskImage: "url(/images/Rectangle4132.png)",
                WebkitMaskImage: "url(/images/Rectangle4132.png)",
                maskSize: "1920px 574px",
                WebkitMaskSize: "1920px 574px",
                maskPosition: "10px 20px",
                WebkitMaskPosition: "10px 20px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            {/* Person image */}
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
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                关于智成
              </h1>
              <p
                className="text-lg font-normal uppercase text-white/70"
                style={{
                  fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif',
                  letterSpacing: "0.33em",
                }}
              >
                ABOUT SCENEMAP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于智成 */}
      <section className="relative overflow-hidden bg-[#121212] backdrop-blur-[4px]">
        <div
          className="relative mx-auto flex max-w-7xl items-center px-4 md:px-6"
          style={{ padding: "64px 240px", gap: "56px" }}
        >
          <div className="flex flex-col gap-4" style={{ maxWidth: "734px" }}>
            <h2
              className="text-[32px] font-normal text-white"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              关于智成
            </h2>
            <div
              className="text-base leading-[180%] text-white/75"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              <p>
                {companyName}是由上市企业超图软件2022年投资成立的科技研发型企业，专业致力于时空数据治理与智能化应用领域的技术研发与应用推广。公司高度重视时空治理领域核心技术研发投入，截至目前研发成果已取得60余项知识产权，在众多核心技术的加持下公司实现了快速发展，三年时间就发展成为技术服务规上企业、高新技术企业、专精特新中小企业，同时也被陕西股权交易所审核遴选进入上市后备企业库。
              </p>
              <p className="mt-4">
                公司研发的成果已应用于自然资源部地理底图"一张图"等行业领域重大工程项目中，服务客户遍及部委、北京、陕西、山西、江苏、青海等多个省份，助力赋能了水利、交通等国家十余个行业领域用户的数字化转型发展。
              </p>
            </div>
          </div>
          {/* Right earth image */}
          <div className="relative ml-auto hidden lg:block" style={{ width: "701px", height: "516px" }}>
            <img
              src="/images/db5463efdfb94c99d530dadc4a5a18304c33e36d.png"
              alt=""
              className="absolute"
              style={{
                width: "967px",
                height: "924px",
                left: "-133px",
                top: "-204px",
                maskImage: "url(/images/Rectangle4161.png)",
                WebkitMaskImage: "url(/images/Rectangle4161.png)",
                maskSize: "701px 516px",
                WebkitMaskSize: "701px 516px",
                maskPosition: "133px 204px",
                WebkitMaskPosition: "133px 204px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
          style={{ padding: "72px 240px 56px" }}
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              发展历程
            </h2>
            <p
              className="text-center text-base text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              从初心启航到稳步深耕，于时光中积淀实力，在前行中不断超越自我
            </p>
          </div>

          {/* Timeline - 1920px reference container */}
          <div className="relative mt-12 flex w-full justify-center overflow-hidden"
          >
            <div className="relative h-[617px] w-[1920px] flex-shrink-0"
            >
              {/* Timeline line */}
              <img
                src="/images/Vector8.png"
                alt=""
                className="absolute left-0 top-0 w-full"
                style={{ height: "239px" }}
              />
              {/* Timeline items - absolutely positioned */}
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="absolute flex flex-col gap-4"
                  style={{
                    left: item.left,
                    top: item.top,
                    width: item.width,
                  }}
                >
                  <div className="flex items-center gap-3"
                  >
                    <span
                      className="text-[32px] font-bold text-[#0150B0]"
                      style={{ fontFamily: '"DIN-Bold", sans-serif' }}
                    >
                      {item.year}
                    </span>
                    <span
                      className="text-lg text-black/80"
                      style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <img src={item.line} alt="" className="w-6" />
                  <div className="flex flex-col gap-3"
                  >
                    {item.items.map((text, tidx) => (
                      <p
                        key={tidx}
                        className="text-base leading-[21px] text-black/75"
                        style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
          style={{ padding: "56px 240px 64px" }}
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              企业文化
            </h2>
            <p
              className="text-center text-base text-[#0A0A0A]"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              智成时空"135"企业文化核心体系
            </p>
          </div>

          {/* Culture cards grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cultureCards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded"
                style={{ width: "464px", height: "240px" }}
              >
                <img src={card.bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
                {card.overlay && (
                  <>
                    {card.overlay.startsWith("/") ? (
                      <img src={card.overlay} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <div className="absolute inset-0" style={{ backgroundColor: card.overlay }} />
                    )}
                  </>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    borderWidth: card.borderWidth,
                    borderColor: card.borderColor,
                    borderStyle: "solid",
                  }}
                />
                <div
                  className="absolute left-1/2 flex items-center justify-center"
                  style={{
                    bottom: idx === 0 ? "108px" : "15.79px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <p
                    className="whitespace-nowrap font-normal text-white"
                    style={{
                      fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif',
                      fontSize: idx === 0 ? "18px" : "24px",
                    }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="relative overflow-hidden bg-white">
        {/* Background image */}
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
                top: "-20px",
              }}
            />
          </div>
        </div>

        <div
          className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
          style={{ padding: "56px 240px 64px" }}
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-black"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              荣誉资质
            </h2>
            <p
              className="text-center text-base text-black/75"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              公司成立至今已成为测绘地理信息领域资质齐全的专精特新企业，并获行业权威部门及众多用户认可
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-12 border-b border-[#3E4757]/20">
            <div className="border-b-[3px] border-[#3D7BF2] pb-4">
              <span
                className="text-lg font-normal text-black"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                齐全的业务资质
              </span>
            </div>
            <div className="pb-4">
              <span
                className="text-lg text-black/75"
                style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
              >
                头部用户认可
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-12 flex w-full flex-col gap-8 lg:flex-row">
            {/* Left - qualification list */}
            <div className="flex w-full flex-col gap-4 lg:w-[344px]">
              <div className="flex flex-col gap-5 border border-black/20 px-6 py-8">
                {qualifications.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={q.icon} alt="" className="h-[9px] w-[9px]" />
                    <span
                      className="text-base text-black/75"
                      style={{ fontFamily: '"OPPOSans-Medium", "OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif', lineHeight: '160%' }}
                    >
                      {q.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - certificate images */}
            <div className="flex flex-1 items-start justify-center">
              <img
                src="/images/b5f0f824d744a719e312da5c802d7b434868be9e.png"
                alt="荣誉资质证书"
                className="w-full max-w-[800px] object-cover"
                style={{ height: '521.55px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="relative overflow-hidden bg-[#151B26]">
        <div
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
          style={{ padding: "56px 240px 64px" }}
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-normal text-white"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              联系我们
            </h2>
            <p
              className="text-center text-base text-white/75"
              style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
            >
              简历投递方式：&lt;hr@scenemap.cn&gt;
            </p>
          </div>

          {/* Contact cards */}
          <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center gap-8 border border-white/20 px-4 py-8"
                style={{ height: '282px' }}
              >
                <div className="flex flex-col items-center gap-4">
                  <img src={card.icon} alt="" className="h-12 w-12" />
                  <div className="w-full border-b border-white/20 pb-6 text-center">
                    <span
                      className="text-xl text-white"
                      style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    >
                      {card.title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-center" style={{ width: '310px' }}>
                  {card.lines.map((line, lidx) => (
                    <p
                      key={lidx}
                      className="text-base text-white/75"
                      style={{ fontFamily: '"OPPOSans", "PingFang SC", "Microsoft YaHei", sans-serif', lineHeight: '150%' }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
