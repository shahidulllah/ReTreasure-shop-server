import mongoose, { model, Schema } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist>(
  {
    userId: {type: String, unique: true, required: true},
    listings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    }],
  },
);

export const WishlistModel = model<IWishlist>(
  "Wishlist",
  WishlistSchema
);
