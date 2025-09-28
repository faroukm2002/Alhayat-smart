export interface ProductFiltersProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function ProductFilters({ categories, selectedCategory, onCategoryChange }: ProductFiltersProps) {
  return <div className="product-filters">ProductFilters stub</div>;
}
