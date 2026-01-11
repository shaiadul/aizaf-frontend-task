"use client";

import { Category } from "@/lib/types";
import { useState } from "react";

interface Props {
  categories: Category[];
  defaultSearch?: string;
  defaultCategory?: string;
  defaultSort?: string;
}

export default function ProductFilters({
  categories,
  defaultSearch = "",
  defaultCategory = "",
  defaultSort = "",
}: Props) {
  const [search, setSearch] = useState(defaultSearch);
  const [category, setCategory] = useState(defaultCategory);
  const [sort, setSort] = useState(defaultSort);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 max-w-7xl mx-auto">
      <form className="flex w-full md:w-1/3" method="GET">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition"
        >
          Search
        </button>
      </form>

      <form method="GET">
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </form>

      <form method="GET">
        <select
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
          <option value="rating-asc">Rating: Low to High</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </form>
    </div>
  );
}
