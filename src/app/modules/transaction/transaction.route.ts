import express from "express";
import { TransactionController } from "./transaction.controller";

const router = express.Router();

router.get("/purchases/:userId", TransactionController.getPurchaseHistory);
router.get("/sales/:userId", TransactionController.getSalesHistory);

export const transactionRoutes = router;
