export interface IOrder {
  user: string | undefined;
  products: { product: string; quantity: number }[];
  totalAmount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
}
