export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">关于智成</h1>
        <p className="mt-4 text-gray-600">创新驱动，科技赋能</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">公司简介</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            智成科技成立于2010年，是一家专注于企业数字化转型的技术服务公司。
            我们致力于为客户提供领先的软件解决方案和技术咨询服务，帮助企业在数字经济时代保持竞争力。
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            多年来，我们服务了超过500家企业客户，涵盖政府、金融、制造、教育等多个行业领域。
            我们的使命是通过技术创新，为客户创造持续价值。
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-8">
          <h2 className="text-xl font-semibold text-gray-900">发展历程</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-4">
              <span className="font-bold text-blue-600">2010</span>
              <span className="text-gray-600">公司成立，开启技术服务之旅</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600">2015</span>
              <span className="text-gray-600">服务客户突破100家，业务覆盖全国</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600">2018</span>
              <span className="text-gray-600">获得高新技术企业认证</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600">2023</span>
              <span className="text-gray-600">推出新一代智能平台，开启AI时代</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-gray-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-gray-900">联系我们</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">电话</p>
            <p className="font-medium text-gray-900">400-888-8888</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">邮箱</p>
            <p className="font-medium text-gray-900">contact@zhicheng.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">地址</p>
            <p className="font-medium text-gray-900">北京市朝阳区xxx大厦</p>
          </div>
        </div>
      </div>
    </div>
  );
}
