const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchProducts(params?: Record<string, string>) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// export async function fetchProducts(params?: Record<string, string>) {
//   const query = new URLSearchParams(params).toString();

//   const res = await fetch(`${BASE_URL}/products?${query}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();
// }

export async function fetchProduct(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Product fetch error");
  }

  return res.json();
}

export async function fetchProductById(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { cache: "no-store" });

  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/categories`, {
    cache: "force-cache",
  });

  return res.json();
}

export async function fetchBanners() {
  const res = await fetch(`${BASE_URL}/banners`, {
    cache: "force-cache",
  });

  return res.json();
}
