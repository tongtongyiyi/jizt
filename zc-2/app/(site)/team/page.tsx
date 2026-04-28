export default function TeamPage() {
  const teams = [
    { name: "张三", role: "创始人 & CEO", desc: "20年科技行业经验" },
    { name: "李四", role: "技术总监", desc: "前头部互联网公司架构师" },
    { name: "王五", role: "产品总监", desc: "深耕B端产品10年" },
    { name: "赵六", role: "市场总监", desc: "丰富的企业级市场拓展经验" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">人才团队</h1>
        <p className="mt-4 text-gray-600">汇聚行业精英，共创卓越未来</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teams.map((member, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl font-bold">
              {member.name[0]}
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-blue-600">{member.role}</p>
            <p className="mt-2 text-sm text-gray-500">{member.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-blue-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900">加入我们</h2>
        <p className="mt-2 text-gray-600">
          我们正在寻找优秀的人才，与我们一起创造未来
        </p>
        <p className="mt-4 text-sm text-gray-500">
          请将简历发送至：hr@zhicheng.com
        </p>
      </div>
    </div>
  );
}
