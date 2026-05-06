import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getConfig(key: string): Promise<string | null> {
  const config = await prisma.config.findUnique({ where: { key } });
  return config?.value ?? null;
}

const tabs = [
  { label: "高质量成果交付", gradient: "from-[#004B73] to-[#02314F]" },
  { label: "盘活数据资产家底", gradient: "from-[#5D64D9] to-[#2E67C9]" },
  { label: "跨价共创标杆产品", gradient: "from-[#2880D9] to-[#186CC2]" },
  { label: "经营管理相互赋能发展", gradient: "from-[#784CD2] to-[#5E2CC3]" },
  { label: "深度战略绑定", gradient: "from-[#4FBC8E] to-[#47A66D]" },
];

const standardizationCards = [
  {
    icon: "/images/Frame9.png",
    line: "/images/Line105.png",
    title: "严格内控管理",
    desc: "使用禅道等工具，依据内控流程严格把控项目各阶段进度与交付物质量。",
  },
  {
    icon: "/images/Frame8.png",
    line: "/images/Line104.png",
    title: "项目盘点机制",
    desc: "建立阶段性项目复盘机制，对各个项目实施阶段的情况、里程碑、反馈等进行盘点总结。",
  },
  {
    icon: "/images/Frame7.png",
    line: "/images/Line103.png",
    title: "全流程规范化管理",
    desc: "对项目全流程实施规范化管理，并形成对应的制式文档资料保障项目验收与审计。",
  },
];

const mode2Cards = [
  {
    icon: "/images/Frame6.png",
    line: "/images/Line102.png",
    title: "盘活家底",
    desc: "数据资产心中有数，汇报有据、决策有底",
  },
  {
    icon: "/images/Frame5.png",
    line: "/images/Line101.png",
    title: "智数有道",
    desc: "打造可信数据空间，支撑精准业务分析决策",
  },
  {
    icon: "/images/Frame4.png",
    line: "/images/Line100.png",
    title: "能力强化",
    desc: "强化自身数据赋存角色履职能力",
  },
  {
    icon: "/images/Frame3.png",
    line: "/images/Line10.png",
    title: "共享应用",
    desc: "提升行业内数据服务能力与影响力",
  },
];

const patents = [
  "1、面向Web端的时空大数据高效加载渲染方法及系统",
  "2、基于分布式技术的时空大数据存储方法及系统",
  "3、基于知识图谱的时空大数据深度分析方法及系统",
  "4、倾斜摄影数据存储方法及系统",
  "5、时空数据管理系统及时空数据服务化资源协同调度方法",
  "6、一种基于时空技术的数字孪生体构建方法及系统",
  "7、基于PDF格式的实景三维模型数据高效融合方法及系统",
  "8、基于深度学习的城市实景三维模型构建系统及方法",
  "9、一种基于时空技术的数字孪生体构建方法及系统",
  "10、面向地理实体的知识图谱自动构建方法及系统",
];

const mode4Cards = [
  {
    image: "/images/0aee6edb89e515a83af92fe7b2c8d6697b8d0f58.png",
    title: "人才选拔",
    desc: `公司以高于行业平均水平的薪酬及福利体系选拔起点自211/985院校的优秀人才`,
  },
  {
    image: "/images/0b275eb33f4e2d9a92c19fc8d4edb769213dee5e.png",
    title: "企业文化建设",
    desc: `公司建立了如"全员内部去总化称呼"等一系列开放平等自由的工作氛围，最大程度释放团队的创新潜能`,
  },
  {
    image: "/images/71b5e7e4377e454fc4ad47aacafe3468cd5356aa.png",
    title: "人才激励",
    desc: `公司实行持续贡献者的工商配股、突出贡献者协议配股、潜力奋斗者候补配股等完善的发展成果分享机制体系`,
  },
  {
    image: "/images/b4be5b9a866a7577a5cd07e16a05d123bfe026f1.png",
    title: "常态化管理",
    desc: `公司实行"两大纪律五项注意"、岗位考核"三三制"等简洁明确的岗位责任方向和为做好高质量成果的纠偏措施`,
  },
];

const zcItems = ["高门槛自主可控技术", "股权清晰", "规范管理", "灵活决策"];
const partnerItems = ["资金实力", "市场渠道", "政策支持", "品牌背书"];

