import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema: Schema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    condition: {
      type: String,
      enum: ["new", "used", "refurbished"],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Fashion",
        "Home & Furniture",
        "Books & Media",
        "Device",
        "Accessories",
      ],
      required: true,
    },
    images: { type: [String], required: true },
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
    sellerID: { type: String, required: true },
    status: { type: String, enum: ["available", "sold"], required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
