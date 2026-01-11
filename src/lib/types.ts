export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  brand: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Banner {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  link?: string;
  buttonText?: string;
  order?: number;
  active?: boolean;
}



export interface SearchParams {
  page?: string;
  limit?: string;
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
}
