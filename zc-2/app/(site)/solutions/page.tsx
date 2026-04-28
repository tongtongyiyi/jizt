export default function SolutionsPage() {
  const solutions = [
    {
      title: "智慧城市",
      desc: "基于大数据和人工智能的城市治理解决方案，提升城市管理效率。",
    },
    {
      title: "工业互联网",
      desc: "连接设备、数据与人，助力制造业数字化转型。",
    },
    {
      title: "数字政务",
      desc: "安全高效的政务服务平台，让数据多跑路，群众少跑腿。",
    },
    {
      title: "金融科技",
      desc: "智能风控与数据分析，为金融行业提供技术支撑。",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">解决方案</h1>
        <p className="mt-4 text-gray-600">深耕行业场景，提供定制化解决方案</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {solutions.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
