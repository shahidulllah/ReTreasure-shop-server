import express from "express";
import { ListingController } from "./listings.controller";

const router = express.Router();

router.post("/", ListingController.createListing);
router.get("/", ListingController.getAllListings);
router.get("/:id", ListingController.getListingById);
router.put("/:id", ListingController.updateListing);
router.delete("/:id", ListingController.deleteListing);

export default router;
