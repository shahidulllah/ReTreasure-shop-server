import { model, Schema } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist>(
  {
    userId: {type: String, unique: true, required: true},
    items: [{
      type: Schema.Types.ObjectId,
      ref: "Listing",
    }],
  },
  { timestamps: true }
);

export const WishlistModel = model<IWishlist>(
  "Wishlist",
  WishlistSchema
);
