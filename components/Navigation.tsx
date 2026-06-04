"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/links", label: "Links" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-bg bg-opacity-90 backdrop-blur-md border-b border-blush border-opacity-30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-outfit font-bold text-sage">
            SK.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-text-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-bg p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-text p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12 items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-outfit font-semibold ${
                    pathname === link.href ? "text-accent" : "text-text-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
