import { Request, Response } from "express";
import { WishlistService } from "./wishlist.service";

export const WishlistController = {
  async getWishlist(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const wishlist = await WishlistService.getWishlist(userId);
      res.status(200).json(wishlist);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async addToWishlist(req: Request, res: Response) {
    try {
      const { userId, listingId } = req.body;
      const updatedWishlist = await WishlistService.addToWishlist(
        userId,
        listingId
      );
      res.status(200).json(updatedWishlist);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async removeFromWishlist(req: Request, res: Response) {
    try {
      const { userId, listingId } = req.body;
      const updatedWishlist = await WishlistService.removeFromWishlist(
        userId,
        listingId
      );
      res.status(200).json(updatedWishlist);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async clearWishlist(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      const clearedWishlist = await WishlistService.clearWishlist(userId);
      res.status(200).json(clearedWishlist);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};
