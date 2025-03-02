import { Request, Response } from "express";
import * as orderService from "./order.service";
import { AuthenticatedRequest } from "../payment/payment.controller";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Failed to place order.", error: error.message });
  }
};

// Get all orders
export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully.",
      orders,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Failed to retrieve orders.", error: error.message });
  }
};

//Specific user order
export const getMyOrders = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(404).json({ message: "User not found. Login first" });
      return;
    }
    const orders = await orderService.getUserOrders(userId);
    res
      .status(200)
      .json({
        success: true,
        message: "Orders retrieved successfully.",
        orders,
      });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found." });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Order retrieved successfully.",
      order,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Failed to retrieve order.", error: error.message });
  }
};

// Update order status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status
    );
    if (!order) {
      res.status(404).json({ message: "Order not found." });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      order,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to update order status.",
      error: error.message,
    });
  }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.deleteOrder(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found." });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Order deleted successfully.",
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Failed to delete order.", error: error.message });
  }
};
