import { Request, Response } from "express";
import * as paymentService from "./payment.service";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
  };
}

// Create a new payment
export const createPayment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { orderId, amount } = req.body;
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const clientSecret = await paymentService.createPaymentIntent(
      orderId,
      amount,
      userId
    );
    res.status(201).json({
      success: true,
      message: "Payment intent created successfully.",
      clientSecret,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create payment intent.",
      error: error.message,
    });
  }
};

// Update payment status
export const updatePayment = async (req: Request, res: Response) => {
  try {
    const { paymentIntentId, status } = req.body;

    if (!paymentIntentId || !status) {
      res
        .status(400)
        .json({ message: "PaymentIntent ID and status are required." });
      return;
    }

    const payment = await paymentService.updatePaymentStatus(
      paymentIntentId,
      status
    );

    if (!payment) {
      res.status(404).json({ message: "Payment not found." });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully.",
      payment,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to update payment status.",
      error: error.message,
    });
  }
};
