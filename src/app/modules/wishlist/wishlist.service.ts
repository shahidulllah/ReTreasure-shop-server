import { IListing } from "../listings/listings.interface";
import { WishlistModel } from "./wishlist.model";



export class WishlistService {
  // add wishlist
  static async addWishlist(listingData: IListing) {
    return await WishlistModel.create(listingData);
  }

  // Get all wishlist
  static async getWishlist() {
    return await WishlistModel.find()
  }

  // Delete a wishlist
  static async deleteWishlist(listingId: string) {
    return await WishlistModel.findByIdAndDelete(listingId);
  }
}
