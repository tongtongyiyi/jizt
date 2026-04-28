import { prisma } from "@/lib/prisma";

export default async function NewsPage() {
  const newsList = await prisma.news.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">新闻动态</h1>
        <p className="mt-4 text-gray-600">了解智成科技的最新动态与行业资讯</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsList.length > 0 ? (
          newsList.map((news) => (
            <article
              key={news.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <time className="text-xs text-gray-400">
                {news.createdAt.toLocaleDateString("zh-CN")}
              </time>
              <h2 className="mt-2 text-lg font-semibold text-gray-900">
                {news.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {news.summary || news.content.slice(0, 100) + "..."}
              </p>
            </article>
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center text-gray-500">
            暂无新闻数据，请登录后台添加
          </div>
        )}
      </div>
    </div>
  );
}
