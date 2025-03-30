import { Request, Response } from "express";
import { WishlistService } from "./wishlist.service";
import { AuthenticatedRequest } from "../payment/payment.controller";

export class WishlistController {
  static async getWishlist(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized. Please log in." });
        return;
      }
      const wishlist = await WishlistService.getWishlist(userId);
      res.status(200).json({
        success: true,
        message: "WishList retrieved successfully",
        wishlist,
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  static async addToWishlist(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      const listingId = req.body.listingId;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized. Please log in." });
        return;
      }
      const wishlist = await WishlistService.addToWishlist(
        userId,
        listingId
      );
      res
        .status(200)
        .json({ success: true, message: "Item added to wishlist", wishlist });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  static async removeFromWishlist(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized. Please log in." });
        return;
      }

      await WishlistService.removeFromWishlist(userId, req.params.listingId);
      res.status(200).json({ message: "Item removed from wishlist" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
}
