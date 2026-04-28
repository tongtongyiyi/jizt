"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  summary: string | null;
  content: string;
  cover: string | null;
  isActive: boolean;
  createdAt: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({ title: "", summary: "", content: "", cover: "", isActive: true });

  async function load() {
    const res = await fetch("/api/news");
    const json = await res.json();
    setNews(json.data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function startEdit(item: NewsItem) {
    setEditing(item);
    setForm({ title: item.title, summary: item.summary || "", content: item.content, cover: item.cover || "", isActive: item.isActive });
  }

  function startCreate() {
    setEditing({ id: 0, title: "", summary: "", content: "", cover: "", isActive: true, createdAt: "" });
    setForm({ title: "", summary: "", content: "", cover: "", isActive: true });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editing && editing.id > 0 ? `/api/news/${editing.id}` : "/api/news";
    const method = editing && editing.id > 0 ? "PUT" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (res.ok) { setEditing(null); load(); }
  }

  async function handleDelete(id: number) {
    if (!confirm("确定删除此新闻？")) return;
    await fetch(`/api/news/${id}`, { method: "DELETE" });
    load();
  }

  if (loading) return <p>加载中...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">新闻管理</h1>
        <button onClick={startCreate} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={16} /> 新增新闻
        </button>
      </div>

      {editing && (
        <form onSubmit={handleSubmit} className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{editing.id > 0 ? "编辑新闻" : "新增新闻"}</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">标题</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">摘要</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">封面URL</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value={form.cover} onChange={e => setForm({ ...form, cover: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">内容</label>
              <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" rows={6} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="nActive" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} />
              <label htmlFor="nActive" className="text-sm text-gray-700">发布</label>
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
              <th className="px-4 py-3 text-left font-medium">状态</th>
              <th className="px-4 py-3 text-right font-medium">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {news.map(n => (
              <tr key={n.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500">{n.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{n.title}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${n.isActive ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {n.isActive ? "已发布" : "草稿"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => startEdit(n)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-600"><Pencil size={16} /></button>
                    <button onClick={() => handleDelete(n.id)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {news.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">暂无新闻</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
