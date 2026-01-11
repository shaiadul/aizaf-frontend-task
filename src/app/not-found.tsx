"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed or the URL is
          incorrect.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium
                     hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
