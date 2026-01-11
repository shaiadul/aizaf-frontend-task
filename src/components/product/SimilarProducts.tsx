"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function SimilarProducts({ products }: Props) {
  if (!products || products.length === 0) return null;

  return (
    <main className="bg-amber-50 px-4">
      <section className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">
          Similar Products
        </h2>

        <div
          className=" grid gap-6
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4"
        >
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
