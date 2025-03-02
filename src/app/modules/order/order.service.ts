import Order from "./order.model";
import { IOrder } from "./order.interface";

export const createOrder = async (orderData: IOrder) => {
  return await Order.create(orderData);
};

export const getAllOrders = async () => {
  return await Order.find().populate("user").populate("products.product");
};

export const getOrderById = async (id: string) => {
  return await Order.findById(id).populate("user").populate("products.product");
};

export const updateOrderStatus = async (id: string, status: string) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id);
};
