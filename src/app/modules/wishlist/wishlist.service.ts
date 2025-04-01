import { IListing } from "../listings/listings.interface";
import { WishlistModel } from "./wishlist.model";

export const WishlistService = {
  async getWishlist(userId: string) {
    return await WishlistModel.findOne({ userId }).populate("listings");
  },

  async addToWishlist(userId: string, listingId: IListing) {
    let wishlist = await WishlistModel.findOne({ userId });

    if (!wishlist) {
      wishlist = new WishlistModel({ userId, listings: [listingId] });
    } else {
      if (!wishlist.listings.includes(listingId)) {
        wishlist.listings.push(listingId);
      }
    }

    return await wishlist.save();
  },

  async removeFromWishlist(userId: string, listingId: string) {
    return await WishlistModel.findOneAndUpdate(
      { userId },
      { $pull: { listings: listingId } },
      { new: true }
    ).populate("listings");
  },

  async clearWishlist(userId: string) {
    return await WishlistModel.findOneAndUpdate(
      { userId },
      { listings: [] },
      { new: true }
    );
  },
};
