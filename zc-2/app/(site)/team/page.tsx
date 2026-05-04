import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getConfig(key: string): Promise<string | null> {
  const config = await prisma.config.findUnique({ where: { key } });
  return config?.value ?? null;
}

const teamCards = [
  {
    icon: "/images/Frame8.png",
    line: "/images/Line101.png",
    title: "精英团队背景",
    desc: "团队成员来自武汉大学、天津大学、西北农林科技大学、西安电子科技大学、中国地质大学、西北大学、长安大学等国内一流985/211院校的本硕毕业生，专业涵盖测绘地理信息、计算机类等相关专业。",
  },
  {
    icon: "/images/Frame7.png",
    line: "/images/Line100.png",
    title: "深厚行业积淀",
    desc: "核心成员拥有10年以上GIS与IT行业从业经验，技术能力覆盖从项目咨询、研发交付到售后运维的全业务链条。",
  },
  {
    icon: "/images/Frame6.png",
    line: "/images/Line10.png",
    title: "自驱创新聚力",
    desc: "团队秉持创新精神，成员使命自驱、主动攻坚，协作高效、凝聚力强，以昂扬战斗力持续创造价值，与公司共成长。",
  },
];

const talentViews = [
  {
    title: "为优秀的人吸引更优秀的队友",
    desc: "优质人才可以从根本上降低业务复杂度与管理难度，优秀的人更愿意与优秀的人为伍",
  },
  {
    title: "拥抱成长鼓励试错",
    desc: "持续成长才能适应变化迎接挑战，敢想敢干的氛围更能催生真正的成果",
  },
  {
    title: "按贡献分蛋糕让实干者拿回报",
    desc: `不拉开差距的分配就是在"劝退能干的人"，在创造更大价值的基础上提供更好的回报`,
  },
];

const expectations = [
  {
    title: "高认知水平",
    desc: "认知的上限决定了人才成长的上限不仅是智商高,更具备直击问题本质的系统思考",
  },
  {
    title: "拥抱成长鼓励试错",
    desc: "自己对做成事业有强大内在动力,不断挑战更高目标,敢于追求卓越而非被动完成工作任务",
  },
  {
    title: "按贡献分蛋糕让实干者拿回报",
    desc: "保持对未知的好奇心与探索欲以空杯心态应对变化,实现个人能力与组织发展的同频成长",
  },
  {
    title: "按贡献分蛋糕让实干者拿回报",
    desc: `不被"分内分外"束缚,敢于突破常规、主动探索在实践中拓展能力边界,创造超出预期的价值`,
  },
  {
    title: "按贡献分蛋糕让实干者拿回报",
    desc: "在压力与挑战中保持定力，秉持长期主义思维，在持续深耕中收获更持久的成果",
  },
];

const benefitLevels = [
  {
    ellipse: "/images/Ellipse31.png",
    icon: "/images/Frame5.png",
    title: "股东层",
    desc1: "核心定位——组织战略决策者、实用践行者",
    desc2: "核心权益——工商股权、决策权、管理权",
  },
  {
    ellipse: "/images/Ellipse30.png",
    icon: "/images/Frame4.png",
    title: "骨干层",
    desc1: "核心定位——业务中坚力量，人才孵化器",
    desc2: "核心权益——分红股权，优先发展机会，差异化福利",
  },
  {
    ellipse: "/images/Ellipse3.png",
    icon: "/images/Frame3.png",
    title: "员工层",
    desc1: "核心定位——未来储备力量，业务具体执行者",
    desc2: "核心权益——竞争力薪酬，成长支持体系，基础福利体系",
  },
];

const jobs = [
  { title: "WebGIS三维开发工程师" },
  { title: "后端（Java）研发工程师" },
  { title: "C++（QT）研发工程师" },
  { title: "软件测试工程师" },
  { title: "GIS软件产品经理" },
  { title: "客户经理" },
  { title: "项目经理" },
  { title: "售前咨询工程师" },
];

