import { Product } from "@/lib/types/product";

export interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return <div className="product-grid">ProductGrid stub ({products.length} products)</div>;
}
