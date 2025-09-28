export interface Order {
  id: string;
  userId: string;
  items: Array<{ productId: string; quantity: number }>;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  createdAt: string;
  [key: string]: any;
}
