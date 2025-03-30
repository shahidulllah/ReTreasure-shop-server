import { protect } from "../../middleware/authMiddleware";
import { WishlistController } from "./wishlist.controller";
import express from "express";

const router = express.Router();

router.get("/", protect, WishlistController.getWishlist);
router.post("/", protect, WishlistController.addToWishlist);
router.delete("/:listingId", protect, WishlistController.removeFromWishlist);

export const wishlistRoutes = router;
