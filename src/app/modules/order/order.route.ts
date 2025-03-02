import express from "express";
import * as orderController from "./order.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, orderController.createOrder);
router.get("/", protect, orderController.getAllOrders);
router.get("/my-orders", protect, orderController.getMyOrders);
router.get("/:id", protect, orderController.getOrderById);
router.patch("/:id/status", protect, orderController.updateOrderStatus);
router.delete("/:id", protect, orderController.deleteOrder);

export const orderRoutes = router;
