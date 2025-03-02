export interface IProduct {
  name: string;
  description: string;
  price: number;
  condition: "new" | "used" | "refurbished";
  category:
    | "Electronics"
    | "Fashion"
    | "Home & Furniture"
    | "Books & Media"
    | "Device"
    | "Accessories";
  images: string[];
  inStock: boolean;
  quantity: number;
  sellerID: string;
  status: "available" | "sold";
}
