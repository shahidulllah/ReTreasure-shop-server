import mongoose, { Schema } from "mongoose";
import { IListing } from "./listings.interface";

const ListingSchema = new Schema<IListing>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: "https://ibb.co.com/5CJnLF6" },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const ListingModel = mongoose.model<IListing>("Listing", ListingSchema);
