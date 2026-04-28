import Link from "next/link";
import { prisma } from "@/lib/prisma";

// 产品样式硬编码（按顺序索引匹配）——图标、颜色、背景固定
const productStyles = [
  {
    topImage: "/images/Group340871.png",
    lineImage: "/images/Line91.png",
    topBg: "bg-[#D5E1FF]",
    titleColor: "text-[#1D60FE]",
    descColor: "text-[#6379AC]",
    featureIcons: [
      "/images/internet.png",
      "/images/backtoprectangle.png",
      "/images/controlplatform.png",
    ],
  },
  {
    topImage: "/images/Group340870.png",
    lineImage: "/images/Line90.png",
    topBg: "bg-[#D5E1FF]",
    titleColor: "text-[#1D60FE]",
    descColor: "text-[#6379AC]",
    featureIcons: [
      "/images/systemcomponents.png",
      "/images/system3.png",
      "/images/setting.png",
      "/images/support.png",
      "/images/secured.png",
      "/images/fingerprint.png",
    ],
  },
  {
    topImage: "/images/Group340871.png",
    lineImage: "/images/Line9.png",
    topBg: "bg-[#D5E1FF]",
    titleColor: "text-[#1D60FE]",
    descColor: "text-[#6379AC]",
    featureIcons: [
      "/images/chart.png",
      "/images/city1.png",
      "/images/systemregulation.png",
    ],
  },
];

const defaultStyle = {
  topImage: "",
  lineImage: "",
  topBg: "bg-gray-100",
  titleColor: "text-gray-900",
  descColor: "text-gray-600",
  featureIcons: [] as string[],
};

// 合作伙伴 Logo（5行 x 6列 = 30个）
const partnerLogos = [
  // Row 1
  "/images/6f6a239c402248ad2f7f0bd4b2939f25c2f2ee72.png",
  "/images/3b9aad19a58aee697f3197f98eea20a3984d262b.png",
  "/images/405777d9fee13ad2d821949f322664c2ca587e10.png",
  "/images/55fc09946498e27b794451c5933c5b6d083b662e.png",
  "/images/9813c46fbff3bbcffeab1bfd1745e410dd990390.png",
  "/images/ac6d7b57b5e7e9ad692637a55a28d73db1baa1ba.png",
  // Row 2
  "/images/fb990313fcbdf743b288d0a9adafca440a8723a8.png",
  "/images/9f8e95128f54f57c61d6124df78099369ee2389b.png",
  "/images/e1e477dabe78fcb3512b03d559f588a3046e7d9e.png",
  "/images/872bcad6ab7968d2cb278e94b94b0c5f40391bc9.png",
  "/images/69a359b822a174b428f4c4f419961b6a6eed57fb.png",
  "/images/f8b8fb2bcdf9ececa6815a3c2db726790fbd7d47.png",
  // Row 3
  "/images/47aea0c1de827b63837382ae3905477f9d91e3af.png",
  "/images/71258c898aaa89ebb2f4fe435efe827eaf4b59a9.png",
  "/images/80937045004f4d6a07478d0c7952421fef12a879.png",
  "/images/7e319edccf75d3d1b1a5e5070ee657faf98978b7.png",
  "/images/7072b343fcd8dc8febcde37de7b8c2799d19a497.png",
  "/images/f8ed277716c6855f35df60204bf322917c0f3007.png",
  // Row 4
  "/images/8f5d4eabbd4e2d7c28b069587bcb56973d56ba52.png",
  "/images/a0cbb52c0fb718ee5873d7495ab36559ffe1fb38.png",
  "/images/af53a3718d910ad4c716178e8d8aad9c024f8699.png",
  "/images/5fe81e054fc8b89a8656d155cad19ddbd24cc8ff.png",
  "/images/82cf8d1b6bf0c0740bb9d35f3dc63b7db5ce3886.png",
  "/images/f33b93a4ee81836340a1082b9b36a6ec639ff8ec.png",
  // Row 5
  "/images/b539cab74f19a2d38624ef0bf925c9f493e88c9b.png",
  "/images/c88f63e66992a675785987e158d47f4d4bf8f63f.png",
  "/images/231df70fd31ad99a14e5f9da635b9732e18e3f30.png",
  "/images/be7f2fb19d65b56762148732350ba4356b8eef46.png",
  "/images/9cd898d0c627dd83de7fbd70cdc41d1e01fbe303.png",
  "/images/8fdb6390062905e85190a0e19d3f2d815446efb9.png",
];

