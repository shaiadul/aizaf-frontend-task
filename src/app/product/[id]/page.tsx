import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/product/ProductDetailsClient";
import { p } from "framer-motion/client";
import SimilarProducts from "@/components/product/SimilarProducts";

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  // console.log("Product ID:", id);

  const resProduct = await fetchProductById(id);
  const product = resProduct?.data?.product;
  const similarProducts = resProduct?.data?.similarProducts || [];
  // console.log("Product One :", product);

  if (!product) return notFound();

  return (
    <main>
      <ProductDetailsClient product={product} />
      <SimilarProducts products={similarProducts} />
    </main>
  );
}
