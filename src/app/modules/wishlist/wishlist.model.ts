import mongoose, { Schema } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist>(
  {
    userId: {type: String, unique: true, required: true},
    listings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
      required: true
    }],
  },
  { timestamps: true }
);

export const WishlistModel = mongoose.model<IWishlist>(
  "Wishlist",
  WishlistSchema
);