export default async function HomePage() {
  const solutions = await prisma.solution.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  const dbProducts = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-[#121212] md:min-h-[576px]">
        <div className="absolute inset-0">
          <img
            src="/images/c9c781747063d6d5e7556dbadba96d8fa372d62f.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-28 text-center md:px-6 md:py-36">
          <h1
            className="text-3xl font-bold leading-tight tracking-widest text-white md:text-5xl lg:text-[56px]"
            style={{ fontFamily: "OPPOSans, sans-serif", letterSpacing: "0.1em" }}
          >
            时空智能技术·创新用户价值
          </h1>
          <p
            className="text-base text-white/85 md:text-lg lg:text-[22px]"
            style={{ fontFamily: "OPPOSans, sans-serif", letterSpacing: "0.1em" }}
          >
            做用户最值得信赖的时空智能产品与技术服务商
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#3D7BF2] px-6 py-2 text-sm text-white transition-colors hover:bg-[#3570E0]"
          >
            了解更多
            <img src="/images/Frame16.png" alt="" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 产品中心 */}
      <section className="bg-[#F2F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2
            className="text-center text-3xl font-bold text-gray-900 md:text-[32px]"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            产品中心
          </h2>
          <div className="mt-12 flex flex-col gap-6 lg:flex-row">
            {dbProducts.length > 0 ? (
              dbProducts.map((product, idx) => {
                const style = productStyles[idx] || defaultStyle;
                let featureTexts: string[] = [];
                try {
                  if (product.features) featureTexts = JSON.parse(product.features);
                } catch {}

                return (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-[10px] bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${product.title === "时空数据智能中台" ? "lg:flex-[2]" : "lg:flex-1"}`}
                  >
                    {/* Top area: title + description + decoration image */}
                    <div
                      className={`relative h-[143px] overflow-hidden rounded-t-[10px] rounded-br-[20px] transition-colors duration-300 group-hover:bg-[#2B6AFF] ${style.topBg}`}
                    >
                      {style.topImage && (
                        <img
                          src={style.topImage}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      <div className="relative z-10 px-[30px] py-[33px]">
                        <h3
                          className={`text-2xl font-bold transition-colors duration-300 group-hover:text-white ${style.titleColor}`}
                          style={{ fontFamily: "OPPOSans, sans-serif" }}
                        >
                          {product.title}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#C9D8FF] ${style.descColor}`}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom white area: features + divider + link */}
                    <div className="relative px-5 pb-6">
                      {/* Features */}
                      <div
                        className={`mt-6 ${
                          featureTexts.length > 4
                            ? "grid grid-cols-2 gap-2"
                            : "flex flex-col gap-2"
                        }`}
                      >
                        {featureTexts.map((text, fidx) => {
                          const icon = style.featureIcons[fidx] || "";
                          return (
                            <Link
                              key={fidx}
                              href="/products"
                              className="flex h-12 items-center gap-2.5 rounded-full px-2.5 text-base font-medium text-[#3E4757] transition-all duration-200 hover:bg-[#3D7BF2] hover:text-white"
                            >
                              {icon && (
                                <img
                                  src={icon}
                                  alt=""
                                  className="h-4 w-4 flex-shrink-0"
                                />
                              )}
                              <span className="whitespace-nowrap">
                                {text}
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Divider line */}
                      {style.lineImage && (
                        <div className="mt-4">
                          <img
                            src={style.lineImage}
                            alt=""
                            className="h-px w-full"
                          />
                        </div>
                      )}

                      {/* 了解详情 */}
                      <Link
                        href="/products"
                        className="mt-5 flex items-center gap-5 text-sm text-black transition-colors hover:text-[#1D60FE]"
                      >
                        了解详情
                        <img
                          src="/images/chevronright.png"
                          alt=""
                          className="h-4 w-4"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full rounded-[10px] border border-dashed border-gray-300 bg-white py-16 text-center text-gray-500">
                暂无产品数据，请登录后台添加
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section className="relative overflow-hidden bg-[#010A37] py-16 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-3xl -translate-x-1/2">
          <img
            src="/images/5c2475773bad57599eeb951c48cb59a8f2df8d48.png"
            alt=""
            className="w-full opacity-40"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center gap-6 text-center">
            <h2
              className="text-3xl font-bold text-white md:text-[32px]"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              解决方案
            </h2>
            <p
              className="max-w-3xl text-base text-[#9DA3C2] md:text-lg"
              style={{ fontFamily: "OPPOSans, sans-serif" }}
            >
              以全量源代码自主可控技术体系为驱动，以时空智能领域全行业需求为导向，为用户提供时空智能领域专业性解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.length > 0 ? (
              solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="flex h-[88px] items-center justify-center rounded-md border border-white/20 bg-[#454E6E]/80 px-4 text-center text-base text-white transition-colors hover:bg-[#454E6E]"
                  style={{ fontFamily: "OPPOSans, sans-serif" }}
                >
                  {solution.title}
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-md border border-dashed border-white/20 py-12 text-center text-white/50">
                暂无解决方案数据
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 合作伙伴与服务用户 */}
      <section className="bg-[#F2F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2
            className="text-center text-3xl font-bold text-gray-900 md:text-[32px]"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            合作伙伴与服务用户
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex h-16 items-center justify-center rounded bg-white px-4 shadow-sm"
              >
                <img src={logo} alt="" className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
