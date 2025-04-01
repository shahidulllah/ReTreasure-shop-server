import express from "express";
import { WishlistController } from "./wishlist.controller";

const router = express.Router();

router.get("/:userId", WishlistController.getWishlist);
router.post("/add", WishlistController.addToWishlist);
router.post("/remove", WishlistController.removeFromWishlist);
router.post("/clear", WishlistController.clearWishlist);

export const wishlistRoutes = router;
