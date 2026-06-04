"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube, FaAmazon } from "react-icons/fa";
import TiltCard from "@/components/TiltCard";

interface LinkHubItem {
  id: string;
  title: string;
  url: string;
  order: number;
}

export default function LinksFeed() {
  const [links, setLinks] = useState<LinkHubItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/links")
      .then((res) => res.json())
      .then((data) => {
        setLinks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const staticLinks = [
    { title: "Indradhanush Book", url: "https://amzn.in/d/01wKZVNW", icon: <FaAmazon /> },
    { title: "Nakshatra Book", url: "https://amzn.in/d/03MZ0oWk", icon: <FaAmazon /> },
    { title: "YouTube", url: "https://youtu.be/8QYv4wUdGdU?si=fCIb3yK3yk9WhJy0", icon: <FaYoutube /> },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/shreyul-kankariya-8aa746330?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <FaLinkedin /> },
    { title: "Instagram", url: "https://www.instagram.com/yuuuiiiiii08?igsh=dG03a2djNnZ6dzRq", icon: <FaInstagram /> },
  ];

  return (
    <main className="min-h-screen bg-bg text-text pt-32 pb-20 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background Image for Links Page */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/images/shreyul_cool.png" 
          alt="Links Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-32 h-32 glory-outline rounded-full mb-6 relative"
        >
          <img 
            src="/images/profile_new.jpg" 
            alt="Shreyul Kankariya" 
            className="w-full h-full object-cover rounded-full shadow-xl relative z-10 border-4 border-white"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-outfit text-sage mb-2">Shreyul Kankariya</h1>
          <p className="text-text-light font-medium tracking-widest uppercase text-sm">Author • Poet • Creator</p>
        </motion.div>

        <div className="space-y-4 w-full pt-8">
          {/* Static Important Links */}
          {staticLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full p-5 bg-white rounded-2xl shadow-sm border border-blush border-opacity-30 hover:shadow-md hover:border-accent transition-all text-center font-semibold flex items-center justify-between px-8 text-lg"
            >
              <div className="flex items-center gap-3 text-sage">
                {link.icon}
                <span className="text-text">{link.title}</span>
              </div>
              <ExternalLink size={18} className="text-text-light" />
            </motion.a>
          ))}

          {/* Divider if there are dynamic links */}
          {!loading && links.length > 0 && (
            <div className="w-full h-px bg-gray-200 my-8"></div>
          )}

          {/* Dynamic Links from DB */}
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sage"></div>
            </div>
          ) : (
            links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (staticLinks.length + index) * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full p-5 bg-white rounded-2xl shadow-sm border border-sage border-opacity-30 hover:bg-sage hover:text-white transition-all text-center font-semibold flex items-center justify-between px-8 text-lg group"
              >
                <span>{link.title}</span>
                <ExternalLink size={18} className="group-hover:text-white text-sage" />
              </motion.a>
            ))
          )}
        </div>

      </div>
    </main>
  );
}
