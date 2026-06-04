"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-bg text-text pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-5xl font-outfit text-sage">Let's Connect</h1>
          <p className="text-lg text-text-light">
            Whether you want to work together, ask about my books, or just say hi, my inbox is open.
            If you are reaching out for a collaboration, please make sure to mention all the details about your brand and the collaboration.
          </p>
          
          <div className="space-y-6 pt-4">
            <a href="mailto:Kankariyashreyul@gmail.com" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-blush bg-opacity-30 flex items-center justify-center text-accent">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span>Official Email</span>
                <span className="text-sm text-text-light">Kankariyashreyul@gmail.com</span>
              </div>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-sage transition-colors">
              <div className="w-12 h-12 rounded-full bg-sage bg-opacity-30 flex items-center justify-center text-sage">
                <Phone size={24} />
              </div>
              WhatsApp Business
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 glass p-8 rounded-3xl"
        >

          <h2 className="text-2xl font-outfit mb-6">Send a Message</h2>
          {status === "success" ? (
            <div className="p-6 bg-sage bg-opacity-20 text-sage rounded-2xl text-center">
              <p className="text-xl font-medium">Message sent successfully!</p>
              <p className="mt-2 text-text-light">I'll get back to you soon.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 bg-sage text-white rounded-full text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-light mb-1">Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white bg-opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light mb-1">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white bg-opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white bg-opacity-50 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full py-4 bg-text text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
