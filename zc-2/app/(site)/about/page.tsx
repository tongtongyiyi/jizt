import { prisma } from "@/lib/prisma";

export default async function AboutPage() {
  const configs = await prisma.config.findMany();
  const configMap = Object.fromEntries(configs.map((c) => [c.key, c.value]));

  const companyName = configMap.company_name || "智成时空";
  const siteDesc = configMap.site_description || "致力于为客户提供专业的技术解决方案";
  const phone = configMap.contact_phone || "029-88228108";
  const email = configMap.contact_email || "support@scenemap.cn";
  const address = configMap.contact_address || "西安市高新区锦业路69号瞪羚谷F401室";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#F2F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1
            className="text-3xl font-bold text-gray-900 md:text-[32px]"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            关于{companyName.replace("科技", "").replace("有限公司", "").replace("有限", "")}
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            {siteDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">公司简介</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {companyName}是一家专注于时空智能领域的技术创新企业。
                我们致力于为客户提供领先的时空智能产品与技术解决方案，
                帮助用户在数字经济时代实现时空数据的价值最大化。
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                公司以全量源代码自主可控技术体系为核心驱动力，
                深耕时空智能领域，为政府、企业提供从数据采集、治理、管理到应用的全链路服务。
              </p>
            </div>

            <div className="rounded-xl bg-[#F2F6FA] p-8">
              <h2 className="text-xl font-semibold text-gray-900">发展历程</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-[#1D60FE]">2018</span>
                  <span className="text-gray-600">公司成立，专注时空智能技术研发</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#1D60FE]">2020</span>
                  <span className="text-gray-600">核心产品矩阵初步形成，服务多个行业头部客户</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#1D60FE]">2022</span>
                  <span className="text-gray-600">时空数据智能中台正式发布，技术体系全面升级</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#1D60FE]">2024</span>
                  <span className="text-gray-600">业务覆盖数字孪生水利、数字交通、数字能源等多个领域</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">联系我们</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">电话</p>
                <p className="mt-1 font-medium text-gray-900">{phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">邮箱</p>
                <p className="mt-1 font-medium text-gray-900">{email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">地址</p>
                <p className="mt-1 font-medium text-gray-900">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
