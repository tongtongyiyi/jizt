export default function ServicePage() {
  const services = [
    {
      title: "技术支持",
      desc: "7×24小时专业技术支持团队，快速响应客户需求。",
    },
    {
      title: "培训服务",
      desc: "提供产品使用培训和技术赋能，帮助客户快速上手。",
    },
    {
      title: "定制开发",
      desc: "根据客户业务场景，提供定制化开发服务。",
    },
    {
      title: "运维保障",
      desc: "专业的运维团队，保障系统稳定运行。",
    },
  ];

  const faqs = [
    { q: "如何联系技术支持？", a: "您可以通过电话 400-888-8888 或邮件 support@zhicheng.com 联系我们。" },
    { q: "是否提供上门服务？", a: "针对企业客户，我们提供上门技术支持和培训服务。" },
    { q: "服务响应时间是多久？", a: "标准服务请求我们将在2小时内响应，紧急问题30分钟内响应。" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">服务中心</h1>
        <p className="mt-4 text-gray-600">全方位的服务支持，让您无后顾之忧</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">常见问题</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
