import BannerCarousel from "@/components/banner/BannerCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import { fetchBanners, fetchProducts } from "@/lib/api";

interface Props {
  searchParams: {
    category?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const resBanners = await fetchBanners();
  const banners = resBanners?.data?.banners;
  // console.log("banners::", banners);
  const resProducts = await fetchProducts({
    category: searchParams.category || "",
    limit: "12",
  });
  const products = resProducts?.data?.products;
  // console.log("products::", products);

  return (
    <>
      <BannerCarousel banners={banners} />
      <ProductGrid products={products} />
    </>
  );
}
