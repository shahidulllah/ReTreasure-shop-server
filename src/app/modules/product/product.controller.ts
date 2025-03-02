import { Request, Response } from "express";
import * as productService from "./product.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product is created sussessfully",
      product,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products are retrieved sussessfully",
      products,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({
      success: true,
      message: "Product is retrieved sussessfully",
      product,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({
      success: true,
      message: "Product is updated sussessfully",
      product,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
