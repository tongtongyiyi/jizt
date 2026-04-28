import { prisma } from "@/lib/prisma";

export default async function SolutionsPage() {
  const solutions = await prisma.solution.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#F2F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1
            className="text-3xl font-bold text-gray-900 md:text-[32px]"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            解决方案
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg"
            style={{ fontFamily: "OPPOSans, sans-serif" }}
          >
            以全量源代码自主可控技术体系为驱动，以时空智能领域全行业需求为导向，为用户提供时空智能领域专业性解决方案
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {solutions.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D5E1FF] text-[#1D60FE] transition-colors group-hover:bg-[#1D60FE] group-hover:text-white">
                    <span className="text-lg font-bold">
                      {solution.title[0]}
                    </span>
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h2>
                  {solution.description && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {solution.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-20 text-center text-gray-500">
              暂无解决方案数据
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
