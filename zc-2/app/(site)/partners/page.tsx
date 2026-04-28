export default function PartnersPage() {
  const partners = [
    "华为", "阿里云", "腾讯云", "百度智能云",
    "字节跳动", "京东", "美团", "小米"
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">市场合作</h1>
        <p className="mt-4 text-gray-600">携手合作伙伴，共建生态共赢</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {partners.map((name, idx) => (
          <div
            key={idx}
            className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg font-semibold text-gray-700 shadow-sm"
          >
            {name}
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-gray-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-gray-900">成为合作伙伴</h2>
        <p className="mt-2 text-gray-600">
          我们期待与更多优秀的企业建立合作关系，共同开拓市场。如果您有意向合作，请联系我们的商务团队。
        </p>
        <p className="mt-4 text-sm text-gray-500">
          商务合作邮箱：bd@zhicheng.com
        </p>
      </div>
    </div>
  );
}
