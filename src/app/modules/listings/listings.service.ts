import { IListing } from "./listings.interface";
import ListingModel from "./listings.model";

export class ListingService {
  // Create a new listing
  static async createListing(listingData: IListing) {
    return await ListingModel.create(listingData);
  }

  // Get all listings
  static async getAllListings() {
    return await ListingModel.find();
  }

  // Get a single listing by ID
  static async getListingById(listingId: string) {
    return await ListingModel.findById(listingId);
  }

  // Update listing details
  static async updateListing(listingId: string, updateData: Partial<IListing>) {
    return await ListingModel.findByIdAndUpdate(listingId, updateData, {
      new: true,
    });
  }

  // Delete a listing
  static async deleteListing(listingId: string) {
    return await ListingModel.findByIdAndDelete(listingId);
  }
}
