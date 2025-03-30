import { WishlistModel } from "./wishlist.model";

export class WishlistService {
  static async getWishlist(userId: string) {
    return WishlistModel.findOne({ userId }).populate("items");
  }

  static async addToWishlist(userId: string, listingId: string) {
    return WishlistModel.findOneAndUpdate(
      { userId },
      { $addToSet: { items: listingId } },
      { upsert: true, new: true }
    );
  }

  static async removeFromWishlist(userId: string, listingId: string) {
    return WishlistModel.findOneAndUpdate(
      { userId },
      { $pull: { items: listingId } },
      { new: true }
    );
  }
}
