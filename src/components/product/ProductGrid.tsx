"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products?.length) {
    return (
      <div className="py-20 text-center text-gray-500">No products found.</div>
    );
  }

  return (
    <main className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-10 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
