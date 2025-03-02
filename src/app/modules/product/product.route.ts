import express from "express";
import * as productController from "./product.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, productController.createProduct);
router.get("/", protect, productController.getAllProducts);
router.get("/:id", protect, productController.getProductById);
router.patch("/:id", protect, productController.updateProduct);
router.delete("/:id", protect, productController.deleteProduct);

export const productRouters = router;
