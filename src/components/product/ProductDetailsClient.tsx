"use client";

import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductDetailsClient({ product }: Props) {
  return (
    <main className="bg-gray-50 p-4">
      <section className="max-w-7xl mx-auto md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image
            src={product.image || "/no-image.png"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1 className="text-3xl text-black md:text-4xl font-bold mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-sm text-gray-500">{product.brand}</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                {product.category}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <p className="text-yellow-500 text-lg">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </p>
              <span className="text-gray-400 text-sm ml-2">
                ({product.rating})
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          <div>
            {product.stock > 0 ? (
              <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-center">
                Add to Cart
              </button>
            ) : (
              <span className="text-red-500 font-medium text-lg">
                Out of stock
              </span>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
