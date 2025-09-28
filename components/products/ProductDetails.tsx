import { Product } from "@/lib/types/product";

export interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return <div className="product-details">ProductDetails stub for {product.name}</div>;
}
