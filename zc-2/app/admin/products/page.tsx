"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string | null;
  features: string | null;
  sortOrder: number;
  isActive: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ title: "", description: "", image: "", features: "", sortOrder: 0, isActive: true });

  async function load() {
    const res = await fetch("/api/products");
    const json = await res.json();
    setProducts(json.data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function parseFeatures(features: string | null): string {
    if (!features) return "";
    try {
      const arr = JSON.parse(features);
      if (Array.isArray(arr)) return arr.join("\n");
    } catch {}
    return features;
  }

  function startEdit(product: Product) {
    setEditing(product);
    setForm({
      title: product.title,
      description: product.description,
      image: product.image || "",
      features: parseFeatures(product.features),
      sortOrder: product.sortOrder,
      isActive: product.isActive,
    });
  }

  function startCreate() {
    setEditing({ id: 0, title: "", description: "", image: "", features: "", sortOrder: 0, isActive: true });
    setForm({ title: "", description: "", image: "", features: "", sortOrder: 0, isActive: true });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editing && editing.id > 0 ? `/api/products/${editing.id}` : "/api/products";
    const method = editing && editing.id > 0 ? "PUT" : "POST";

    const featureLines = form.features.split("\n").map(s => s.trim()).filter(Boolean);
    const payload = {
      ...form,
      features: featureLines.length > 0 ? JSON.stringify(featureLines) : null,
    };

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setEditing(null);
      load();
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("确定删除此产品？")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    load();
  }

  if (loading) return <p>加载中...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">产品管理</h1>
        <button onClick={startCreate} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={16} /> 新增产品
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSubmit} className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{editing.id > 0 ? "编辑产品" : "新增产品"}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">标题</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">排序</label>
              <input type="number" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">描述</label>
              <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">功能列表（每行一个）</label>
              <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" rows={4} value={form.features} onChange={e => setForm({ ...form, features: e.target.value })} placeholder="时空数据智能处理软件&#10;时空数据服务发布管理软件&#10;时空智能三维网络端软件" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">图片URL</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} />
              <label htmlFor="isActive" className="text-sm text-gray-700">上架</label>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">保存</button>
            <button type="button" onClick={() => setEditing(null)} className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">取消</button>
          </div>
        </form>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">标题</th>
              <th className="px-4 py-3 text-left font-medium">排序</th>
              <th className="px-4 py-3 text-left font-medium">状态</th>
              <th className="px-4 py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500">{p.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{p.title}</td>
                <td className="px-4 py-3 text-gray-500">{p.sortOrder}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${p.isActive ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {p.isActive ? "上架" : "下架"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => startEdit(p)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-600"><Pencil size={16} /></button>
                    <button onClick={() => handleDelete(p.id)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">暂无产品</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
