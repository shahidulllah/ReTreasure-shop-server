import { WishlistModel } from "./wishlist.model";

export class WishlistService {
  static async getWishlist(userId: string) {
    return WishlistModel.findOne({ userId }).populate("listings");
  }

  static async addToWishlist(userId: string, listingId: string) {
    return WishlistModel.create({ userId, listings: listingId });
  }

  static async removeFromWishlist(userId: string, listingId: string) {
    return WishlistModel.findOneAndUpdate(
      { userId },
      { $pull: { items: listingId } },
      { new: true }
    );
  }
}
