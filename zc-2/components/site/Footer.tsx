import Link from "next/link";

const quickLinks = [
  { label: "首页", href: "/" },
  { label: "公司简介", href: "/about" },
  { label: "荣誉资质", href: "/about" },
  { label: "企业文化", href: "/about" },
  { label: "发展历程", href: "/about" },
  { label: "团队风采", href: "/team" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#151B26] text-[#C9D8FF]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <img src="/images/Frame0.png" alt="" className="mt-0.5 h-3.5 w-3.5" />
              <div>
                <p className="text-sm text-white/85">地址</p>
                <p className="mt-1 text-xs text-white/70">
                  西咸新区沣东自贸产业园项目二期一号楼402室/西安市高新区锦业路69号瞪羚谷F401室
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img src="/images/Frame2.png" alt="" className="mt-0.5 h-3.5 w-3.5" />
              <div>
                <p className="text-sm text-white/85">官网</p>
                <p className="mt-1 text-xs text-white/70">http://www.scenemap.com.cn</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img src="/images/Group34069.png" alt="" className="mt-0.5 h-3.5 w-3.5" />
              <div>
                <p className="text-sm text-white/85">邮箱</p>
                <p className="mt-1 text-xs text-white/70">support@scenemap.cn</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img src="/images/Frame1.png" alt="" className="mt-0.5 h-3.5 w-3.5" />
              <div>
                <p className="text-sm text-white/85">联系电话</p>
                <p className="mt-1 text-xs text-white/70">029-88228108 / 029-81120181</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">快捷入口</h4>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#C9D8FF]/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-white">关注我们</h4>
            <div className="mt-4 flex gap-6">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="/images/f04974b5cafb56f89a664f666ab43843ce4dda17.png"
                  alt="智成时空微信号"
                  className="h-24 w-24 rounded"
                />
                <span className="text-xs text-white/70">智成时空微信号</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img
                  src="/images/f04974b5cafb56f89a664f666ab43843ce4dda17.png"
                  alt="智成时空企业宣传册"
                  className="h-24 w-24 rounded"
                />
                <span className="text-xs text-white/70">智成时空企业宣传册</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-[#C9D8FF]/50 md:flex-row md:px-6">
        <p>陕ICP备2025067789号 / 陕ICP备2025067759号-1</p>
        <p>Copyright ⓸ {year} 智成时空(西安)创新科技有限公司版权所有</p>
      </div>
    </footer>
  );
}
