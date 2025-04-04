import { Request, Response } from "express";
import { TransactionService } from "./transaction.service";

export const TransactionController = {
  async getSalesHistory(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const sales = await TransactionService.getSalesHistory(userId);
      res.status(200).json({ sales });
    } catch (error) {
      res.status(500).json({ error: "Error fetching Sales history" });
    }
  },

  async getPurchaseHistory(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const purchases = await TransactionService.getPurchaseHistory(userId);
      res.status(200).json({ purchases });
    } catch (error) {
      res.status(500).json({ error: "Error fetching purchases history" });
    }
  },
};
