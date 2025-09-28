import { Product } from "@/lib/types/product";

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return <div className="product-card">ProductCard stub for {product.name}</div>;
}
