import express from "express";
import { ListingController } from "./listings.controller";
import { protect } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post("/", protect, ListingController.createListing);
router.get("/", ListingController.getAllListings);
router.get("/:id", ListingController.getListingById);
router.patch("/:id", protect, ListingController.updateListing);
router.delete("/:id", protect, ListingController.deleteListing);

export const listingRoutes = router;