export default async function TeamPage() {
  const hrEmail = (await getConfig("team_hr_email")) ?? "hr@scenemap.cn";

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#1D3A5F] md:min-h-[574px]">
        {/* 右侧背景装饰 */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] overflow-hidden md:w-[60%]">
          <img
            src="/images/6d9d7edcc4bda1f7bcce6c25d5b65239d107f27a.png"
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
            src="/images/Rectangle4160.png"
            alt=""
            className="absolute right-[10%] top-[15%] h-[70%] w-auto object-contain opacity-80"
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
            className="absolute bottom-0 right-[5%] h-[85%] w-auto object-contain"
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
            src="/images/779eff89fb98d6254b9eaa07f1db7e017e79cf24.png"
            alt=""
            className="absolute right-[8%] top-[10%] hidden h-28 w-28 rounded-full object-cover md:block"
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
            src="/images/8b7bc2d1d2e9f374970149a3b633146394ec700e.png"
            alt=""
            className="absolute bottom-[15%] left-[10%] hidden h-36 w-28 rounded-br-3xl object-cover md:block"
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
            src="/images/97ce4aab75cb544a51577530cc3dee78811b2237.png"
            alt=""
            className="absolute left-[25%] top-[35%] hidden h-24 w-24 rounded-full object-cover md:block"
            style={{
              maskImage: "url(/images/Rectangle4132.png)",
              WebkitMaskImage: "url(/images/Rectangle4132.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        </div>

        {/* 左侧文字 */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 md:px-6">
          <div className="flex flex-col gap-1 py-20 md:py-0">
            <h1
              className="text-3xl font-bold text-white md:text-[40px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              人才团队
            </h1>
            <p
              className="text-base uppercase text-white/50 md:text-lg"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              TALENT TEAM
            </p>
            <p
              className="mt-6 max-w-[500px] text-sm uppercase leading-[22px] text-white/70"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              智成时空成立至今，秉持自驱创新聚力理念，已组建了具有深厚行业沉淀的精英人才团队，我们以积极开放的人才观欢迎更多志同道合的伙伴，共创时空智能领域事业
            </p>
          </div>
        </div>
      </section>

      {/* 我们的团队 */}
      <section className="relative overflow-hidden bg-white backdrop-blur-[4px]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              我们的团队
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row">
            {teamCards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-1 flex-col items-start gap-8 border border-[#3E4757]/20 bg-white px-6 pt-8 pb-8"
              >
                {/* 顶部蓝色边框 */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#1890FF]" />
                <div className="flex flex-col gap-8">
                  <img src={card.icon} alt="" className="h-12 w-12" />
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-xl font-bold text-black md:text-[20px]"
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

      {/* 我们的人才观 */}
      <section className="border-b border-[#3E4757]/20 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-14 md:flex-row md:px-6 md:py-[72px]">
          <div className="relative w-full md:w-1/2">
            <img
              src="/images/707dddb784ac34415b3e2c1c08113c293601d7ae.png"
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-8 md:w-1/2">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              我们的人才观
            </h2>
            <div className="flex flex-col gap-8">
              {talentViews.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-bold text-black/85 md:text-2xl"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-[26px] text-black/75"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 我们期待这样的你 */}
      <section className="border-b border-[#3E4757]/20 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col-reverse gap-12 px-4 py-14 md:flex-row md:px-6 md:py-[72px]">
          <div className="flex w-full flex-col gap-8 md:w-1/2">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              我们期待这样的你
            </h2>
            <div className="flex flex-col gap-6">
              {expectations.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h3
                    className="text-lg font-bold text-black/85 md:text-xl"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-[22px] text-black/75"
                    style={{ fontFamily: "OPPOSans, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="/images/d06140825a00fd6197255ced40f741e31919160a.png"
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 我们将为你提供 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[56px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-[#0A0A0A] md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              我们将为你提供
            </h2>
            <p
              className="text-center text-base text-[#0A0A0A]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              我们以三级人才金字塔为核心，分层明确定位、差异化匹配权益让每一层人才都能在合适的位置创造价值、获得成长、共享发展成果。
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-12 md:flex-row md:items-start">
            {/* 左侧金字塔图 */}
            <div className="relative w-full md:w-1/2">
              <img
                src="/images/45b4699319415b47ef1a459c8a35ff63b08fdc37.png"
                alt=""
                className="mx-auto h-auto max-h-[500px] w-auto object-contain"
              />
              {/* 金字塔文字叠加 */}
              <p
                className="absolute top-[12%] left-1/2 -translate-x-1/2 text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                股东
              </p>
              <p
                className="absolute top-[38%] left-1/2 -translate-x-1/2 text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                骨干
              </p>
              <p
                className="absolute top-[68%] left-1/2 -translate-x-1/2 text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                员工
              </p>
            </div>

            {/* 右侧三层 */}
            <div className="flex w-full flex-col gap-0 md:w-1/2">
              {benefitLevels.map((level, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 py-6 ${
                    index < benefitLevels.length - 1 ? "border-b border-[#3E4757]/20" : ""
                  }`}
                >
                  <div className="relative h-24 w-24 flex-shrink-0">
                    <img
                      src={level.ellipse}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                    <img
                      src={level.icon}
                      alt=""
                      className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <h3
                      className="text-2xl font-bold text-black"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {level.title}
                    </h3>
                    <p
                      className="text-base text-black/75"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {level.desc1}
                    </p>
                    <p
                      className="text-base text-black/75"
                      style={{ fontFamily: "OPPOSans, sans-serif" }}
                    >
                      {level.desc2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="bg-[#151B26]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-[72px]">
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-white md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              加入我们
            </h2>
            <p
              className="text-base text-white/70"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              简历投递方式：&lt;{hrEmail}&gt;
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-6 border border-[#3E4757]/20 px-4 py-6"
              >
                <h3
                  className="text-center text-lg font-bold text-white md:text-xl"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  {job.title}
                </h3>
                <a
                  href={`mailto:${hrEmail}?subject=应聘${job.title}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  <span>了解详情</span>
                  <img src="/images/swapright.png" alt="" className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={`mailto:${hrEmail}`}
              className="flex h-8 items-center gap-[10px] border border-[#3E4757] px-4 transition-colors hover:border-white hover:text-white"
            >
              <span
                className="text-sm text-white/70"
                style={{ fontFamily: "OPPOSans, sans-serif" }}
              >
                查看更多
              </span>
              <img src="/images/swapright.png" alt="" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
