"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("/");

  const menuData = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/product",
      name: "Product",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white border-b"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight"
          >
            Alzaf<span className="text-gray-400">Store</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuData.map((cat, idx) => {
              const isActive = activeCategory === cat.link;

              return (
                <Link
                  key={idx}
                  href={`${cat.link}`}
                  onClick={() => setActiveCategory(cat.link)}
                  className={`relative text-sm font-medium transition-colors
                    ${
                      isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }
                  `}
                >
                  {cat.name}

                  <motion.span
                    layout
                    className="absolute left-0 -bottom-1 h-0.5 bg-black"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden text-gray-500 text-sm font-medium border border-gray-400 px-3 py-1 rounded"
            aria-label="Toggle Menu"
          >
            Menu
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {menuData.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`${cat.link}`}
                    onClick={() => {
                      setOpen(false);
                      setActiveCategory(cat.link);
                    }}
                    className="block text-sm font-medium text-gray-700 hover:text-black"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
