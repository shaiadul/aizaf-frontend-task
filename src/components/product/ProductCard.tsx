"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product?.id}`} className="block">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden
                   hover:shadow-xl transition-shadow"
      >
        <div className="relative h-52 bg-linear-to-b from-gray-50 to-gray-100 overflow-hidden">
          <ProductImage src={product.image} alt={product.name} />

          <div
            className="absolute inset-0 bg-black/20 opacity-0
                       group-hover:opacity-100 transition"
          />

          <div
            className="absolute inset-0 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition"
          >
            <span
              className="bg-white text-black text-sm font-medium
                             px-4 py-2 rounded-full shadow"
            >
              View Product
            </span>
          </div>
        </div>

        <div className="p-5 space-y-2">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            {product.brand}
          </p>

          <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 text-sm">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between pt-3">
            <p className="text-xl font-bold text-gray-900">${product.price}</p>

            {product.stock > 0 ? (
              <span className="text-xs font-medium text-green-600">
                In stock
              </span>
            ) : (
              <span className="text-xs font-medium text-red-500">
                Out of stock
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
