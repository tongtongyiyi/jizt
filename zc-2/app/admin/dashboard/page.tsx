"use client";

import { useEffect, useState } from "react";
import { Package, Newspaper, Settings, Eye } from "lucide-react";

interface Stats {
  products: number;
  news: number;
  configs: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ products: 0, news: 0, configs: 0 });

  useEffect(() => {
    async function load() {
      const [pRes, nRes, cRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/news"),
        fetch("/api/configs"),
      ]);
      const p = await pRes.json();
      const n = await nRes.json();
      const c = await cRes.json();
      setStats({
        products: p.data?.length || 0,
        news: n.data?.length || 0,
        configs: Object.keys(c.data || {}).length,
      });
    }
    load();
  }, []);

  const cards = [
    { label: "产品数量", value: stats.products, icon: Package, color: "bg-blue-50 text-blue-600" },
    { label: "新闻数量", value: stats.news, icon: Newspaper, color: "bg-green-50 text-green-600" },
    { label: "配置项", value: stats.configs, icon: Settings, color: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">仪表盘</h1>
      <p className="mt-1 text-gray-500">欢迎回到智成科技后台管理系统</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                <Icon size={20} />
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">快速操作</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/admin/products" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Package size={16} /> 管理产品
          </a>
          <a href="/admin/news" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Newspaper size={16} /> 管理新闻
          </a>
          <a href="/admin/configs" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Settings size={16} /> 网站配置
          </a>
          <a href="/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Eye size={16} /> 查看官网
          </a>
        </div>
      </div>
    </div>
  );
}
