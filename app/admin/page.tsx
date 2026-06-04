"use client";

import { useState } from "react";
import { LogOut, PlusCircle, Link as LinkIcon, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"blog" | "link">("blog");
  
  // Blog State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [blogStatus, setBlogStatus] = useState("");

  // Link State
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkStatus, setLinkStatus] = useState("");

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogStatus("Saving...");
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, link, mediaUrl }),
    });
    if (res.ok) {
      setBlogStatus("Saved successfully!");
      setTitle(""); setContent(""); setLink(""); setMediaUrl("");
      setTimeout(() => setBlogStatus(""), 3000);
    } else {
      setBlogStatus("Error saving blog.");
    }
  };

  const handleLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLinkStatus("Saving...");
    const res = await fetch("/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: linkTitle, url: linkUrl }),
    });
    if (res.ok) {
      setLinkStatus("Saved successfully!");
      setLinkTitle(""); setLinkUrl("");
      setTimeout(() => setLinkStatus(""), 3000);
    } else {
      setLinkStatus("Error saving link.");
    }
  };

  return (
    <main className="min-h-screen bg-bg text-text p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-outfit text-sage">Admin Dashboard</h1>
          <button 
            onClick={() => {
              document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              router.push("/login");
            }}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
          >
            <LogOut size={18} /> Logout
          </button>
        </header>

        <div className="flex gap-4 mb-8 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab("blog")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${activeTab === "blog" ? "bg-sage text-white" : "bg-white text-text-light hover:bg-gray-50"}`}
          >
            <PlusCircle size={20} /> Add Blog Post
          </button>
          <button
            onClick={() => setActiveTab("link")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${activeTab === "link" ? "bg-accent text-white" : "bg-white text-text-light hover:bg-gray-50"}`}
          >
            <LinkIcon size={20} /> Add Link Hub Item
          </button>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage border-opacity-20">
          {activeTab === "blog" && (
            <form onSubmit={handleBlogSubmit} className="space-y-6">
              <h2 className="text-2xl font-outfit mb-6">Create New Blog Post</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content (Max 3000 chars)</label>
                <textarea required maxLength={3000} rows={10} value={content} onChange={e => setContent(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 resize-none" />
                <p className="text-xs text-text-light text-right mt-1">{content.length} / 3000</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">External Link (Optional)</label>
                <input type="url" value={link} onChange={e => setLink(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Media URL (Image/Video Link - Optional)</label>
                <input type="url" value={mediaUrl} onChange={e => setMediaUrl(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="https://example.com/image.jpg" />
              </div>
              <button type="submit" className="px-8 py-3 bg-sage text-white rounded-xl font-semibold">Publish Post</button>
              {blogStatus && <span className="ml-4 text-sage font-medium">{blogStatus}</span>}
            </form>
          )}

          {activeTab === "link" && (
            <form onSubmit={handleLinkSubmit} className="space-y-6">
              <h2 className="text-2xl font-outfit mb-6">Add Link to Hub</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Link Title</label>
                <input required type="text" value={linkTitle} onChange={e => setLinkTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL</label>
                <input required type="url" value={linkUrl} onChange={e => setLinkUrl(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <button type="submit" className="px-8 py-3 bg-accent text-white rounded-xl font-semibold">Add Link</button>
              {linkStatus && <span className="ml-4 text-accent font-medium">{linkStatus}</span>}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
