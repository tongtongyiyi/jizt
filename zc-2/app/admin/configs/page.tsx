"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";

export default function ConfigsPage() {
  const [configs, setConfigs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const fields = [
    { key: "site_title", label: "网站标题", placeholder: "智成科技" },
    { key: "site_description", label: "网站描述", placeholder: "致力于为客户提供专业的技术解决方案" },
    { key: "company_name", label: "公司名称", placeholder: "智成科技有限公司" },
    { key: "contact_phone", label: "联系电话", placeholder: "400-888-8888" },
    { key: "contact_email", label: "联系邮箱", placeholder: "contact@zhicheng.com" },
    { key: "contact_address", label: "公司地址", placeholder: "北京市朝阳区xxx大厦" },
    { key: "hero_title", label: "首页大标题", placeholder: "让创新引领未来" },
    { key: "hero_subtitle", label: "首页副标题", placeholder: "我们致力于为客户提供领先的技术解决方案..." },
  ];

  async function load() {
    const res = await fetch("/api/configs");
    const json = await res.json();
    setConfigs(json.data || {});
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/configs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(configs) });
    setSaving(false);
    if (res.ok) setMessage("保存成功");
    else setMessage("保存失败");
  }

  if (loading) return <p>加载中...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">网站配置</h1>
      <p className="mt-1 text-gray-500">管理网站基本信息和首页内容</p>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-gray-700">{f.label}</label>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder={f.placeholder}
                value={configs[f.key] || ""}
                onChange={e => setConfigs({ ...configs, [f.key]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
            <Save size={16} /> {saving ? "保存中..." : "保存配置"}
          </button>
          {message && <span className={`text-sm ${message.includes("成功") ? "text-green-600" : "text-red-600"}`}>{message}</span>}
        </div>
      </div>
    </div>
  );
}
