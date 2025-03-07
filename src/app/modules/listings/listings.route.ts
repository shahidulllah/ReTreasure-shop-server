import express from "express";
import { ListingController } from "./listings.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.post("/",protect, ListingController.createListing);
router.get("/", ListingController.getAllListings);
router.get("/:id",protect, ListingController.getListingById);
router.put("/:id",protect, ListingController.updateListing);
router.delete("/:id",protect, ListingController.deleteListing);

export const listingRoutes = router;
