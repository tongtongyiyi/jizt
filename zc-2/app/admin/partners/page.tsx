"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  logo: string | null;
  url: string | null;
  sortOrder: number;
  isActive: boolean;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partner | null>(null);
  const [form, setForm] = useState({ name: "", logo: "", url: "", sortOrder: 0, isActive: true });

  async function load() {
    const res = await fetch("/api/partners");
    const json = await res.json();
    setPartners(json.data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function startEdit(partner: Partner) {
    setEditing(partner);
    setForm({
      name: partner.name,
      logo: partner.logo || "",
      url: partner.url || "",
      sortOrder: partner.sortOrder,
      isActive: partner.isActive,
    });
  }

  function startCreate() {
    setEditing({ id: 0, name: "", logo: "", url: "", sortOrder: 0, isActive: true });
    setForm({ name: "", logo: "", url: "", sortOrder: 0, isActive: true });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editing && editing.id > 0 ? `/api/partners/${editing.id}` : "/api/partners";
    const method = editing && editing.id > 0 ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setEditing(null);
      load();
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("确定删除此合作伙伴？")) return;
    await fetch(`/api/partners/${id}`, { method: "DELETE" });
    load();
  }

  if (loading) return <p>加载中...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">合作伙伴管理</h1>
        <button onClick={startCreate} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={16} /> 新增伙伴
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSubmit} className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{editing.id > 0 ? "编辑伙伴" : "新增伙伴"}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">名称</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">排序</label>
              <input type="number" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Logo URL</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.logo} onChange={e => setForm({ ...form, logo: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">官网链接</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} placeholder="https://..." />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} />
              <label htmlFor="isActive" className="text-sm text-gray-700">展示</label>
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
              <th className="px-4 py-3 text-left font-medium">名称</th>
              <th className="px-4 py-3 text-left font-medium">排序</th>
              <th className="px-4 py-3 text-left font-medium">状态</th>
              <th className="px-4 py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {partners.map(p => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500">{p.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                <td className="px-4 py-3 text-gray-500">{p.sortOrder}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${p.isActive ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {p.isActive ? "展示" : "隐藏"}
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
            {partners.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">暂无合作伙伴</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
