"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  link?: string;
  mediaUrl?: string;
  createdAt: string;
}

export default function BlogFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-bg text-text pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-outfit text-accent mb-4">Blog & Thoughts</h1>
          <p className="text-text-light text-lg">A living archive of ideas, experiments, and expressions.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage"></div>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-text-light italic">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-white rounded-3xl shadow-sm border border-blush border-opacity-30 hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-outfit mb-2">{post.title}</h2>
                <time className="text-sm text-sage font-medium block mb-6">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <div className="prose prose-sage max-w-none text-text">
                  <p className="whitespace-pre-wrap">{post.content}</p>
                </div>
                {post.mediaUrl && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                    {post.mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={post.mediaUrl} controls className="w-full h-auto" />
                    ) : (
                      <img src={post.mediaUrl} alt="Blog Media" className="w-full h-auto object-cover" />
                    )}
                  </div>
                )}
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-accent hover:text-sage font-semibold transition-colors"
                  >
                    Read More / Visit Link <ExternalLink size={16} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
