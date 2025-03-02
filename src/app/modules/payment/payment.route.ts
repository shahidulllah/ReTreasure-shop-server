import express from "express";
import * as paymentController from "./payment.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, paymentController.createPayment);
router.post("/update", protect, paymentController.updatePayment);

export const paymentRoutes = router;
