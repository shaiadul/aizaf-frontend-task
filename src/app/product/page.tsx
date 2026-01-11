// import { fetchProducts, fetchCategories } from "@/lib/api";
// import ProductCard from "@/components/product/ProductCard";
// import { Category, Product, SearchParams } from "@/lib/types";
// import Link from "next/link";

// interface Props {
//   searchParams?: SearchParams;
// }

// export default async function ProductPage({ searchParams }: Props) {
//   const paramsObj = await searchParams;

//   const params = {
//     page: paramsObj?.page || "1",
//     limit: paramsObj?.limit || "8",
//     search: paramsObj?.search || "",
//     category: paramsObj?.category || "",
//     minPrice: paramsObj?.minPrice || "",
//     maxPrice: paramsObj?.maxPrice || "",
//     sort: paramsObj?.sort || "",
//   };

//   const [categoriesRes, productsRes] = await Promise.all([
//     fetchCategories(),
//     fetchProducts(params),
//   ]);

//   const categories: Category[] = categoriesRes.data.categories || [];
//   const products: Product[] = productsRes.data.products || [];
//   const totalPages: number = productsRes.data.totalPages || 1;
//   const currentPage = Number(params.page);

//   return (
//     <main className="bg-gray-50 text-gray-900 min-h-screen py-12 px-4">
    
//       <section className="max-w-7xl mx-auto mb-10">
//         <form
//           method="GET"
//           className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
//         >
//           <h2 className="text-2xl font-semibold text-gray-800">Products</h2>

//           <input
//             type="text"
//             name="search"
//             defaultValue={params.search}
//             placeholder="Search products..."
//             className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-0"
//           />

//           <select
//             name="category"
//             defaultValue={params.category}
//             className="px-4 py-2 rounded-lg focus:outline-none focus:ring-0"
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat) => (
//               <option key={cat.id} value={cat.slug}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>

//           <select
//             name="sort"
//             defaultValue={params.sort}
//             className="px-4 py-2 rounded-lg focus:outline-none focus:ring-0"
//           >
//             <option value="">Sort By</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="name-asc">Name: A-Z</option>
//             <option value="name-desc">Name: Z-A</option>
//             <option value="rating-asc">Rating: Low to High</option>
//             <option value="rating-desc">Rating: High to Low</option>
//           </select>

//           <button
//             type="submit"
//             className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
//           >
//             Search
//           </button>
//         </form>
//       </section>

//       <section className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-500 text-lg mt-16">
//             No products found.
//           </p>
//         )}
//       </section>

//       {totalPages > 1 && (
//         <section className="max-w-7xl mx-auto mt-12 flex justify-center gap-3 flex-wrap">
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <Link
//               key={page}
//               href={{
//                 pathname: "/product",
//                 query: { ...params, page: page.toString() },
//               }}
//               className={`px-5 py-2 rounded-md border text-sm font-medium transition-colors duration-200 ${
//                 page === currentPage
//                   ? "bg-black text-white border-black"
//                   : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {page}
//             </Link>
//           ))}
//         </section>
//       )}
//     </main>
//   );
// }


import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";
import { Product, SearchParams } from "@/lib/types";
import Link from "next/link";

interface Props {
  searchParams?: SearchParams;
}

export default async function ProductPage({ searchParams }: Props) {
  const paramsObj = await searchParams;

  const params = {
    page: paramsObj?.page || "1",
    limit: "8",
    search: paramsObj?.search || "",
    category: paramsObj?.category || "",
    minPrice: paramsObj?.minPrice || "",
    maxPrice: paramsObj?.maxPrice || "",
    sort: paramsObj?.sort || "",
  };

  // Fetch products (SSR)
  const productsRes = await fetchProducts(params);

  const products: Product[] = productsRes.data?.products || [];
  const filters = productsRes.data?.filters;
  const categories: string[] = filters?.categories || [];

  // Extract pagination info
  const pagination = productsRes.data?.pagination;
  const totalPages: number = pagination?.totalPages || 1;
  const currentPage = Number(params.page);

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen py-12 px-4">
      {/* Filters */}
      <section className="max-w-7xl mx-auto mb-10">
        <form
          method="GET"
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Products</h2>

          {/* Search */}
          <input
            type="text"
            name="search"
            defaultValue={params.search}
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-0"
          />

          {/* Category */}
          <select
            name="category"
            defaultValue={params.category}
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-0"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            name="sort"
            defaultValue={params.sort}
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-0"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>

   
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Search
          </button>
        </form>
      </section>


      <section className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg mt-16">
            No products found.
          </p>
        )}
      </section>

     
      {totalPages > 1 && (
        <section className="max-w-7xl mx-auto mt-12 flex justify-center gap-3 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={{
                pathname: "/product",
                query: { ...params, page: page.toString() },
              }}
              className={`px-5 py-2 rounded-md border text-sm font-medium transition-colors duration-200 ${
                page === currentPage
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
