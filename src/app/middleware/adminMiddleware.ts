import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../modules/payment/payment.controller";
import User from "../modules/user/user.model";

export const admin = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Not authorized, no user data" });
      return;
    }

    const user = await User.findById(req.user.userId);

    if (!user || user.role !== "admin") {
      res.status(403).json({ message: "Access denied, admin only" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
