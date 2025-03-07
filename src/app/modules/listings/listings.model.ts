import mongoose, { Document, Schema } from "mongoose";
import { IListing } from "./listings.interface";

interface IListingModel extends IListing, Document {}

const listingSchema: Schema = new Schema<IListing>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    condition: {
      type: String,
      enum: ["new", "used"],
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
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["available", "sold"], required: true },
  },
  { timestamps: true }
);

const ListingModel = mongoose.model<IListingModel>("Listing", listingSchema);

export default ListingModel;
