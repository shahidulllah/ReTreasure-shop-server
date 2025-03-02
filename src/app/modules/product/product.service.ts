import { IProduct } from "./product.interface";
import Product from "./product.model";

export const createProduct = async (productData: IProduct) => {
  return await Product.create(productData);
};

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id: string) => {
  return await Product.findById(id);
};

export const updateProduct = async (
  id: string,
  productData: Partial<IProduct>
) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};