export default async function PartnersPage() {
  const contactEmail = (await getConfig("partners_contact_email")) ?? "bd@scenemap.cn";

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#F3F8FB] md:min-h-[574px]">
        {/* Decorative background images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src="/images/91db9dc1848480695934781da27c1abea32d69f2.png"
            alt=""
            className="absolute left-[16%] top-[-23%] h-[145%] w-auto opacity-40"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
          <img
            src="/images/Rectangle4160.png"
            alt=""
            className="absolute right-[22%] top-[14%] h-[74%] w-auto object-contain"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
          <img
            src="/images/b450da341ddd0f5b93f10dccfb6797b72d1d7abf.png"
            alt=""
            className="absolute bottom-0 right-[16%] h-[90%] w-auto object-contain"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
          <img
            src="/images/4bece634e5d35d46975203a4e1bd7c222ff11385.png"
            alt=""
            className="absolute right-[8%] top-[9%] hidden h-36 w-36 rounded-full object-cover md:block"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
          <img
            src="/images/e7d5b655fe1db294f0b9c912bea09147f85c8144.png"
            alt=""
            className="absolute bottom-[8%] right-[38%] hidden h-40 w-32 rounded-br-3xl object-cover md:block"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
          <img
            src="/images/0c6e7ad2343447f72406dc0166321a377b407581.png"
            alt=""
            className="absolute left-[42%] top-[46%] hidden h-24 w-24 rounded-full object-cover md:block"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          />
        </div>

        {/* Left text */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-4 md:px-6">
          <div className="flex flex-col gap-1 py-20 md:py-0">
            <h1
              className="text-3xl font-bold text-[#0A0A0A] md:text-[40px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              市场合作
            </h1>
            <p
              className="text-base uppercase text-[#0A0A0A]/50 md:text-lg"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              Market Cooperation
            </p>
          </div>
        </div>
      </section>

      {/* 5 colored tabs */}
      <section className="w-full">
        <div className="flex w-full flex-col md:flex-row">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-1 items-center justify-center bg-gradient-to-r ${tab.gradient} px-4 py-6 md:py-8`}
            >
              <span
                className="text-center text-base font-medium text-white md:text-xl"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mode 1 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-center text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              模式一：高效专业项目交付能力支撑项目交付
            </h2>
            <p
              className="max-w-4xl text-center text-base leading-[21px] text-[#0A0A0A]/75"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              依托敏捷开发与增量交付机制，实现成果快速迭代与持续优化。通过全过程内控管理、阶段性项目评审及标准化文档体系，保障交付过程可追溯、成果质量可验证。以规范化体系为基础，支撑客户实现项目高质量交付。
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row">
            {/* 实施理念 */}
            <div className="flex flex-1 flex-col border border-[#3E4757]/20">
              <div className="flex items-center justify-center bg-[#042236] py-3">
                <span
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  实施理念
                </span>
              </div>
              <div className="flex flex-col gap-5 p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex flex-1 flex-col items-center gap-2 bg-[#3D7BF2]/10 py-4">
                    <img src="/images/Frame12.png" alt="" className="h-8 w-8" />
                    <span
                      className="text-base font-medium text-[#0A0A0A]/90"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      数据资源体系
                    </span>
                  </div>
                  <img src="/images/add.png" alt="" className="h-5 w-5" />
                  <div className="flex flex-1 flex-col items-center gap-2 bg-[#3D7BF2]/10 py-4">
                    <img src="/images/Frame13.png" alt="" className="h-8 w-8" />
                    <span
                      className="text-base font-medium text-[#0A0A0A]/90"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      场景化需求
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src="/images/arrowdown.png" alt="" className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-center bg-[#3D7BF2]/10 py-4">
                  <span
                    className="text-base font-medium text-[#0A0A0A]/90"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    驱动需求分析与系统设计
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span
                    className="text-xl font-medium text-[#0A0A0A]"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    交付贴合用户实际需求的成果
                  </span>
                </div>
              </div>
            </div>

            {/* 实施模式 */}
            <div className="flex flex-1 flex-col border border-[#3E4757]/20">
              <div className="flex items-center justify-center bg-[#3D7BF2] py-3">
                <span
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  实施模式
                </span>
              </div>
              <div className="flex flex-col gap-5 p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex flex-1 flex-col items-center gap-2 bg-[#3D7BF2]/10 py-4">
                    <img src="/images/Frame10.png" alt="" className="h-8 w-8" />
                    <span
                      className="text-base font-medium text-[#0A0A0A]/90"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      敏捷开发
                    </span>
                  </div>
                  <img src="/images/add.png" alt="" className="h-5 w-5" />
                  <div className="flex flex-1 flex-col items-center gap-2 bg-[#3D7BF2]/10 py-4">
                    <img src="/images/Frame11.png" alt="" className="h-8 w-8" />
                    <span
                      className="text-base font-medium text-[#0A0A0A]/90"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      增量开发
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src="/images/arrowdown.png" alt="" className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-center bg-[#3D7BF2]/10 py-4">
                  <span
                    className="text-base font-medium text-[#0A0A0A]/90"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    保障交付成果实用落地
                  </span>
                </div>
                <div className="flex items-center justify-center py-3">
                  <span
                    className="text-xl font-medium text-[#0A0A0A]"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    交付真正实用好用、落地的成果
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standardization management */}
      <section className="bg-[#F2F6FA]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              规范化管理
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row">
            {standardizationCards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-1 flex-col items-start gap-8 border border-[#3E4757]/20 bg-white px-6 pt-8 pb-12"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#1890FF]" />

                <div className="flex flex-col gap-8">
                  <img src={card.icon} alt="" className="h-12 w-12" />
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-xl font-bold text-black"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {card.title}
                    </h3>
                    <img src={card.line} alt="" className="h-px w-full" />
                    <p
                      className="text-base leading-[26px] text-black/75"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode 2 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-center text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              模式二：时空数据智能中台产品赋能盘活数据资产家底
            </h2>
            <p
              className="max-w-4xl text-center text-base leading-[21px] text-[#0A0A0A]/75"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              基于时空数据智能中台，贯通数据汇-治-管-供全流程。通过统一数据标准与智能化供数机制，优化数据存储与管理方式，提升数据资源整合能力与利用效率，构建统一的数据资源管理与服务体系。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {mode2Cards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start gap-8 border border-black/20 bg-white px-6 pt-8 pb-8"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#0D9443]" />
                <div className="flex flex-col gap-8">
                  <img src={card.icon} alt="" className="h-12 w-12" />
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-xl font-bold text-black"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {card.title}
                    </h3>
                    <img src={card.line} alt="" className="h-px w-full" />
                    <p
                      className="text-base leading-[26px] text-black/75"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode 3 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-center text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              模式三：全量源码底层核心技术联合行业专家知识共创创新产品
            </h2>
            <p
              className="max-w-4xl text-center text-base leading-[21px] text-[#0A0A0A]/75"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              依托全量源码自主可控的时空智能技术体系，结合客户行业经验与应用场景，开展联合研发与产品共建。通过技术能力与业务需求深度融合形成面向行业的定制化解决方案，并推动成果沉淀、应用推广及联合成果申报。
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row">
            {/* Patent list */}
            <div className="flex flex-1 flex-col gap-4 border border-black/20 p-6 md:p-8">
              {patents.map((patent, index) => (
                <p
                  key={index}
                  className="text-base leading-[26px] text-black/75"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  {patent}
                </p>
              ))}
            </div>

            {/* Certificate image */}
            <div className="flex flex-1 items-start justify-center">
              <img
                src="/images/4674095123a4ae8df09a889922dd78a6be77a927.png"
                alt="专利证书"
                className="h-auto w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mode 4 */}
      <section className="bg-[#151B26]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-center text-2xl font-bold text-white md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              模式四：专业成熟企业管理实践经验赋能伙伴搭建行业专属研发团队
            </h2>
            <p
              className="max-w-4xl text-center text-base leading-[21px] text-white/75"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              基于成熟的企业管理体系与实践经验，系统输出团队建设、项目管理、交付体系、人才培养及安全管理等能力，支持客户构建规范化、专业化可持续发展的研发与交付团队，实现管理能力与技术建设协同提升。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {mode4Cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col border border-white/20"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-40 w-full object-cover"
                />
                <div className="flex flex-col gap-6 p-4">
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-base leading-[26px] text-white/80"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode 5 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-center text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              模式五：资本层面互信股改，强强联合/优势互补打造领域独角兽企业
            </h2>
            <p
              className="max-w-4xl text-center text-base leading-[21px] text-[#0A0A0A]/75"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              智成时空具备自主可控的核心技术体系与规范化管理基础，股权结构清晰，无历史经营负担。公司已获得多地央国企及产业资本关注，并表达合作意向在不干预日常经营的前提下，开放资本合作，欢迎具备产业资源与战略协同能力的合作伙伴开展深度合作，共同推动长期价值发展。
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row">
            {/* 智成拥有 */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-center bg-[#3D7BF2] py-3">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  智成拥有
                </span>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="grid grid-cols-2 gap-4">
                  {zcItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center border border-[#3E4757]/20 py-4"
                    >
                      <span
                        className="text-base font-medium text-black"
                        style={{ fontFamily: "OPPOSans, sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 伙伴拥有 */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-center bg-[#042236] py-3">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  伙伴拥有
                </span>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="grid grid-cols-2 gap-4">
                  {partnerItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center border border-[#3E4757]/20 py-4"
                    >
                      <span
                        className="text-base font-medium text-black"
                        style={{ fontFamily: "OPPOSans, sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
