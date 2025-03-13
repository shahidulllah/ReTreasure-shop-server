import { Request, Response } from "express";
import { ListingService } from "./listings.service";

export class ListingController {
  // Create a new listing
  static async createListing(req: Request, res: Response) {
    try {
      const newListing = await ListingService.createListing(req.body);
      res.status(201).json({
        success: true,
        message: "Listing created successfully",
        data: newListing,
      });
    } catch (error) {
      console.log("Error:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to create listing", error });
    }
  }

  // Get all listings with search, filter, and pagination
  static async getAllListings(req: Request, res: Response) {
    try {
      const {
        search,
        category,
        location,
        minPrice,
        maxPrice,
        condition,
        page,
        limit,
      } = req.query;
      let query: any = {};

      // Search by title or description
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } }
        ];
      }

      // Filter by category
      if (category) query.category = category;

      // Filter by location
      if (location) query.location = location;

      // Filter by condition (new, used)
      if (condition) query.condition = condition;

      // Filter by price range
      if (maxPrice) {
        query.price = {};
        if (maxPrice) query.price.$lte = Number(maxPrice);
      }

      // Convert page & limit to numbers
      const pageNumber = Number(page);
      const limitNumber = Number(limit);
      const skip = (pageNumber - 1) * limitNumber;

      // Fetch listings with filters, search, pagination
      const listings = await ListingService.getAllListings(
        query,
        skip,
        limitNumber
      );

      res.status(200).json({ success: true, data: listings });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch listings", error });
    }
  }

  // Get a listing by ID
  static async getListingById(req: Request, res: Response) {
    try {
      const listing = await ListingService.getListingById(req.params.id);
      if (!listing) {
        res.status(404).json({ success: false, message: "Listing not found" });
        return;
      }

      res.status(200).json({ success: true, data: listing });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch listing", error });
    }
  }

  // Update a listing
  static async updateListing(req: Request, res: Response) {
    try {
      const updatedListing = await ListingService.updateListing(
        req.params.id,
        req.body
      );
      if (!updatedListing) {
        res.status(404).json({ success: false, message: "Listing not found" });
        return;
      }
      res.status(200).json({
        success: true,
        message: "Listing updated successfully",
        data: updatedListing,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Failed to update listing", error });
    }
  }

  // Delete a listing
  static async deleteListing(req: Request, res: Response) {
    try {
      const deletedListing = await ListingService.deleteListing(req.params.id);
      if (!deletedListing) {
        res.status(404).json({ success: false, message: "Listing not found" });
        return;
      }
      res
        .status(200)
        .json({ success: true, message: "Listing deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to delete listing", error });
    }
  }
}
