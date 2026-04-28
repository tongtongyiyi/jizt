import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">产品中心</h1>
        <p className="mt-4 text-gray-600">为客户提供全方位的技术产品与解决方案</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <span className="text-2xl font-bold">{product.title[0]}</span>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-gray-900">
                {product.title}
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center text-gray-500">
            暂无产品数据，请登录后台添加
          </div>
        )}
      </div>
    </div>
  );
}
